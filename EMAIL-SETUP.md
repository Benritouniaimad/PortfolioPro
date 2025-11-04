# 📧 Email Setup Guide

## Setting up Gmail SMTP for Contact Form

This guide will help you configure Gmail SMTP so your contact form can send emails.

---

## Step 1: Enable 2-Factor Authentication

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled
3. Follow the prompts to complete setup

---

## Step 2: Generate App Password

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. In the "Select app" dropdown, choose **Mail**
3. In the "Select device" dropdown, choose **Other (Custom name)**
4. Enter a name like "Portfolio Website"
5. Click **Generate**
6. **Copy the 16-character password** (you'll need this!)

---

## Step 3: Configure Environment Variables

### For Local Development:

1. Open `.env.local` file in your project root
2. Fill in your credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your.email@gmail.com
SMTP_PASSWORD=xxxx xxxx xxxx xxxx
EMAIL_FROM=your.email@gmail.com
EMAIL_TO=your.email@gmail.com
```

Replace:
- `your.email@gmail.com` - Your Gmail address
- `xxxx xxxx xxxx xxxx` - The App Password you generated
- `EMAIL_TO` - Email where you want to receive contact form submissions

### For Production (Vercel):

1. Go to your project on [Vercel](https://vercel.com)
2. Navigate to **Settings → Environment Variables**
3. Add these variables:
   - `SMTP_HOST` = `smtp.gmail.com`
   - `SMTP_PORT` = `587`
   - `SMTP_USER` = `your.email@gmail.com`
   - `SMTP_PASSWORD` = `your-app-password`
   - `EMAIL_FROM` = `your.email@gmail.com`
   - `EMAIL_TO` = `your.email@gmail.com`
4. Redeploy your project

---

## Step 4: Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000)

3. Navigate to the Contact section

4. Fill out the form and submit

5. Check:
   - Your inbox (EMAIL_TO) for the notification email
   - The sender's inbox for the confirmation email

---

## How It Works

### Email Flow:

1. **User submits form** → Data sent to `/api/contact`
2. **API validates data** → Checks all required fields
3. **Sends 2 emails:**
   - **To You:** Notification with message details
   - **To Sender:** Confirmation that message was received
4. **Returns success/error** → Shows message to user

### Email Templates:

Both emails use beautiful HTML templates with:
- Professional design
- Your branding colors
- All message details
- Timestamps
- Mobile-responsive layout

---

## Troubleshooting

### "Failed to send email" Error

**Check:**
1. ✅ App Password is correct (16 characters, no spaces)
2. ✅ 2-Factor Authentication is enabled
3. ✅ All environment variables are set
4. ✅ Gmail address is correct
5. ✅ `.env.local` file is in project root

### "Email service not configured" Error

**Solution:**
- Environment variables are missing
- Create `.env.local` file with SMTP credentials
- Restart dev server after adding env variables

### Gmail Blocks the Login

**Solution:**
1. Make sure you're using **App Password**, not regular password
2. Check [Less secure app access](https://myaccount.google.com/lesssecureapps) is not blocking
3. Try generating a new App Password

### Emails go to Spam

**Solution:**
1. Add your email to sender's contacts
2. Mark first email as "Not Spam"
3. For production, consider using a custom domain

---

## Alternative SMTP Providers

Don't want to use Gmail? Here are alternatives:

### SendGrid (Recommended for Production)

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

Free tier: 100 emails/day

### Mailgun

```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASSWORD=your-mailgun-password
```

Free tier: 5,000 emails/month

### Outlook/Hotmail

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your.email@outlook.com
SMTP_PASSWORD=your-outlook-password
```

Note: May require App Password for Outlook too

---

## Security Best Practices

### ✅ DO:
- Use App Passwords, not regular passwords
- Keep `.env.local` in `.gitignore`
- Use environment variables for credentials
- Limit email rate (avoid spam)
- Validate all form inputs

### ❌ DON'T:
- Commit `.env.local` to Git
- Share your App Password
- Use regular Gmail password
- Hardcode credentials in code
- Skip input validation

---

## Rate Limiting (Optional)

To prevent spam, consider adding rate limiting:

```typescript
// In api/contact/route.ts
const emailsSent = new Map();

// Check rate limit
const lastSent = emailsSent.get(email);
if (lastSent && Date.now() - lastSent < 60000) {
  return NextResponse.json(
    { error: "Please wait a minute before sending another message" },
    { status: 429 }
  );
}
emailsSent.set(email, Date.now());
```

---

## Testing Tips

### Test locally:
```bash
npm run dev
# Submit form at http://localhost:3000
```

### Test production:
- Deploy to Vercel
- Add environment variables
- Test on live site
- Check email delivery

### Use test emails:
- [Mailtrap](https://mailtrap.io/) - Catch test emails
- [Ethereal](https://ethereal.email/) - Fake SMTP testing

---

## Email Templates Customization

Edit `app/api/contact/route.ts` to customize:

### Change Colors:
```typescript
.header { background: linear-gradient(135deg, #YourColor 0%, #YourColor2 100%); }
```

### Change Content:
```typescript
<p>Your custom message here</p>
```

### Add Logo:
```typescript
<img src="${process.env.NEXT_PUBLIC_SITE_URL}/logo.png" alt="Logo" />
```

---

## Production Checklist

Before deploying:
- [ ] Generated Gmail App Password
- [ ] Added all environment variables to Vercel
- [ ] Tested locally
- [ ] Updated EMAIL_TO to your email
- [ ] Updated EMAIL_FROM to your email
- [ ] Tested on production
- [ ] Checked spam folder
- [ ] Verified both emails arrive
- [ ] Tested error handling

---

## Support

Having issues? Check:
1. [Nodemailer Documentation](https://nodemailer.com/)
2. [Gmail SMTP Guide](https://support.google.com/mail/answer/7126229)
3. [Google App Passwords](https://support.google.com/accounts/answer/185833)

---

**Your contact form is now ready to receive messages! 📧**
