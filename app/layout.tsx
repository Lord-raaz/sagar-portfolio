import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import { Providers } from '@/components/Providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AnimatedBackground } from '@/components/shared/AnimatedBackground'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Sagar - Video Editor & Content Creator Portfolio",
  description: "Professional video editor and content creator specializing in YouTube videos, Instagram content, and thumbnail design. Helping creators grow their audience.",
  keywords: ["video editing", "youtube editor", "content creator", "thumbnail design", "instagram videos", "social media content"],
  authors: [{ name: "Sagar" }],
  creator: "Sagar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sagar-portfolio.vercel.app",
    title: "Sagar - Video Editor & Content Creator Portfolio",
    description: "Professional video editor and content creator specializing in YouTube videos, Instagram content, and thumbnail design.",
    siteName: "Sagar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagar - Video Editor & Content Creator Portfolio",
    description: "Professional video editor and content creator specializing in YouTube videos, Instagram content, and thumbnail design.",
    creator: "@sagar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased dark`}
      >
        <Providers>
          <AnimatedBackground />
          <div className="flex min-h-screen flex-col relative">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
