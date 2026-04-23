"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我" },
  { href: "/projects", label: "项目作品" },
  { href: "/blog", label: "博客文章" },
  { href: "/contact", label: "联系方式" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <nav className="max-w-[980px] mx-auto px-6 h-12 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity duration-200"
        >
          我的博客
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs transition-colors duration-200 ${
                pathname === link.href
                  ? "text-foreground"
                  : "text-secondary hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="菜单"
        >
          <div className="w-4 h-3 flex flex-col justify-between">
            <span
              className={`block h-[1.5px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-current transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-64 border-b border-border/50" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3 bg-background/95 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm transition-colors duration-200 ${
                pathname === link.href
                  ? "text-foreground font-medium"
                  : "text-secondary hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
