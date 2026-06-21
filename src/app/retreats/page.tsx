import type { Metadata } from "next";
import Link from "next/link";
import {
  Mountain,
  ArrowRight,
  Crown,
  BookOpen,
  Leaf,
  Feather,
  Heart,
  Sparkles,
  Sun,
  Eye,
  Shield,
  Scale,
  Wind,
  Globe,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Retreats — I Am One Self",
  description:
    "Chaiconi Bari Ayahuasca Retreats in the Peruvian Amazon. Sacred ceremonies with traditional curanderos. The Plants & Miracles teaching.",
};

/* ── Retreat Centers ── */
const centers = [
  {
    name: "Sachimama",
    desc: "Deep in the Amazon Jungle near Iquitos. Traditional Shipibo healing in a family-like setting.",
    url: "https://www.sachimama.com",
  },
  {
    name: "Inca Shipiba",
    desc: "Sacred Valley location blending Andean and Shipibo traditions. Breathtaking mountain ceremonies.",
    url: "https://www.incashipiba.com",
  },
  {
    name: "The Garden of Peace",
    desc: "A sanctuary in the Amazon dedicated to peace and healing. 10-day and 30-day dieta programs.",
    url: "https://www.thegardenofpeace.com",
  },
];

/* ── Teaching Sections ── */
const teachings = [
  {
    id: "what-is-ayahuasca",
    icon: Leaf,
    color: "emerald",
    title: "What is Ayahuasca?",
    body: "Ayahuasca is a sacred brew prepared from the Ayahuasca vine (Banisteriopsis caapi) and the Chakruna leaf (Psychotria viridis), following a 7-generation Shipibo-Conibo lineage recipe. The vine contains harmala alkaloids that act as MAO inhibitors; the leaf contains N,N-DMT — the visionary compound. Some lineages also include Chaliponga leaf, which contains 5-MeO-DMT, known for its intensely mystical quality. Small amounts of Nicotina Rustica — a native Amazonian tobacco — are traditionally cooked into the brew to aid purging. These proportions are not arbitrary — they are the result of centuries of indigenous empirical wisdom.",
    quote: undefined,
  },
  {
    id: "the-compound",
    icon: Sparkles,
    color: "amber",
    title: "The Compound — A Magic Principle",
    body: 'In our teaching, Ayahuasca is a "Magic Principle" — an outside substance used by the Holy Spirit to provide temporary healing power and insight. It amplifies the content of the mind, bringing conditioning and "level confusion" into awareness so that healing can occur. As Pablo Amaringo said: "From experience, I came to learn that ayahuasca bestows upon the user knowledge about a variety of topics, not only consciousness and perception, but also leads one to realize that what we perceive is an illusion."',
    quote: '"Physical medications are forms of \'spells,\' but if you are afraid to use the mind to heal, you should not attempt to do so… Sometimes the illness has a sufficiently strong hold over the mind to render a person temporarily inaccessible to the Atonement. In this case it may be wise to utilize a compromise approach to mind and body, in which something from the outside is temporarily given healing belief." — ACIM, T-2.V.2:1-6',
  },
  {
    id: "the-teacher",
    icon: BookOpen,
    color: "violet",
    title: "The Teacher — Resurrection of Ayahuasca",
    body: "Ayahuasca is not merely a substance — it is a Teacher. The Spirit of Ayahuasca, known as the Vine of the Soul and Cosmic Serpent, is the Condor in our teaching. The Eagle is the resurrected one who wrote A Course in Miracles — the Spirit of Yeshua. Together they fly as one on the Wings of the Spirit of Immortal Light, bringing a teaching where differences come to an end. Together they fly as one bird shining in the oneness of the Golden Halo, the Face of Christ, helping us uncover the Great Peace of God.",
    quote: undefined,
  },
  {
    id: "plants-and-miracles",
    icon: Leaf,
    color: "green",
    title: "Plants & Miracles",
    body: 'Our "Plants & Miracles" curriculum integrates the 76 Miracle Principles from A Course in Miracles with the shamanic plant wisdom tradition. The course does not aim at teaching the meaning of love, for that is beyond what can be taught. It does aim, however, at removing the blocks to the awareness of love\'s Presence, Which is your natural inheritance. During ceremony, the sacred brew amplifies these principles so you can experience them directly — cognitive shifts that take you from body-identification (darkness/guilt) to soul-identification (light/peace).',
    quote: '"Nothing real can be threatened. Nothing unreal exists. Herein lies the Peace of God." — ACIM, Introduction',
  },
  {
    id: "eagle-and-condor",
    icon: Feather,
    color: "sky",
    title: "The Flight of the Eagle & Condor",
    body: "This is the prophecy that the Western mind of Medicine (The Eagle — Jesus, A Course in Miracles) will one day join with the Indigenous mind of Plant Wisdom (The Condor) for the good of humanity. The two teachings now live in harmony to heal mankind. The symbol of this union is the Barn Owl — the two birds flying as one — representing Single-Mindedness and seraphic (angelic) teaching. When the Eagle and Condor fly together, the illusion of attack dissolves and only love remains.",
    quote: undefined,
  },
  {
    id: "the-dieta",
    icon: Shield,
    color: "emerald",
    title: "The Dieta — Sacred Preparation",
    body: "The Dieta is a set of traditional dietary and lifestyle guidelines observed before, during, and after the retreat. It cleanses the body, reduces toxins, and opens sensitivity to the plant wisdom. Avoid pork, processed foods, alcohol, and caffeine. Abstain from sexual activity. Follow for at least 2 weeks before and 1 month after the retreat — some choose longer. The Dieta is more than a physical detox — it is an agreement you make with the medicine to make peace with your pain before the ceremony begins.",
    quote: undefined,
  },
  {
    id: "fallen-angels",
    icon: Wind,
    color: "rose",
    title: "The Fallen Angels of Humanity",
    body: 'A Course in Miracles teaches: "The Atonement is the knowledge that the belief that angels can fall is false." The fallen angels represent the ego\'s thought system — the belief that separation from God is real, that attack is possible, and that guilt is justified. When you believe you have fallen from grace, you project that belief onto everyone you see, creating a world of fear and judgment. The teaching of the Winged Sun reveals the truth: the fall never happened. You remain as God created you — guiltless, whole, and one with your Creator.',
    quote: '"The Atonement is the knowledge that the belief that angels can fall is false." — Jesus, ACIM T-1.35.7:6',
  },
  {
    id: "two-thought-systems",
    icon: Scale,
    color: "violet",
    title: "The 2 Thought Systems, 3 Worlds & 3 Levels of Consciousness",
    body: 'There are only two thought systems: the ego\'s (fear, guilt, attack, separation) and the Holy Spirit\'s (love, forgiveness, peace, unity). You cannot serve two masters. The ego\'s thought system produces the physical world of perception. The Holy Spirit\'s correction reveals the real world — the world seen through the Spiritual Eye. The three levels of consciousness map to these systems: body-identification (the ego\'s domain), soul-identification (the bridge of the Holy Spirit), and spirit-identification (the Christ-Mind, where the Golden Halo is perceived and Single-Mindedness is achieved). As the Course asks: "Do you not see that all your misery comes from the strange belief that you are powerless?"',
    quote: undefined,
  },
  {
    id: "project-vs-extension",
    icon: Eye,
    color: "amber",
    title: "Project vs Extension",
    body: "The ego projects — it casts outward from a mind that believes in separation, creating a world of attack, defense, and fear. The Holy Spirit extends — it radiates outward from the Christ-Mind, creating in the likeness of God: love, innocence, and unity. Projection makes the physical world you see. Extension creates the real world the Spiritual Eye reveals. When you shift from projecting to extending, you change what you perceive. This is the miracle: not that the world changes, but that your perception of it does. From a world of guilt to a world of grace.",
    quote: undefined,
  },
  {
    id: "how-reality-is-built",
    icon: Sun,
    color: "amber",
    title: "How Reality is Built",
    body: 'What you see reflects what you believe. The world you perceive is a mental projection — the outer picture of an inner condition. Change the cause (the mind) and the effect (the world) must change. This is why the ego works so hard to convince you that the world acts upon you — because that keeps the cause hidden in your own mind, where the ego rules. The Holy Spirit\'s teaching reverses this: you are the cause, not the effect. "What happens is what I desire. What does not occur is what I do not want to happen." When you accept this, you reclaim your power as the Son of God.',
    quote: '"It is impossible that anything should come to me unbidden by myself. Even in this world, it is I who rule my destiny." — ACIM, Lesson 253',
  },
  {
    id: "reinterpretation-of-defenses",
    icon: Shield,
    color: "rose",
    title: "Reinterpretation of Defenses",
    body: 'The "re-interpretation of defenses" is necessary for the inner light to break out into the mind and the true Spiritual Eye of Light to awaken. Most of us live with all our defenses pointed towards protecting a private mind — perceiving ourselves as different from others, managing our lives to achieve worldly thrills. The Atonement means placing your mind under Guidance in defense of reintegrating back into the Christ-Mind of the Holy Spirit. It requires the willingness to let go of all things that don\'t serve you — and the courage to head towards the Light in the escape from darkness.',
    quote: undefined,
  },
  {
    id: "grievances-and-guilt",
    icon: Scale,
    color: "rose",
    title: "Grievances & The Problem of Guilt",
    body: 'Grievances are what keep the mind sick and shackled to the body. When you hold a grievance against anyone, you are holding a judgment that says: "You are guilty and I am innocent." But guilt is never real — it is the ego\'s primary weapon for maintaining the illusion of separation. The Holy Spirit teaches that guilt has no cause, because what the ego says you did never happened in truth. Let go of grievances and you can enter other dimensions of existence beyond the physical world. The master plant Chuchuhuasi amplifies grievances — forcing you to face what is buried. Ayahuma strips away every rationalization, bringing the raw content of the unconscious into awareness.',
    quote: undefined,
  },
  {
    id: "forgiveness-and-innocence",
    icon: Heart,
    color: "amber",
    title: "Forgiveness & Innocent Perception",
    body: 'True forgiveness is not pardoning someone for what they did — it is the recognition that what the ego says happened never occurred in truth. The ego\'s forgiveness says: "You did wrong, but I forgive you." The Holy Spirit\'s forgiveness says: "You are guiltless, because what you seemed to do in the dream never really happened." This is the miracle — the shift from perceiving attack to perceiving innocence. When you see the Face of Christ in your brother, the illusion of guilt dissolves. Only love remains. This is the heart of A Course in Miracles and the goal of our teaching.',
    quote: undefined,
  },
  {
    id: "defend-yourself-attacked",
    icon: Shield,
    color: "rose",
    title: "If You Defend Yourself, You Are Attacked",
    body: 'This is one of the most radical teachings in A Course in Miracles. Defense is the ego\'s primary strategy — it says: "I must protect myself from attack." But defense affirms the reality of attack, and what you affirm as real becomes real for you. When you defend, you are saying: "Attack is real, and I am vulnerable to it." The Holy Spirit teaches the opposite: attack has no cause because guilt is not real. When you drop your defenses, the attack you feared dissolves — because it was always a projection of your own mind. The master plants reinforce this teaching directly: they show you that the source of fear is within you, and so is its release.',
    quote: '"In every difficulty, all distress, and each perplexity you face Christ calls to you, and gently says, \'My brother, choose again.\'" — ACIM T-31',
  },
  {
    id: "two-step-four-step",
    icon: Crown,
    color: "violet",
    title: "The 2-Step and the 4-Step to Heaven",
    body: 'The Course teaches a simple 2-step: (1) recognize that the ego\'s thought system of fear and guilt is not who you are, and (2) choose the Holy Spirit\'s correction instead. The 4-step expands this into practice: (1) notice when you are perceiving through the ego\'s lens of attack, (2) pause and ask for the Holy Spirit\'s interpretation, (3) accept the correction that what you see is a projection of your own mind, and (4) respond with love instead of defense. This is the practical application of miracle forgiveness — the path from darkness to light, from the ego\'s world to the real world.',
    quote: undefined,
  },
  {
    id: "miracle-principles-with-ayahuasca",
    icon: Sparkles,
    color: "amber",
    title: "Miracle Principles with Ayahuasca",
    body: 'The 76 Miracle Principles from A Course in Miracles form the cognitive backbone of our teaching. During ceremony, the sacred brew amplifies these principles so you can experience them directly rather than merely understanding them intellectually. A few key principles: Miracles are expressions of love. Miracles are natural. Miracles dissolve error. Miracles honor everyone. Miracles are thought-creations. The sacred brew does not create the miracle — your willingness to see differently does. The medicine simply amplifies your willingness so the shift can happen more rapidly.',
    quote: undefined,
  },
  {
    id: "golden-halo-of-light",
    icon: Sun,
    color: "amber",
    title: "The Golden Halo of Light",
    body: 'The Golden Halo manifests around the head and bodies of everyone when the true Spiritual Eye opens. It is the Face of Christ and the Unified Mind of Light — a vision through the power of miracle forgiveness that ends the illusion of differences and offers the remembrance of the Sons of God who share our true Self. This is not a physical light but a recognition: that every being you encounter is guiltless and whole. The Golden Halo is the energetic signature of this vision — the symbol of the "great and shining circle" spoken of in ACIM T-21.I.10:1.',
    quote: undefined,
  },
  {
    id: "escape-from-darkness",
    icon: Eye,
    color: "violet",
    title: "Escape from Darkness",
    body: 'Most of us live on the "outer fringes" of physical perception, caught in a cycle of grievances and past-dwelling. Escape from Darkness is the process of moving back into non-differentiated light — recognizing that the source of light is within you, not the physical sun. The ego\'s world is a world of darkness: fear, guilt, separation, and the belief that you are a body vulnerable to attack. The Holy Spirit\'s correction is the light: love, innocence, unity, and the recognition that you are a creation of Spirit, limitless and free. The master plants facilitate this escape by illuminating the dark corners of the mind.',
    quote: '"Do you not see that all your misery comes from the strange belief that you are powerless?" — ACIM, Ch. 21.VII',
  },
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
  return (
    <>
      <div data-pagefind-body>
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
        <div className="grid gap-6 sm:grid-cols-2">
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

      {/* ── Our Team of Healers ── */}
      <section className="px-6 py-20 mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2 text-center">
          Our Team of Healers
        </h2>
        <p className="text-neutral-500 dark:text-neutral-500 text-center mb-10">
          Masters of the Shipibo-Conibo tradition and the Plants & Miracles teaching.
        </p>
        <div className="space-y-8">
          {/* Isaiah */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-950/40 flex items-center justify-center">
                <Crown className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  Maestro Isaiah Kenney
                </h3>
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
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-violet-100 dark:bg-violet-950/40 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  Maestro Alex Wexukapi
                </h3>
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
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center">
                <Leaf className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  Maestro David Amaringo
                </h3>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                  Ayahuasca Visionary Artist & Co-founder
                </p>
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
      </section>

      {/* ── The Teachings ── */}
      <section className="px-6 py-20 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
            The Teaching of the Winged Sun
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            The teachings offered at Chaiconi Bari as part of the Plants & Miracles curriculum.
            Each section is a gateway to the Escape from Darkness and the remembrance of who you
            truly are.
          </p>
          <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </div>

        <div className="space-y-8">
          {teachings.map((t) => {
            const Icon = t.icon;
            const colors = colorMap[t.color] || colorMap.amber;
            return (
              <div
                key={t.id}
                id={t.id}
                className="scroll-mt-24 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden"
              >
                {/* Section header */}
                <div className={`px-6 sm:px-8 py-4 ${colors.bg} ${colors.border} border-b flex items-center gap-3`}>
                  <Icon className={`h-5 w-5 ${colors.icon}`} />
                  <h3 className={`text-lg font-semibold ${colors.text}`}>
                    {t.title}
                  </h3>
                </div>

                {/* Section body */}
                <div className="px-6 sm:px-8 py-6">
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
                    {t.body}
                  </p>

                  {/* Optional ACIM quote */}
                  {t.quote && (
                    <blockquote className="mt-6 pl-4 border-l-2 border-amber-300 dark:border-amber-700">
                      <p className="text-sm text-neutral-500 dark:text-neutral-500 italic leading-relaxed">
                        {t.quote}
                      </p>
                    </blockquote>
                  )}

                  {/* FAQ deep-link */}
                  <div className="mt-4 flex justify-end">
                    <Link
                      href="/faq"
                      className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400 hover:underline transition-colors"
                    >
                      Read more in the FAQ
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Retreat Topics ── */}
      <section className="px-6 py-16 mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8 text-center">
          Retreat Topics
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Miracle or True Forgiveness",
            "Real Intimacy",
            "Spiritual Sexuality",
            "Life Can Be SO Challenging",
            "The Addiction to Thinking",
            "A Course In Miracles & Helpful Magic",
            "A Journey Through Spiritual Principles",
            "Real Spiritual Life Manifestation",
            "The Nature of Addiction",
            "The Beginning of the End of Division",
          ].map((topic) => (
            <span
              key={topic}
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 px-4 py-2 text-sm font-medium text-amber-700 dark:text-amber-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="px-6 py-16 bg-neutral-50 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            What's Included
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Our retreats are all-inclusive from the moment you arrive — lodging, dieta-compliant meals,
            all ceremonies, sharing circles, and our comprehensive 3-month integration program.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 text-center shadow-sm">
              <p className="text-sm text-neutral-500 dark:text-neutral-500 uppercase tracking-wider font-medium">
                Standard Retreat
              </p>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                Multiple ceremony nights, shared accommodation, all meals, integration support
              </p>
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 font-medium">
                Apply for details
              </p>
            </div>
            <div className="rounded-2xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 p-6 text-center shadow-sm">
              <p className="text-sm text-amber-600 dark:text-amber-400 uppercase tracking-wider font-medium">
                Extended Program
              </p>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                12-day immersion with additional ceremonies, master plant introduction, extended dieta
              </p>
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 font-medium">
                Apply via Retreat Guru
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 text-center shadow-sm">
              <p className="text-sm text-neutral-500 dark:text-neutral-500 uppercase tracking-wider font-medium">
                Master Plant Dieta
              </p>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                7–30 day programs in isolation with specific master plants — for those called deeper
              </p>
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 font-medium">
                Apply for details
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-500">
            For pricing, program details, and financial assistance inquiries, please contact our listing partners directly through their official sites (this GitHub dev portal does not process inquiries).
          </p>
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
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://iamoneself.retreat.guru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-amber-600/25 transition-all hover:bg-amber-700 hover:-translate-y-0.5 dark:bg-amber-500 dark:shadow-amber-500/20 dark:hover:bg-amber-400"
          >
            <Mountain className="h-4 w-4" />
            Apply via Retreat Guru
          </a>
          <a
            href="https://www.ayaadvisors.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm hover:shadow-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all hover:-translate-y-0.5"
          >
            Find us on Aya Advisors
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/faq"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-5 py-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 shadow-sm hover:shadow-md hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all hover:-translate-y-0.5"
          >
            <BookOpen className="h-4 w-4" />
            Read the FAQ
          </Link>
          <a
            href="https://www.iamoneself.com/spirituallifecoaching"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-5 py-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 shadow-sm hover:shadow-md hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all hover:-translate-y-0.5"
          >
            <Globe className="h-4 w-4" />
            Spiritual Life Coaching
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-500">
          Do not book flights until your application is approved.
        </p>
      </section>
      </div>
    </>
  );
}
