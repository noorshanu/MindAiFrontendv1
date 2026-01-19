"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleFAQClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMenu();
    
    if (pathname === '/') {
      // If on home page, just scroll to FAQ
      const faqSection = document.getElementById('faq-section');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other page, navigate to home first
      router.push('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const faqSection = document.getElementById('faq-section');
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If element not found immediately, try again after a short delay
          setTimeout(() => {
            const faqSectionRetry = document.getElementById('faq-section');
            if (faqSectionRetry) {
              faqSectionRetry.scrollIntoView({ behavior: 'smooth' });
            }
          }, 300);
        }
      }, 500);
    }
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname === path;
  };

  return (
    <>
      <nav className="w-full bg-white px-6 py-4 shadow-sm relative z-50 overflow-hidden">
        {/* Logo */}
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <h2 className="text-2xl font-bold font-mon">
                MIND&apos;S <span className="text-[#84B357]">AI</span>
              </h2>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-[#2C5F5D] font-light hover:text-[#1a3d3b] transition-colors font-mon relative pb-1 ${
                isActive('/') ? 'border-b-2 border-[#84B357]' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`text-[#2C5F5D] font-light hover:text-[#1a3d3b] transition-colors font-mon relative pb-1 ${
                isActive('/about-us') ? 'border-b-2 border-[#84B357]' : ''
              }`}
            >
              About Us
            </Link>
            <a
              href="#faq-section"
              onClick={handleFAQClick}
              className={`text-[#2C5F5D] font-light hover:text-[#1a3d3b] transition-colors font-mon relative pb-1 cursor-pointer ${
                pathname === '/' ? 'border-b-2 border-[#84B357]' : ''
              }`}
            >
              FAQ
            </a>
            <Link
              href="/products"
              className={`text-[#2C5F5D] font-light hover:text-[#1a3d3b] transition-colors font-mon relative pb-1 ${
                isActive('/products') ? 'border-b-2 border-[#84B357]' : ''
              }`}
            >
              Our Product
            </Link>
            <Link
              href="/contact-us"
              className={`text-[#2C5F5D] font-light hover:text-[#1a3d3b] transition-colors font-mon relative pb-1 ${
                isActive('/contact-us') ? 'border-b-2 border-[#84B357]' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop Right Side - Buttons and Profile */}
          <div className="hidden lg:flex items-center gap-6">
      
            <div className="flex items-center gap-3">
              {/* Social Media Icons */}
              <a
                href="https://www.instagram.com/_minds_ai?igsh=NGd3emszeDBqY3Fq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C5F5D] hover:text-[#84B357] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/iskrti-psychology-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C5F5D] hover:text-[#84B357] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/Minds_Ai_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C5F5D] hover:text-[#84B357] transition-colors"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
              {/* <Link
                href="/signup"
                className="bg-[#4CAF50] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#45a049] transition-colors shadow-md"
              >
                SIGNUP
              </Link>
              <Link
                href="/login"
                className="bg-[#4CAF50] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#45a049] transition-colors shadow-md"
              >
                LOGIN
              </Link> */}
            </div>

            {/* Profile Icon */}
            {/* <div className="ml-2">
              <Link href="/dashboard">
                <div className="w-12 h-12 rounded-full bg-[#FF6B6B] flex items-center justify-center overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src="/dp.png"
                    alt="Profile"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            </div> */}
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-[#2C5F5D] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Slider Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold font-mon text-[#2C5F5D]">
              Menu
            </h2>
            <button
              onClick={closeMenu}
              className="text-[#2C5F5D] focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="flex flex-col">
              <Link
                href="/"
                onClick={closeMenu}
                className={`px-6 py-4 text-[#2C5F5D] font-light hover:bg-[#84B357] hover:bg-opacity-10 transition-colors font-mon relative ${
                  isActive('/') ? 'bg-[#84B357] bg-opacity-10 border-l-4 border-[#84B357]' : ''
                }`}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                onClick={closeMenu}
                className={`px-6 py-4 text-[#2C5F5D] font-light hover:bg-[#84B357] hover:bg-opacity-10 transition-colors font-mon relative ${
                  isActive('/about-us') ? 'bg-[#84B357] bg-opacity-10 border-l-4 border-[#84B357]' : ''
                }`}
              >
                About Us
              </Link>
              <a
                href="#faq-section"
                onClick={(e) => {
                  handleFAQClick(e);
                }}
                className={`px-6 py-4 text-[#2C5F5D] font-light hover:bg-[#84B357] hover:bg-opacity-10 transition-colors font-mon relative cursor-pointer ${
                  pathname === '/' ? 'bg-[#84B357] bg-opacity-10 border-l-4 border-[#84B357]' : ''
                }`}
              >
                FAQ
              </a>
              <Link
                href="/products"
                onClick={closeMenu}
                className={`px-6 py-4 text-[#2C5F5D] font-light hover:bg-[#84B357] hover:bg-opacity-10 transition-colors font-mon relative ${
                  isActive('/products') ? 'bg-[#84B357] bg-opacity-10 border-l-4 border-[#84B357]' : ''
                }`}
              >
                Our Product
              </Link>
              <Link
                href="/contact-us"
                onClick={closeMenu}
                className={`px-6 py-4 text-[#2C5F5D] font-light hover:bg-[#84B357] hover:bg-opacity-10 transition-colors font-mon relative ${
                  isActive('/contact-us') ? 'bg-[#84B357] bg-opacity-10 border-l-4 border-[#84B357]' : ''
                }`}
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Mobile Buttons */}
          <div className="p-6 border-t space-y-3">
            {/* <Link
              href="/signup"
              onClick={closeMenu}
              className="block w-full bg-[#4CAF50] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#45a049] transition-colors shadow-md text-center"
            >
              SIGNUP
            </Link>
            <Link
              href="/login"
              onClick={closeMenu}
              className="block w-full bg-[#4CAF50] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#45a049] transition-colors shadow-md text-center"
            >
              LOGIN
            </Link> */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/_minds_ai?igsh=NGd3emszeDBqY3Fq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C5F5D] hover:text-[#84B357] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
                </a>
              <a
                href="https://www.linkedin.com/company/iskrti-psychology-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C5F5D] hover:text-[#84B357] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/Minds_Ai_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C5F5D] hover:text-[#84B357] transition-colors"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
