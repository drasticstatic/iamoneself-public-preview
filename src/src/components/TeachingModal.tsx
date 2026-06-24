"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUp, ArrowDown, ExternalLink } from "lucide-react";
import Link from "next/link";

export interface TeachingPill {
  id: string;
  label: string;
  title: string;
  body: string;
  faqAnchor?: string;
  pmLink?: string;
  pmtLink?: string;
}

interface TeachingModalProps {
  pill: TeachingPill | null;
  onClose: () => void;
}

export function TeachingModal({ pill, onClose }: TeachingModalProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [atBottom, setAtBottom] = useState(false);

  // Close on Escape
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (pill) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [pill, handleKey]);

  // Reset scroll state when pill changes
  useEffect(() => {
    setAtBottom(false);
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [pill?.id]);

  const handleScroll = () => {
    const el = bodyRef.current;
    if (!el) return;
    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 24);
  };

  const handleJump = () => {
    const el = bodyRef.current;
    if (!el) return;
    if (atBottom) {
      el.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {pill && (
        <motion.div
          key={pill.id}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
            onClick={onClose}
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
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 pr-8">
                {pill.title}
              </h3>
              <button
                onClick={onClose}
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
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {pill.body}
              </p>
            </div>

            {/* Footer actions — fixed */}
            <div className="flex items-center gap-3 px-6 sm:px-8 pb-6 pt-2 flex-shrink-0">
              {/* Jump to top / bottom — PIR Devine News pattern */}
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

              {/* External P&M / PMT links */}
              {(pill.pmLink || pill.pmtLink) && (
                <div className="flex items-center gap-2">
                  {pill.pmLink && (
                    <a
                      href={pill.pmLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      P&M <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  )}
                  {pill.pmtLink && (
                    <a
                      href={pill.pmtLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      PMT <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  )}
                </div>
              )}

              <Link
                href={pill.faqAnchor ? `/faq#${pill.faqAnchor}` : "/faq"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-amber-600/25 transition-all hover:bg-amber-700 hover:-translate-y-0.5 dark:bg-amber-500 dark:shadow-amber-500/20 dark:hover:bg-amber-400"
              >
                Read more in the FAQ
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TeachingModal;
