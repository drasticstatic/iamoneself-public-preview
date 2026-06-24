"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Sparkles,
  Heart,
  Eye,
  Leaf,
  Sun,
  Feather,
  ArrowRight,
  Mountain,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const teachings = [
  {
    icon: BookOpen,
    title: "A Course in Miracles",
    subtitle: "The Eagle — The Western Mind of Medicine",
    color: "amber",
    body: "The Course is a self-study spiritual thought system that teaches that the way to universal love and peace — or remembering God — is by undoing guilt through forgiving others. It is not a religion but a spiritual path focused on practical application: undoing the ego's thought system of fear, separation, and guilt, and replacing it with the Holy Spirit's thought system of love, forgiveness, and unity. The 76 Miracle Principles form the cognitive backbone of our teaching.",
    quote: '"Miracles are thought-creations. Thought can create lower-order or higher-order realities. This is the basic distinction between intellectualization and true thinking. One creates the physical, and the other spiritual, we believe in what we create." — ACIM T1B12b',
    faqLink: "#the-teaching-the-experience",
  },
  {
    icon: Leaf,
    title: "Plant Medicine Traditions",
    subtitle: "The Condor — Indigenous Mind of Plant Wisdom",
    color: "emerald",
    body: "For thousands of years, indigenous healers of the Amazon have worked with master plants — Ayahuasca, Ajo Sacha, Bobinsana, Chuchuhuasi, and many others — as sacred allies in the healing of the mind and spirit. These are not drugs but teachers. Each plant carries a specific intelligence, a specific gift, and a specific correction for the ego's errors. The shamanic dieta is a disciplined practice of receiving these teachings directly.",
    quote: '"From experience, I came to learn that ayahuasca bestows upon the user knowledge about a variety of topics, not only consciousness and perception, but also leads one to realize that what we perceive is an illusion." — Pablo Amaringo',
    faqLink: "#plant-medicines-companion-plants",
  },
  {
    icon: Sparkles,
    title: "Plants & Miracles",
    subtitle: "The Winged Sun — Where Eagle and Condor Fly as One",
    color: "violet",
    body: 'Our core teaching bridges A Course in Miracles with the shamanic plant wisdom tradition. The course does not aim at teaching the meaning of love, for that is beyond what can be taught. It does aim, however, at removing the blocks to the awareness of love\'s Presence, Which is your natural inheritance. During ceremony, the sacred brew amplifies these principles so you can experience them directly — cognitive shifts that take you from body-identification (darkness/guilt) to soul-identification (light/peace).',
    quote: '"The Atonement is the knowledge that the belief that angels can fall is false." — ACIM',
    faqLink: null,
  },
  {
    icon: Eye,
    title: "Spiritual Sight & the Christ-Vision",
    subtitle: "From Physical Perception to the Real World",
    color: "sky",
    body: 'When you turn away from your belief in physical sight, you begin to live with spiritual sight. We are afraid of the Light spiritual sight shows us — until we discover it. The ego\'s world is a world of darkness: fear, guilt, separation, and the belief that you are a body vulnerable to attack. The Holy Spirit\'s correction is the light: love, innocence, unity, and the recognition that you are a creation of Spirit, limitless and free. This is the shift from body-identification to soul-identification.',
    quote: '"Do you not see that all your misery comes from the strange belief that you are powerless?" — ACIM Ch 21.VII',
    faqLink: "#what-makes-different",
  },
  {
    icon: Heart,
    title: "True Forgiveness & Innocence",
    subtitle: "The Heart of the Teaching",
    color: "rose",
    body: 'True forgiveness is not pardoning someone for what they did — it is the recognition that what the ego says happened never occurred in truth. The ego\'s forgiveness says: "You did wrong, but I forgive you." The Holy Spirit\'s forgiveness says: "You are guiltless, because what you seemed to do in the dream never really happened." This is the miracle — the shift from perceiving attack to perceiving innocence. When you see the Face of Christ in your brother, the illusion of guilt dissolves. Only love remains.',
    quote: '"Healing must occur in exact proportion to which the valuelessness of sickness is recognized. One need but say, \'There is no gain at all to me in this\' and he is healed." — ACIM M-5.II.1:1–3:12',
    faqLink: "#forgiveness-innocent-perception",
  },
  {
    icon: Sun,
    title: "The Golden Halo of Light",
    subtitle: "Single-Mindedness — The Two Become One",
    color: "amber",
    body: 'The Golden Halo represents the state of Single-Mindedness — where the ego\'s dualistic thought system dissolves and only the unified awareness of Spirit remains. The Barn Owl symbolizes the Eagle and Condor flying as one — two teachings, two minds, two thought systems reconciled in a single radiant light. This is the goal of our teaching: the escape from darkness, the recognition that you are not a body but a creation of Spirit, limitless in power and in peace.',
    quote: '"I am one Self, united with my Creator, at one with every aspect of creation, and limitless in power and in peace." — ACIM Lesson 95',
    faqLink: "#golden-halo-of-light",
  },
  {
    icon: Feather,
    title: "Sufi Message & The Eagle-Condor Prophecy",
    subtitle: "Love, Harmony, and Beauty",
    color: "emerald",
    body: 'The Sufi Message of Love, Harmony, and Beauty is the spiritual lineage that underlies this work. The prophecy of the Eagle and the Condor says that the Western mind of Medicine (The Eagle — Jesus, ACIM) will one day join with the Indigenous mind of Plant Wisdom (The Condor) for the good of humanity. The two teachings now live in harmony to heal mankind. When the Eagle and Condor fly together, the illusion of attack dissolves and only love remains.',
    quote: '"Separation is not a solution — it\'s a delusion." — Kenney',
    faqLink: "#eagle-and-condor",
  },
];

const colorClasses: Record<string, { text: string; bg: string; border: string; quote: string }> = {
  amber:   { text: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/20", border: "border-amber-200 dark:border-amber-800", quote: "border-amber-300 dark:border-amber-700" },
  emerald: { text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/20", border: "border-emerald-200 dark:border-emerald-800", quote: "border-emerald-300 dark:border-emerald-700" },
  violet:  { text: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-950/20", border: "border-violet-200 dark:border-violet-800", quote: "border-violet-300 dark:border-violet-700" },
  sky:     { text: "text-sky-600 dark:text-sky-400", bg: "bg-sky-50 dark:bg-sky-950/20", border: "border-sky-200 dark:border-sky-800", quote: "border-sky-300 dark:border-sky-700" },
  rose:    { text: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-950/20", border: "border-rose-200 dark:border-rose-800", quote: "border-rose-300 dark:border-rose-700" },
};

export default function TeachingsPage() {
  return (
    <div className="min-h-screen pt-[92px]" data-pagefind-body>
      {/* Hero */}
      <section className="relative px-6 py-24 mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
          The Teachings
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          A Course in Miracles meets Plant Medicine. The Eagle and the Condor fly as one — where differences come to an end in the Golden Halo of Light.
        </p>
        <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      </section>

      {/* Teaching Cards */}
      <section className="px-6 pb-24 mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2">
          {teachings.map((t, i) => {
            const c = colorClasses[t.color] || colorClasses.amber;
            return (
              <motion.div
                key={t.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className={`rounded-2xl border ${c.border} ${c.bg} p-6 flex flex-col`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-xl ${c.bg}`}>
                    <t.icon className={`h-5 w-5 ${c.text}`} />
                  </div>
                  <div>
                    <h2 className={`text-lg font-semibold ${c.text}`}>{t.title}</h2>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed flex-1">
                  {t.body}
                </p>

                {t.quote && (
                  <blockquote className={`mt-4 pl-4 border-l-2 ${c.quote} text-xs text-neutral-500 dark:text-neutral-400 italic leading-relaxed`}>
                    {t.quote}
                  </blockquote>
                )}

                {t.faqLink && (
                  <Link
                    href={`/faq${t.faqLink}`}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                  >
                    Explore in FAQ
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 mx-auto max-w-3xl text-center">
        <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-8" />
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Ready to Go Deeper?
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Explore the full 18-section retreat curriculum or find answers in our FAQ.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/retreats"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium transition-colors shadow-sm hover:shadow-md"
          >
            <Mountain className="h-4 w-4" />
            Retreat Teachings
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:border-amber-300 dark:hover:border-amber-700 font-medium transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            FAQ
          </Link>
        </div>
      </section>
    </div>
  );
}
