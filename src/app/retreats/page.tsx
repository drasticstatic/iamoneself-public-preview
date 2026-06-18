import type { Metadata } from "next";
import Link from "next/link";
import { Mountain, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Retreats — I Am One Self",
  description:
    "Chaiconi Bari Ayahuasca Retreats in the Peruvian Amazon. Sacred ceremonies with traditional curanderos.",
};

export default function RetreatsPage() {
  return (
    <>
      {/* Hero */}
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
          Our 20-person retreats honor a 7-generation lineage recipe and the
          Plants & Miracles teaching.
        </p>
        <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      </section>

      {/* Retreat Centers */}
      <section className="px-6 pb-16 mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8 text-center">
          Our Partner Retreat Centers
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
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
          ].map((center) => (
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

      {/* Booking CTA */}
      <section className="px-6 py-16 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            Ready to Apply?
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Complete your application through our listing partners.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://iamoneself.retreat.guru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-amber-600/25 transition-all hover:bg-amber-700 hover:-translate-y-0.5"
            >
              Apply via Retreat Guru
            </a>
            <a
              href="https://www.ayaadvisors.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm hover:shadow-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all hover:-translate-y-0.5"
            >
              Find us on Aya Advisors
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-500">
            Do not book flights until your application is approved.
          </p>
        </div>
      </section>
    </>
  );
}
