"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ExternalLink,
  Code,
  Home,
  Feather,
  Mail,
  Heart,
  Mountain,
  BookOpen,
  Globe,
  Leaf,
  ChevronDown,
  Mic,
  Sparkles,
  Flower2,
  Phone,
} from "lucide-react";

// Internal nav links — shown in main navbar and hamburger
const navLinks = [
  { href: "/faq", label: "FAQ", icon: BookOpen, external: false },
  { href: "/retreats", label: "Retreats", icon: Mountain, external: false },
  { href: "/404", label: "Lost?", icon: Sparkles, external: false },
];

// Dropdown items for the iamoneself.com menu — live/linked pages only
const siteLinks = [
  {
    href: "https://www.iamoneself.com",
    label: "iamoneself.com",
    icon: Globe,
    external: true,
  },
  {
    href: "https://www.iamoneself.com/plants-and-miracles",
    label: "Plants & Miracles",
    icon: Leaf,
    external: true,
  },
  {
    href: "https://www.iamoneself.com/letters-to-self",
    label: "Letters to Self",
    icon: Feather,
    external: true,
  },
  {
    href: "https://www.iamoneself.com/spiritual-life-coaching",
    label: "Spiritual Life Coaching",
    icon: Heart,
    external: true,
  },
  {
    href: "https://www.iamoneself.com/psychedelic-mystic-teachings",
    label: "Psychedelic Mystic Teachings",
    icon: Flower2,
    external: true,
  },
  {
    href: "https://www.iamoneself.com/voice-of-the-one-podcast",
    label: "Voice of the One Podcast",
    icon: Mic,
    external: true,
  },
  {
    href: "https://www.iamoneself.com/about-the-speaker",
    label: "Contact",
    icon: Phone,
    external: true,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [siteMenuOpen, setSiteMenuOpen] = useState(false);
  const siteMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setSiteMenuOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        siteMenuRef.current &&
        !siteMenuRef.current.contains(e.target as Node)
      ) {
        setSiteMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Portal Home: scroll to top if already on home page
  const handlePortalHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Header bar ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl shadow-sm border-b border-neutral-200/50 dark:border-neutral-800/50"
            : "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg"
        }`}
      >
        <nav className="mx-auto flex items-center justify-between px-6 h-16 max-w-6xl">
          {/* Logo — House icon + Retreat Portal, links to home */}
          <Link
            href="/"
            onClick={handlePortalHomeClick}
            className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 hover:text-amber-600 dark:hover:text-amber-400 transition-colors group min-h-[44px] min-w-[44px]"
          >
            <Home className="h-5 w-5 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="drop-shadow-sm">Retreat Portal</span>
            <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700 mx-0.5 group-hover:text-amber-400 dark:group-hover:text-amber-600 transition-colors">|</span>
            <span className="hidden sm:inline drop-shadow-sm text-sm font-normal text-neutral-500 dark:text-neutral-500 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Home</span>
          </Link>

          {/* Desktop links — evenly spread */}
          <div className="hidden md:flex items-center gap-2 flex-1 justify-end">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 transition-all rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/50 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <link.icon className="h-3.5 w-3.5" />
                  {link.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                    pathname === link.href
                      ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                  }`}
                >
                  <link.icon className="h-3.5 w-3.5" />
                  {link.label}
                </Link>
              )
            )}

            <span className="w-px h-5 bg-neutral-200 dark:bg-neutral-800 mx-2" />

            {/* iamoneself.com dropdown */}
            <div ref={siteMenuRef} className="relative">
              <button
                onClick={() => setSiteMenuOpen(!siteMenuOpen)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                  siteMenuOpen
                    ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                }`}
              >
                <Globe className="h-3.5 w-3.5" />
                iamoneself.com
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${
                    siteMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {siteMenuOpen && (
                <div className="absolute right-0 top-full mt-1 w-72 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl py-1 z-50">
                  {siteLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setSiteMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                    >
                      <link.icon className="h-4 w-4 text-amber-500" />
                      {link.label}
                      {link.external && (
                        <ExternalLink className="h-3 w-3 text-neutral-400 ml-auto" />
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/drasticstatic/iamoneself-public-preview"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-all rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/50 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Code className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>

          {/* Hamburger button (desktop:hidden) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 -mr-2 text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors shadow-sm hover:shadow-md rounded-md"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {/* ── Mobile overlay — SIBLING of header so z-index stacks correctly ── */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Opaque backdrop — no text bleed-through */}
        <div
          className="absolute inset-0 bg-neutral-900/80"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white dark:bg-neutral-950 shadow-2xl flex flex-col transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel header with close button */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-neutral-100 dark:border-neutral-800 flex-shrink-0">
            <span className="text-xs font-medium text-neutral-400 dark:text-neutral-600 uppercase tracking-wider">
              Navigation
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 -mr-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable links */}
          <div className="flex-1 overflow-y-auto p-6 pt-4">
            <div className="flex flex-col gap-1">
              {/* Portal Home — scroll to top if on home page */}
              <Link
                href="/"
                onClick={(e) => {
                  setMenuOpen(false);
                  if (pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`flex items-center gap-2 px-4 py-3 text-sm rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                  pathname === "/"
                    ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 font-medium"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                }`}
              >
                <Home className="h-4 w-4 text-amber-500" />
                Portal Home
              </Link>

              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
                    <link.icon className="h-4 w-4 text-amber-500" />
                    {link.label}
                    <ExternalLink className="h-3.5 w-3.5 text-neutral-400 ml-auto" />
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                      pathname === link.href
                        ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 font-medium"
                        : "text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                    }`}
                  >
                    <link.icon className="h-4 w-4 text-amber-500" />
                    {link.label}
                  </Link>
                )
              )}

              <div className="my-3 h-px bg-neutral-200 dark:bg-neutral-800" />

              {/* iamoneself.com section heading */}
              <p className="px-4 py-1 text-xs font-medium text-neutral-400 dark:text-neutral-600 uppercase tracking-wider">
                iamoneself.com
              </p>

              {siteLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <link.icon className="h-4 w-4 text-amber-500" />
                  {link.label}
                  {link.external && (
                    <ExternalLink className="h-3.5 w-3.5 text-neutral-400 ml-auto" />
                  )}
                </a>
              ))}

              <div className="my-3 h-px bg-neutral-200 dark:bg-neutral-800" />

              <a
                href="https://github.com/drasticstatic/iamoneself-public-preview"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <Code className="h-4 w-4" />
                GitHub Source Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
