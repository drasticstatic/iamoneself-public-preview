"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mountain,
  ArrowRight,
  ArrowDown,
  CircleUserRound,
  Leaf,
  Feather,
  Sparkles,
  Sun,
  Globe,
  ExternalLink,
  X,
  ArrowUp,
  Users,
  BookOpen,
  ChevronDown,
  Package,
  Info,
  Ghost,
  VenetianMask,
  Footprints,
} from "lucide-react";

/* ── Retreat Centers ── */
const centers = [
  {
    name: "Sachamama",
    desc: "Ayahuasca healing center and shamanic school founded by Don Francisco Montes Shuña. Deep Amazon tradition.",
    url: "http://sachamamalodge.org/en",
  },
  {
    name: "Inca Shipiba",
    desc: "Indigenous Shipibo family center near Nauta. Led by Maestra Matilde with 50 years experience. 7–30 day dieta programs.",
    url: "https://www.incashipiba.com",
  },
  {
    name: "The Garden of Peace",
    desc: "A sanctuary in the Amazon dedicated to peace and healing. 10-day and 30-day dieta programs.",
    url: "https://thegardenofpeace.net",
  },
];

/* ── Plants & Miracles content (shared for modal + Pagefind) ── */
const plantsAndMiracles = {
  chaiconiBari: {
    heading: "About Chaiconi Bari",
    body: "Chaiconi Bari is Shipibo-Conibo in origin. Chaiconi speaks to the wisdom Spirits that are invisible to human eyeballs but can be seen when the physical Third Eye or pineal is activated with DMT and through the non-physical Spiritual Eye of the Holy Spirit, the Eye of Light. These are Spirits of the plants and angels — Spirits of our ancestors and shamans who have crossed over and now watch over this great tradition from a higher realm. They all work together as Love's messengers for the Lord of Wisdom, the Great Chiaconi, Whose mighty Wings we all fly on.",
    body2: "Bari means a radiant circular energy field that nurtures and sustains life. Used without Chaiconi it means the physical sun. Used alongside it, it stands for the Holy Spirit, the Mind of the Atonement where the Christ stands revealed in the Halo. The Holy One extends the Light of God onto us unveiling the Golden Halo as the Face of Christ and Unified Mind of Light.",
    quote: '"The Atonement is the knowledge that the belief that angels can fall is false." — Jesus, ACIM T-1.35.7:6',
    closing: "This teaching has been symbolized in the ancient works of priests and priestesses as the teaching of the Winged Sun for at least 3,500 years. We now offer it to you as the Plants & Miracles — Flight of Eagle and Condor teaching.",
  },
  eagle: {
    title: "The Eagle",
    subtitle: "Western Mind of Medicine",
    body: "The Eagle represents the resurrected one who wrote A Course in Miracles — the Spirit of Yeshua. The Course is a self-study spiritual thought system that teaches that the way to universal love and peace is by undoing guilt through forgiving others. Its 76 Miracle Principles form the cognitive backbone of our teaching.",
  },
  condor: {
    title: "The Condor",
    subtitle: "Indigenous Mind of Plant Wisdom",
    body: "The Condor is the Spirit of Ayahuasca, known as the Vine of the Soul and Cosmic Serpent. A great teacher of the Sacred Manuscript of Nature and the Jungle Book. For thousands of years, indigenous healers have worked with master plants as sacred allies in the healing of the mind and spirit.",
  },
  barnOwl: {
    heading: "The Barn Owl — The Two Become One",
    body: "When the Eagle and the Condor fly together, they become the Barn Owl — symbolizing Single-Mindedness and seraphic (angelic) teaching. The two teachings now live in harmony to heal mankind. When the Eagle and Condor fly together, the illusion of attack dissolves and only love remains.",
    closing: "Together they fly as one bird shining in the oneness of the Golden Halo.",
  },
  whatThePlantsTeach: [
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
  ],
};

/* ── Retreat Topics with teaching content (from /teachings page) ── */
const retreatTopics = [
  { label: "Miracle or True Forgiveness", color: "rose" },
  { label: "Real Intimacy", color: "amber" },
  { label: "Spiritual Sexuality", color: "violet" },
  { label: "Life Can Be SO Challenging", color: "rose" },
  { label: "The Addiction to Thinking", color: "amber" },
  { label: "A Course In Miracles & Helpful Magic", color: "violet" },
  { label: "A Journey Through Spiritual Principles", color: "sky" },
  { label: "Real Spiritual Life Manifestation", color: "emerald" },
  { label: "The Nature of Addiction", color: "rose" },
  { label: "The Beginning of the End of Division", color: "amber" },
];

/* ── Color mapping for section accents ── */
const colorMap: Record<string, { text: string; bg: string; border: string; icon: string }> = {
  amber: {
    text: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    border: "border-amber-200 dark:border-amber-800",
    icon: "text-amber-500",
  },
  violet: {
    text: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/20",
    border: "border-violet-200 dark:border-violet-800",
    icon: "text-violet-500",
  },
  emerald: {
    text: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    border: "border-emerald-200 dark:border-emerald-800",
    icon: "text-emerald-500",
  },
  rose: {
    text: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/20",
    border: "border-rose-200 dark:border-rose-800",
    icon: "text-rose-500",
  },
  sky: {
    text: "text-sky-600 dark:text-sky-400",
    bg: "bg-sky-50 dark:bg-sky-950/20",
    border: "border-sky-200 dark:border-sky-800",
    icon: "text-sky-500",
  },
  green: {
    text: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-950/20",
    border: "border-green-200 dark:border-green-800",
    icon: "text-green-500",
  },
};

export default function RetreatsPage() {
  /* ── Modal state ── */
  const [healersOpen, setHealersOpen] = useState(false);
  const [plantsMiraclesOpen, setPlantsMiraclesOpen] = useState(false);
  const [standardOpen, setStandardOpen] = useState(false);
  const [extendedOpen, setExtendedOpen] = useState(false);
  const [masterOpen, setMasterOpen] = useState(false);
  const [healersAtBottom, setHealersAtBottom] = useState(false);
  const [plantsMiraclesAtBottom, setPlantsMiraclesAtBottom] = useState(false);
  const healersScrollRef = useRef<HTMLDivElement>(null);
  const plantsMiraclesScrollRef = useRef<HTMLDivElement>(null);

  const handleHealersScroll = () => {
    const el = healersScrollRef.current;
    if (el) setHealersAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 24);
  };
  const handlePlantsMiraclesScroll = () => {
    const el = plantsMiraclesScrollRef.current;
    if (el) setPlantsMiraclesAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 24);
  };

  // Lock body scroll + escape key for open modals
  useEffect(() => {
    const anyOpen = healersOpen || plantsMiraclesOpen || standardOpen || extendedOpen || masterOpen;
    if (anyOpen) {
      document.body.style.overflow = "hidden";
      const handler = (e: KeyboardEvent) => {
        if (e.key === "Escape") { setHealersOpen(false); setPlantsMiraclesOpen(false); setStandardOpen(false); setExtendedOpen(false); setMasterOpen(false); }
      };
      document.addEventListener("keydown", handler);
      return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", handler); };
    }
    return () => { document.body.style.overflow = ""; };
  }, [healersOpen, plantsMiraclesOpen, standardOpen, extendedOpen, masterOpen]);

  return (
    <>
      <div data-pagefind-body>
      {/* ── Pagefind-indexable hidden content (modals aren't in DOM at build time) ── */}
      <div className="hidden" data-pagefind-body aria-hidden>
        <h2>Our Team of Healers</h2>
        <h3>Maestro Isaiah Kenney — Founder & Retreat Leader</h3>
        <p>Isaiah has been working as an Ayahuasquero for 11 years. He was introduced to it by the Great Spirit after a Kundalini awakening, which led to the awakening of the true Spiritual Eye of Light and the Golden Halo. He has studied with 5 different families in the Amazon from various tribes, including the Amaringo-Shuña lineage and the Shipibo. A Sufi under the guidance of Inayat Khan & Jesus, specializing in Christian Mysticism. Also practices Vedanta and works in the Order of Melchizedek Priests.</p>
        <h3>Maestro Alex Wexukapi — Shipibo Curandero</h3>
        <p>Alex has over 15 years working with Ayahuasca. He completed a year-long apprenticeship dieting on many master plants with Shipibo Master Alfredo Sinamano Cairuna. He has trained many teachers and worked in Brazil, receiving the Spirit Warrior initiation from the Shawãdawa people. His wider spiritual background includes Buddhism, Japanese Shamanism, Jungian psychology, and Hermetic studies.</p>
        <h3>Maestro David Amaringo — Ayahuasca Visionary Artist & Co-founder</h3>
        <p>David is a master Ayahuasca visionary artist trained by his uncle, the legendary Pablo Cesar Amaringo Shuña. He began training at 14 at the USKO-AYAR Amazonian School of Painting. His work has been displayed worldwide, including the Museum of Children's Art in Oslo, Norway. He is an exceptional guide of the upper Amazon basin, skilled English translator, and masterful ceremonial facilitator.</p>
        <h2>Plants & Miracles — Flight of Eagle and Condor</h2>
        <h3>{plantsAndMiracles.chaiconiBari.heading}</h3>
        <p>{plantsAndMiracles.chaiconiBari.body}</p>
        <p>{plantsAndMiracles.chaiconiBari.body2}</p>
        <blockquote>{plantsAndMiracles.chaiconiBari.quote}</blockquote>
        <p>{plantsAndMiracles.chaiconiBari.closing}</p>
        <h3>The Eagle — Western Mind of Medicine</h3>
        <p>{plantsAndMiracles.eagle.body}</p>
        <h3>The Condor — Indigenous Mind of Plant Wisdom</h3>
        <p>{plantsAndMiracles.condor.body}</p>
        <h3>{plantsAndMiracles.barnOwl.heading}</h3>
        <p>{plantsAndMiracles.barnOwl.body}</p>
        <p>{plantsAndMiracles.barnOwl.closing}</p>
        <h3>What the Plants Teach</h3>
        {plantsAndMiracles.whatThePlantsTeach.map((item, i) => (
          <p key={i}>{item.teaching} — {item.plant}</p>
        ))}
        <h2>What's Included</h2>
        <h3>Standard Retreat</h3>
        <p>Multiple ceremony nights, shared accommodation, all dieta-compliant meals, group sharing circles, integration support, 3-month post-retreat integration program.</p>
        <h3>Extended Program</h3>
        <p>12-day immersion with additional ceremony nights, master plant introduction, extended dieta, deeper one-on-one time with curanderos.</p>
        <h3>Master Plant Dieta</h3>
        <p>7–30 day programs in isolation with specific master plants, daily guidance from curanderos, all meals, accommodation, and ceremony inclusions, profound integration support.</p>
        <h2>Ready to Apply</h2>
        <p>If you found us through Retreat Guru, Aya Advisors, or one of our partner listings, please indicate the referral source on your application so we can honor them appropriately.</p>
      </div>
      {/* ── Hero ── */}
      <section className="relative px-6 py-24 mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 px-4 py-1.5 text-sm text-amber-700 dark:text-amber-400 mb-6">
          <Mountain className="h-4 w-4" />
          The Holy Earth Foundation
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Chaiconi Bari Retreats
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Sacred ceremonies with traditional curanderos in the Peruvian Amazon.
          Our intimate retreats honor a 7-generation lineage recipe and the
          Plants & Miracles teaching.
        </p>
        <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

        {/* Jump to What's Included */}
        <button
          onClick={() => document.getElementById("whats-included")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 px-5 py-2.5 text-sm font-medium text-amber-700 dark:text-amber-300 shadow-sm hover:shadow-md hover:bg-amber-100 dark:hover:bg-amber-950/50 transition-all hover:-translate-y-0.5"
        >
          <ChevronDown className="h-4 w-4" />
          See What's Included
        </button>

        {/* Kenney's welcome */}
        <div className="mt-10 max-w-3xl mx-auto text-left">
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Welcome to our retreat offerings. So glad you found us. This is a beautiful reflection
            of your healing mind as it moves towards the Atonement of One Self. The teachings here
            offer the Answer to two questions that you ask yourself all the time:
          </p>
          <p className="mt-4 text-neutral-900 dark:text-neutral-100 font-medium italic leading-relaxed">
            &ldquo;How does real inner peace come about?&rdquo; and &ldquo;What is a life of meaning?&rdquo;
          </p>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The Answer will forever be true-forgiveness of your Self. Do you want to learn what
            miracle-forgiveness is taught by a resurrected mind? Do you want to discover a life
            of illumination vision? The two questions are the same and so is the Answer.
          </p>
          <p className="mt-4 text-neutral-500 dark:text-neutral-500 italic">
            — Isaiah Kenney
          </p>
        </div>
      </section>

      {/* ── Retreat Centers ── */}
      <section className="px-6 pb-16 mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8 text-center">
          Our Partner Retreat Centers
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {centers.map((center) => (
            <a
              key={center.name}
              href={center.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-amber-300 hover:-translate-y-0.5 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-amber-700"
            >
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {center.name}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {center.desc}
              </p>
              <span className="mt-auto inline-flex items-center gap-1 text-sm text-amber-600 dark:text-amber-400 font-medium">
                Visit center <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Our Team of Healers — Modal Trigger ── */}
      <section className="px-6 py-16 mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
          Our Team of Healers
        </h2>
        <p className="text-neutral-500 dark:text-neutral-500 mb-6">
          Masters of the Shipibo-Conibo tradition and the Plants & Miracles teaching.
        </p>
        <button
          onClick={() => setHealersOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 px-6 py-3 text-sm font-medium text-amber-700 dark:text-amber-300 shadow-sm hover:shadow-md hover:bg-amber-100 dark:hover:bg-amber-950/50 transition-all hover:-translate-y-0.5"
        >
          <Users className="h-4 w-4" />
          Meet Our Healers
        </button>
        <p className="mt-3 text-xs text-neutral-400 dark:text-neutral-500">
          Also featured on{" "}
          <a
            href="https://www.iamoneself.com/plants-and-miracles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 dark:text-amber-400 hover:underline"
          >
            iamoneself.com/plants-and-miracles
          </a>
        </p>
      </section>

      {/* ── Healers Modal ── */}
      <AnimatePresence>
        {healersOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm" onClick={() => setHealersOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              className="relative z-10 w-full max-w-2xl rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col max-h-[80vh]"
            >
              <div className="flex items-center justify-between p-6 pb-2 flex-shrink-0">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">Our Team of Healers</h3>
                <button onClick={() => setHealersOpen(false)} className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors" aria-label="Close"><X className="h-5 w-5" /></button>
              </div>
              <div
                ref={healersScrollRef}
                onScroll={handleHealersScroll}
                className="px-6 pb-4 overflow-y-auto scroll-smooth flex-1 space-y-6"
              >
                {/* Isaiah */}
                <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-950/40 flex items-center justify-center">
                      <CircleUserRound className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Maestro Isaiah Kenney</h4>
                      <p className="text-sm text-amber-600 dark:text-amber-400">Founder & Retreat Leader</p>
                    </div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                    Isaiah has been working as an Ayahuasquero for 11 years. He was introduced to it by the
                    Great Spirit after a Kundalini awakening, which led to the awakening of the true Spiritual
                    Eye of Light and the Golden Halo. He has studied with 5 different families in the Amazon
                    from various tribes, including the Amaringo-Shuña lineage and the Shipibo. A Sufi under
                    the guidance of Inayat Khan & Jesus, specializing in Christian Mysticism. Also practices
                    Vedanta and works in the Order of Melchizedek Priests.
                  </p>
                </div>
                {/* Alex */}
                <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-violet-100 dark:bg-violet-950/40 flex items-center justify-center">
                      <CircleUserRound className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Maestro Alex Wexukapi</h4>
                      <p className="text-sm text-violet-600 dark:text-violet-400">Shipibo Curandero</p>
                    </div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                    Alex has over 15 years working with Ayahuasca. He completed a year-long apprenticeship
                    dieting on many master plants with Shipibo Master Alfredo Sinamano Cairuna. He has
                    trained many teachers and worked in Brazil, receiving the Spirit Warrior initiation
                    from the Shawãdawa people. His wider spiritual background includes Buddhism, Japanese
                    Shamanism, Jungian psychology, and Hermetic studies. A powerful Ayahuasquero and a
                    beautiful soul.
                  </p>
                </div>
                {/* David */}
                <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center">
                      <CircleUserRound className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Maestro David Amaringo</h4>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400">Ayahuasca Visionary Artist & Co-founder</p>
                    </div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                    David is a master Ayahuasca visionary artist trained by his uncle, the legendary
                    Pablo Cesar Amaringo Shuña. He began training at 14 at the USKO-AYAR Amazonian
                    School of Painting. His work has been displayed worldwide, including the Museum of
                    Children's Art in Oslo, Norway. He is an exceptional guide of the upper Amazon
                    basin, skilled English translator, and masterful ceremonial facilitator.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 pb-6 pt-2 flex-shrink-0">
                <button onClick={() => { const el = healersScrollRef.current; if (el) el.scrollTo({ top: healersAtBottom ? 0 : el.scrollHeight, behavior: "smooth" }); }} className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                  {healersAtBottom ? <><ArrowUp className="h-3 w-3" /> Top</> : <><ArrowDown className="h-3 w-3" /> Bottom</>}
                </button>
                <div className="flex-1" />
                <a href="https://www.iamoneself.com/plants-and-miracles" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-amber-600/25 transition-all hover:bg-amber-700 hover:-translate-y-0.5 dark:bg-amber-500 dark:hover:bg-amber-400">
                  View on Wix <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              {/* Anonymity footer */}
              <p className="px-6 pb-4 text-xs text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5">
                <Ghost className="h-3 w-3 flex-shrink-0" />
                Healer identities and personal details are shared with respect and consent. What is revealed in ceremony is held in confidence.
              </p>
              <a
                href="https://acim.org/acim/lesson-154/i-am-among-the-ministers-of-god/en/s/560"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-6 mb-4 flex items-start gap-1.5 text-xs text-neutral-400 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
              >
                <VenetianMask className="h-3 w-3 flex-shrink-0 mt-0.5" />
                <span>&ldquo;I am among the ministers of God&rdquo; — ACIM, Lesson 154. In truth there is one Name beyond ego identification; Jesus and the Holy Spirit are the healers, and we are anonymous ministers under that one Name.</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Plants & Miracles — Modal Trigger ── */}
      <section className="px-6 py-16 mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
          Plants & Miracles
        </h2>
        <p className="text-neutral-500 dark:text-neutral-500 mb-6">
          The Flight of the Eagle & Condor — Chaiconi Bari, the Barn Owl, and what the plants teach.
        </p>
        <button
          onClick={() => setPlantsMiraclesOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 px-6 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-300 shadow-sm hover:shadow-md hover:bg-emerald-100 dark:hover:bg-emerald-950/50 transition-all hover:-translate-y-0.5"
        >
          <Leaf className="h-4 w-4" />
          Explore Plants & Miracles
        </button>
        <p className="mt-3 text-xs text-neutral-400 dark:text-neutral-500">
          Also on{" "}
          <a
            href="https://www.iamoneself.com/plants-and-miracles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 dark:text-amber-400 hover:underline"
          >
            iamoneself.com/plants-and-miracles
          </a>
        </p>
      </section>

      {/* ── Plants & Miracles Modal ── */}
      <AnimatePresence>
        {plantsMiraclesOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm" onClick={() => setPlantsMiraclesOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              className="relative z-10 w-full max-w-3xl rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col max-h-[85vh]"
            >
              <div className="flex items-center justify-between p-6 pb-2 flex-shrink-0">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">Plants & Miracles — Flight of Eagle & Condor</h3>
                <button onClick={() => setPlantsMiraclesOpen(false)} className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors" aria-label="Close"><X className="h-5 w-5" /></button>
              </div>
              <div
                ref={plantsMiraclesScrollRef}
                onScroll={handlePlantsMiraclesScroll}
                className="px-6 pb-4 overflow-y-auto scroll-smooth flex-1"
                style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(217,119,6,0.3) transparent" }}
              >
                <div className="space-y-6">
                  {/* Chaiconi Bari */}
                  <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
                    <h4 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-3">{plantsAndMiracles.chaiconiBari.heading}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">{plantsAndMiracles.chaiconiBari.body}</p>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">{plantsAndMiracles.chaiconiBari.body2}</p>
                    <blockquote className="mt-4 pl-3 border-l-2 border-amber-300 dark:border-amber-700">
                      <p className="text-xs text-neutral-500 dark:text-neutral-500 italic leading-relaxed">{plantsAndMiracles.chaiconiBari.quote}</p>
                    </blockquote>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">{plantsAndMiracles.chaiconiBari.closing}</p>
                  </div>

                  {/* Eagle & Condor */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/40">
                          <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-amber-600 dark:text-amber-400">{plantsAndMiracles.eagle.title}</h4>
                          <p className="text-xs text-neutral-500">{plantsAndMiracles.eagle.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{plantsAndMiracles.eagle.body}</p>
                    </div>
                    <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20 p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/40">
                          <Feather className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-emerald-600 dark:text-emerald-400">{plantsAndMiracles.condor.title}</h4>
                          <p className="text-xs text-neutral-500">{plantsAndMiracles.condor.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{plantsAndMiracles.condor.body}</p>
                    </div>
                  </div>

                  {/* Barn Owl */}
                  <div className="rounded-xl border border-violet-200 dark:border-violet-800 bg-gradient-to-br from-amber-50/50 to-violet-50/50 dark:from-amber-950/20 dark:to-violet-950/20 p-6 text-center">
                    <Sun className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">{plantsAndMiracles.barnOwl.heading}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">{plantsAndMiracles.barnOwl.body}</p>
                    <p className="mt-3 text-sm font-medium text-violet-600 dark:text-violet-400 italic">{plantsAndMiracles.barnOwl.closing}</p>
                  </div>

                  {/* What the Plants Teach */}
                  <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">What the Plants Teach</h4>
                    <ul className="space-y-3">
                      {plantsAndMiracles.whatThePlantsTeach.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800/50">
                          <Sparkles className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{item.teaching}</p>
                            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">— {item.plant}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 pb-6 pt-2 flex-shrink-0">
                <button onClick={() => { const el = plantsMiraclesScrollRef.current; if (el) el.scrollTo({ top: plantsMiraclesAtBottom ? 0 : el.scrollHeight, behavior: "smooth" }); }} className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                  {plantsMiraclesAtBottom ? <><ArrowUp className="h-3 w-3" /> Top</> : <><ArrowDown className="h-3 w-3" /> Bottom</>}
                </button>
                <div className="flex-1" />
                <a href="https://www.iamoneself.com/plants-and-miracles" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-700 hover:-translate-y-0.5 dark:bg-emerald-500 dark:hover:bg-emerald-400">
                  View on Wix <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Retreat Topics ── */}
      <section className="px-6 py-16 mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
          Retreat Topics
        </h2>
        <p className="text-neutral-500 dark:text-neutral-500 mb-6">
          The teaching themes explored during ceremony and integration at Chaiconi Bari.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {retreatTopics.map((topic) => (
            <span
              key={topic.label}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium ${
                colorMap[topic.color]
                  ? `${colorMap[topic.color].bg} ${colorMap[topic.color].border} ${colorMap[topic.color].text}`
                  : "border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300"
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              {topic.label}
            </span>
          ))}
        </div>
        <p className="mt-6 text-xs text-neutral-400 dark:text-neutral-500">
          Full teachings on{" "}
          <Link href="/" className="text-amber-600 dark:text-amber-400 hover:underline">
            iamoneself.dev → Explore the Teachings
          </Link>
          {" · "}
          <a
            href="https://www.iamoneself.com/psychedelic-mystic-teachings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 dark:text-amber-400 hover:underline"
          >
            iamoneself.com → Psychedelic Mystic Teachings
            <ExternalLink className="h-2.5 w-2.5 inline ml-0.5" />
          </a>
        </p>
        {/* COL Fellowship placeholder */}
        <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
          <a
            href="https://www.iamoneself.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 dark:text-neutral-600 hover:text-amber-600 dark:hover:text-amber-400 transition-colors italic"
          >
            Circle of Light Fellowship → more info coming soon
            <ExternalLink className="h-2.5 w-2.5 inline ml-0.5" />
          </a>
        </p>
      </section>

      {/* ── What's Included ── */}
      <section id="whats-included" className="scroll-mt-28 px-6 py-16 bg-neutral-50 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            What's Included
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Our retreats are all-inclusive from the moment you arrive — lodging, dieta-compliant meals,
            all ceremonies, sharing circles, and our comprehensive 3-month integration program.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            <button
              onClick={() => setStandardOpen(true)}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 text-center shadow-sm hover:shadow-md hover:border-amber-300 dark:hover:border-amber-700 transition-all hover:-translate-y-0.5"
            >
              <p className="text-sm text-neutral-500 dark:text-neutral-500 uppercase tracking-wider font-medium">
                Standard Retreat
              </p>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                Multiple ceremony nights, shared accommodation, all meals, integration support
              </p>
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 font-medium group-hover:underline">
                Click for details
              </p>
            </button>
            <button
              onClick={() => setExtendedOpen(true)}
              className="group rounded-2xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 p-6 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <p className="text-sm text-amber-600 dark:text-amber-400 uppercase tracking-wider font-medium">
                Extended Program
              </p>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                12-day immersion with additional ceremonies, master plant introduction, extended dieta
              </p>
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 font-medium group-hover:underline">
                Click for details
              </p>
            </button>
            <button
              onClick={() => setMasterOpen(true)}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 text-center shadow-sm hover:shadow-md hover:border-amber-300 dark:hover:border-amber-700 transition-all hover:-translate-y-0.5"
            >
              <p className="text-sm text-neutral-500 dark:text-neutral-500 uppercase tracking-wider font-medium">
                Master Plant Dieta
              </p>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                7–30 day programs in isolation with specific master plants — for those called deeper
              </p>
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 font-medium group-hover:underline">
                Click for details
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* ── Booking CTA ── */}
      <section className="px-6 py-16 mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Ready to Apply?
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Complete your application through our listing partners. Each application is reviewed by our team and medical advisor.
        </p>

        {/* Primary CTA — big /apply button with Footprints */}
        <div className="mt-8">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-600/25 transition-all hover:bg-orange-700 hover:-translate-y-1 hover:shadow-xl dark:bg-orange-500 dark:shadow-orange-500/20 dark:hover:bg-orange-400"
          >
            <Footprints className="h-5 w-5" />
            Next Steps
          </Link>
        </div>

        {/* Listing partners: Miracle Retreats (orange), Retreat Guru (amber border), Aya Advisors (amber border) */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.iamoneself.com/miracle-retreats"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-orange-600/25 transition-all hover:bg-orange-700 hover:-translate-y-0.5 dark:bg-orange-500 dark:shadow-orange-500/20 dark:hover:bg-orange-400"
          >
            <Sun className="h-4 w-4" />
            Miracle Retreats
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://iamoneself.retreat.guru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 px-6 py-3 text-sm font-medium text-amber-700 dark:text-amber-300 shadow-sm hover:shadow-md hover:bg-amber-100 dark:hover:bg-amber-950/50 transition-all hover:-translate-y-0.5"
          >
            <Mountain className="h-4 w-4" />
            Find us on Retreat Guru
          </a>
          <a
            href="https://www.ayaadvisors.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 px-6 py-3 text-sm font-medium text-amber-700 dark:text-amber-300 shadow-sm hover:shadow-md hover:bg-amber-100 dark:hover:bg-amber-950/50 transition-all hover:-translate-y-0.5"
          >
            Find us on Aya Advisors
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Pricing/contact bridge */}
        <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-500 max-w-xl mx-auto">
          For pricing, program details, and financial assistance inquiries, please contact our listing partners directly through their official sites.
        </p>

        {/* Secondary links */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/faq"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-5 py-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 shadow-sm hover:shadow-md hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all hover:-translate-y-0.5"
          >
            <BookOpen className="h-4 w-4" />
            Read the FAQ
          </Link>
          <a
            href="https://www.iamoneself.com/plants-and-miracles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-5 py-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 shadow-sm hover:shadow-md hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all hover:-translate-y-0.5"
          >
            <Leaf className="h-4 w-4" />
            Plants & Miracles
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://www.iamoneself.com/spiritual-life-coaching"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-5 py-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 shadow-sm hover:shadow-md hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all hover:-translate-y-0.5"
          >
            <Globe className="h-4 w-4" />
            Spiritual Life Coaching
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Referral attribution */}
        <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
          If you found us through Retreat Guru, Aya Advisors, or one of our partner listings, please indicate the referral
          source on your application so we can honor them appropriately.
        </p>

        <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-500">
          Do not book flights until your application is approved.
        </p>

        {/* Subtle TOS-friendly disclaimer */}
        <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-600 max-w-md mx-auto flex items-center justify-center gap-1.5">
          <Info className="h-3 w-3 flex-shrink-0" />
          This dev portal provides information only — applications and transactions are processed through our listing partners above.
        </p>
      </section>

      {/* ── Standard Retreat Package Modal ── */}
      <AnimatePresence>
        {standardOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm" onClick={() => setStandardOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              className="relative z-10 w-full max-w-lg rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 pb-2">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-amber-500" />
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">Standard Retreat</h3>
                </div>
                <button onClick={() => setStandardOpen(false)} className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors" aria-label="Close"><X className="h-5 w-5" /></button>
              </div>
              <div className="px-6 pb-6 space-y-4">
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  The Standard Retreat is our foundational offering — a powerful introduction to the Plants & Miracles
                  teaching in an intimate group setting with traditional Shipibo curanderos.
                </p>
                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-start gap-2"><Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" /> Multiple ceremony nights</li>
                  <li className="flex items-start gap-2"><Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" /> Shared accommodation at our partner centers</li>
                  <li className="flex items-start gap-2"><Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" /> All dieta-compliant meals</li>
                  <li className="flex items-start gap-2"><Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" /> Group sharing circles & integration support</li>
                  <li className="flex items-start gap-2"><Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" /> 3-month post-retreat integration program</li>
                </ul>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 italic">
                  Detailed pricing and availability available through our listing partners.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Extended Program Package Modal ── */}
      <AnimatePresence>
        {extendedOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm" onClick={() => setExtendedOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              className="relative z-10 w-full max-w-lg rounded-2xl bg-white dark:bg-neutral-900 border border-amber-200 dark:border-amber-800 shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 pb-2">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-amber-500" />
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">Extended Program</h3>
                </div>
                <button onClick={() => setExtendedOpen(false)} className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors" aria-label="Close"><X className="h-5 w-5" /></button>
              </div>
              <div className="px-6 pb-6 space-y-4">
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  The Extended Program is a 12-day immersion for those who feel called deeper. It includes
                  additional ceremonies, a master plant introduction, and an extended dieta for amplified healing.
                </p>
                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-start gap-2"><Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" /> All Standard Retreat inclusions</li>
                  <li className="flex items-start gap-2"><Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" /> Extended 12-day stay with additional ceremony nights</li>
                  <li className="flex items-start gap-2"><Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" /> Master plant introduction ceremony</li>
                  <li className="flex items-start gap-2"><Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" /> Extended dieta program</li>
                  <li className="flex items-start gap-2"><Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" /> Deeper one-on-one time with curanderos</li>
                </ul>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 italic">
                  Detailed pricing and availability available through our listing partners.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Master Plant Dieta Package Modal ── */}
      <AnimatePresence>
        {masterOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm" onClick={() => setMasterOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              className="relative z-10 w-full max-w-lg rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 pb-2">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-amber-500" />
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">Master Plant Dieta</h3>
                </div>
                <button onClick={() => setMasterOpen(false)} className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors" aria-label="Close"><X className="h-5 w-5" /></button>
              </div>
              <div className="px-6 pb-6 space-y-4">
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  The Master Plant Dieta is for those who feel a deep calling to work with specific master plants
                  in isolation — the traditional shamanic path of receiving plant teachings directly.
                </p>
                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-start gap-2"><Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" /> 7–30 day programs tailored to your calling</li>
                  <li className="flex items-start gap-2"><Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" /> Isolation dieta with a specific master plant</li>
                  <li className="flex items-start gap-2"><Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" /> Daily guidance from curanderos</li>
                  <li className="flex items-start gap-2"><Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" /> All meals, accommodation, and ceremony inclusions</li>
                  <li className="flex items-start gap-2"><Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" /> Profound integration support for extended journeys</li>
                </ul>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 italic">
                  Detailed pricing and availability available through our listing partners.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      </div>
    </>
  );
}
