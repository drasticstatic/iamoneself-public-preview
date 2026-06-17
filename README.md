# I Am One Self 🦉 — The Holy Earth Foundation

> *"I am one Self, united with my Creator, at one with every aspect of creation, and limitless in power and in peace."*
> — ACIM Lesson 95

[![License](https://img.shields.io/badge/license-Private-lightgrey?style=flat)](https://github.com/drasticstatic/iamoneself)
[![Public Preview](https://img.shields.io/badge/%F0%9F%8C%90%20Public%20Preview-Available-brightgreen)](https://drasticstatic.github.io/iamoneself-public-preview/) [![Synced via GitExporter](https://img.shields.io/badge/Synced%20via-GitExporter-blue)](https://github.com/open-condo-software/gitexporter) [![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code%20CLI-blueviolet)](https://code.claude.com/docs/en/overview) [![Status](https://img.shields.io/badge/Status-%F0%9F%94%A5%20Active%20Build-orange)](https://github.com/drasticstatic/iamoneself)

---

**🌐 [Explore the Public Preview →](https://drasticstatic.github.io/iamoneself-public-preview/)** · **🦉 [Visit the live site — iamoneself.com →](https://www.iamoneself.com)**

---

> 🔒 **Public mirror notice:** This repository is partially mirrored to a public preview via an automated GitExporter pipeline. The public version includes only sanitized source files. Private configuration, credentials, setup docs, agent configs, and workflow files are excluded.

---

## 👋 Dearly Beloved

**iamoneself.com** is the online home of the **Holy Earth Foundation**, led by Isaiah "Kenney". The site bridges **A Course in Miracles** (The Eagle) with **Plant Medicine traditions** (The Condor) in a teaching called **Plants & Miracles** — where differences come to an end in the Golden Halo of Light.

This private repo is the build workspace. The public preview (`iamoneself-public-preview`) is the filtered output automatically synced on every push to `main`.

**Sponsor & Spiritual Lead:** Isaiah "Kenney" (Kenneth Zimbleman)
**Developer / builder:** Christopher Wilson (`drasticstatic`)
**AI agents:** Alfred (Claude Code CLI) — primary technical architect & builder

---

## 🎯 The Goal

Amplify `iamoneself.com` by building a high-performance Next.js static site layer that works **in tandem with Wix** — storing context, powering external pages Wix can call, and enabling future CMS integration. Not reinventing the wheel — complimenting and ultimately integrating:

- **Wix integration** — external pages callable from Wix, future backend hook via Alfred
- **Shadowban compliance** — safe keyword alternatives on all public-facing pages
- **FAQ page** (Priority 1 — "First Home Run") — comprehensive, typed, accordion-driven
- **Retreat page** — Chaiconi Bari Ayahuasca retreats with Retreat Guru booking integration (accessible from Wix or standalone)
- **Plants & Miracles** — the core teaching: Eagle + Condor, Golden Halo, Winged Sun
- **Spiritual Life Coaching** — ACIM study, 12 & 12, psychedelic integration coaching
- **Art gallery** — David Amaringo's visionary ayahuasca artwork
- **19 teaching sections** from Kenney's Master Business Execution Plan
- **Re-firecrawl ready** — re-scrape iamoneself.com anytime Kenney updates Wix content

---

## 🚀 Capabilities

### Core Features
- FAQ page with typed data, accordion UI, and shadowban-safe language
- Retreat listing with Retreat Guru checkout integration
- Plants & Miracles teaching navigator (multi-section deep-scroll)
- Spiritual Life Coaching program cards (10+ coaching tracks)
- About page — Isaiah Kenney's Kundalini awakening story
- Artwork gallery — visionary ayahuasca art by David Amaringo

### Technical
- Next.js 15 (App Router) — Static Site Generation (`output: 'export'`)
- Tailwind CSS + Framer Motion — spiritual aesthetic, subtle entrance animations
- TypeScript throughout — typed content data in `src/data/`
- GitHub Pages deployment via public preview repo
- Private → public sync via GitExporter denylist pipeline
- Dark mode support across all pages

---

## 🏗️ Architecture

```
Private Repo (source + secrets)          Public Repo (GitHub Pages host)
github.com/drasticstatic/iamoneself →→→ github.com/drasticstatic/iamoneself-public-preview
        │                                        │
        │  GitExporter (on push to main)         │
        │  filters denylist → pushes clean       │
        └──────────────────────────────────────► └── GitHub Pages live URL
```

```text
src/
├── app/
│   ├── page.tsx              → Home / Landing
│   ├── faq/                  → FAQ page (Priority 1)
│   ├── retreats/             → Retreat info + booking
│   ├── teachings/            → Spiritual Principles, Sufi, Vedanta, Rainbow Body
│   ├── plants-and-miracles/  → Ayahuasca teaching section
│   ├── artwork/              → Art gallery
│   └── about/               → About Isaiah Kenney
├── components/
│   ├── layout/               → Header, Footer, Navigation
│   ├── ui/                   → Button, Card, Accordion
│   └── sections/            → Hero, Welcome, TeachingGrid, RetreatCard
├── data/
│   ├── faq.ts                → FAQ content data (typed)
│   ├── retreats.ts           → Retreat location data
│   └── teachings.ts          → Teaching page content
└── lib/
    └── utils.ts              → cn() and helpers
```

---

## 💻 Development

```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

## 📦 Static Build

```bash
npm run build
# Produces static site in /out
```

---

## 🤝 Collaboration

| Role | Who |
|------|-----|
| **Sponsor & Spiritual Lead** | Isaiah "Kenney" |
| **Technical Lead / Builder** | Christopher Wilson |
| **Agent** | Alfred (Claude Code CLI) |
| **Observer / Context Bridge** | Littlebird |

---

## 📜 License

Private repository. All rights reserved.
