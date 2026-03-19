import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import HowDoesWork from "@/components/HowDoesWork";
import Faq from "@/components/Faq";
import AboutUs from "@/components/AboutUs";
import Appdownload from "@/components/Appdownload";

export const metadata: Metadata = {
  title: "Home - AI-Powered Mental Wellness Platform",
  description: "Mind's AI is a psychology-informed AI companion for emotional well-being. Real-time conversations, reflection, and supportive guidance — your AI friend and partner, anytime, anywhere. Not a substitute for professional care.",
  keywords: [
    "AI companion",
    "mental wellness",
    "emotional support",
    "psychology-informed",
    "mental health support",
    "AI friend",
    "reflection",
    "mental wellness app"
  ],
  openGraph: {
    title: "Mind's AI - Your Psychology-Informed AI Companion",
    description: "A psychology-informed AI companion for emotional well-being. Supportive conversations and reflection, anytime, anywhere.",
    images: ['/mobdown.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mind's AI - Your Personal AI Therapist",
    description: "A 24/7 AI therapy platform delivering real-time conversations, CBT-based guidance with a human-like experience.",
    images: ['/mobdown.png'],
  },
};

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Features/>
      <CTA/>
      <HowDoesWork/>
      <Appdownload/>
      <Faq/>
      <Footer/>
    </>
  );
}
