"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Info,
  ArrowUp,
  ArrowDown,
  ExternalLink,
  Leaf,
  Globe,
} from "lucide-react";

/**
 * DisclaimerBadge — persistent banner fixed below navbar.
 * Always visible on refresh. Clicking opens disclosure modal.
 * The banner cannot be dismissed — it's persistent per the
 * requirement for global transparency + GitHub ToS compliance.
 */

export default function DisclaimerBadge() {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [atBottom, setAtBottom] = useState(false);

  // Escape to close modal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Reset scroll state when modal opens
  useEffect(() => {
    setAtBottom(false);
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [open]);

  const handleScroll = () => {
    const el = bodyRef.current;
    if (!el) return;
    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 24);
  };

  const handleJump = () => {
    const el = bodyRef.current;
    if (!el) return;
    el.scrollTo({
      top: atBottom ? 0 : el.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ── Persistent banner — fixed below navbar ── */}
      <div className="fixed top-16 inset-x-0 z-40 bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-900">
        <button
          onClick={() => setOpen(true)}
          className="w-full px-4 py-1.5 flex items-center justify-center gap-2 text-xs font-medium text-amber-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-950/50 transition-colors"
        >
          <Info className="h-3 w-3 flex-shrink-0" />
          <span>
            Concept prototype & educational resource — not the official
            iamoneself.com · Not licensed health professionals · Compliant with GitHub Pages ToS
          </span>
          <span className="text-[10px] text-amber-500 dark:text-amber-500 underline underline-offset-2 ml-1">
            full disclosure
          </span>
        </button>
      </div>

      {/* ── Disclosure Modal ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="disclaimer-modal"
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Modal card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" as const }}
              className="relative z-10 w-full max-w-lg rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col max-h-[80vh]"
            >
              {/* Header — fixed */}
              <div className="flex flex-col items-center p-6 sm:p-8 pb-3 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-amber-500" />
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 text-center">
                    About This Site
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable body */}
              <div
                ref={bodyRef}
                onScroll={handleScroll}
                className="px-6 sm:px-8 pb-4 overflow-y-auto scroll-smooth flex-1"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(217,119,6,0.3) transparent",
                }}
              >
                <div className="space-y-5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {/* Status Disclosure */}
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400 mb-2">
                      Status Disclosure
                    </p>
                    <p>
                      This website, its documentation, and any connected
                      applications are{" "}
                      <strong className="text-neutral-900 dark:text-neutral-100">
                        early-stage, non-production demonstration concepts
                      </strong>{" "}
                      currently under active development. They are provided
                      solely for exploratory, educational, and conceptual
                      purposes. This prototype is{" "}
                      <strong className="text-neutral-900 dark:text-neutral-100">
                        not
                      </strong>{" "}
                      the official website of The Holy Earth Foundation or I Am
                      One Self.
                    </p>
                  </div>

                  {/* Official site + P&M buttons — centered */}
                  <div className="flex flex-wrap justify-center gap-2">
                    <a
                      href="https://www.iamoneself.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-sm font-medium transition-all hover:bg-amber-100 dark:hover:bg-amber-950/50 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      iamoneself.com
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href="https://www.iamoneself.com/plantsandmiracles"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-sm font-medium transition-all hover:bg-emerald-100 dark:hover:bg-emerald-950/50 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                    >
                      <Leaf className="h-3.5 w-3.5" />
                      Plants & Miracles
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  {/* Health Disclaimer */}
                  <div className="rounded-lg bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800 p-3">
                    <p className="text-xs uppercase tracking-wider font-semibold text-rose-600 dark:text-rose-400 mb-1.5">
                      Health Disclaimer
                    </p>
                    <p className="text-sm text-rose-700 dark:text-rose-400">
                      We are <strong>not licensed health professionals</strong>.
                      The information presented here is for educational and
                      spiritual purposes only. It is not medical advice, diagnosis,
                      or treatment. Always consult qualified healthcare
                      providers for medical decisions.
                    </p>
                  </div>

                  {/* Exploratory Intent */}
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400 mb-2">
                      Exploratory Intent
                    </p>
                    <p>
                      These demos exist as a brainstorming and prototyping
                      environment — exploring how an AI-powered FAQ and
                      registration helper could serve a spiritual retreat
                      foundation and its community.
                    </p>
                    <ul className="mt-2 space-y-1.5 ml-4 list-disc text-neutral-500 dark:text-neutral-500">
                      <li>
                        How an AI agent could guide visitors through FAQ
                        questions and retreat information
                      </li>
                      <li>
                        A concept for streamlined registration through
                        platforms like Retreat Guru and Aya Advisors
                      </li>
                      <li>
                        How collected data could flow to a nonprofit Google
                        Workspace for the foundation team
                      </li>
                      <li>
                        Open-source patterns that other retreat centers and
                        nonprofits could adapt
                      </li>
                    </ul>
                  </div>

                  {/* Development & Stewardship */}
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400 mb-2">
                      Development & Stewardship
                    </p>
                    <p>
                      This portal is currently stewarded independently by a
                      single developer, minister, and ACIM teacher, and
                      reflects a personal synthesis of technical research,
                      spiritual study, and community service. All content and
                      implementations should be understood in that context.
                    </p>
                    <p className="mt-2">
                      The webmaster is not anonymous in the sense that people
                      cannot find or make contact — but the true Author of
                      this work is the Higher Power, the Holy Spirit, the Voice
                      for God. As A Course in Miracles teaches:{" "}
                      <em className="text-neutral-500 dark:text-neutral-500">
                        &ldquo;I am not a body. I am free. For I am still as
                        God created me.&rdquo;
                      </em>
                    </p>
                  </div>

                  {/* Transparency */}
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400 mb-2">
                      Transparency
                    </p>
                    <ul className="space-y-1.5 ml-4 list-disc text-neutral-500 dark:text-neutral-500">
                      <li>
                        All source code is publicly available on{" "}
                        <a
                          href="https://github.com/drasticstatic/iamoneself-public-preview"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-600 dark:text-amber-400 underline underline-offset-2 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                        >
                          GitHub
                        </a>
                      </li>
                      <li>
                        No personal data is collected by this prototype —
                        registration flows redirect to verified third-party
                        platforms
                      </li>
                      <li>
                        This site complies with GitHub Pages terms of service
                        as a public, non-commercial, educational demonstration
                      </li>
                      <li>
                        Content is intended for informational and conceptual
                        purposes only, consistent with GitHub's acceptable
                        use and hosting policies
                      </li>
                      <li>
                        Hosted on GitHub Pages — content adheres to their
                        acceptable use policies
                      </li>
                    </ul>
                  </div>

                  <p className="text-xs text-neutral-400 dark:text-neutral-600 italic text-center pt-2">
                    &ldquo;Into the hands of the gift the gift is given.&rdquo;
                  </p>
                </div>
              </div>

              {/* Footer actions — fixed */}
              <div className="flex items-center gap-3 px-6 sm:px-8 pb-6 pt-2 flex-shrink-0">
                <button
                  onClick={handleJump}
                  title={atBottom ? "Back to top" : "Jump to bottom"}
                  className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                >
                  {atBottom ? (
                    <>
                      <ArrowUp className="h-3 w-3" /> Top
                    </>
                  ) : (
                    <>
                      <ArrowDown className="h-3 w-3" /> Bottom
                    </>
                  )}
                </button>

                <div className="flex-1" />

                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-amber-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-amber-600/25 transition-all hover:bg-amber-700 hover:-translate-y-0.5 dark:bg-amber-500 dark:shadow-amber-500/20 dark:hover:bg-amber-400"
                >
                  I understand
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
