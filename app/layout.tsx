import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// Font configurations
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({ 
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://imad.vercel.app'),
  title: "Imad Benritounia - Software Engineer | MIAGE",
  description: "Portfolio of Imad Benritounia - Software Engineer specialized in Full-Stack Development, Java, Spring Boot, React, and modern web technologies. Based in Morocco.",
  keywords: ["Software Engineer", "MIAGE", "Full-Stack Developer", "Java", "Spring Boot", "React", "Next.js", "TypeScript", "Web Development", "Morocco", "Portfolio"],
  authors: [{ name: "Imad Benritounia" }],
  creator: "Imad Benritounia",
  publisher: "Imad Benritounia",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imad.vercel.app",
    siteName: "Imad Benritounia Portfolio",
    title: "Imad Benritounia - Software Engineer | MIAGE",
    description: "Explore the portfolio of Imad Benritounia, a Software Engineer creating innovative digital solutions with expertise in Java, Spring Boot, React, and modern web technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imad Benritounia Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ImadBenri",
    creator: "@ImadBenri",
    title: "Imad Benritounia - Software Engineer",
    description: "Portfolio showcasing innovative software engineering projects and expertise in modern web technologies",
    images: ["/og-image.jpg"],
  },
};

// Viewport Configuration (moved from metadata)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">
            {/* Background gradient effects */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
              <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/20 dark:bg-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
            </div>

            {/* Navigation */}
            <Navigation />

            {/* Main content */}
            <main className="flex-1">
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
