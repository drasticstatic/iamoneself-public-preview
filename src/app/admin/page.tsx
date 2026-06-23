import { Wrench, Shield } from "lucide-react";

export const metadata = {
  title: "Admin — I Am One Self",
  description: "Administrative portal for the Holy Earth Foundation retreat operations.",
};

export default function AdminPage() {
  return (
    <>
      <div data-pagefind-body>
        {/* Hero */}
        <section className="relative px-6 py-24 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-4 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 mb-6">
            <Wrench className="h-4 w-4" />
            Operations
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Admin Portal
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Administrative tools and resources for the Holy Earth Foundation team.
          </p>
          <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-neutral-400 to-transparent" />

          {/* Auth-gated placeholder */}
          <div className="mt-10 max-w-md mx-auto p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Shield className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Access Restricted</h2>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              This section requires authentication. Administrative tools are available to authorized team members only.
              Contact the technical lead for access.
            </p>
          </div>

          <p className="mt-10 text-sm text-neutral-400 dark:text-neutral-500 italic">
            Return to the{" "}
            <a href="/" className="text-amber-600 dark:text-amber-400 hover:underline">
              retreat portal
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}
