# 🚀 Deployment Guide

## Deploying to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js portfolio. It's free for personal projects!

### Prerequisites
- GitHub account
- Your portfolio code pushed to GitHub
- Vercel account (sign up at [vercel.com](https://vercel.com))

---

## Step-by-Step Deployment

### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/portfolio.git

# Push
git push -u origin main
```

### 2. Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Click "Add New Project"**
3. **Import your GitHub repository**
4. **Configure Project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: **./
   - Build Command: **npm run build** (auto-filled)
   - Output Directory: **.next** (auto-filled)

5. **Click "Deploy"**

That's it! Your portfolio will be live in ~2 minutes. 🎉

---

## Custom Domain (Optional)

### Add Your Own Domain

1. **Go to your project settings on Vercel**
2. **Click "Domains"**
3. **Add your domain** (e.g., `yourname.com`)
4. **Follow DNS instructions** provided by Vercel
5. **Wait for DNS propagation** (5-30 minutes)

### Domain Providers
Works with:
- GoDaddy
- Namecheap
- Google Domains
- Cloudflare
- Any DNS provider

---

## Environment Variables

If you need environment variables:

1. **Go to Project Settings → Environment Variables**
2. **Add your variables:**
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_GA_ID=your-analytics-id
   ```
3. **Redeploy** your project

---

## Automatic Deployments

Vercel automatically deploys when you push to GitHub:

- **Push to `main` branch** → Production deployment
- **Push to other branches** → Preview deployment
- **Pull requests** → Automatic preview URL

```bash
# Make changes
git add .
git commit -m "Update content"
git push

# Vercel automatically rebuilds and deploys!
```

---

## Alternative Deployment Options

### Deploy to Netlify

1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy!

### Deploy to Your Own Server

```bash
# Build production version
npm run build

# Start production server
npm run start

# Or export static site
npm run build && npx next export
```

---

## Pre-Deployment Checklist

- [ ] Updated all JSON files with your content
- [ ] Added all images to `public/images/`
- [ ] Updated SEO metadata in `app/layout.tsx`
- [ ] Tested dark/light mode
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Updated social media URLs
- [ ] Added your resume PDF
- [ ] Tested production build locally (`npm run build`)
- [ ] Removed test/placeholder content

---

## Post-Deployment

### Monitor Performance

1. **Vercel Analytics** (free)
   - View page load times
   - Monitor Core Web Vitals
   - Track visitor data

2. **Google Analytics** (optional)
   - Add GA tracking code
   - Monitor detailed traffic

### Update Content

Just push changes to GitHub:

```bash
# Edit JSON files
# Update images
git add .
git commit -m "Update projects"
git push

# Vercel automatically redeploys!
```

---

## Troubleshooting

### Build Failed?

**Check build logs:**
1. Click on failed deployment
2. View build logs
3. Fix errors and push again

**Common issues:**
- Missing dependencies → Run `npm install`
- TypeScript errors → Check type errors
- Invalid JSON → Validate JSON files

### Site Not Loading?

1. Check deployment status
2. Verify domain DNS settings
3. Check browser console for errors
4. Clear cache and hard refresh

### Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)

---

## Performance Tips

### Optimize Images

```typescript
import Image from 'next/image'

<Image
  src="/images/photo.jpg"
  alt="Description"
  width={400}
  height={400}
  priority // For above-fold images
/>
```

### Enable Analytics

Add to `vercel.json`:

```json
{
  "analytics": {
    "enable": true
  }
}
```

### Set Up Redirects

Add to `next.config.js`:

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ]
  },
}
```

---

## Cost

### Vercel Pricing
- **Hobby (Free):**
  - Perfect for personal portfolio
  - 100GB bandwidth/month
  - Serverless Functions
  - Automatic HTTPS
  - Custom domains

- **Pro ($20/month):**
  - For commercial use
  - More bandwidth
  - Team features
  - Analytics

**Your portfolio falls under the free tier! 🎉**

---

**Congratulations on deploying your portfolio! 🚀**

Share it with the world:
- Add to your resume
- Share on LinkedIn
- Tweet about it
- Add to your GitHub profile

---

Need help? Check the main [README.md](./README.md) or open an issue!
