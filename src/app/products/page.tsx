import type { Metadata } from "next";
import ProductClient from './ProductClient';

export const metadata: Metadata = {
  title: "Our Products - AI Therapy Features & Services",
  description: "Explore Mind's AI products and features including AI therapy chat, mood tracking, VR therapy mode, avatar therapy, and exposure therapy. Discover how our AI-powered mental wellness tools can support your journey.",
  keywords: [
    "AI therapy products",
    "mental health features",
    "therapy services",
    "mood tracking",
    "VR therapy",
    "avatar therapy",
    "exposure therapy",
    "mental wellness tools"
  ],
  openGraph: {
    title: "Our Products - Mind's AI",
    description: "Explore Mind's AI products and features including AI therapy chat, mood tracking, VR therapy, and more.",
    images: ['/mobdown.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Products - Mind's AI",
    description: "Explore Mind's AI products and features including AI therapy chat, mood tracking, VR therapy, and more.",
    images: ['/mobdown.png'],
  },
};

export default function ProductPage() {
  return <ProductClient />
}

