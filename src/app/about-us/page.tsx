import type { Metadata } from "next";
import AboutUsClient from './AboutUsClient';

export const metadata: Metadata = {
  title: "About Us - Meet the Team Behind Mind's AI",
  description: "Learn about Mind's AI - our vision, mission, and the dedicated team of psychologists, developers, and researchers working to make mental health support accessible to everyone.",
  keywords: [
    "about minds ai",
    "mental health team",
    "AI therapy company",
    "mental wellness platform",
    "psychology solutions",
    "mental health innovation"
  ],
  openGraph: {
    title: "About Us - Mind's AI",
    description: "Learn about our vision, mission, and the dedicated team working to make mental health support accessible to everyone.",
    images: ['/mia.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Us - Mind's AI",
    description: "Learn about our vision, mission, and the dedicated team working to make mental health support accessible to everyone.",
    images: ['/mia.png'],
  },
};

export default function AboutUsPage() {
  return <AboutUsClient />
}