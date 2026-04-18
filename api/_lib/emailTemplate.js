// Build an email-safe HTML report.
// Uses tables + inline styles for broad compatibility (Gmail, Outlook, Apple Mail).

const SITE_URL = process.env.SITE_URL || "https://captainspace.ai";

const escape = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

function sectionLabel(text) {
  return `
    <div style="font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#2d5a3d;margin-bottom:12px;">
      ${escape(text)}
    </div>`;
}

function scoreBar(score) {
  const pct = Math.max(0, Math.min(100, score));
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:6px;">
      <tr>
        <td width="100%" style="background:#eef3ec;border-radius:3px;height:6px;line-height:6px;font-size:0;padding:0;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${pct}%" style="height:6px;line-height:6px;background:#2d5a3d;border-radius:3px;">
            <tr><td style="height:6px;line-height:6px;font-size:0;">&nbsp;</td></tr>
          </table>
        </td>
      </tr>
    </table>`;
}

function riskRow(label, color, text) {
  return `
    <tr>
      <td style="padding:0 0 14px 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="width:110px;vertical-align:top;padding-top:2px;">
              <span style="display:inline-block;padding:5px 12px;background:${color};color:#ffffff;font-size:11px;font-weight:700;letter-spacing:0.04em;border-radius:100px;white-space:nowrap;">
                ${escape(label)}
              </span>
            </td>
            <td style="vertical-align:top;font-size:14px;line-height:1.6;color:#2a3a30;padding-left:14px;">
              ${escape(text)}
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}

function dotRow(text) {
  return `
    <tr>
      <td style="padding:0 0 10px 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="width:16px;vertical-align:top;padding-top:8px;">
              <div style="width:6px;height:6px;background:#2d5a3d;border-radius:50%;"></div>
            </td>
            <td style="vertical-align:top;font-size:14px;line-height:1.6;color:#2a3a30;">
              ${text}
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}

export function getEmailHTML({ personalityType, personalityData }) {
  const {
    name = "",
    mbti = "",
    score = 0,
    imageUrl = `${SITE_URL}/agti/${personalityType}.png`,
    overview = "",
    scoreBreakdown = [],
    whatYouDoBest = "",
    areasToImprove = [],
    risks = { short: "", mid: "", long: "" },
    howToImprove = [],
  } = personalityData || {};

  // Score breakdown as a 2-column table (email-safe)
  const breakdownRows = [];
  for (let i = 0; i < scoreBreakdown.length; i += 2) {
    const left = scoreBreakdown[i];
    const right = scoreBreakdown[i + 1];
    const cell = (item) => {
      if (!item) return `<td width="50%" style="padding:0;"></td>`;
      return `
        <td width="50%" style="padding:0 8px;vertical-align:top;">
          <div style="font-size:12px;font-weight:600;color:#3a5a44;line-height:1.4;margin-bottom:4px;">
            ${escape(item.label)}
          </div>
          ${scoreBar(item.score)}
          <div style="font-size:11px;color:#7a9a8a;margin-top:4px;font-family:'Space Mono',Menlo,monospace;">
            ${escape(String(item.score))} / 100
          </div>
        </td>`;
    };
    breakdownRows.push(`
      <tr>
        ${cell(left)}
        ${cell(right)}
      </tr>
      <tr><td colspan="2" style="height:16px;line-height:16px;font-size:0;">&nbsp;</td></tr>`);
  }

  const areasHTML = areasToImprove
    .map(
      (a) => `
        <tr>
          <td style="padding:0 0 14px 0;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="width:16px;vertical-align:top;padding-top:8px;">
                  <div style="width:6px;height:6px;background:#2d5a3d;border-radius:50%;"></div>
                </td>
                <td style="vertical-align:top;">
                  <div style="font-size:15px;font-weight:600;color:#1a3a2a;line-height:1.4;margin-bottom:4px;">
                    ${escape(a.title)}
                  </div>
                  <div style="font-size:14px;color:#4a6a54;line-height:1.6;">
                    ${escape(a.body)}
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>`
    )
    .join("");

  const improveHTML = howToImprove
    .map((item) =>
      dotRow(`
        <div style="font-size:13px;font-weight:700;color:#2d5a3d;letter-spacing:0.02em;margin-bottom:2px;">
          ${escape(item.time)}
        </div>
        <div>${escape(item.body)}</div>
      `)
    )
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escape(name)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f2eb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#1a3a2a;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f4f2eb;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(30,60,30,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#1a3a2a;padding:32px 40px;text-align:center;">
              <div style="font-family:'Playfair Display',Georgia,serif;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.01em;line-height:1;">
                The AGTI
              </div>
              <div style="font-size:11px;font-weight:500;color:rgba(255,255,255,0.65);letter-spacing:0.16em;text-transform:uppercase;margin-top:8px;">
                AI Group Type Indicator
              </div>
            </td>
          </tr>

          <!-- Hero band -->
          <tr>
            <td style="background:#2d5a3d;padding:40px 40px 36px;text-align:center;">
              <img src="${escape(imageUrl)}" alt="${escape(name)}" width="160" style="width:160px;height:160px;max-width:160px;display:block;margin:0 auto 20px;border-radius:20px;border:2px solid rgba(255,255,255,0.18);" />
              <div style="font-family:'Playfair Display',Georgia,serif;font-size:24px;font-weight:600;color:#ffffff;line-height:1.2;margin-bottom:10px;">
                ${escape(name)}
              </div>
              ${mbti ? `<div style="display:inline-block;padding:4px 14px;background:rgba(255,255,255,0.12);color:#ffffff;font-family:'Space Mono',Menlo,monospace;font-size:12px;font-weight:700;letter-spacing:0.12em;border-radius:100px;margin-bottom:14px;">${escape(mbti)}</div><br />` : ""}
              <div style="display:inline-block;padding:10px 22px;background:#ffffff;color:#1a3a2a;font-family:'Space Mono',Menlo,monospace;font-size:18px;font-weight:700;border-radius:100px;margin-top:6px;">
                AI Agility Score · ${escape(String(score))} / 100
              </div>
            </td>
          </tr>

          <!-- Overview -->
          ${overview ? `
          <tr>
            <td style="background:#ffffff;padding:28px 40px;">
              ${sectionLabel("Overview")}
              <div style="font-size:15px;line-height:1.7;color:#2a3a30;">
                ${escape(overview)}
              </div>
            </td>
          </tr>` : ""}

          <!-- Score Breakdown -->
          ${scoreBreakdown.length ? `
          <tr>
            <td style="background:#ffffff;padding:28px 40px;border-top:1px solid #eef2ec;">
              ${sectionLabel("Score Breakdown")}
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0 -8px;">
                ${breakdownRows.join("")}
              </table>
            </td>
          </tr>` : ""}

          <!-- What you do best -->
          ${whatYouDoBest ? `
          <tr>
            <td style="background:#ffffff;padding:28px 40px;border-top:1px solid #eef2ec;">
              ${sectionLabel("What you do best")}
              <div style="background:#f0f7f2;border-left:3px solid #2d5a3d;padding:18px 20px;border-radius:4px;font-size:15px;line-height:1.7;color:#2a3a30;">
                ${escape(whatYouDoBest)}
              </div>
            </td>
          </tr>` : ""}

          <!-- Areas to improve -->
          ${areasToImprove.length ? `
          <tr>
            <td style="background:#ffffff;padding:28px 40px;border-top:1px solid #eef2ec;">
              ${sectionLabel("Areas to improve")}
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                ${areasHTML}
              </table>
            </td>
          </tr>` : ""}

          <!-- Potential risks -->
          ${(risks.short || risks.mid || risks.long) ? `
          <tr>
            <td style="background:#ffffff;padding:28px 40px;border-top:1px solid #eef2ec;">
              ${sectionLabel("Potential risks")}
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                ${risks.short ? riskRow("Short-term", "#2d5a3d", risks.short) : ""}
                ${risks.mid ? riskRow("Mid-term", "#c67a2e", risks.mid) : ""}
                ${risks.long ? riskRow("Long-term", "#b94a3a", risks.long) : ""}
              </table>
            </td>
          </tr>` : ""}

          <!-- How to raise your score -->
          ${howToImprove.length ? `
          <tr>
            <td style="background:#ffffff;padding:28px 40px;border-top:1px solid #eef2ec;">
              ${sectionLabel("How to raise your score")}
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                ${improveHTML}
              </table>
            </td>
          </tr>` : ""}

          <!-- CTA -->
          <tr>
            <td style="background:#f7f4ee;padding:36px 40px;text-align:center;">
              <div style="font-family:'Playfair Display',Georgia,serif;font-size:22px;font-weight:600;color:#1a3a2a;line-height:1.3;margin-bottom:10px;">
                Want to raise your AI Agility Score?
              </div>
              <div style="font-size:14px;line-height:1.6;color:#4a6a54;margin-bottom:22px;max-width:440px;margin-left:auto;margin-right:auto;">
                Captain is your team's AI control layer — it turns every task into a workflow your people and your AI agents can run together.
              </div>
              <a href="${escape(SITE_URL)}" style="display:inline-block;padding:13px 28px;background:#1a3a2a;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:100px;letter-spacing:0.01em;">
                Build an AI-native team with Captain &rarr;
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#1a3a2a;padding:24px 40px;text-align:center;">
              <div style="font-size:12px;color:rgba(255,255,255,0.65);line-height:1.6;">
                You're receiving this because you completed the AGTI assessment.
              </div>
              <div style="font-size:12px;color:rgba(255,255,255,0.85);margin-top:6px;">
                <a href="${escape(SITE_URL)}" style="color:#ffffff;text-decoration:underline;">captainspace.ai</a>
                &nbsp;·&nbsp; Powered by Captain
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
