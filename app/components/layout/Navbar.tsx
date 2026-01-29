import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle'; // Assume created or add logic here

export default function Navbar() {
  return (
    <nav className="flex h-16 sm:h-20 items-center justify-between">
      <Link href="/" className="transition-opacity hover:opacity-80">
        <h1 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          Fenebris India
        </h1>
      </Link>
      
      <div className="flex items-center gap-4 sm:gap-8">
        <div className="hidden md:flex gap-6 font-medium text-sm">
          <Link href="/about-us" className="hover:text-primary">About</Link>
          <Link href="/services" className="hover:text-primary">Services</Link>
          <Link href="/portfolio" className="hover:text-primary">Portfolio</Link>
        </div>
        <ThemeToggle /> {/* Dark/Light Mode Button */}
      </div>
    </nav>
  );
}