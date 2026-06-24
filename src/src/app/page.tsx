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
  Send,
  Leaf,
  X,
  BotMessageSquare,
} from "lucide-react";
import { TeachingModal, type TeachingPill } from "@/components/TeachingModal";
import AdminPanel from "@/components/AdminPanel";

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
    href: "https://www.iamoneself.com/plants-and-miracles",
    title: "Plants & Miracles",
    description:
      "The Flight of the Eagle & Condor — where A Course in Miracles meets the ancient Amazonian healing tradition.",
    icon: Leaf,
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
    href: "https://www.iamoneself.com/letters-to-self",
    title: "Letters to Self",
    description:
      "Personal letters of spiritual insight, reflection, and the journey toward Single-Mindedness — written from the heart of the teaching.",
    icon: Feather,
    external: true,
  },
  {
    href: "https://www.iamoneself.com/spiritual-life-coaching",
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
  {
    id: "sacred-silence",
    label: "Sacred Silence",
    title: "Sacred Silence — The Voice Beyond Words",
    body: "In the stillness between thoughts, the Holy Spirit speaks — not in words, but in the gentle certainty of peace. Sacred Silence is the practice of turning inward, beyond the noise of the ego's constant commentary, to listen for the Voice that reminds you of who you truly are. In ceremony and in daily life, this silence is where the inner light reveals itself — the Golden Halo perceived in the quiet of a receptive mind.",
    faqAnchor: "single-mindedness",
  },
  {
    id: "unity-consciousness",
    label: "Unity Consciousness",
    title: "Unity Consciousness — The Recognition of Oneness",
    body: "Unity Consciousness is the awareness that there is no separation — not between you and your Creator, not between you and your brother, not between the physical and the spiritual. The ego's world of differences dissolves when the Spiritual Eye opens, and what remains is a single, radiant light: the Face of Christ seen in everyone and everything. This is the goal of our teaching — Single-Mindedness, where two become one and the illusion of attack simply vanishes.",
    faqAnchor: "face-of-christ",
  },
  {
    id: "compassion",
    label: "Compassion",
    title: "Compassion — The Miracle of True Forgiveness",
    body: "Compassion in our teaching is not pity — it is the recognition that the one who seems to attack you is calling for love in the only way they know how. The miracle of true forgiveness sees past the body's story to the guiltless Self that resides in everyone. When you respond with compassion instead of defense, you offer the miracle — and the inner light that shines from you illuminates both giver and receiver. This is the heart of A Course in Miracles.",
    faqAnchor: "what-makes-different",
  },
  // ── Winged Sun Teachings (from retreat page) ──
  {
    id: "what-is-ayahuasca",
    label: "What is the Medicine?",
    title: "What is Ayahuasca?",
    body: "Ayahuasca is a sacred brew prepared from the Ayahuasca vine (Banisteriopsis caapi) and the Chakruna leaf (Psychotria viridis), following a 7-generation Shipibo-Conibo lineage recipe. The vine contains harmala alkaloids that act as MAO inhibitors; the leaf contains N,N-DMT — the visionary compound. Some lineages also include Chaliponga leaf, which contains 5-MeO-DMT, known for its intensely mystical quality. Small amounts of Nicotina Rustica — a native Amazonian tobacco — are traditionally cooked into the brew to aid purging. These proportions are not arbitrary — they are the result of centuries of indigenous empirical wisdom.",
    faqAnchor: "the-teaching-the-experience",
    pmLink: "https://www.iamoneself.com/plants-and-miracles",
    pmtLink: "https://www.iamoneself.com/psychedelic-mystic-teachings",
  },
  {
    id: "the-compound",
    label: "The Compound",
    title: "The Compound — A Magic Principle",
    body: 'In our teaching, Ayahuasca is a "Magic Principle" — an outside substance used by the Holy Spirit to provide temporary healing power and insight. It amplifies the content of the mind, bringing conditioning and "level confusion" into awareness so that healing can occur. As Pablo Amaringo said: "From experience, I came to learn that ayahuasca bestows upon the user knowledge about a variety of topics, not only consciousness and perception, but also leads one to realize that what we perceive is an illusion."',
    faqAnchor: "what-makes-different",
    pmLink: "https://www.iamoneself.com/plants-and-miracles",
    pmtLink: "https://www.iamoneself.com/psychedelic-mystic-teachings",
  },
  {
    id: "two-thought-systems",
    label: "Two Thought Systems",
    title: "The 2 Thought Systems, 3 Worlds & 3 Levels of Consciousness",
    body: 'There are only two thought systems: the ego\'s (fear, guilt, attack, separation) and the Holy Spirit\'s (love, forgiveness, peace, unity). You cannot serve two masters. The ego\'s thought system produces the physical world of perception. The Holy Spirit\'s correction reveals the real world — the world seen through the Spiritual Eye. The three levels of consciousness map to these systems: body-identification (the ego\'s domain), soul-identification (the bridge of the Holy Spirit), and spirit-identification (the Christ-Mind, where the Golden Halo is perceived and Single-Mindedness is achieved). As the Course asks: "Do you not see that all your misery comes from the strange belief that you are powerless?"',
    faqAnchor: "what-makes-different",
    pmLink: "https://www.iamoneself.com/plants-and-miracles",
  },
  {
    id: "project-vs-extension",
    label: "Project vs Extension",
    title: "Project vs Extension",
    body: "The ego projects — it casts outward from a mind that believes in separation, creating a world of attack, defense, and fear. The Holy Spirit extends — it radiates outward from the Christ-Mind, creating in the likeness of God: love, innocence, and unity. Projection makes the physical world you see. Extension creates the real world the Spiritual Eye reveals. When you shift from projecting to extending, you change what you perceive. This is the miracle: not that the world changes, but that your perception of it does. From a world of guilt to a world of grace.",
    faqAnchor: "what-makes-different",
    pmLink: "https://www.iamoneself.com/plants-and-miracles",
  },
  {
    id: "how-reality-is-built",
    label: "How Reality is Built",
    title: "How Reality is Built",
    body: 'What you see reflects what you believe. The world you perceive is a mental projection — the outer picture of an inner condition. Change the cause (the mind) and the effect (the world) must change. This is why the ego works so hard to convince you that the world acts upon you — because that keeps the cause hidden in your own mind, where the ego rules. The Holy Spirit\'s teaching reverses this: you are the cause, not the effect. "What happens is what I desire. What does not occur is what I do not want to happen." When you accept this, you reclaim your power as the Son of God.',
    faqAnchor: "escape-from-darkness",
    pmLink: "https://www.iamoneself.com/plants-and-miracles",
  },
  {
    id: "reinterpretation-of-defenses",
    label: "Reinterpretation of Defenses",
    title: "Reinterpretation of Defenses",
    body: 'The "re-interpretation of defenses" is necessary for the inner light to break out into the mind and the true Spiritual Eye of Light to awaken. Most of us live with all our defenses pointed towards protecting a private mind — perceiving ourselves as different from others, managing our lives to achieve worldly thrills. The Atonement means placing your mind under Guidance in defense of reintegrating back into the Christ-Mind of the Holy Spirit. It requires the willingness to let go of all things that don\'t serve you — and the courage to head towards the Light in the escape from darkness.',
    faqAnchor: "escape-from-darkness",
    pmLink: "https://www.iamoneself.com/plants-and-miracles",
  },
  {
    id: "grievances-and-guilt",
    label: "Grievances & Guilt",
    title: "Grievances & The Problem of Guilt",
    body: 'Grievances are what keep the mind sick and shackled to the body. When you hold a grievance against anyone, you are holding a judgment that says: "You are guilty and I am innocent." But guilt is never real — it is the ego\'s primary weapon for maintaining the illusion of separation. The Holy Spirit teaches that guilt has no cause, because what the ego says you did never happened in truth. Let go of grievances and you can enter other dimensions of existence beyond the physical world.',
    faqAnchor: "forgiveness-innocent-perception",
    pmLink: "https://www.iamoneself.com/plants-and-miracles",
  },
  {
    id: "defend-yourself-attacked",
    label: "Defend Yourself, Attacked",
    title: "If You Defend Yourself, You Are Attacked",
    body: 'This is one of the most radical teachings in A Course in Miracles. Defense is the ego\'s primary strategy — it says: "I must protect myself from attack." But defense affirms the reality of attack, and what you affirm as real becomes real for you. When you defend, you are saying: "Attack is real, and I am vulnerable to it." The Holy Spirit teaches the opposite: attack has no cause because guilt is not real. When you drop your defenses, the attack you feared dissolves — because it was always a projection of your own mind.',
    faqAnchor: "forgiveness-innocent-perception",
    pmLink: "https://www.iamoneself.com/plants-and-miracles",
  },
  {
    id: "two-step-four-step",
    label: "2-Step & 4-Step",
    title: "The 2-Step and the 4-Step to Heaven",
    body: 'The Course teaches a simple 2-step: (1) recognize that the ego\'s thought system of fear and guilt is not who you are, and (2) choose the Holy Spirit\'s correction instead. The 4-step expands this into practice: (1) notice when you are perceiving through the ego\'s lens of attack, (2) pause and ask for the Holy Spirit\'s interpretation, (3) accept the correction that what you see is a projection of your own mind, and (4) respond with love instead of defense. This is the practical application of miracle forgiveness — the path from darkness to light.',
    faqAnchor: "miracle-principles",
    pmLink: "https://www.iamoneself.com/plants-and-miracles",
  },
  {
    id: "miracle-principles-with-ayahuasca",
    label: "Miracle Principles",
    title: "Miracle Principles with Ayahuasca",
    body: 'The 76 Miracle Principles from A Course in Miracles form the cognitive backbone of our teaching. During ceremony, the sacred brew amplifies these principles so you can experience them directly rather than merely understanding them intellectually. A few key principles: Miracles are expressions of love. Miracles are natural. Miracles dissolve error. Miracles honor everyone. Miracles are thought-creations. The sacred brew does not create the miracle — your willingness to see differently does. The medicine simply amplifies your willingness so the shift can happen more rapidly.',
    faqAnchor: "miracle-principles",
    pmLink: "https://www.iamoneself.com/plants-and-miracles",
    pmtLink: "https://www.iamoneself.com/psychedelic-mystic-teachings",
  },
  {
    id: "fallen-angels",
    label: "Fallen Angels",
    title: "The Fallen Angels of Humanity",
    body: 'A Course in Miracles teaches: "The Atonement is the knowledge that the belief that angels can fall is false." The fallen angels represent the ego\'s thought system — the belief that separation from God is real, that attack is possible, and that guilt is justified. When you believe you have fallen from grace, you project that belief onto everyone you see, creating a world of fear and judgment. The teaching of the Winged Sun reveals the truth: the fall never happened. You remain as God created you — guiltless, whole, and one with your Creator.',
    faqAnchor: "escape-from-darkness",
    pmLink: "https://www.iamoneself.com/plants-and-miracles",
  },
];


// Agent questions — reused in Guide modal prompts (kept for future AI integration)
const agentQuestions = [
  { label: "What are Miracle Principles?", color: "amber" },
  { label: "Which retreat program is right for me?", color: "emerald" },
  { label: "How do I prepare for ceremony?", color: "amber" },
  { label: "Is participating safe?", color: "amber" },
  { label: "What is the Golden Halo of Light?", color: "amber" },
  { label: "What happens after the retreat?", color: "rose" },
];

export default function Home() {
  const [activePill, setActivePill] = useState<TeachingPill | null>(null);
  const [adminOpen, setAdminOpen] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Hide scroll indicator once user scrolls past hero, reappear at top
  useEffect(() => {
    const onScroll = () => {
      setShowScrollIndicator(window.scrollY <= 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Keyboard shortcuts: Cmd+Shift+U → admin panel (Unlock — no browser conflict) */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === "U") {
        e.preventDefault();
        setAdminOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="flex flex-col min-h-screen" data-pagefind-body>
      {/* Teaching Modal Portal */}
      <TeachingModal pill={activePill} onClose={() => setActivePill(null)} />

      {/* Admin Panel Modal */}
      <AdminPanel open={adminOpen} onClose={() => setAdminOpen(false)} />

      {/* Guide Modal is now in Navbar — accessible from any page */}

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
          className="relative max-w-4xl text-2xl font-semibold leading-relaxed tracking-tight sm:text-4xl sm:leading-snug md:text-5xl md:leading-tight text-neutral-900 dark:text-neutral-50"
        >
          <span className="text-amber-600 dark:text-amber-400">
            &ldquo;I am one Self,
          </span>{" "}
          united with my Creator,{" "}
          <br className="hidden md:block" />
          at one with every aspect of creation,{" "}
          <br className="hidden md:block" />
          and limitless in power and in peace.&rdquo;
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400"
        >
          A Sufi Message of Love, Harmony, and Beauty
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.5}
          className="mt-1 max-w-xl text-base text-neutral-500 dark:text-neutral-500 italic"
        >
          — The Holy Earth Foundation
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

        {/* ── Guide Chat — compact input row, click opens Guide modal ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-8 w-full max-w-lg mx-auto"
        >
          <button
            onClick={() => window.dispatchEvent(new Event("open-guide-modal"))}
            className="w-full rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-violet-300 dark:hover:border-violet-800 transition-all hover:-translate-y-0.5 flex items-center gap-2 px-5 py-3"
          >
            <BotMessageSquare className="h-4 w-4 text-violet-500 flex-shrink-0" />
            <span className="flex-1 text-left text-sm text-neutral-400 dark:text-neutral-500">
              Ask about retreats, the medicine, preparation…
            </span>
            <Send className="h-4 w-4 text-neutral-300 dark:text-neutral-600" />
          </button>
          <p className="mt-2 text-center text-[10px] text-neutral-400 dark:text-neutral-600">
            AI guide — sample prompts help you explore our teachings
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
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
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
          Discover profound wisdom through our sacred teachings. Tap any topic to learn more about its transformative power.
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

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={3}
          className="mt-6 text-sm text-neutral-500 dark:text-neutral-500"
        >
          Each opens a window into the path — a modal will direct you to the related question in our FAQ — Discover the inner light within.
        </motion.p>

        {/* External Wix teachings reference */}
        <motion.a
          href="https://www.iamoneself.com/psychedelic-mystic-teachings"
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={4}
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-600 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
        >
          <ExternalLink className="h-3 w-3" />
          Full teachings on iamoneself.com → Psychedelic Mystic Teachings
        </motion.a>
      </section>
    </div>
  );
}
