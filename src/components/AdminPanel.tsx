"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Lock, Sparkles } from "lucide-react";

interface AdminPanelProps {
  open: boolean;
  onClose: () => void;
}

const DEMO_PASSCODE = "demo";

export default function AdminPanel({ open, onClose }: AdminPanelProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  /* Focus input when modal opens */
  useEffect(() => {
    if (open && !authenticated) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, authenticated]);

  /* Lock body scroll when open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.toLowerCase().trim() === DEMO_PASSCODE) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Invalid passcode. Try 'demo' for the prototype.");
    }
  };

  const handleClose = () => {
    setAuthenticated(false);
    setCode("");
    setError("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="admin-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-neutral-900/60 backdrop-blur-sm"
          onClick={handleClose}
        />
      )}
      {open && (
        <motion.div
          key="admin-modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
        >
          <div
            className="pointer-events-auto w-full max-w-lg bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 dark:border-neutral-800 bg-amber-50/50 dark:bg-amber-950/20">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  Admin Portal
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-md text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Close admin panel"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {!authenticated ? (
                /* ── Passcode Gate ── */
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-950/40 flex items-center justify-center mb-4">
                    <Lock className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    Enter Passcode
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                    This portal provides AI-assisted content management for the
                    dev portal. Enter the passcode to continue.
                  </p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-4">
                    Shortcut: <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded">⌘⇧U</kbd> / <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded">Ctrl⇧U</kbd>
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      ref={inputRef}
                      type="password"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="Passcode"
                      className="w-full px-4 py-3 text-center text-lg tracking-widest rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition"
                    />
                    {error && (
                      <p className="text-sm text-rose-500">{error}</p>
                    )}
                    <button
                      type="submit"
                      className="w-full px-4 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium transition-colors shadow-sm hover:shadow-md"
                    >
                      Unlock
                    </button>
                  </form>
                </div>
              ) : (
                /* ── Authenticated Dashboard ── */
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                      Prototype Admin — Read-Only Demo
                    </span>
                  </div>

                  {/* Admin capabilities overview */}
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50">
                      <h4 className="font-semibold text-neutral-900 dark:text-white text-sm mb-1">
                        📝 Content Management
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Add, edit, or reorder FAQ items, teaching sections, and
                        retreat content. Changes preview here before syncing.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50">
                      <h4 className="font-semibold text-neutral-900 dark:text-white text-sm mb-1">
                        🔍 Re-Firecrawl
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Trigger a fresh crawl of iamoneself.com when Kenney
                        updates the Wix site. Detect changed pages and merge.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50">
                      <h4 className="font-semibold text-neutral-900 dark:text-white text-sm mb-1">
                        🔄 Wix Sync
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        AI-assisted Wix backend integration. Push content
                        updates from the dev portal context engine to the live
                        Wix site (future capability).
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
                      <h4 className="font-semibold text-amber-700 dark:text-amber-400 text-sm mb-1">
                        🚧 Coming Soon
                      </h4>
                      <p className="text-xs text-amber-600/70 dark:text-amber-400/60">
                        Natural language commands, AI content review,
                        Shadowban compliance checker, and full Wix API
                        integration.
                      </p>
                    </div>
                  </div>

                  {/* Prototype notice */}
                  <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center">
                      This is a concept prototype. The admin portal demonstrates
                      the intended workflow — full functionality requires Wix
                      API integration.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
