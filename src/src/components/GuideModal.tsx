"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BotMessageSquare,
  Footprints,
  X,
  BookOpen,
} from "lucide-react";

/* ── Pagefind types for Guide modal search ── */
type PagefindInstance = {
  search: (query: string) => Promise<{
    results: { url: string; title: string; excerpt: string }[];
  }>;
};

export type GuideResult = { url: string; title: string; excerpt: string };

export default function GuideModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GuideResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [pagefind, setPagefind] = useState<PagefindInstance | null>(null);

  /* Load Pagefind */
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

  /* Debounced search */
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const doSearch = useCallback(
    (q: string) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (!q.trim() || !pagefind) { setResults([]); setSearching(false); return; }
      setSearching(true);
      timerRef.current = setTimeout(async () => {
        try {
          const search = await pagefind.search(q);
          setResults(search.results);
        } catch { setResults([]); }
        setSearching(false);
      }, 250);
    },
    [pagefind]
  );

  useEffect(() => {
    doSearch(query);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [query, pagefind, doSearch]);

  /* Lock body scroll + escape key */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
      document.addEventListener("keydown", handler);
      return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", handler); };
    }
    return () => { document.body.style.overflow = ""; };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm" onClick={onClose} />
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
              <button onClick={onClose} className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors" aria-label="Close"><X className="h-5 w-5" /></button>
            </div>

            {/* Body */}
            <div className="px-6 pb-4 overflow-y-auto flex-1 space-y-4">
              {/* Search input — wired to Pagefind */}
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/50 dark:bg-violet-950/20">
                <BotMessageSquare className="h-4 w-4 text-violet-500 flex-shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about retreats, teachings, preparation..."
                  className="flex-1 bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none"
                  autoFocus
                />
                <Footprints className="h-4 w-4 text-neutral-300 dark:text-neutral-600" />
              </div>

              {/* Search results from Pagefind */}
              {query.trim() && results.length > 0 && (
                <div className="space-y-2">
                  {results.slice(0, 5).map((r, i) => (
                    <Link
                      key={`${r.url}-${i}`}
                      href={r.url}
                      onClick={onClose}
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
              {query.trim() && results.length === 0 && !searching && (
                <p className="text-sm text-neutral-400 text-center">No results for &ldquo;{query}&rdquo;</p>
              )}

              {/* Example prompts — conversational starters, not deep links */}
              {!query.trim() && (
                <div className="rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/50 dark:bg-violet-950/20 p-4">
                  <p className="text-xs font-medium text-violet-600 dark:text-violet-400 mb-3 uppercase tracking-wider text-center">
                    Try asking
                  </p>
                  <div className="space-y-2 flex flex-col items-center">
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
                        onClick={() => setQuery(prompt)}
                        className="w-full max-w-sm text-left px-3 py-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-700 dark:text-neutral-300 hover:border-violet-300 dark:hover:border-violet-700 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
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
                  <Link href="/404" onClick={onClose} className="text-amber-600 dark:text-amber-400 hover:underline">
                    non-agentic deep search
                  </Link>
                  {" "}or the{" "}
                  <Link href="/faq" onClick={onClose} className="text-amber-600 dark:text-amber-400 hover:underline">
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
  );
}
