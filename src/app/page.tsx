"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  BookOpen,
  Mountain,
  Feather,
  Sun,
  Eye,
  TreePine,
  ExternalLink,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const teachingTopics = [
  { icon: Sun, label: "The Golden Halo of Light" },
  { icon: BookOpen, label: "Spiritual Principles" },
  { icon: Sparkles, label: "Rainbow Body Teachings" },
  { icon: Heart, label: "Sufi Teachings" },
  { icon: Eye, label: "Nobel Silence" },
  { icon: TreePine, label: "Vedanta Teachings" },
  { icon: Feather, label: "The Fallen Angels of Humanity" },
  { icon: Mountain, label: "Flight of Eagle & Condor" },
];

const navCards = [
  {
    href: "/plants-and-miracles",
    title: "Plants & Miracles",
    description:
      "The Flight of the Eagle & Condor — where A Course in Miracles meets the ancient Amazonian healing tradition.",
    icon: Feather,
  },
  {
    href: "/teachings",
    title: "Spiritual Life Coaching",
    description:
      "One-on-one guidance in miracle forgiveness, ACIM study, Kundalini awakening, and the escape from darkness.",
    icon: Heart,
  },
  {
    href: "/retreats",
    title: "Retreats",
    description:
      "Chaiconi Bari Ayahuasca Retreats in the Peruvian Amazon. Spiritual healing with traditional curanderos.",
    icon: Mountain,
  },
  {
    href: "/about",
    title: "About Isaiah Kenney",
    description:
      "The story of a Kundalini awakening, the true Spiritual Eye of Light, and the discovery of the Golden Halo.",
    icon: Sparkles,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900">
        {/* Soft radial glow */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.12)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.06)_0%,_transparent_70%)]"
        />

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="relative max-w-3xl text-3xl font-semibold leading-snug tracking-tight sm:text-5xl sm:leading-tight text-neutral-900 dark:text-neutral-50"
        >
          <span className="text-amber-600 dark:text-amber-400">
            &ldquo;I am one Self,
          </span>{" "}
          united with my Creator, at one with every aspect of creation, and
          limitless in power and in peace.&rdquo;
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400"
        >
          A Sufi Message of Love, Harmony, and Beauty — The Holy Earth
          Foundation
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/retreats"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-amber-600/25 transition hover:bg-amber-700 dark:bg-amber-500 dark:shadow-amber-500/20 dark:hover:bg-amber-400"
          >
            <Mountain className="h-4 w-4" />
            Explore Retreats
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-8 py-3.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <BookOpen className="h-4 w-4" />
            Read the FAQ
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-neutral-400 dark:text-neutral-600 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-amber-400 to-transparent dark:from-amber-500"
          />
        </motion.div>
      </section>

      {/* ── Welcome ── */}
      <section className="px-6 py-20 max-w-2xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          custom={0}
        >
          <p className="text-amber-700 dark:text-amber-400 font-medium text-sm uppercase tracking-widest mb-4">
            Dearly Beloved
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-50 leading-snug">
            Welcome to these Sufi Messages of Love, Harmony, and Beauty.
          </h2>
          <p className="mt-6 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
            I am so glad you are here and hope you are seeking the Face of
            Christ in a Golden Halo of Light — a vision of holiness and
            innocence that reveals the Truth. That you are One Self in Angelic
            Heritage as one of the Sons of God.
          </p>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
            Make the miracle of true forgiveness your true purpose in life.
            Listen to His Voice and let the yearning for Christ Vision grow
            inside of you. Be willing to make this choice and Christ will do
            the rest!
          </p>
          <p className="mt-6 text-neutral-500 dark:text-neutral-500 italic">
            Much Love, <br />
            <span className="text-neutral-700 dark:text-neutral-300 not-italic font-medium">
              Isaiah Kenney
            </span>
          </p>
        </motion.div>
      </section>

      {/* ── Navigation Cards ── */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2">
          {navCards.map((card, i) => (
            <motion.div
              key={card.href}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={i}
            >
              <Link
                href={card.href}
                className="group flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-amber-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-amber-700"
              >
                <div className="flex items-center gap-3">
                  <card.icon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {card.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Navigator Preview ── */}
      <section className="px-6 py-16 max-w-4xl mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-center text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-8">
            Explore the Teachings
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {teachingTopics.map(({ icon: Icon, label }, i) => (
              <motion.span
                key={label}
                variants={fadeUp}
                custom={i}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
              >
                <Icon className="h-3.5 w-3.5 text-amber-500 dark:text-amber-400" />
                {label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="px-6 py-20 text-center border-t border-neutral-100 dark:border-neutral-800">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          custom={0}
        >
          <p className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
            God Saves!
          </p>
          <p className="mt-2 text-neutral-500 dark:text-neutral-400">
            — Isaiah Kenney
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/teachings"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300 px-6 py-3 text-sm font-medium text-amber-700 transition hover:bg-amber-50 dark:border-amber-800 dark:text-amber-400 dark:hover:bg-amber-950"
            >
              <Heart className="h-4 w-4" />
              Spiritual Life Coaching
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-600 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              Contact
            </Link>
          </div>

          {/* GitHub source link */}
          <div className="mt-8">
            <a
              href="https://github.com/drasticstatic/iamoneself-public-preview"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-600 transition hover:text-neutral-600 dark:hover:text-neutral-400"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              View source on GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
