"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Home, BookOpen, Mountain, ExternalLink, Feather, Globe, Heart, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

// Gh-pages internal routes
const ghpagesRoutes = [
  { href: "/", label: "Retreat Portal Home", icon: Home },
  { href: "/retreats", label: "Retreats", icon: Mountain },
  { href: "/faq", label: "FAQ", icon: BookOpen },
];

// Wix site pages
const wixRoutes = [
  { href: "https://www.iamoneself.com", label: "I Am One Self — Home", icon: Globe },
  { href: "https://www.iamoneself.com/plantsandmiracles", label: "Plants & Miracles", icon: Feather },
  { href: "https://www.iamoneself.com/letterstoself", label: "Letters to Self", icon: Feather },
  { href: "https://www.iamoneself.com/spirituallifecoaching", label: "Spiritual Life Coaching", icon: Heart },
  { href: "https://www.iamoneself.com/about-the-speaker", label: "Contact", icon: Mail },
  { href: "https://www.iamoneself.com/phsychedelicmysticteachings", label: "Psychedelic Mystic Teachings", icon: Sparkles },
  { href: "https://www.iamoneself.com/voiceoftheonepodcast", label: "Voice of the One Podcast", icon: Globe },
  { href: "https://www.iamoneself.com/talks-on-youtube", label: "Talks on YouTube", icon: Globe },
];

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
        className="relative w-full max-w-3xl"
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

        {/* ── Dual Sitemap ── */}
        <div className="mt-14 grid sm:grid-cols-2 gap-8 text-left">
          {/* Retreat Portal (gh-pages) routes */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-4">
              Retreat Portal
            </h2>
            <ul className="space-y-2">
              {ghpagesRoutes.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all shadow-sm hover:shadow-md rounded-md px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:-translate-y-0.5"
                  >
                    <r.icon className="h-4 w-4 text-amber-500" />
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Wix site map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={1}
          >
            <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-4">
              iamoneself.com
            </h2>
            <ul className="space-y-2">
              {wixRoutes.map((r) => (
                <li key={r.href}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all shadow-sm hover:shadow-md rounded-md px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:-translate-y-0.5"
                  >
                    <r.icon className="h-4 w-4 text-amber-500" />
                    {r.label}
                    <ExternalLink className="h-3 w-3 text-neutral-400 ml-auto" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <p className="mt-16 text-sm italic text-neutral-400 dark:text-neutral-600">
          &ldquo;I am one Self, united with my Creator, at one with every
          aspect of creation.&rdquo;
        </p>
      </motion.div>
    </div>
  );
}
