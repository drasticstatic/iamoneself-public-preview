"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * Global keyboard shortcuts for the dev portal.
 * - Cmd+K / Ctrl+K → navigate to /search
 */
export default function GlobalShortcuts() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      /* Cmd+K / Ctrl+K → search page (unless already on search or in an input) */
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
        e.preventDefault();
        if (pathname !== "/search") {
          router.push("/search");
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [pathname, router]);

  return null;
}
