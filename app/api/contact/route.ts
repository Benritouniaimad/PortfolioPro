import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * API Route for handling contact form submissions
 * Sends emails using Gmail SMTP (or any SMTP service)
 * 
 * Setup Instructions:
 * 1. Go to https://myaccount.google.com/apppasswords
 * 2. Generate an App Password for your Gmail
 * 3. Add credentials to .env.local:
 *    SMTP_USER=your.email@gmail.com
 *    SMTP_PASSWORD=your-app-password
 *    EMAIL_FROM=your.email@gmail.com
 *    EMAIL_TO=your.email@gmail.com
 */

// Email validation schema
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate environment variables
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const emailFrom = process.env.EMAIL_FROM;
    const emailTo = process.env.EMAIL_TO;

    if (!smtpUser || !smtpPassword || !emailFrom || !emailTo) {
      console.error("Missing SMTP configuration in environment variables");
      return NextResponse.json(
        { 
          error: "Email service not configured. Please contact the administrator.",
          details: "Missing SMTP credentials in environment variables"
        },
        { status: 500 }
      );
    }

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email to you (notification)
    const mailOptionsToYou = {
      from: emailFrom,
      to: emailTo,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #667eea; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">🎉 New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">From:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message.replace(/\n/g, "<br>")}</div>
                </div>
                <div class="footer">
                  <p>Received on ${new Date().toLocaleString()}</p>
                  <p>Reply directly to this email or use: ${email}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Received on: ${new Date().toLocaleString()}
      `,
    };

    // Email to sender (confirmation)
    const mailOptionsToSender = {
      from: emailFrom,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .message-box { background: white; padding: 20px; border-radius: 5px; border-left: 3px solid #667eea; margin: 20px 0; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
              .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">✨ Message Received!</h2>
              </div>
              <div class="content">
                <p>Hi <strong>${name}</strong>,</p>
                <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
                
                <div class="message-box">
                  <strong>Your Message:</strong><br><br>
                  <strong>Subject:</strong> ${subject}<br><br>
                  ${message.replace(/\n/g, "<br>")}
                </div>

                <p>I typically respond within 24-48 hours. If your inquiry is urgent, feel free to reach out via other channels listed on my portfolio.</p>
                
                <p>Best regards,<br>
                <strong>Your Portfolio Team</strong></p>

                <div class="footer">
                  <p>This is an automated confirmation email.</p>
                  <p>Please do not reply to this email directly.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Hi ${name},

Thank you for reaching out! I've received your message and will get back to you as soon as possible.

Your Message:
Subject: ${subject}
${message}

I typically respond within 24-48 hours.

Best regards,
Your Portfolio Team

---
This is an automated confirmation email.
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptionsToYou);
    await transporter.sendMail(mailOptionsToSender);

    return NextResponse.json(
      { 
        success: true,
        message: "Email sent successfully! Check your inbox for confirmation."
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Error sending email:", error);
    
    return NextResponse.json(
      { 
        error: "Failed to send email",
        details: error.message,
        suggestion: "Please check your SMTP configuration or try again later."
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
