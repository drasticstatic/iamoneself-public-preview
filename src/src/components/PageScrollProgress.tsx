"use client";

import { useState, useEffect } from "react";

/**
 * PageScrollProgress — thin gold bar at top of page that fills
 * as the user scrolls. Sits below the navbar + disclaimer badge.
 */
export default function PageScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-[92px] inset-x-0 z-30 h-0.5 bg-neutral-100 dark:bg-neutral-900">
      <div
        className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
