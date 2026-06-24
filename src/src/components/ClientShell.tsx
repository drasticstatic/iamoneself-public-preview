"use client";

import GlobalShortcuts from "@/components/GlobalShortcuts";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalShortcuts />
      {children}
    </>
  );
}
