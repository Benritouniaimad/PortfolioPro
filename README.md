# Premium Portfolio Website

A modern, stunning portfolio website built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

![Portfolio Preview](./public/og-image.jpg)

## ✨ Features

- 🎨 **Modern Design**: Beautiful, clean, and professional interface
- 🌓 **Dark/Light Mode**: Seamless theme switching with no flash
- 🎬 **Smooth Animations**: Powered by Framer Motion and GSAP
- 🎭 **3D Effects**: Interactive Three.js background animations
- 📱 **Fully Responsive**: Optimized for all screen sizes
- ⚡ **Performance Optimized**: Fast loading with Next.js optimization
- 🎯 **SEO Friendly**: Complete metadata and Open Graph tags
- 📊 **Dynamic Content**: Easy-to-update JSON-based content management
- ♿ **Accessible**: ARIA labels and keyboard navigation support
- 🎪 **Interactive**: Hover effects, scroll animations, and more

## 🚀 Tech Stack

### Core
- **Next.js 14** - React framework with app router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling

### Animation & 3D
- **Framer Motion** - Production-ready animations
- **GSAP** - Professional-grade animations
- **Three.js** - 3D graphics and effects
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for Three.js

### Forms & Validation
- **React Hook Form** - Performant forms
- **Zod** - TypeScript-first schema validation
- **Nodemailer** - Email sending with SMTP

### UI & Icons
- **React Icons** - Comprehensive icon library
- **next-themes** - Theme management

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git
- Gmail account (for contact form email service)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portefolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure Email Service**
   
   Copy the environment file:
   ```bash
   cp .env.example .env.local
   ```
   
   Follow the [EMAIL-SETUP.md](EMAIL-SETUP.md) guide to configure Gmail SMTP for the contact form.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

All portfolio content is managed through JSON files in the `data/` directory:

### Updating Your Information

#### 1. **Hero Section** (`data/hero.json`)
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "tagline": "Your Tagline",
  "description": "Your description...",
  "socialLinks": [...]
}
```

#### 2. **Education** (`data/education.json`)
Add your educational background:
```json
{
  "education": [
    {
      "id": 1,
      "degree": "Your Degree",
      "institution": "Your University",
      "startDate": "2020",
      "endDate": "2024",
      ...
    }
  ]
}
```

#### 3. **Certifications** (`data/certifications.json`)
Add your professional certifications

#### 4. **Skills** (`data/skills.json`)
Update your technical skills and proficiency levels

#### 5. **Projects** (`data/projects.json`)
Showcase your portfolio projects

#### 6. **Experience** (`data/experience.json`)
Add your work experience

#### 7. **Contact** (`data/contact.json`)
Update your contact information

### Adding Images

1. Place your images in the `public/images/` directory
2. Reference them in JSON files using `/images/your-image.jpg`
3. Recommended image sizes:
   - Hero avatar: 400x400px
   - Project thumbnails: 800x600px
   - Certification logos: 200x200px

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Fonts

Fonts are configured in `app/layout.tsx`:

```typescript
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700", "800"] });
```

### Animations

- Modify animation speeds in `tailwind.config.ts`
- Adjust Framer Motion animations in component files
- Configure GSAP timelines in section components

## 📁 Project Structure

```
portefolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── 3d/                  # Three.js components
│   ├── layout/              # Layout components
│   ├── sections/            # Page sections
│   └── theme/               # Theme components
├── data/                    # JSON data files
│   ├── hero.json
│   ├── education.json
│   ├── certifications.json
│   ├── skills.json
│   ├── projects.json
│   ├── experience.json
│   └── contact.json
├── public/                  # Static assets
│   └── images/             # Image files
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🔧 Configuration

### Email Service (Contact Form)

The contact form uses Gmail SMTP by default. See [EMAIL-SETUP.md](EMAIL-SETUP.md) for complete setup instructions.

Quick setup:
1. Generate Gmail App Password
2. Add to `.env.local`:
   ```env
   SMTP_USER=your.email@gmail.com
   SMTP_PASSWORD=your-app-password
   EMAIL_TO=your.email@gmail.com
   ```

### SEO

Update metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your description",
  // ... more SEO settings
};
```

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the production version:

```bash
npm run build
npm run start
```

## 🎯 Performance

- Lighthouse score: 95+
- Core Web Vitals optimized
- Lazy loading for images and components
- Code splitting with Next.js
- Optimized 3D rendering

## 🐛 Troubleshooting

### Common Issues

1. **3D scene not rendering**
   - Clear cache and restart dev server
   - Check browser WebGL support

2. **Theme flashing on load**
   - Ensure ThemeProvider is properly configured
   - Check suppressHydrationWarning in html tag

3. **Animations not smooth**
   - Reduce number of animated elements
   - Check performance in production build

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

For support, email your.email@example.com or open an issue on GitHub.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

Built with ❤️ by [Your Name](https://github.com/yourusername)
