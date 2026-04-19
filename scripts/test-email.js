import dotenv from 'dotenv';
import { Resend } from 'resend';
import { getEmailHTML } from '../api/_lib/emailTemplate.js';
import { personalityContent } from '../api/_lib/personalityContent.js';

dotenv.config();

const testEmail = 'xwq0102@berkeley.edu';

async function runTest() {
  console.log('Starting email test...');
  console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? '已设置' : '未设置');
  console.log('FROM_EMAIL:', process.env.FROM_EMAIL);

  if (!process.env.RESEND_API_KEY) {
    console.error('Failed: RESEND_API_KEY is not set in .env');
    process.exit(1);
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const personalityType = 'SVAF';
  const personalityData = personalityContent[personalityType];
  const html = getEmailHTML({ personalityType, personalityData });

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: testEmail,
      subject: `Your AGTI Report: ${personalityData.name}`,
      html,
    });

    if (error) throw new Error(error.message);
    console.log('Success! Email sent to', testEmail);
    console.log('Resend ID:', data?.id);
  } catch (error) {
    console.error('Failed:', error.message);
  }
}

runTest();
