"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-amber-50 via-white to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900">
      {/* Soft radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.08)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.04)_0%,_transparent_70%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="relative"
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
          The page you sought has dissolved into the Light. Perhaps it was
          never separate from you to begin with.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-amber-600/25 transition hover:bg-amber-700 dark:bg-amber-500 dark:shadow-amber-500/20 dark:hover:bg-amber-400"
          >
            <Home className="h-4 w-4" />
            Return Home
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-8 py-3.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            Read the FAQ
          </Link>
        </div>

        <p className="mt-12 text-sm italic text-neutral-400 dark:text-neutral-600">
          &ldquo;I am one Self, united with my Creator, at one with every
          aspect of creation.&rdquo;
        </p>
      </motion.div>
    </div>
  );
}
