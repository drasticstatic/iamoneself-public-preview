"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
  BotMessageSquare,
  Wrench,
  Footprints,
} from "lucide-react";

// Internal nav links — shown in main navbar and hamburger
const navLinks = [
  { href: "/faq", label: "FAQ", icon: BookOpen, external: false },
  { href: "/retreats", label: "Retreats", icon: Mountain, external: false },
  { href: "/apply", label: "Next Steps", icon: Footprints, external: false },
];
// Guide is a modal — not a page route. Lost? is /404.
const navExtras = [
  { href: "/404", label: "Lost?", icon: Sparkles, external: false },
];

/* ── Pagefind types for Guide modal search ── */
type PagefindInstance = {
  search: (query: string) => Promise<{
    results: { url: string; title: string; excerpt: string }[];
  }>;
};

type GuideResult = { url: string; title: string; excerpt: string };

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
  const [guideOpen, setGuideOpen] = useState(false);
  const [guideQuery, setGuideQuery] = useState("");
  const [guideResults, setGuideResults] = useState<GuideResult[]>([]);
  const [guideSearching, setGuideSearching] = useState(false);
  const [pagefind, setPagefind] = useState<PagefindInstance | null>(null);
  const siteMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  /* Load Pagefind for Guide modal search */
  useEffect(() => {
    let cancelled = false;
    const isDev =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" || window.location.hostname.includes("127.0.0.1"));
    const basePath = isDev ? "" : "/iamoneself-public-preview";
    const scriptSrc = `${basePath}/pagefind/pagefind.js`;

    if ((window as any).pagefind) {
      (window as any).pagefind.init().then((pf: PagefindInstance) => {
        if (!cancelled) setPagefind(pf);
      });
      return;
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.onload = () => {
      if (cancelled) return;
      const pf = (window as any).pagefind;
      if (pf) pf.init().then((initialized: PagefindInstance) => { if (!cancelled) setPagefind(initialized); });
    };
    document.head.appendChild(script);
    return () => { cancelled = true; };
  }, []);

  /* Debounced Guide search */
  const guideTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => {
    if (guideTimerRef.current) clearTimeout(guideTimerRef.current);
    if (!guideQuery.trim() || !pagefind) { setGuideResults([]); setGuideSearching(false); return; }
    setGuideSearching(true);
    guideTimerRef.current = setTimeout(async () => {
      try {
        const search = await pagefind.search(guideQuery);
        setGuideResults(search.results);
      } catch { setGuideResults([]); }
      setGuideSearching(false);
    }, 250);
    return () => { if (guideTimerRef.current) clearTimeout(guideTimerRef.current); };
  }, [guideQuery, pagefind]);

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

  // Listen for custom event from hero chat field to open guide modal
  useEffect(() => {
    const handler = () => setGuideOpen(true);
    window.addEventListener("open-guide-modal", handler);
    return () => window.removeEventListener("open-guide-modal", handler);
  }, []);

  // Lock body scroll when guide modal is open
  useEffect(() => {
    if (guideOpen) {
      document.body.style.overflow = "hidden";
      const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setGuideOpen(false); };
      document.addEventListener("keydown", handler);
      return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", handler); };
    }
    return () => { document.body.style.overflow = ""; };
  }, [guideOpen]);

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

            {/* Guide modal trigger — after Next Steps, before Lost? */}
            <button
              onClick={() => setGuideOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-all rounded-md hover:bg-violet-50 dark:hover:bg-violet-950/30 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <BotMessageSquare className="h-3.5 w-3.5" />
              Guide
            </button>

            {navExtras.map((link) => (
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
            ))}

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

            {/* Agent + Admin — after GitHub */}
            <span className="w-px h-5 bg-neutral-200 dark:bg-neutral-800 mx-1" />
            <Link
              href="/admin"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                pathname === "/admin"
                  ? "text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
                  : "text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
              }`}
            >
              <Wrench className="h-3.5 w-3.5" />
              Admin
            </Link>
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

              {/* Guide modal trigger — after Next Steps, before Lost? */}
              <button
                onClick={() => { setGuideOpen(true); setMenuOpen(false); }}
                className="flex items-center gap-2 px-4 py-3 text-sm text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full text-left"
              >
                <BotMessageSquare className="h-4 w-4 text-violet-500" />
                Guide
              </button>

              {navExtras.map((link) => (
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
              ))}

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

              <div className="my-3 h-px bg-neutral-200 dark:bg-neutral-800" />

              {/* Admin — after GitHub in mobile */}
              <Link
                href="/admin"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 px-4 py-3 text-sm rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                  pathname === "/admin"
                    ? "text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 font-medium"
                    : "text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                }`}
              >
                <Wrench className="h-4 w-4" />
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Guide Modal — Pagefind-powered search + example prompts ── */}
      <AnimatePresence>
        {guideOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm" onClick={() => setGuideOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              className="relative z-10 w-full max-w-lg rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col max-h-[80vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 pb-2 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <BotMessageSquare className="h-5 w-5 text-violet-500" />
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">Guide</h3>
                </div>
                <button onClick={() => setGuideOpen(false)} className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors" aria-label="Close"><X className="h-5 w-5" /></button>
              </div>

              {/* Body */}
              <div className="px-6 pb-4 overflow-y-auto flex-1 space-y-4">
                {/* Search input — wired to Pagefind */}
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/50 dark:bg-violet-950/20">
                  <BotMessageSquare className="h-4 w-4 text-violet-500 flex-shrink-0" />
                  <input
                    type="text"
                    value={guideQuery}
                    onChange={(e) => setGuideQuery(e.target.value)}
                    placeholder="Ask about retreats, teachings, preparation…"
                    className="flex-1 bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none"
                    autoFocus
                  />
                  <Footprints className="h-4 w-4 text-neutral-300 dark:text-neutral-600" />
                </div>

                {/* Search results from Pagefind */}
                {guideQuery.trim() && guideResults.length > 0 && (
                  <div className="space-y-2">
                    {guideResults.slice(0, 5).map((r, i) => (
                      <Link
                        key={`${r.url}-${i}`}
                        href={r.url}
                        onClick={() => setGuideOpen(false)}
                        className="block p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800 hover:border-violet-300 dark:hover:border-violet-700 transition-colors"
                      >
                        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-violet-600">
                          {r.title}
                        </p>
                        <p
                          className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2 [&_mark]:bg-amber-200/70 dark:[&_mark]:bg-amber-800/40 [&_mark]:text-amber-900 dark:[&_mark]:text-amber-200 [&_mark]:rounded-sm"
                          dangerouslySetInnerHTML={{ __html: r.excerpt }}
                        />
                      </Link>
                    ))}
                  </div>
                )}
                {guideQuery.trim() && guideResults.length === 0 && !guideSearching && (
                  <p className="text-sm text-neutral-400 text-center">No results for &ldquo;{guideQuery}&rdquo;</p>
                )}

                {/* Example prompts — conversational starters, not deep links */}
                {!guideQuery.trim() && (
                  <div className="rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/50 dark:bg-violet-950/20 p-4">
                    <p className="text-xs font-medium text-violet-600 dark:text-violet-400 mb-3 uppercase tracking-wider">
                      Try asking
                    </p>
                    <div className="space-y-2">
                      {[
                        "What is the dieta and why is it important?",
                        "Which retreat program is right for a first-timer?",
                        "How do I prepare for ceremony?",
                        "What is Chaiconi Bari?",
                        "Tell me about the Golden Halo of Light",
                        "What happens during integration after the retreat?",
                      ].map((prompt) => (
                        <button
                          key={prompt}
                          onClick={() => setGuideQuery(prompt)}
                          className="block w-full text-left px-3 py-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-700 dark:text-neutral-300 hover:border-violet-300 dark:hover:border-violet-700 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                        >
                          &ldquo;{prompt}&rdquo;
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer — alternative search modes */}
                <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center">
                    Looking for a{" "}
                    <Link href="/404" onClick={() => setGuideOpen(false)} className="text-amber-600 dark:text-amber-400 hover:underline">
                      non-agentic deep search
                    </Link>
                    {" "}or the{" "}
                    <Link href="/faq" onClick={() => setGuideOpen(false)} className="text-amber-600 dark:text-amber-400 hover:underline">
                      FAQ search
                    </Link>
                    ?
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
