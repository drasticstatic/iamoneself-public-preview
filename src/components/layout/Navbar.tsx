"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ExternalLink, Code } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/retreats", label: "Retreats" },
  { href: "/faq", label: "FAQ" },
  {
    href: "https://www.iamoneself.com/about-the-speaker",
    label: "About the Speaker",
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
          ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg shadow-sm border-b border-neutral-200/50 dark:border-neutral-800/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex items-center justify-between px-6 h-16 max-w-6xl">
        {/* Logo / Home */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
        >
          I Am One Self
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
              >
                {link.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
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
            href="https://www.iamoneself.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors rounded-md hover:bg-amber-50 dark:hover:bg-amber-950/20 font-medium"
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
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel */}
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
                  className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                >
                  {link.label}
                  <ExternalLink className="h-3.5 w-3.5 text-neutral-400" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-sm rounded-lg transition-colors ${
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
              className="flex items-center gap-2 px-4 py-3 text-sm text-amber-600 dark:text-amber-400 font-medium rounded-lg hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors"
            >
              Visit iamoneself.com
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <a
              href="https://www.iamoneself.com/plantsandmiracles"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
            >
              Plants & Miracles
              <ExternalLink className="h-3.5 w-3.5 text-neutral-400" />
            </a>

            <a
              href="https://www.iamoneself.com/letterstoself"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
            >
              Letters to Self
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
