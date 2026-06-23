import { Footprints, Mountain, ExternalLink, Sparkles, Sun, NotebookPen } from "lucide-react";

export const metadata = {
  title: "Next Steps — I Am One Self",
  description: "Begin your application for a sacred retreat with Chaiconi Bari and the Plants & Miracles teaching.",
};

export default function ApplyPage() {
  return (
    <>
      <div data-pagefind-body>
        {/* Hero */}
        <section className="relative px-6 py-24 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 px-4 py-1.5 text-sm text-orange-700 dark:text-orange-400 mb-6">
            <NotebookPen className="h-4 w-4" />
            Application
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Next Steps
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Every journey begins with a single step. Your application is reviewed by our team and medical advisor with care and confidentiality.
          </p>
          <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </section>

        {/* Application Channels — 3-button layout from retreats page */}
        <section className="px-6 pb-12 mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            Apply Through Our Listing Partners
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 max-w-lg mx-auto mb-8">
            Complete the application and medical form on any of our verified listing platforms. Each application is reviewed by our team and medical advisor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </section>

        {/* Referral + Info */}
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
