import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://mindsai.com'),
  title: {
    default: "Mind's AI - AI-Powered Mental Wellness Platform",
    template: "%s | Mind's AI"
  },
  description: "Mind's AI is an AI-driven mental wellness platform designed to understand human emotions, relationships, and inner conflicts. Get 24/7 AI therapy support, mood tracking, and personalized mental health guidance.",
  keywords: [
    "AI therapy",
    "mental health",
    "mental wellness",
    "AI psychologist",
    "online therapy",
    "mental health support",
    "emotional intelligence",
    "AI counseling",
    "mood tracking",
    "virtual therapy"
  ],
  authors: [{ name: "Mind's AI" }],
  creator: "Mind's AI",
  publisher: "Iskrti Psychology Solutions Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: "Mind's AI",
    title: "Mind's AI - AI-Powered Mental Wellness Platform",
    description: "Mind's AI is an AI-driven mental wellness platform designed to understand human emotions, relationships, and inner conflicts. Get 24/7 AI therapy support.",
    images: [
      {
        url: '/mobdown.png',
        width: 1200,
        height: 630,
        alt: "Mind's AI - Mental Wellness Platform",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mind's AI - AI-Powered Mental Wellness Platform",
    description: "Mind's AI is an AI-driven mental wellness platform designed to understand human emotions, relationships, and inner conflicts.",
    images: ['/mobdown.png'],
    creator: '@mindsai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="mhSGtbd4IMtshEDfQYg_lUjAmh7xO47UbGLgVG7lTfs" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
