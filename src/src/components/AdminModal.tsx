"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Shield,
  UserRoundKey,
  ExternalLink,
  X,
} from "lucide-react";

export default function AdminModal({ open, onClose }: { open: boolean; onClose: () => void }) {
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
            className="relative z-10 w-full max-w-md rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col max-h-[80vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-2 flex-shrink-0">
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-neutral-500" />
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">Admin Portal</h3>
              </div>
              <button onClick={onClose} className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors" aria-label="Close"><X className="h-5 w-5" /></button>
            </div>

            {/* Body */}
            <div className="px-6 pb-6 overflow-y-auto flex-1 space-y-6">
              {/* Auth-gated placeholder */}
              <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">Access Restricted</h4>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  This section requires authentication. Administrative tools are available to authorized team members only.
                  Contact the technical lead for access.
                </p>
              </div>

              {/* ACIM Lesson 155 */}
              <a
                href="https://acim.org/acim/lesson-155/i-will-step-back-and-let-him-lead-the-way/en/s/561"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-neutral-400 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
              >
                <UserRoundKey className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>&ldquo;I will step back and let Him lead the way&rdquo; — ACIM, Lesson 155</span>
                <ExternalLink className="h-3 w-3 flex-shrink-0 mt-0.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
