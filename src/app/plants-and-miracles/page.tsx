"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Feather,
  BookOpen,
  Sun,
  Eye,
  Heart,
  Mountain,
  ArrowRight,
  Sparkles,
  Globe,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function PlantsAndMiraclesPage() {
  return (
    <div className="min-h-screen pt-[92px]" data-pagefind-body>
      {/* Hero */}
      <section className="relative px-6 py-24 mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 px-4 py-1.5 text-sm text-emerald-700 dark:text-emerald-400 mb-6">
          <Feather className="h-4 w-4" />
          Plants & Miracles
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
          The Flight of the Eagle & Condor
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto italic">
          ~ A Sufi Message of Harmony, Love, and Beauty. ~
        </p>
        <p className="mt-6 text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          Where differences come to an end. The Eagle (A Course in Miracles) and the Condor (Plant Medicine) fly as one on the Wings of the Spirit of Immortal Light, shining in the oneness of the Golden Halo — the Face of Christ.
        </p>
        <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      </section>

      {/* Chaiconi Bari */}
      <section className="px-6 pb-16 mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
            About Chaiconi Bari
          </h2>
          <div className="prose max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4">
            <p>
              <strong>Chaiconi Bari</strong> is Shipibo-Conibo in origin. <em>Chaiconi</em> speaks to the wisdom Spirits that are invisible to human eyeballs but can be seen when the physical Third Eye or pineal is activated with DMT and through the non-physical Spiritual Eye of the Holy Spirit, the Eye of Light. These are Spirits of the plants and angels — Spirits of our ancestors and shamans who have crossed over and now watch over this great tradition from a higher realm. They all work together as Love's messengers for the Lord of Wisdom, the Great Chiaconi, Whose mighty Wings we all fly on.
            </p>
            <p>
              <em>Bari</em> means a radiant circular energy field that nurtures and sustains life. Used without Chaiconi it means the physical sun. Used alongside it, it stands for the Holy Spirit, the Mind of the Atonement where the Christ stands revealed in the Halo. The Holy One extends the Light of God onto us unveiling the Golden Halo as the Face of Christ and Unified Mind of Light.
            </p>
            <blockquote className="border-l-2 border-amber-300 dark:border-amber-700 pl-4 italic text-neutral-500 dark:text-neutral-400">
              &ldquo;The Atonement is the knowledge that the belief that angels can fall is false.&rdquo; — Jesus, ACIM T-1.35.7:6
            </blockquote>
            <p>
              This teaching has been symbolized in the ancient works of priests and priestesses as the teaching of the <strong>Winged Sun</strong> for at least 3,500 years. We now offer it to you as the Plants & Miracles — Flight of Eagle and Condor teaching.
            </p>
          </div>
        </motion.div>
      </section>

      {/* The Eagle & The Condor */}
      <section className="px-6 pb-16 mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Eagle */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="p-6 rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/40">
                <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-400">The Eagle</h3>
                <p className="text-xs text-neutral-500">Western Mind of Medicine</p>
              </div>
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              The Eagle represents the resurrected one who wrote A Course in Miracles — the Spirit of Yeshua. The Course is a self-study spiritual thought system that teaches that the way to universal love and peace is by undoing guilt through forgiving others. Its 76 Miracle Principles form the cognitive backbone of our teaching.
            </p>
          </motion.div>

          {/* Condor */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/40">
                <Feather className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">The Condor</h3>
                <p className="text-xs text-neutral-500">Indigenous Mind of Plant Wisdom</p>
              </div>
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              The Condor is the Spirit of Ayahuasca, known as the Vine of the Soul and Cosmic Serpent. A great teacher of the Sacred Manuscript of Nature and the Jungle Book. For thousands of years, indigenous healers have worked with master plants as sacred allies in the healing of the mind and spirit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Barn Owl — Unity */}
      <section className="px-6 pb-16 mx-auto max-w-3xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="p-8 rounded-2xl border border-violet-200 dark:border-violet-800 bg-gradient-to-br from-amber-50/50 to-violet-50/50 dark:from-amber-950/20 dark:to-violet-950/20"
        >
          <Sun className="h-10 w-10 text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-3">
            The Barn Owl — The Two Become One
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            When the Eagle and the Condor fly together, they become the Barn Owl — symbolizing Single-Mindedness and seraphic (angelic) teaching. The two teachings now live in harmony to heal mankind. When the Eagle and Condor fly together, the illusion of attack dissolves and only love remains.
          </p>
          <p className="mt-4 text-sm font-medium text-violet-600 dark:text-violet-400 italic">
            Together they fly as one bird shining in the oneness of the Golden Halo.
          </p>
        </motion.div>
      </section>

      {/* What the Plants Teach */}
      <section className="px-6 pb-16 mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={4}
        >
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
            What the Plants Teach
          </h2>
          <ul className="space-y-3">
            {[
              { teaching: "The addiction to self-centered thought — the ego's thought system.", plant: "Ayahuasca" },
              { teaching: "Looking at the world with an open mind and heart with the curiosity of a child.", plant: "LSD" },
              { teaching: "The authority problem — using time to make a false image of yourself and others.", plant: "MDMA" },
              { teaching: "Miracle or true forgiveness is the answer to healing your most challenging problems.", plant: "All medicines" },
              { teaching: "When you turn away from your belief in physical sight, you begin to live with spiritual sight.", plant: "All medicines" },
              { teaching: "Everyone has a song in their heart they have to play.", plant: "Ayahuasca" },
              { teaching: "Separation is not a solution — it's a delusion.", plant: "Ayahuasca" },
              { teaching: "If you defend yourself, you are attacked.", plant: "Ayahuasca" },
              { teaching: "You as silence and stillness are immeasurable and limitless peace.", plant: "Ayahuasca & Psilocybin" },
              { teaching: "The nature of Reality, God, and Self is Light.", plant: "Iboga, Ayahuasca, Psilocybin, LSD" },
              { teaching: "Grievances are what keep the mind sick and shackled to the body.", plant: "Ayahuasca, Psilocybin" },
              { teaching: "If you step back by dropping your own judgment, the Spirit will guide your thoughts with inspiration.", plant: "Psilocybin" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800/50">
                <Sparkles className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {item.teaching}
                  </p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                    — {item.plant}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 mx-auto max-w-3xl text-center">
        <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-emerald-500 to-transparent mb-8" />
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Explore the Full Teaching
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Dive into the 18-section retreat curriculum or browse the FAQ.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/retreats"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors shadow-sm hover:shadow-md"
          >
            <Mountain className="h-4 w-4" />
            Retreat Curriculum
          </Link>
          <Link
            href="/teachings"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:border-amber-300 dark:hover:border-amber-700 font-medium transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            All Teachings
          </Link>
          <a
            href="https://www.iamoneself.com/plants-and-miracles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors"
          >
            <Globe className="h-4 w-4" />
            Wix Site
          </a>
        </div>
      </section>
    </div>
  );
}
