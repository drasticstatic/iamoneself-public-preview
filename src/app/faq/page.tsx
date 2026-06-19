"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { faqData } from "@/data/faq";
import { Search, Mountain, ExternalLink as ExternalLinkIcon } from "lucide-react";

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [highlightId, setHighlightId] = useState<string | null>(null);

  const lc = search.toLowerCase();

  // Slugify category name for anchor linking from teaching modals
  const slug = (s: string) =>
    s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  // Auto-open FAQ item when arriving via anchor hash (e.g. from teaching modals)
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    // Find the matching FAQ item across all categories
    for (const cat of faqData) {
      for (const item of cat.items) {
        if (item.id === hash) {
          const key = `${cat.category}-${item.question}`;
          setOpenIndex(key);
          setHighlightId(hash);
          // Scroll to it after render
          requestAnimationFrame(() => {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          });
          // Clear highlight after 3s
          setTimeout(() => setHighlightId(null), 3000);
          return;
        }
      }
    }
  }, []);

  const filtered = search
    ? faqData
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (item) =>
              item.question.toLowerCase().includes(lc) ||
              item.answer.toLowerCase().includes(lc)
          ),
        }))
        .filter((cat) => cat.items.length > 0)
    : faqData;

  return (
    <>
      {/* Hero */}
      <section className="relative px-6 py-24 mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          Everything you need to know before taking the next step.
        </p>
        <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

        {/* Search */}
        <div className="mt-8 relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 pl-10 pr-4 py-2.5 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-400 transition"
          />
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="px-6 pb-24 mx-auto max-w-4xl space-y-16">
        {filtered.map((category) => (
          <div key={category.category} id={slug(category.category)}>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
              {category.category}
            </h2>
            {category.description && (
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                {category.description}
              </p>
            )}
            <div className="space-y-4">
              {category.items.map((item) => {
                const key = `${category.category}-${item.question}`;
                const isOpen = openIndex === key;
                return (
                  <div
                    key={item.question}
                    id={item.id || undefined}
                    className={`rounded-xl border overflow-hidden transition-colors scroll-mt-20 ${
                      highlightId === item.id
                        ? "border-amber-400 dark:border-amber-600 bg-amber-50/50 dark:bg-amber-950/20 shadow-md"
                        : "border-neutral-100 dark:border-neutral-800 hover:border-amber-200 dark:hover:border-amber-900"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : key)}
                      className="w-full text-left px-6 py-4 flex items-start gap-3"
                    >
                      <span
                        className={`mt-0.5 text-amber-500 transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      >
                        ▸
                      </span>
                      <span className="text-base font-medium text-neutral-900 dark:text-white">
                        {item.question}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pl-14">
                        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {search && filtered.length === 0 && (
          <div className="text-center py-12 text-neutral-500 dark:text-neutral-400">
            <p>No questions match &ldquo;{search}&rdquo;</p>
            <p className="mt-2 text-sm">Try different keywords or browse all categories.</p>
          </div>
        )}
      </section>

      {/* Booking CTA */}
      <section className="px-6 py-16 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            Still have questions?
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Book a free discovery call or apply for our next retreat to learn more.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/retreats"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-amber-600/25 transition-all hover:bg-amber-700 hover:-translate-y-0.5"
            >
              <Mountain className="h-4 w-4" />
              Apply for Retreat
            </Link>
            <a
              href="https://www.iamoneself.com/spirituallifecoaching"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 transition-all shadow-sm hover:shadow-md hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:-translate-y-0.5"
            >
              Spiritual Life Coaching
              <ExternalLinkIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
