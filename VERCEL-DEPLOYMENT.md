# Vercel Deployment Guide

## 🚀 Deploy to Vercel - Step by Step

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Your portfolio code pushed to GitHub

---

## 📋 Deployment Steps

### 1. Push Your Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Ready for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/Benritouniaimad/portfolio.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. **Go to Vercel:** https://vercel.com
2. **Sign in** with your GitHub account
3. **Click** "Add New Project"
4. **Import** your GitHub repository
5. **Configure:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

6. **Add Environment Variables:**
   Click "Environment Variables" and add:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your.email@gmail.com
   SMTP_PASSWORD=your_app_password
   EMAIL_FROM=your.email@gmail.com
   EMAIL_TO=your.email@gmail.com
   ```

7. **Click** "Deploy"

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? portfolio (or your choice)
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

---

## ⚙️ Environment Variables Setup

**CRITICAL:** Add these environment variables in Vercel dashboard:

1. Go to your project in Vercel
2. Click **Settings** → **Environment Variables**
3. Add each variable:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=benritouniaimad07@gmail.com
SMTP_PASSWORD=your_16_char_app_password
EMAIL_FROM=benritouniaimad07@gmail.com
EMAIL_TO=benritouniaimad07@gmail.com
```

**Note:** Use the App Password you generated for Gmail (see EMAIL-SETUP.md)

---

## 🔧 Build Optimization

Your portfolio is already optimized for production:

✅ **Static Generation** - Fast page loads
✅ **Image Optimization** - Next.js Image component
✅ **Code Splitting** - Smaller bundle sizes
✅ **CSS Purging** - Tailwind CSS optimization
✅ **Font Optimization** - Google Fonts optimized
✅ **SEO Meta Tags** - Full SEO configuration

---

## 📊 Post-Deployment Checklist

After deployment, verify:

- [ ] **Homepage loads** correctly
- [ ] **All 7 projects** display properly
- [ ] **Contact form** works (test it!)
- [ ] **Resume download** works
- [ ] **Social links** are correct
- [ ] **Dark/Light mode** toggles properly
- [ ] **3D background** animates smoothly
- [ ] **Mobile responsive** on all devices
- [ ] **Images load** (add your photos first!)

---

## 🌐 Custom Domain (Optional)

### Add Your Domain:

1. Go to **Project Settings** → **Domains**
2. Add your domain: `yourdomain.com`
3. Configure DNS records (Vercel provides instructions)
4. Wait for DNS propagation (up to 48 hours)

### Recommended Providers:
- Namecheap
- GoDaddy
- Google Domains
- Cloudflare

---

## 🔄 Continuous Deployment

Vercel automatically:
- ✅ Deploys on every `git push` to main branch
- ✅ Creates preview deployments for pull requests
- ✅ Runs builds and shows deployment status
- ✅ Provides unique URLs for each deployment

---

## 🐛 Troubleshooting

### Build Fails?

**Check:**
1. All dependencies in `package.json`
2. No TypeScript errors: `npm run build` locally
3. Environment variables are set
4. Node version (Vercel uses Node 18+)

### Contact Form Not Working?

**Check:**
1. Environment variables added in Vercel
2. Gmail App Password is correct
3. Check Vercel function logs

### Images Not Loading?

**Check:**
1. Images exist in `public/` folder
2. Correct file paths in JSON files
3. Image formats supported (jpg, png, webp)

---

## 📈 Performance Tips

### Recommended Actions:

1. **Add Real Images:**
   - Hero photo: `public/images/hero-avatar.jpg`
   - Project screenshots: `public/images/projects/*.jpg`

2. **Enable Analytics:**
   - Vercel Analytics (free)
   - Google Analytics

3. **Set Up Monitoring:**
   - Vercel Speed Insights
   - Error tracking

---

## 🎯 Your Deployment URL

After deployment, Vercel will provide:
- **Production URL:** `https://your-portfolio.vercel.app`
- **Preview URLs:** For each branch/PR
- **Custom Domain:** If configured

---

## 📞 Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Support:** https://vercel.com/support

---

## ✨ Success!

Once deployed, share your portfolio:
- 📧 In your email signature
- 💼 On your LinkedIn profile
- 📱 In your GitHub bio
- 📄 On your resume

**Your professional portfolio will be live at:**
`https://your-portfolio-name.vercel.app` 🚀

---

## 🔐 Security Notes

- ✅ Never commit `.env.local` to git (already in .gitignore)
- ✅ Use environment variables for sensitive data
- ✅ Use Gmail App Passwords (not regular password)
- ✅ Keep your Vercel account secure with 2FA

---

**Ready to deploy?** Follow the steps above and your portfolio will be live in minutes! 🎉
