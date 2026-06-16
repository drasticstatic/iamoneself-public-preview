# I Am One Self — The Holy Earth Foundation

> *"I am one Self, united with my Creator, at one with every aspect of creation, and limitless in power and in peace."*
> — ACIM Lesson 95

## About

This is the development repository for [iamoneself.com](https://www.iamoneself.com) — the online home of the Holy Earth Foundation, led by Isaiah "Kenney". The site bridges **A Course in Miracles** (The Eagle) with **Plant Medicine traditions** (The Condor) in a teaching called **Plants & Miracles**.

## Tech Stack

- **Next.js 15** (App Router) — Static Site Generation (`output: 'export'`)
- **Tailwind CSS** + **Framer Motion**
- **TypeScript** throughout
- **GitHub Pages** deployment via public preview repo

## Development

```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

## Static Build

```bash
npm run build
# Produces static site in /out
```

## Project Structure

- `src/app/` — Next.js App Router pages
- `src/components/` — Reusable React components
- `src/data/` — Typed content data (FAQ, retreats, teachings)
- `firecrawls/` — Raw scrape data (private, not deployed)
- `backups/` — Wix content backups (private, not deployed)
- `setup/` — Private setup scripts (not deployed)

## License

Private repository. All rights reserved.
