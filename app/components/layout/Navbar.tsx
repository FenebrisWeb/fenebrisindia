"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '/about-us' },
    { name: 'Industries', href: '/industries' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="hidden md:flex items-center justify-between px-20 py-2 text-xs bg-[#800020] text-zinc-100 dark:bg-zinc-950 dark:text-zinc-300 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Phone size={14} />
            +1 415-707-5270
          </span>
          <span className="flex items-center gap-2">
            <Phone size={14} />
            +91 750-363-8275
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={14} />
          info@fenebrisindia.com
        </div>
      </div>

      {/* ================= EXISTING NAVBAR (UNCHANGED) ================= */}
      <nav className="flex items-center justify-between py-2 md:px-20 bg-background text-foreground transition-colors duration-300">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/logo.png" alt="Fenebris Logo" width={110} height={128} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-primary hover:text-zinc-600 dark:hover:text-primary transition-colors rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <div className="hidden sm:block rounded-full bg-[#800020] px-6 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-all hover:shadow-md active:scale-95">
            <Link href="/contact-us">Get Started</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 p-4 bg-background border-b md:hidden flex flex-col gap-2 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-base font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="mt-2 w-full text-center rounded-lg bg-[#E42227] py-3 text-white font-semibold"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
