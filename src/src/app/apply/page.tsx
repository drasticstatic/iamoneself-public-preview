import { Footprints, Mountain, ExternalLink, Sparkles, Sun, NotebookPen, Leaf, BookOpen, Shield, HeartHandshake, Clock, Info, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Next Steps — I Am One Self",
  description: "Begin your application for a sacred retreat with Chaiconi Bari and the Plants & Miracles teaching.",
};

/* ── Application process steps ── */
const steps = [
  {
    icon: NotebookPen,
    title: "Submit Your Application",
    desc: "Complete the application and medical form through one of our listing partners. Be honest and thorough — this helps us prepare the safest, most supportive experience for you.",
  },
  {
    icon: Shield,
    title: "Medical Review",
    desc: "Our medical advisor reviews your health history and any medications. Safety is our highest priority — every application receives careful, confidential consideration.",
  },
  {
    icon: HeartHandshake,
    title: "Confirmation & Preparation",
    desc: "Once approved, you'll receive a preparation guide with dieta instructions, packing list, and everything you need for your journey. We're available to answer any questions along the way.",
  },
  {
    icon: Footprints,
    title: "Your Retreat Begins",
    desc: "Arrive at our partner center in the Peruvian Amazon. From the moment you arrive, lodging, meals, ceremonies, and integration support are all included.",
  },
];

/* ── What to expect timeline ── */
const timeline = [
  { label: "Application submitted", time: "Day 0" },
  { label: "Medical review & approval", time: "3–7 days" },
  { label: "Preparation guide & dieta begins", time: "2–4 weeks before" },
  { label: "Arrive at retreat center", time: "Day 1" },
  { label: "Ceremonies & integration", time: "7–12 days" },
  { label: "3-month integration program", time: "Post-retreat" },
];

export default function ApplyPage() {
  return (
    <>
      <div data-pagefind-body>
        {/* Hero */}
        <section className="relative px-6 py-24 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 px-4 py-1.5 text-sm text-orange-700 dark:text-orange-400 mb-6">
            <Footprints className="h-4 w-4" />
            Next Steps
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Begin Your Journey
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Every journey begins with a single step. Your application is reviewed by our team and medical advisor with care and confidentiality. We honor where you are and prepare for where you're going.
          </p>
          <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </section>

        {/* Application Channels — 3-button layout */}
        <section className="px-6 pb-16 mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            Apply Through Our Listing Partners
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 max-w-lg mx-auto mb-8">
            Complete the application and medical form on any of our verified listing platforms. Each application is reviewed by our team and medical advisor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </section>

        {/* How It Works — application process steps */}
        <section className="px-6 py-16 bg-neutral-50 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2 text-center">
              How It Works
            </h2>
            <p className="text-neutral-500 dark:text-neutral-500 text-center mb-10">
              From application to integration — we're with you every step.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="flex flex-col gap-3 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md hover:border-amber-300 dark:hover:border-amber-700 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-950/40 flex items-center justify-center text-amber-600 dark:text-amber-400 text-sm font-bold">
                      {i + 1}
                    </div>
                    <step.icon className="h-5 w-5 text-amber-500" />
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included — quick summary from retreats page */}
        <section className="px-6 py-16 mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
            What's Included
          </h2>
          <p className="text-neutral-500 dark:text-neutral-500 mb-8">
            All retreats are all-inclusive from the moment you arrive.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            {[
              "Multiple ceremony nights",
              "Shared accommodation at partner centers",
              "All dieta-compliant meals",
              "Group sharing circles & integration",
              "3-month post-retreat integration program",
              "Daily guidance from curanderos",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 px-3 py-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6">
            <Link
              href="/retreats#whats-included"
              className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 hover:underline font-medium"
            >
              <BookOpen className="h-4 w-4" />
              See full package details on the Retreats page
            </Link>
          </p>
        </section>

        {/* Timeline */}
        <section className="px-6 py-16 bg-neutral-50 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2 text-center">
              What to Expect
            </h2>
            <p className="text-neutral-500 dark:text-neutral-500 text-center mb-10">
              From application to post-retreat integration.
            </p>
            <div className="relative pl-8 border-l-2 border-amber-200 dark:border-amber-800 space-y-8">
              {timeline.map((item, i) => (
                <div key={item.label} className="relative">
                  <div className="absolute -left-[2.55rem] top-1 h-4 w-4 rounded-full bg-amber-100 dark:bg-amber-950/50 border-2 border-amber-400 dark:border-amber-600" />
                  <p className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                    {item.time}
                  </p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-0.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preparation Tips — brief guidance */}
        <section className="px-6 py-16 mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
            Before You Apply
          </h2>
          <p className="text-neutral-500 dark:text-neutral-500 mb-8 max-w-lg mx-auto">
            A few things to consider as you prepare for this sacred work.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <Leaf className="h-5 w-5 text-emerald-500 mb-2" />
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">The Dieta</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Preparation includes a dieta — a traditional dietary protocol that cleanses the body and opens the mind to receive the plant teachings. Your preparation guide will include full details.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <Shield className="h-5 w-5 text-amber-500 mb-2" />
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">Medical Safety</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Full disclosure of medications and health history is essential. Certain medications (SSRIs, MAOIs, heart conditions) require special consideration. Our medical advisor reviews every application.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <Clock className="h-5 w-5 text-sky-500 mb-2" />
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">Timing</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Apply at least 4–6 weeks before your desired retreat date. This allows time for review, preparation, and the dieta. Do not book flights until your application is approved.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <HeartHandshake className="h-5 w-5 text-violet-500 mb-2" />
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">Integration</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                The retreat is the beginning, not the end. Our 3-month integration program provides ongoing support as you bring the teachings into your daily life.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ link */}
        <section className="px-6 py-12 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Have Questions?
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto mb-6">
              Our FAQ covers everything from dieta details to travel logistics, safety, and what to expect during ceremony.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-amber-600/25 transition-all hover:bg-amber-700 hover:-translate-y-0.5"
            >
              <BookOpen className="h-4 w-4" />
              Read the FAQ
            </Link>
          </div>
        </section>

        {/* Referral + Disclaimer */}
        <section className="px-6 pb-24 mx-auto max-w-4xl text-center">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            If you found us through Retreat Guru, Aya Advisors, or one of our partner listings, please indicate the referral
            source on your application so we can honor them appropriately.
          </p>
          <div className="mt-8 max-w-lg mx-auto p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              This dev portal provides information only — applications and transactions are processed through our listing partners above.
            </p>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 font-medium">
              Do not book flights until your application is approved.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
