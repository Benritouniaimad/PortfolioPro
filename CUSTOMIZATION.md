# 📋 Portfolio Development Guide

## 🎯 How to Customize Your Portfolio

This guide will help you customize the portfolio to match your personal brand and content.

---

## 1. Personal Information

### Update Hero Section
**File:** `data/hero.json`

```json
{
  "name": "Your Full Name",
  "title": "Your Professional Title",
  "tagline": "Your Catchy Tagline",
  "description": "Brief introduction about yourself",
  "image": "/images/your-photo.jpg",
  "resumeUrl": "/your-resume.pdf",
  "socialLinks": [
    {
      "platform": "GitHub",
      "url": "https://github.com/yourusername",
      "icon": "github"
    }
    // Add more social links
  ]
}
```

**Steps:**
1. Replace all text content with your information
2. Add your photo to `public/images/your-photo.jpg`
3. Add your resume to `public/your-resume.pdf`
4. Update social media URLs

---

## 2. Education & Certifications

### Add Education
**File:** `data/education.json`

```json
{
  "education": [
    {
      "id": 1,
      "degree": "Your Degree Name",
      "institution": "Your University",
      "location": "City, Country",
      "startDate": "YYYY",
      "endDate": "YYYY",
      "description": "What you studied",
      "gpa": "Your GPA",
      "achievements": [
        "Achievement 1",
        "Achievement 2"
      ]
    }
  ]
}
```

### Add Certifications
**File:** `data/certifications.json`

Follow the same pattern and add your certificates with credential IDs and verification links.

---

## 3. Skills

**File:** `data/skills.json`

### Skill Categories Structure:
- Frontend
- Backend
- DevOps & Tools
- (Add your own categories)

```json
{
  "categories": [
    {
      "name": "Your Category",
      "skills": [
        {
          "name": "Skill Name",
          "level": 90,
          "color": "#HexColor",
          "yearsOfExperience": 5
        }
      ]
    }
  ]
}
```

**Tips:**
- Be honest with skill levels (1-100)
- Use brand colors for each technology
- Group related skills together

---

## 4. Projects

**File:** `data/projects.json`

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Short description",
      "longDescription": "Detailed description",
      "image": "/images/projects/project-name.jpg",
      "tags": ["React", "Node.js", "MongoDB"],
      "demoUrl": "https://demo-url.com",
      "githubUrl": "https://github.com/user/repo",
      "featured": true,
      "category": "Web Application",
      "completionDate": "2024-01"
    }
  ]
}
```

**Project Images:**
1. Create folder: `public/images/projects/`
2. Add project screenshots (recommended: 800x600px)
3. Use descriptive filenames

**Categories:**
- Web Application
- Mobile Application
- Creative
- Tool/Utility
- (Create your own)

---

## 5. Experience

**File:** `data/experience.json`

```json
{
  "experience": [
    {
      "id": 1,
      "position": "Your Job Title",
      "company": "Company Name",
      "location": "City, Country",
      "type": "Full-time",
      "startDate": "YYYY-MM",
      "endDate": "YYYY-MM" or null,
      "current": true or false,
      "description": "Brief role description",
      "responsibilities": [
        "Responsibility 1",
        "Responsibility 2"
      ],
      "technologies": ["Tech1", "Tech2"],
      "achievements": [
        "Achievement 1"
      ]
    }
  ]
}
```

---

## 6. Contact Information

**File:** `data/contact.json`

Update all your contact details, social links, and form placeholders.

---

## 7. Styling & Branding

### Colors
**File:** `tailwind.config.ts`

```typescript
colors: {
  primary: {
    500: "#YourBrandColor",
    600: "#DarkerShade",
    // ... more shades
  },
}
```

### Typography
**File:** `app/layout.tsx`

Change fonts by importing different Google Fonts:

```typescript
import { YourFont } from "next/font/google";
```

---

## 8. SEO Optimization

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your SEO description",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "Your Name Portfolio",
    description: "Your description",
    images: ["/og-image.jpg"],
  },
};
```

**Create Open Graph Image:**
1. Design 1200x630px image
2. Save as `public/og-image.jpg`
3. Include your name and title

---

## 9. Adding New Sections

### Step 1: Create Component
**File:** `components/sections/YourSection.tsx`

```typescript
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import yourData from "@/data/your-section.json";

export default function YourSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="your-section" ref={ref} className="section-padding">
      {/* Your content */}
    </section>
  );
}
```

### Step 2: Add to Main Page
**File:** `app/page.tsx`

```typescript
import YourSection from "@/components/sections/YourSection";

export default function Home() {
  return (
    <>
      {/* ... other sections */}
      <YourSection />
    </>
  );
}
```

### Step 3: Add to Navigation
**File:** `components/layout/Navigation.tsx`

```typescript
const navItems = [
  // ... other items
  { name: "Your Section", href: "#your-section" },
];
```

---

## 10. Performance Optimization

### Image Optimization
Use Next.js Image component:

```typescript
import Image from "next/image";

<Image
  src="/images/photo.jpg"
  alt="Description"
  width={400}
  height={400}
  priority // for above-fold images
/>
```

### Lazy Loading
Components automatically lazy-load as you scroll.

### Bundle Size
Check bundle size:
```bash
npm run build
```

---

## 11. Testing Locally

```bash
# Development mode
npm run dev

# Production build
npm run build
npm run start
```

Test on different devices:
- Desktop (1920x1080, 1366x768)
- Tablet (768x1024)
- Mobile (375x667, 414x896)

---

## 12. Deployment Checklist

- [ ] Update all JSON files with your content
- [ ] Add all images to `public/images/`
- [ ] Update SEO metadata
- [ ] Test dark/light mode
- [ ] Test on multiple browsers
- [ ] Test responsive design
- [ ] Check all links work
- [ ] Run production build locally
- [ ] Deploy to Vercel/Netlify

---

## 13. Maintenance

### Regular Updates
- Keep dependencies updated
- Update projects as you complete them
- Add new skills as you learn
- Update experience section

### Content Updates
All content is in JSON files - no code changes needed!

---

## 🆘 Common Customization Questions

**Q: How do I change the color scheme?**
A: Edit `tailwind.config.ts` and update the primary color values.

**Q: How do I add more social media icons?**
A: Import from `react-icons/fi` and add to `iconMap` in respective components.

**Q: Can I remove sections I don't need?**
A: Yes! Just comment out or remove the import and component in `app/page.tsx`.

**Q: How do I change animation speed?**
A: Adjust `duration` values in Framer Motion `transition` props.

**Q: Where do I add Google Analytics?**
A: Add to `app/layout.tsx` inside the `<body>` tag.

---

## 📞 Need Help?

- Check the main README.md
- Review component comments (they're detailed!)
- Open an issue on GitHub
- Email: your.email@example.com

---

**Happy customizing! 🎨**
