import Link from "next/link";
import { ExternalLink, Code, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      {/* CTA Section */}
      <section className="px-6 py-20 text-center">
        <p className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
          God Saves!
        </p>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          — Isaiah Kenney
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://www.iamoneself.com/spirituallifecoaching"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300 px-6 py-3 text-sm font-medium text-amber-700 transition hover:bg-amber-50 dark:border-amber-800 dark:text-amber-400 dark:hover:bg-amber-950"
          >
            Spiritual Life Coaching
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://www.iamoneself.com/about-the-speaker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 transition hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            About the Speaker
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Prominent 404 button — we want people to find it */}
        <div className="mt-8">
          <Link
            href="/404"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 transition hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600"
          >
            <Sparkles className="h-4 w-4 text-amber-500 dark:text-amber-400" />
            Explore the 404
          </Link>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-neutral-100 dark:border-neutral-800 px-6 py-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 dark:text-neutral-600">
          {/* Left: copyright */}
          <p>&copy; {new Date().getFullYear()} The Holy Earth Foundation</p>

          {/* Center: Wix links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.iamoneself.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition hover:text-amber-600 dark:hover:text-amber-400"
            >
              iamoneself.com
              <ExternalLink className="h-3 w-3" />
            </a>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <a
              href="https://www.iamoneself.com/plantsandmiracles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition hover:text-amber-600 dark:hover:text-amber-400"
            >
              Plants & Miracles
              <ExternalLink className="h-3 w-3" />
            </a>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <a
              href="https://www.iamoneself.com/letterstoself"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition hover:text-amber-600 dark:hover:text-amber-400"
            >
              Letters to Self
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Right: GitHub source */}
          <a
            href="https://github.com/drasticstatic/iamoneself-public-preview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-neutral-600 dark:hover:text-neutral-400"
          >
            <Code className="h-3.5 w-3.5" />
            GitHub Source Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
