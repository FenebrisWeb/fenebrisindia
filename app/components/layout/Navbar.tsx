"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Ensure lucide-react is installed
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
    <nav className="flex items-center justify-between py-4 md:px-20 bg-background text-foreground transition-colors duration-300">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="">
            <Image src="/logo.png" alt="Fenebris Logo" width={110} height={128} />
          </div>
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
        
        <div className="hidden sm:block rounded-full bg-[#E42227] px-6 py-2 text-sm font-semibold text-white hover:bg-blue-800 transition-all hover:shadow-md active:scale-95"><Link 
          href="/contact-us"
        >
          Get Started
        </Link></div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 b-0 p-4 bg-background border-b border-border-brand md:hidden flex flex-col gap-2 shadow-xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-base font-medium text-primary dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
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
  );
};

export default Navbar;