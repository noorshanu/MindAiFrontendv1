import type { Metadata } from "next";
import PrivacyPolicyClient from './PrivacyPolicyClient';

export const metadata: Metadata = {
  title: "Privacy Policy - Mind's AI Data Protection & Privacy",
  description: "Read Mind's AI Privacy Policy to understand how we collect, use, and protect your personal information and mental health data. Your privacy is our priority.",
  keywords: [
    "privacy policy",
    "data protection",
    "mental health privacy",
    "user data security",
    "GDPR compliance",
    "privacy rights"
  ],
  openGraph: {
    title: "Privacy Policy - Mind's AI",
    description: "Learn how Mind's AI protects your privacy and handles your personal information and mental health data.",
    images: ['/mobdown.png'],
  },
  twitter: {
    card: 'summary',
    title: "Privacy Policy - Mind's AI",
    description: "Learn how Mind's AI protects your privacy and handles your personal information.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />
}