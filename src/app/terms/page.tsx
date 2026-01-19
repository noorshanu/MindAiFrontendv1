import type { Metadata } from "next";
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: "Terms and Conditions - Mind's AI Service Agreement",
  description: "Read Mind's AI Terms and Conditions to understand the rules and guidelines for using our AI-powered mental wellness platform. Learn about eligibility, user responsibilities, and service limitations.",
  keywords: [
    "terms and conditions",
    "service agreement",
    "user agreement",
    "terms of service",
    "legal terms",
    "platform rules"
  ],
  openGraph: {
    title: "Terms and Conditions - Mind's AI",
    description: "Read our Terms and Conditions to understand the rules and guidelines for using Mind's AI platform.",
    images: ['/mobdown.png'],
  },
  twitter: {
    card: 'summary',
    title: "Terms and Conditions - Mind's AI",
    description: "Read our Terms and Conditions to understand the rules and guidelines for using Mind's AI platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return <TermsClient />
}