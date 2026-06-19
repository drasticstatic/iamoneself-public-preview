"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info, ArrowUp, ArrowDown, ExternalLink } from "lucide-react";

/**
 * DisclaimerBadge — persistent banner fixed below navbar.
 * Always visible on refresh. Clicking opens disclosure modal.
 * The banner cannot be dismissed — it's persistent per the
 * requirement for global transparency.
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

  // Badge is always visible — "persistent upon refresh"
  // Modal "dismiss" just closes the modal; the banner stays globally

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
            This site is an open-source concept prototype — not the official
            iamoneself.com
          </span>
          <span className="text-[10px] text-amber-500 dark:text-amber-500 underline underline-offset-2 ml-1">
            learn more
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
              className="relative z-10 w-full max-w-md rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col max-h-[80vh]"
            >
              {/* Header — fixed */}
              <div className="flex items-start justify-between p-6 sm:p-8 pb-2 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-amber-500" />
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                    About This Site
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
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
                <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <p>
                    This website is an{" "}
                    <strong className="text-neutral-900 dark:text-neutral-100">
                      open-source concept prototype
                    </strong>{" "}
                    — a community demonstration of how an AI-powered FAQ and
                    registration helper could serve a spiritual retreat
                    foundation.
                  </p>

                  <p>
                    It is <strong className="text-neutral-900 dark:text-neutral-100">not</strong> the official website of The Holy Earth
                    Foundation or I Am One Self. The official site lives at:
                  </p>

                  <a
                    href="https://www.iamoneself.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-sm font-medium transition-all hover:bg-amber-100 dark:hover:bg-amber-950/50 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    iamoneself.com
                  </a>

                  <div className="h-px bg-neutral-100 dark:bg-neutral-800 my-3" />

                  <p className="text-xs uppercase tracking-wider font-medium text-neutral-400 dark:text-neutral-600">
                    What this prototype explores
                  </p>

                  <ul className="space-y-2 ml-4 list-disc">
                    <li>
                      How an AI agent could guide visitors through FAQ
                      questions and retreat information
                    </li>
                    <li>
                      A concept for secure, stream-lined registration through
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

                  <div className="h-px bg-neutral-100 dark:bg-neutral-800 my-3" />

                  <p className="text-xs uppercase tracking-wider font-medium text-neutral-400 dark:text-neutral-600">
                    Transparency
                  </p>

                  <ul className="space-y-2 ml-4 list-disc">
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
                      This site complies with GitHub Pages terms of service as
                      a public, non-commercial demonstration
                    </li>
                    <li>
                      The webmaster remains anonymous per the foundation's
                      public communications
                    </li>
                  </ul>

                  <div className="h-px bg-neutral-100 dark:bg-neutral-800 my-3" />

                  <p className="text-xs text-neutral-400 dark:text-neutral-600 italic">
                    &ldquo;Into the hands of the gift the gift is given.&rdquo;
                  </p>
                </div>
              </div>

              {/* Footer actions — fixed */}
              <div className="flex items-center gap-3 px-6 sm:px-8 pb-6 pt-2 flex-shrink-0">
                {/* Jump to top / bottom */}
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
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-amber-600 px-5 py-2 text-xs font-medium text-white shadow-lg shadow-amber-600/25 transition-all hover:bg-amber-700 hover:-translate-y-0.5 dark:bg-amber-500 dark:shadow-amber-500/20 dark:hover:bg-amber-400"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
