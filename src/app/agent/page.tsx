import { MessageSquare, Sparkles } from "lucide-react";

export const metadata = {
  title: "Agent — I Am One Self",
  description: "AI-powered retreat guidance assistant coming soon.",
};

export default function AgentPage() {
  return (
    <>
      <div data-pagefind-body>
        {/* Hero */}
        <section className="relative px-6 py-24 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 px-4 py-1.5 text-sm text-violet-700 dark:text-violet-400 mb-6">
            <MessageSquare className="h-4 w-4" />
            AI-Guided Intake
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Your Guide Is Coming
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            An AI-powered intake assistant is being developed to guide you through the application process,
            answer your questions in real-time, and help you find the right retreat for your journey.
          </p>
          <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
          <div className="mt-10 max-w-md mx-auto p-6 rounded-2xl border border-violet-200 dark:border-violet-800 bg-violet-50/50 dark:bg-violet-950/20 text-left">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="h-5 w-5 text-violet-600 dark:text-violet-400" />
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">What's Coming</h2>
            </div>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>Conversational intake — answer questions at your own pace</li>
              <li>Smart matching — find the right retreat center and program</li>
              <li>Medical pre-screening guidance — know what to prepare</li>
              <li>Integration preparation — get ready before you arrive</li>
              <li>Post-retreat follow-up — stay connected to the healing</li>
            </ul>
          </div>
          <p className="mt-10 text-sm text-neutral-400 dark:text-neutral-500 italic">
            For now, please apply through our{" "}
            <a href="/register" className="text-amber-600 dark:text-amber-400 hover:underline">
              Register page
            </a>
            {" "}or{" "}
            <a href="/faq" className="text-amber-600 dark:text-amber-400 hover:underline">
              browse the FAQ
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}
