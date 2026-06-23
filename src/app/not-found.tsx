"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Home,
  BookOpen,
  Mountain,
  ExternalLink,
  Feather,
  Globe,
  Heart,
  Mail,
  Leaf,
  Mic,
  Flower2,
  Search,
  X,
  Loader2,
  Terminal,
  Info,
  EyeOff,
  Play,
  Landmark,
  ScrollText,
  Phone,
  HelpCircle,
  Sun,
  Library,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Pagefind types — loaded at runtime via script tag                 */
/* ------------------------------------------------------------------ */
type PagefindInstance = {
  search: (query: string) => Promise<{
    results: {
      url: string;
      title: string;
      meta: Record<string, string>;
      excerpt: string;
      sub_results: { url: string; title: string; excerpt: string }[];
    }[];
  }>;
};

type PagefindResult = {
  url: string;
  title: string;
  meta: Record<string, string>;
  excerpt: string;
  sub_results?: { url: string; title: string; excerpt: string }[];
};

/* ------------------------------------------------------------------ */
/*  Page label based on URL path                                       */
/* ------------------------------------------------------------------ */
function pageLabel(url: string): string {
  const path = url.replace(/\/index\.html$/, "").replace(/\/$/, "");
  if (path === "" || path === "/") return "Home";
  const segment = path.split("/").pop() || "";
  const labels: Record<string, string> = {
    faq: "FAQ",
    retreats: "Retreats",
  };
  return labels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
}

/* ------------------------------------------------------------------ */
/*  Snippet with <mark> highlighting rendered safely                   */
/* ------------------------------------------------------------------ */
function Snippet({ html }: { html: string }) {
  return (
    <p
      className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3 [&_mark]:bg-amber-200/70 dark:[&_mark]:bg-amber-800/40 [&_mark]:text-amber-900 dark:[&_mark]:text-amber-200 [&_mark]:rounded-sm [&_mark]:px-0.5"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

/* ------------------------------------------------------------------ */
/*  Route data                                                         */
/* ------------------------------------------------------------------ */

// gh-pages internal routes
const ghpagesRoutes = [
  { href: "/", label: "Portal Home", icon: Home },
  { href: "/faq", label: "FAQ", icon: BookOpen },
  { href: "/retreats", label: "Retreats", icon: Mountain },
];

// Wix site pages — `live: true` = linked in navbar; `live: false` = published but not in nav (in development)
const wixRoutes = [
  // ── Live / linked in navbar ──
  { href: "https://www.iamoneself.com", label: "I Am One Self — Home", icon: Globe, live: true },
  { href: "https://www.iamoneself.com/plants-and-miracles", label: "Plants & Miracles", icon: Leaf, live: true },
  { href: "https://www.iamoneself.com/letters-to-self", label: "Letters to Self", icon: Feather, live: true },
  { href: "https://www.iamoneself.com/spiritual-life-coaching", label: "Spiritual Life Coaching", icon: Heart, live: true },
  { href: "https://www.iamoneself.com/psychedelic-mystic-teachings", label: "Psychedelic Mystic Teachings", icon: Flower2, live: true },
  { href: "https://www.iamoneself.com/voice-of-the-one-podcast", label: "Voice of the One Podcast", icon: Mic, live: true },
  { href: "https://www.iamoneself.com/about-the-speaker", label: "Contact", icon: Phone, live: true },
  // ── Not live / in development ──
  { href: "https://www.iamoneself.com/contact", label: "Contact (Legacy)", icon: Mail, live: false },
  { href: "https://www.iamoneself.com/about-the-foundation", label: "About the Foundation", icon: Landmark, live: false },
  { href: "https://www.iamoneself.com/welcome-letter", label: "Welcome Letter", icon: ScrollText, live: false },
  { href: "https://www.iamoneself.com/talks-on-youtube", label: "Talks on YouTube", icon: Play, live: false },
  { href: "https://www.iamoneself.com/faq", label: "FAQ (Wix)", icon: HelpCircle, live: false },
  { href: "https://www.iamoneself.com/miracle-retreats", label: "Miracle Retreats", icon: Sun, live: false },
];

// ACIM source references
const acimLinks = [
  {
    href: "https://acimce.app/book/W-95#W-95.16",
    label: "A Course in Miracles — Workbook Lesson 95 (CE Edition)",
  },
  {
    href: "https://acim.org/acim/lesson-95/i-am-one-self-united-with-my-creator/en/s/499",
    label: "A Course in Miracles — Workbook Lesson 95 (FIP Edition)",
  },
];

/* ------------------------------------------------------------------ */
/*  Main 404 Page with integrated search                               */
/* ------------------------------------------------------------------ */
export default function NotFound() {
  /* ── Pagefind search state ── */
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PagefindResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagefind, setPagefind] = useState<PagefindInstance | null>(null);
  const [pagefindReady, setPagefindReady] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [showHelp, setShowHelp] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Load Pagefind */
  useEffect(() => {
    let cancelled = false;
    const isDev =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname.includes("127.0.0.1"));
    const basePath = isDev ? "" : "/iamoneself-public-preview";
    const scriptSrc = `${basePath}/pagefind/pagefind.js`;

    if ((window as any).pagefind) {
      (window as any).pagefind.init().then((pf: PagefindInstance) => {
        if (!cancelled) {
          setPagefind(pf);
          setPagefindReady(true);
        }
      });
      return;
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.onload = () => {
      if (cancelled) return;
      const pf = (window as any).pagefind;
      if (pf) {
        pf.init().then((initialized: PagefindInstance) => {
          if (!cancelled) {
            setPagefind(initialized);
            setPagefindReady(true);
          }
        });
      } else {
        setSearchError("Search index failed to load.");
      }
    };
    script.onerror = () => {
      if (!cancelled) {
        const isDevEnv =
          typeof window !== "undefined" &&
          (window.location.hostname === "localhost" ||
            window.location.hostname.includes("127.0.0.1"));
        setSearchError(
          isDevEnv
            ? "Search requires a production build. Run: npm run build && npx serve out"
            : "Search index not available. It builds on deploy — try again shortly."
        );
      }
    };
    document.head.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, []);

  /* Debounced search */
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const doSearch = useCallback(
    (q: string) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (!q.trim() || !pagefind) {
        setResults([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      timerRef.current = setTimeout(async () => {
        try {
          const search = await pagefind.search(q);
          setResults(search.results);
        } catch {
          setResults([]);
        }
        setLoading(false);
      }, 250);
    },
    [pagefind]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setQuery(v);
    doSearch(v);
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    inputRef.current?.focus();
  };

  const hasActiveSearch = query.trim().length > 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-amber-50 via-white to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 pt-[92px] pb-24">
      {/* Soft radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.08)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.04)_0%,_transparent_70%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="relative w-full max-w-3xl"
      >
        {/* 404 number with golden glow */}
        <div className="relative">
          <span className="text-[8rem] sm:text-[12rem] font-bold leading-none text-amber-100 dark:text-neutral-800 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="h-16 w-16 text-amber-500 dark:text-amber-400 opacity-60" />
          </div>
        </div>

        <h1 className="mt-6 text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
          Even the lost have found their way home
        </h1>

        <p className="mt-4 max-w-md mx-auto text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
          The page you sought has dissolved into the Light. Search the
          teachings, or explore below.
        </p>

        {/* ── Integrated Search ── */}
        <div className="mt-8 max-w-lg mx-auto" data-pagefind-ignore>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleChange}
              placeholder='Try "act of love", "dieta", "forgiveness"...'
              className="w-full pl-12 pr-20 py-4 text-lg rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-shadow shadow-sm"
              autoFocus={false}
            />
            {query && (
              <button
                onClick={clearSearch}
                className="absolute right-14 top-1/2 -translate-y-1/2 p-1.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-amber-500 transition-colors"
              aria-label="Search help"
            >
              <Info className="h-4 w-4" />
            </button>
          </div>

          {/* How-it-works toggle */}
          {showHelp && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50 text-sm text-neutral-600 dark:text-neutral-400 space-y-3 text-left"
            >
              <p className="font-medium text-neutral-700 dark:text-neutral-300">
                How search works — a hidden gem for developers
              </p>
              <p>
                This site uses{" "}
                <a
                  href="https://pagefind.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 dark:text-amber-400 hover:underline"
                >
                  Pagefind
                </a>
                , a <strong>completely free, open-source</strong> static search
                engine — no API keys, no server, no tracking. The index is
                built from all page content at deploy time (run after
                <code className="mx-0.5 text-xs">next build</code>), creating
                a tiny WASM-powered index that lives in your browser.
              </p>
              <p>
                <strong>Why it matters:</strong> Unlike Algolia or Google
                Custom Search, Pagefind adds <em>zero</em> external
                dependencies. Your queries never leave your device. It works
                offline. The entire index is typically under 100KB
                — smaller than a single hero image.
              </p>
              <p>
                <strong>How modal content gets searched:</strong> Some of our richest
                teaching content lives inside modals (Framer Motion AnimatePresence
                overlays) — healer bios, the 18 Winged Sun teachings, the Plants &
                Miracles curriculum, FAQ deep-links, and retreat package details.
                Because these modals only render when opened, they don't exist in the
                DOM at build time and Pagefind can't see them natively. Our solution:
                each page with modals also includes a{" "}
                <code className="text-xs">hidden</code> div tagged{" "}
                <code className="text-xs">data-pagefind-body</code> containing
                the same content as semantic HTML (heading + paragraph structure).
                The content comes from shared data constants — so when you search for
                "Chaiconi Bari", "Golden Halo", "dieta", or "forgiveness", Pagefind
                finds the match in the hidden div, and the result link takes you to
                the page where the modal lives. Update a modal's content once and both
                the visual rendering and the search index stay in sync automatically.
              </p>
              <p>
                <strong>Build flow:</strong>{" "}
                <code className="text-xs">npm run build</code> runs{" "}
                <code className="text-xs">next build</code> (generates static HTML){" "}
                then <code className="text-xs">npx pagefind --site out</code> (indexes
                all data-pagefind-body content). Search works immediately on deploy —
                no extra steps needed.
              </p>
              <p>
                For developers building static sites (Next.js SSG, Astro,
                Hugo, etc.), Pagefind is the developer's hidden gem:
                zero-cost full-text search with fuzzy matching, snippet
                highlighting, and sub-result grouping — all client-side.
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-500 font-mono">
                <Terminal className="h-3 w-3" />
                <span>
                  Build + index:{" "}
                  <code>npx next build && npx pagefind --site out</code>
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href="https://pagefind.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-amber-600 dark:text-amber-400 hover:underline"
                >
                  Pagefind Docs
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
                <a
                  href="https://github.com/CloudCannon/pagefind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:underline"
                >
                  GitHub Source
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </div>
              {/* CTA to explore the content */}
              <div className="mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-700">
                <p className="text-neutral-500 dark:text-neutral-500 mb-2">
                  Try searching for content from our modals:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Chaiconi Bari", "Golden Halo", "dieta", "forgiveness", "Barn Owl", "Ayahuasca"].map((term) => (
                    <button
                      key={term}
                      onClick={() => { setQuery(term); doSearch(term); inputRef.current?.focus(); }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs font-medium text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-950/50 transition-colors"
                    >
                      <Search className="h-2.5 w-2.5" />
                      {term}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-neutral-500 dark:text-neutral-500 text-xs">
                  These terms live inside modals on the{" "}
                  <Link href="/retreats" className="text-amber-600 dark:text-amber-400 hover:underline font-medium">
                    Retreats page
                  </Link>{" "}
                  and the{" "}
                  <Link href="/faq" className="text-amber-600 dark:text-amber-400 hover:underline font-medium">
                    FAQ
                  </Link>
                  {" "}— search reaches them through the hidden index pattern described above.
                </p>
              </div>
            </motion.div>
          )}

          {/* Search status */}
          {!pagefindReady && !searchError && !hasActiveSearch && (
            <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
              Search index ready — type to begin
            </p>
          )}
          {!pagefindReady && !searchError && hasActiveSearch && (
            <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
              Loading search index…
            </p>
          )}
          {searchError && (
            <p className="mt-2 text-sm text-rose-500 dark:text-rose-400">
              {searchError}
            </p>
          )}

          {/* Loading */}
          {loading && (
            <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              Searching…
            </div>
          )}

          {/* Results count */}
          {!loading && results.length > 0 && (
            <p className="mt-4 text-sm text-neutral-500">
              {results.length} result{results.length !== 1 ? "s" : ""} for
              &ldquo;{query}&rdquo;
            </p>
          )}
        </div>

        {/* ── Search Results ── */}
        {hasActiveSearch && (
          <div className="max-w-lg mx-auto mt-4 space-y-4 text-left">
            {results.map((r, i) => (
              <Link
                key={`${r.url}-${i}`}
                href={r.url}
                className="block p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                    {pageLabel(r.url)}
                  </span>
                  {r.meta?.category && (
                    <>
                      <span className="text-neutral-300 dark:text-neutral-700">
                        ·
                      </span>
                      <span className="text-xs text-neutral-400">
                        {r.meta.category}
                      </span>
                    </>
                  )}
                </div>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {r.title}
                </h2>
                <Snippet html={r.excerpt} />

                {r.sub_results && r.sub_results.length > 1 && (
                  <div className="mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800/50 space-y-2">
                    {r.sub_results.slice(1, 4).map((sub, si) => (
                      <Link
                        key={si}
                        href={sub.url}
                        className="block pl-3 border-l-2 border-amber-300 dark:border-amber-700 hover:border-amber-500 transition-colors"
                      >
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {sub.title}
                        </span>
                        <Snippet html={sub.excerpt} />
                      </Link>
                    ))}
                  </div>
                )}
              </Link>
            ))}

            {!loading && query && results.length === 0 && !searchError && (
              <div className="mt-8 text-center text-neutral-500 dark:text-neutral-400">
                <p>No results for &ldquo;{query}&rdquo;</p>
                <p className="mt-1 text-sm">
                  Try different keywords or explore the sitemap below.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── Sitemap — only show when not actively searching ── */}
        {!hasActiveSearch && (
          <div className="mt-14 grid sm:grid-cols-2 gap-10 text-left max-w-2xl mx-auto">
            {/* Retreat Portal (gh-pages) routes */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-4">
                Retreat Portal
              </h2>
              <ul className="space-y-2">
                {ghpagesRoutes.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all shadow-sm hover:shadow-md rounded-md px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:-translate-y-0.5"
                    >
                      <r.icon className="h-4 w-4 text-amber-500" />
                      {r.label}
                    </Link>
                  </li>
                ))}

                {/* Divider + ACIM Source References */}
                <div className="my-4 h-px bg-neutral-200 dark:bg-neutral-800" />
                <p className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400">
                  ACIM Source References
                </p>
                {acimLinks.map((r) => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all shadow-sm hover:shadow-md rounded-md px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:-translate-y-0.5"
                    >
                      <Library className="h-4 w-4 text-amber-500" />
                      <span className="text-sm">{r.label}</span>
                      <ExternalLink className="h-3 w-3 text-neutral-400 ml-auto" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Wix site map — live pages, then in-development with EyeOff */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={1}
            >
              <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-4">
                iamoneself.com
              </h2>
              <ul className="space-y-2">
                {wixRoutes.map((r) => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={r.live ? undefined : "Published — not linked in navigation (in development)"}
                      className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all shadow-sm hover:shadow-md rounded-md px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:-translate-y-0.5"
                    >
                      <r.icon className={`h-4 w-4 ${r.live ? "text-amber-500" : "text-neutral-400 dark:text-neutral-500"}`} />
                      <span className={r.live ? "" : "text-neutral-500 dark:text-neutral-500"}>{r.label}</span>
                      {!r.live && (
                        <EyeOff className="h-3 w-3 text-neutral-400 dark:text-neutral-600 ml-1 flex-shrink-0" />
                      )}
                      <ExternalLink className={`h-3 w-3 ml-auto ${r.live ? "text-neutral-400" : "text-neutral-300 dark:text-neutral-700"}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}

        <p className="mt-16 text-sm italic text-neutral-400 dark:text-neutral-600">
          &ldquo;I am one Self, united with my Creator, at one with every
          aspect of creation.&rdquo;
        </p>
      </motion.div>
    </div>
  );
}
