import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import HomeConfetti from "@/components/HomeConfetti";
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
  description: "Mind's AI is a revolutionary 24/7 AI therapy platform delivering real-time conversations, CBT-based guidance with a human-like experience. Chat with Iskriti, your AI therapist, anytime, anywhere.",
  keywords: [
    "AI therapy",
    "online therapy",
    "AI psychologist",
    "mental health support",
    "24/7 therapy",
    "CBT therapy",
    "AI counseling",
    "mental wellness app"
  ],
  openGraph: {
    title: "Mind's AI - Your Personal AI Therapist",
    description: "A 24/7 AI therapy platform delivering real-time conversations, CBT-based guidance with a human-like experience.",
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
      <HomeConfetti />
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
