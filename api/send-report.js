// Vercel Serverless Function: POST /api/send-report
// Validates input, applies basic in-memory rate limiting + dedupe,
// and sends the AGTI report email via Resend.

import { Resend } from 'resend';
import { getEmailHTML } from './_lib/emailTemplate.js';
import { personalityContent } from './_lib/personalityContent.js';

// Lazily create the Resend client so this module can be imported in
// environments where RESEND_API_KEY isn't set (local tests, type-check, etc.).
let _resend;
function getResend() {
  if (!_resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

const VALID_TYPES = new Set([
  'SVAF', 'SVAM', 'SVPF', 'SVPM',
  'SRAF', 'SRAM', 'SRPF', 'SRPM',
  'CVAF', 'CVAM', 'CVPF', 'CVPM',
  'CRAF', 'CRAM', 'CRPF', 'CRPM',
]);

// RFC-5322-lite; good enough for a signup form.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;
const MAX_REQUESTS_PER_HOUR = 10;

// In-memory stores. Serverless instances are re-used for warm invocations,
// so this gives basic protection without needing Redis/KV for an MVP.
// Note: On cold start / multiple regions these stores reset — that's acceptable
// here because the real backstop is Resend's own rate limits.
const ipRequests = new Map(); // ip -> number[] (timestamps)
const sentReports = new Map(); // `${email}|${type}` -> timestamp

function getClientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string' && fwd.length > 0) return fwd.split(',')[0].trim();
  if (Array.isArray(fwd) && fwd.length > 0) return String(fwd[0]).split(',')[0].trim();
  return req.socket?.remoteAddress || 'unknown';
}

function pruneExpired(map, maxAge, now) {
  for (const [key, value] of map.entries()) {
    const latest = Array.isArray(value) ? value[value.length - 1] : value;
    if (!latest || now - latest > maxAge) map.delete(key);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const now = Date.now();
  const ip = getClientIp(req);

  // Rate limit: prune first, then check
  pruneExpired(ipRequests, HOUR, now);
  const recent = (ipRequests.get(ip) || []).filter((t) => now - t < HOUR);
  if (recent.length >= MAX_REQUESTS_PER_HOUR) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please try again later.',
    });
  }

  // Body may already be parsed (Vercel parses JSON) or be a raw string
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ success: false, error: 'Invalid JSON body' });
  }

  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const personalityType = typeof body.personalityType === 'string' ? body.personalityType.trim().toUpperCase() : '';

  if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
    return res.status(400).json({ success: false, error: 'Invalid email address' });
  }

  if (!VALID_TYPES.has(personalityType)) {
    return res.status(400).json({ success: false, error: 'Invalid personalityType' });
  }

  const personalityData = personalityContent[personalityType];
  if (!personalityData) {
    return res.status(400).json({ success: false, error: 'Unknown personality type' });
  }

  // Dedupe: same email + type in the last 24h
  pruneExpired(sentReports, DAY, now);
  const dedupeKey = `${email.toLowerCase()}|${personalityType}`;
  const lastSent = sentReports.get(dedupeKey);
  if (lastSent && now - lastSent < DAY) {
    return res.status(429).json({
      success: false,
      error: 'A report was already sent to this email in the last 24 hours.',
    });
  }

  try {
    const html = getEmailHTML({ personalityType, personalityData });

    const { error } = await getResend().emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: `Your AGTI Report: ${personalityData.name}`,
      html,
    });

    if (error) throw new Error(error.message || 'Resend error');

    // Record success only after send succeeds
    ipRequests.set(ip, [...recent, now]);
    sentReports.set(dedupeKey, now);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('send-report failed:', err);
    return res.status(500).json({
      success: false,
      error: err?.message || 'Failed to send email',
    });
  }
}
