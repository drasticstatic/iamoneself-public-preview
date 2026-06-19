"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  BookOpen,
  Mountain,
  Feather,
  ExternalLink,
  Globe,
  MessageCircle,
  Send,
} from "lucide-react";
import { TeachingModal, type TeachingPill } from "@/components/TeachingModal";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

// 6 bento nav cards — mirrors the Wix site architecture
const navCards = [
  {
    href: "https://www.iamoneself.com",
    title: "I Am One Self",
    description:
      "The Holy Earth Foundation — Sufi Message of Love, Harmony, and Beauty. The complete Wix site with all teachings.",
    icon: Globe,
    external: true,
  },
  {
    href: "https://www.iamoneself.com/plantsandmiracles",
    title: "Plants & Miracles",
    description:
      "The Flight of the Eagle & Condor — where A Course in Miracles meets the ancient Amazonian healing tradition.",
    icon: Feather,
    external: true,
  },
  {
    href: "/retreats",
    title: "Retreats",
    description:
      "Chaiconi Bari Ayahuasca Retreats in the Peruvian Amazon. Spiritual healing with traditional curanderos.",
    icon: Mountain,
    external: false,
  },
  {
    href: "/faq",
    title: "FAQ",
    description:
      "Everything you need to know — the medicine, preparation, safety, travel logistics, and integration support.",
    icon: BookOpen,
    external: false,
  },
  {
    href: "https://www.iamoneself.com/letterstoself",
    title: "Letters to Self",
    description:
      "Personal letters of spiritual insight, reflection, and the journey toward Single-Mindedness — written from the heart of the teaching.",
    icon: Feather,
    external: true,
  },
  {
    href: "https://www.iamoneself.com/spirituallifecoaching",
    title: "Spiritual Life Coaching",
    description:
      "One-on-one guidance in miracle forgiveness, ACIM study, Kundalini awakening, and the escape from darkness.",
    icon: Heart,
    external: true,
  },
];

// Explore the Teachings — pill topics with modal content
const teachings: TeachingPill[] = [
  {
    id: "miracle-principles",
    label: "Miracle Principles",
    title: "The Miracle Principles",
    body: "The foundation of our teaching — cognitive shifts that take you from body-identification (darkness/guilt) to soul-identification (light/peace). During ceremony, the sacred brew amplifies these principles so you can experience them directly. Drawn from A Course in Miracles, they represent the journey from the ego's thought system to the Holy Spirit's correction.",
    faqAnchor: "miracle-principles",
  },
  {
    id: "golden-halo",
    label: "Golden Halo of Light",
    title: "The Golden Halo of Light",
    body: "The Golden Halo manifests around the head and bodies of everyone when the true Spiritual Eye opens. It is the Face of Christ and the Unified Mind of Light — a vision through the power of miracle forgiveness that ends the illusion of differences and offers the remembrance of the Sons of God who share our true Self.",
    faqAnchor: "golden-halo",
  },
  {
    id: "eagle-condor",
    label: "Eagle & Condor Prophecy",
    title: "The Flight of the Eagle and the Condor",
    body: "The prophecy that the Western mind of Medicine (The Eagle — Jesus, A Course in Miracles) will one day join with the Indigenous mind of Plant Wisdom (The Condor) for the good of humanity. The two teachings now live in harmony to heal mankind. The symbol of this union is the Barn Owl — the two birds flying as one — representing Single-Mindedness and seraphic teaching.",
    faqAnchor: "flight-of-eagle-condor",
  },
  {
    id: "escape-darkness",
    label: "Escape from Darkness",
    title: "The Escape from Darkness",
    body: 'Most of us live on the "outer fringes" of physical perception, caught in a cycle of grievances and past-dwelling. Escape from Darkness is the process of moving back into non-differentiated light — recognizing that the source of light is within you, not the physical sun. As A Course in Miracles asks: "Do you not see that all your misery comes from the strange belief that you are powerless?"',
    faqAnchor: "escape-from-darkness",
  },
  {
    id: "chaiconi-bari",
    label: "Chaiconi Bari",
    title: "Chaiconi Bari",
    body: '"Chaiconi" speaks to the wisdom Spirits invisible to human eyes but seen when the Spiritual Eye is activated — Spirits of the plants, ancestors, and shamans who watch over the tradition from a higher realm. "Bari" means a radiant circular energy field that nurtures and sustains life. Together, the term represents the Holy Spirit, the Mind of the Atonement where the Christ stands revealed in the Golden Halo.',
    faqAnchor: "chaiconi-bari",
  },
  {
    id: "icaro",
    label: "Icaros",
    title: "The Icaros — Healing Songs",
    body: "Ikaros are healing songs received by Curanderos during long periods of fasting and isolation working with master plants. They are living medicine encoded with the life force and energy of the plants and spirits. The ikaros provide shamanic plant-spirit healing, clearing negative energies and guiding the ceremony.",
    faqAnchor: "icaros",
  },
  {
    id: "dieta",
    label: "The Dieta",
    title: "The Dieta — Sacred Preparation",
    body: "The Dieta is a set of traditional dietary and lifestyle guidelines observed before, during, and after retreat. It cleanses the body, reduces toxins, and opens sensitivity to the plant wisdom. Avoid pork, processed foods, alcohol, and caffeine. Abstain from sexual activity. Follow for at least 2 weeks before and 1 month after the retreat — some choose longer.",
    faqAnchor: "the-dieta",
  },
  {
    id: "mariah",
    label: "The Mariah Level",
    title: "The Mariah — Highest Level of Mastery",
    body: "Mariah is the level where an individual has regained control over physical reality. At this level, the mind recognizes no limits — shape-shifting, walking through walls, walking on water become possible. It represents the highest level because it means no limit on the mind. Jesus demonstrated this level in A Course in Miracles.",
    faqAnchor: "mariah-level",
  },
];

export default function Home() {
  const [activePill, setActivePill] = useState<TeachingPill | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Hide scroll indicator once user scrolls past hero
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setShowScrollIndicator(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Teaching Modal Portal */}
      <TeachingModal pill={activePill} onClose={() => setActivePill(null)} />
      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900">
        {/* Soft radial glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.12)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.06)_0%,_transparent_70%)]"
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
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-amber-600/25 transition-all hover:bg-amber-700 hover:-translate-y-0.5 dark:bg-amber-500 dark:shadow-amber-500/20 dark:hover:bg-amber-400"
          >
            <Mountain className="h-4 w-4" />
            Explore Retreats
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-8 py-3.5 text-sm font-medium text-neutral-700 transition-all shadow-sm hover:shadow-md hover:bg-neutral-50 hover:-translate-y-0.5 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <BookOpen className="h-4 w-4" />
            Read the FAQ
          </Link>
        </motion.div>

        {/* ── Agent Chat Field ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-8 w-full max-w-lg mx-auto"
        >
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-sm">
            {/* Input row */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-100 dark:border-neutral-800">
              <MessageCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
              <input
                type="text"
                placeholder="Ask about retreats, the medicine, preparation…"
                className="flex-1 bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none"
                readOnly
                onClick={() => {
                  // Future: activate live agent API
                  // For now, suggest sample questions below
                }}
              />
              <Send className="h-4 w-4 text-neutral-300 dark:text-neutral-600" />
            </div>

            {/* Sample questions — act as deep-link modals to FAQ/retreats */}
            <div className="px-4 py-3">
              <p className="text-[10px] uppercase tracking-wider font-medium text-neutral-400 dark:text-neutral-600 mb-2">
                Popular questions
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Link
                  href="/faq#miracle-principles"
                  className="inline-flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 px-2.5 py-1 text-[11px] font-medium text-amber-700 dark:text-amber-400 transition-all hover:bg-amber-100 dark:hover:bg-amber-950/40 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  <Sparkles className="h-2.5 w-2.5" />
                  What are Miracle Principles?
                </Link>
                <Link
                  href="/retreats"
                  className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 transition-all hover:bg-emerald-100 dark:hover:bg-emerald-950/40 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  <Mountain className="h-2.5 w-2.5" />
                  When is the next retreat?
                </Link>
                <Link
                  href="/faq#the-dieta"
                  className="inline-flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 px-2.5 py-1 text-[11px] font-medium text-amber-700 dark:text-amber-400 transition-all hover:bg-amber-100 dark:hover:bg-amber-950/40 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  <Sparkles className="h-2.5 w-2.5" />
                  How do I prepare?
                </Link>
                <Link
                  href="/faq#escape-from-darkness"
                  className="inline-flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 px-2.5 py-1 text-[11px] font-medium text-amber-700 dark:text-amber-400 transition-all hover:bg-amber-100 dark:hover:bg-amber-950/40 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  <Sparkles className="h-2.5 w-2.5" />
                  Is it safe?
                </Link>
                <Link
                  href="/faq#golden-halo"
                  className="inline-flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 px-2.5 py-1 text-[11px] font-medium text-amber-700 dark:text-amber-400 transition-all hover:bg-amber-100 dark:hover:bg-amber-950/40 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  <Sparkles className="h-2.5 w-2.5" />
                  What is the Golden Halo?
                </Link>
                <a
                  href="https://www.iamoneself.com/spirituallifecoaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800 px-2.5 py-1 text-[11px] font-medium text-rose-700 dark:text-rose-400 transition-all hover:bg-rose-100 dark:hover:bg-rose-950/40 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  <Heart className="h-2.5 w-2.5" />
                  Spiritual Life Coaching
                </a>
              </div>
            </div>
          </div>
          <p className="mt-2 text-center text-[10px] text-neutral-400 dark:text-neutral-600">
            AI agent concept — sample questions link to our knowledge base
          </p>
        </motion.div>

        {/* Scroll indicator — fixed to viewport bottom, fades out on scroll */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
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
          )}
        </AnimatePresence>
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

      {/* ── 6 Bento Navigation Cards ── */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {navCards.map((card, i) => (
            <motion.div
              key={card.href}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={i}
            >
              {card.external ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-amber-300 hover:-translate-y-0.5 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-amber-700 h-full"
                >
                  <div className="flex items-center gap-3">
                    <card.icon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {card.title}
                    </h3>
                    <ExternalLink className="h-3.5 w-3.5 text-neutral-400 ml-auto" />
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {card.description}
                  </p>
                </a>
              ) : (
                <Link
                  href={card.href}
                  className="group flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-amber-300 hover:-translate-y-0.5 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-amber-700 h-full"
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
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Explore the Teachings — Pill Buttons ── */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-50"
        >
          Explore the Teachings
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={1}
          className="mt-3 text-neutral-600 dark:text-neutral-400"
        >
          Tap a teaching to learn more — each opens a window into the path.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={2}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {teachings.map((t) => (
            <button
              key={t.id}
              onClick={() => setActivePill(t)}
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 px-4 py-2 text-sm font-medium text-amber-700 dark:text-amber-300 transition-all shadow-sm hover:shadow-md hover:bg-amber-100 dark:hover:bg-amber-950/50 hover:-translate-y-0.5"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {t.label}
            </button>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
