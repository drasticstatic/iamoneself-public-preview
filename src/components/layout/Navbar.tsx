"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ExternalLink, Code, Home, Feather, Mail, Heart } from "lucide-react";

const navLinks = [
  { href: "/retreats", label: "Retreats" },
  { href: "/faq", label: "FAQ" },
  {
    href: "https://www.iamoneself.com/plantsandmiracles",
    label: "Plants & Miracles",
    external: true,
  },
  {
    href: "https://www.iamoneself.com/spirituallifecoaching",
    label: "Spiritual Life Coaching",
    external: true,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl shadow-sm border-b border-neutral-200/50 dark:border-neutral-800/50"
          : "bg-white/60 dark:bg-neutral-950/60 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex items-center justify-between px-6 h-16 max-w-6xl">
        {/* Logo — House icon + Retreat Portal, links to home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 hover:text-amber-600 dark:hover:text-amber-400 transition-colors group"
        >
          <Home className="h-5 w-5 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform" />
          <span className="drop-shadow-sm">Retreat Portal</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/50 shadow-sm hover:shadow-md"
              >
                {link.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-sm rounded-md transition-all shadow-sm hover:shadow-md ${
                  pathname === link.href
                    ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                }`}
              >
                {link.label}
              </Link>
            )
          )}

          <span className="w-px h-5 bg-neutral-200 dark:bg-neutral-800 mx-1" />

          <a
            href="https://www.iamoneself.com/about-the-speaker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/50 shadow-sm hover:shadow-md"
          >
            <Mail className="h-3.5 w-3.5" />
            Contact
            <ExternalLink className="h-3 w-3" />
          </a>

          <a
            href="https://www.iamoneself.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors rounded-md hover:bg-amber-50 dark:hover:bg-amber-950/20 font-medium shadow-sm hover:shadow-md"
          >
            iamoneself.com
            <ExternalLink className="h-3 w-3" />
          </a>

          <a
            href="https://github.com/drasticstatic/iamoneself-public-preview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
          >
            <Code className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-50 p-2 -mr-2 text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop — fully opaque to prevent text-on-text bleed */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel — always solid bg, no transparency */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white dark:bg-neutral-950 shadow-2xl p-6 pt-20 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all shadow-sm hover:shadow-md"
                >
                  {link.label}
                  <ExternalLink className="h-3.5 w-3.5 text-neutral-400" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-sm rounded-lg transition-all shadow-sm hover:shadow-md ${
                    pathname === link.href
                      ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 font-medium"
                      : "text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="my-3 h-px bg-neutral-200 dark:bg-neutral-800" />

            <a
              href="https://www.iamoneself.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-sm text-amber-600 dark:text-amber-400 font-medium rounded-lg hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-all shadow-sm hover:shadow-md"
            >
              Visit iamoneself.com
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <a
              href="https://www.iamoneself.com/letterstoself"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all shadow-sm hover:shadow-md"
            >
              <Feather className="h-4 w-4 text-amber-500" />
              Letters to Self
              <ExternalLink className="h-3.5 w-3.5 text-neutral-400" />
            </a>

            <a
              href="https://www.iamoneself.com/spirituallifecoaching"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all shadow-sm hover:shadow-md"
            >
              <Heart className="h-4 w-4 text-amber-500" />
              Spiritual Life Coaching
              <ExternalLink className="h-3.5 w-3.5 text-neutral-400" />
            </a>

            <a
              href="https://www.iamoneself.com/about-the-speaker"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all shadow-sm hover:shadow-md"
            >
              <Mail className="h-4 w-4 text-amber-500" />
              Contact
              <ExternalLink className="h-3.5 w-3.5 text-neutral-400" />
            </a>

            <div className="my-3 h-px bg-neutral-200 dark:bg-neutral-800" />

            <a
              href="https://github.com/drasticstatic/iamoneself-public-preview"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
            >
              <Code className="h-4 w-4" />
              GitHub Source Repo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
