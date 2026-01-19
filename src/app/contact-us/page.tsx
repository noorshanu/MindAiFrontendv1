import type { Metadata } from "next";
import ContactUsClient from './ContactUsClient';

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Mind's AI",
  description: "Contact Mind's AI for support, inquiries, or feedback. Reach out through email, phone, or social media. We're here to help with your mental wellness journey.",
  keywords: [
    "contact minds ai",
    "mental health support contact",
    "therapy support",
    "customer service",
    "help center",
    "mental wellness contact"
  ],
  openGraph: {
    title: "Contact Us - Mind's AI",
    description: "Get in touch with Mind's AI for support, inquiries, or feedback. We're here to help with your mental wellness journey.",
    images: ['/mobdown.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Us - Mind's AI",
    description: "Get in touch with Mind's AI for support, inquiries, or feedback.",
    images: ['/mobdown.png'],
  },
};

export default function ContactUsPage() {
  return <ContactUsClient />
}