import type { Metadata } from "next";
import Link from "next/link";
import { faqData } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ — I Am One Self",
  description:
    "Frequently asked questions about our sacred ceremonies, preparation, safety, travel logistics, and the Plants & Miracles teaching.",
};

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 py-24 mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          Everything you need to know before taking the next step.
        </p>
        <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      </section>

      {/* FAQ Sections */}
      <section className="px-6 pb-24 mx-auto max-w-4xl space-y-16">
        {faqData.map((category) => (
          <div key={category.category}>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
              {category.category}
            </h2>
            {category.description && (
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                {category.description}
              </p>
            )}
            <div className="space-y-8">
              {category.items.map((item) => (
                <details
                  key={item.question}
                  className="group border-l-2 border-amber-500/40 pl-6"
                >
                  <summary className="cursor-pointer text-lg font-medium text-neutral-900 dark:text-white list-none flex items-start gap-3 [&::-webkit-details-marker]:hidden">
                    <span className="mt-1 text-amber-500 transition-transform duration-200 group-open:rotate-90">
                      ▸
                    </span>
                    <span>{item.question}</span>
                  </summary>
                  <p className="mt-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Booking CTA */}
      <section className="px-6 py-16 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            Still have questions?
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Book a free discovery call or apply for our next retreat.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/retreats"
              className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-amber-700 transition-colors"
            >
              Apply for Retreat
            </Link>
            <a
              href="https://www.iamoneself.com/about-the-speaker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              About the Speaker
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
