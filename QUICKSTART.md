# Quick Start Guide

## 🚀 Getting Your Portfolio Live in 5 Steps

### Step 1: Install Dependencies (Already Done! ✓)
```bash
npm install
```

### Step 2: Update Your Content
Edit the JSON files in the `data/` folder:
- `hero.json` - Your name, title, and introduction
- `education.json` - Your educational background  
- `certifications.json` - Professional certificates
- `skills.json` - Your technical skills
- `projects.json` - Your portfolio projects
- `experience.json` - Work experience
- `contact.json` - Contact information

### Step 3: Add Your Images
Place your images in `public/images/`:
- Your photo: `public/images/hero-avatar.jpg`
- Project screenshots: `public/images/projects/`
- Resume: `public/resume.pdf`

### Step 4: Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser

### Step 5: Deploy
Push to GitHub and deploy to Vercel:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy!

---

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: "#YourColor", // Change this!
  }
}
```

### Update SEO
Edit `app/layout.tsx`:
```typescript
export const metadata = {
  title: "Your Name - Your Title",
  description: "Your description..."
}
```

---

## 📝 Content Tips

### Hero Section
- Keep tagline short and impactful
- Make description 2-3 sentences max
- Use professional photo

### Projects
- Add 4-6 best projects
- Mark 2-3 as "featured"
- Include live demos when possible
- Use clear project screenshots

### Skills
- Be honest about proficiency levels
- Group skills logically
- Include years of experience

### Experience
- Use bullet points
- Focus on achievements and impact
- Quantify results when possible

---

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Styles not loading?**
- Delete `.next` folder
- Run `npm run dev` again

**Build errors?**
- Check all JSON files are valid
- Ensure all images exist
- Run `npm run build` to see details

---

## 📚 Learn More

- [Full Documentation](./README.md)
- [Customization Guide](./CUSTOMIZATION.md)
- [Next.js Docs](https://nextjs.org/docs)

---

**Need help?** Open an issue or email your.email@example.com

**Good luck with your awesome portfolio! 🎉**
