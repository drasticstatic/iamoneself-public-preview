"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Search, ArrowLeft, Command, X, Loader2 } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Pagefind types — the library is loaded at runtime from the index  */
/* ------------------------------------------------------------------ */
type PagefindResult = {
  url: string;
  title: string;
  meta: Record<string, string>;
  excerpt: string;
  sub_results?: { url: string; title: string; excerpt: string }[];
};

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
    search: "Search",
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
/*  Main Search Page                                                   */
/* ------------------------------------------------------------------ */
export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PagefindResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagefind, setPagefind] = useState<PagefindInstance | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Load Pagefind at mount */
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        if (typeof window !== "undefined" && (window as any).pagefind) {
          const pf = await (window as any).pagefind.init();
          if (!cancelled) setPagefind(pf);
        } else {
          // Dynamic import — Pagefind places /pagefind/pagefind.js in out/
          const pfMod = await import(
            /* @vite-ignore */
            /* webpackIgnore: true */
            "/pagefind/pagefind.js" as any
          );
          const pf = pfMod?.default || pfMod;
          if (!cancelled) setPagefind(pf);
        }
      } catch {
        if (!cancelled)
          setError("Search index not available. Run `npm run build` first.");
      }
    })();
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
          const mapped: PagefindResult[] = await Promise.all(
            search.results.map(async (r: PagefindResult) => ({
              url: r.url,
              title: r.title,
              meta: r.meta,
              excerpt: r.excerpt,
              sub_results: r.sub_results,
            }))
          );
          setResults(mapped);
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

  const clear = () => {
    setQuery("");
    setResults([]);
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen pt-[92px] pb-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 pt-8 pb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
          Search the Teachings
        </h1>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          Search across all pages — FAQs, retreat teachings, and more.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleChange}
            placeholder='Try "act of love", "dieta", "forgiveness"...'
            className="w-full pl-12 pr-20 py-4 text-lg rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-shadow shadow-sm"
            autoFocus
          />
          {query && (
            <button
              onClick={clear}
              className="absolute right-14 top-1/2 -translate-y-1/2 p-1.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-1.5 py-0.5">
            <Command className="h-2.5 w-2.5" />K
          </kbd>
        </div>

        {/* Error state */}
        {error && (
          <p className="mt-4 text-sm text-rose-500 dark:text-rose-400">
            {error}
          </p>
        )}

        {/* Loading */}
        {loading && (
          <div className="mt-8 flex items-center gap-2 text-sm text-neutral-500">
            <Loader2 className="h-4 w-4 animate-spin" />
            Searching…
          </div>
        )}

        {/* Results */}
        {!loading && results.length > 0 && (
          <p className="mt-4 text-sm text-neutral-500">
            {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;
            {query}&rdquo;
          </p>
        )}

        <div className="mt-4 space-y-4">
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
                <span className="text-neutral-300 dark:text-neutral-700">
                  ·
                </span>
                <span className="text-xs text-neutral-400">
                  {r.meta?.category || ""}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {r.title}
              </h2>
              <Snippet html={r.excerpt} />

              {/* Sub-results (e.g. multiple FAQ matches on same page) */}
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

          {!loading && query && results.length === 0 && !error && (
            <div className="mt-8 text-center text-neutral-500 dark:text-neutral-400">
              <p>
                No results for &ldquo;{query}&rdquo;
              </p>
              <p className="mt-1 text-sm">
                Try different keywords or check the{" "}
                <Link
                  href="/faq"
                  className="text-amber-600 dark:text-amber-400 hover:underline"
                >
                  FAQ page
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
