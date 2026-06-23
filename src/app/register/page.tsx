import { NotebookPen, Mountain, ExternalLink, Sparkles } from "lucide-react";

export const metadata = {
  title: "Register — I Am One Self",
  description: "Apply for a sacred retreat with Chaiconi Bari and the Plants & Miracles teaching.",
};

export default function RegisterPage() {
  return (
    <>
      <div data-pagefind-body>
        {/* Hero */}
        <section className="relative px-6 py-24 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 px-4 py-1.5 text-sm text-amber-700 dark:text-amber-400 mb-6">
            <NotebookPen className="h-4 w-4" />
            Chaiconi Bari Retreats
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Begin Your Application
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Every journey begins with a single step. Your application is reviewed by our team and medical advisor with care and confidentiality.
          </p>
          <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </section>

        {/* Application Channels */}
        <section className="px-6 pb-24 mx-auto max-w-4xl">
          <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
            {/* Miracle Retreats — Primary */}
            <a
              href="https://www.iamoneself.com/miracle-retreats"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-2xl border border-orange-300 dark:border-orange-700 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-orange-100 dark:bg-orange-950/40">
                  <Sparkles className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  Miracle Retreats
                </h2>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Apply directly through our primary listing. Complete the application and medical form — our team reviews every submission.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-orange-600 dark:text-orange-400 group-hover:underline">
                Apply Now <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>

            {/* Retreat Guru */}
            <a
              href="https://iamoneself.retreat.guru"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-2xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/40">
                  <Mountain className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  Retreat Guru
                </h2>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Find us on Retreat Guru — a trusted platform for verified retreat listings with secure application processing.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 dark:text-amber-400 group-hover:underline">
                Apply via Retreat Guru <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>

          {/* Referral attribution */}
          <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto text-center">
            If you found us through Retreat Guru, Aya Advisors, or one of our partner listings, please indicate the referral
            source on your application so we can honor them appropriately.
          </p>

          {/* Info note */}
          <div className="mt-8 max-w-lg mx-auto p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-center">
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
