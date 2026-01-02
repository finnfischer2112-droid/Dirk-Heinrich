// Gmail Integration for sending contact form notifications
import { google } from 'googleapis';
import type { InsertContact } from '@shared/schema';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-mail',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Gmail not connected');
  }
  return accessToken;
}

async function getUncachableGmailClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.gmail({ version: 'v1', auth: oauth2Client });
}

function createEmailBody(contact: InsertContact): string {
  const projectText = contact.project ? contact.project : 'Keine Angabe';
  
  return `Neue Finanzierungsanfrage über die Website

Kontaktdaten:
- Name: ${contact.firstName} ${contact.lastName}
- E-Mail: ${contact.email}
- Telefon: ${contact.phone}

Vorhaben:
${projectText}

---
Diese Nachricht wurde automatisch von der Dirk Heinrich Baufinanzierung Website gesendet.`;
}

function createRawEmail(to: string, subject: string, body: string, from: string): string {
  const emailLines = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: =?UTF-8?B?${Buffer.from(subject).toString('base64')}?=`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    Buffer.from(body).toString('base64')
  ];
  
  return Buffer.from(emailLines.join('\r\n'))
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export async function sendContactNotification(contact: InsertContact): Promise<boolean> {
  try {
    const gmail = await getUncachableGmailClient();
    
    const profile = await gmail.users.getProfile({ userId: 'me' });
    const senderEmail = profile.data.emailAddress || '';
    
    const recipientEmail = 'dirk.heinrich@swisslife-select.de';
    const subject = `Neue Finanzierungsanfrage: ${contact.firstName} ${contact.lastName}`;
    const body = createEmailBody(contact);
    
    const raw = createRawEmail(recipientEmail, subject, body, senderEmail);
    
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: raw
      }
    });
    
    console.log(`Email notification sent for contact: ${contact.email}`);
    return true;
  } catch (error) {
    console.error('Failed to send email notification:', error);
    return false;
  }
}
