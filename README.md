# I Am One Self 🦉🦅 — The Holy Earth Foundation

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

**iamoneself.com** is the online home of the **Holy Earth Foundation**, led by Isaiah "Kenney". The site bridges **A Course in Miracles** (The Eagle 🦅) with **Plant Medicine traditions** (The Condor) in a teaching called **Plants & Miracles** — where differences come to an end in the Golden Halo of Light. The Barn Owl 🦉 symbolizes the two birds flying as one — Single-Mindedness.

This private repo is the build workspace. The public preview (`iamoneself-public-preview`) is the filtered output automatically synced on every push to `main`.

**Sponsor & Spiritual Lead:** Isaiah "Kenney" (Kenneth Zimbleman)
**Developer / builder:** Christopher Wilson (`drasticstatic`)
**AI agents:** Alfred (Claude Code CLI) — primary technical architect & builder

---

## 🎯 The Goal

Build a robust back-end context engine and interactive FAQ/knowledge-base interface in accordance with the retreats and spiritual coaching services of iamoneself.com — a dev portal that presents the teaching in an interactive Next.js static site with AI-assisted FAQ deep-linking, teaching modals, and scroll-driven discovery. It points to the official Wix site and licensed platforms (Retreat Guru, Aya Advisors) for bookings — never duplicating transactions. We aim to comply with GitHub Pages Terms of Service; as a solo developer learning to use code to help people, I may make mistakes along the way and welcome guidance.

- **Wix integration** — external pages callable from Wix, future backend hook (deeper context for AI-assisted site management)
- **Shadowban compliance** — safe keyword alternatives on all public-facing pages
- **FAQ page** — 98 questions across 9 categories, color-coded, deep-linked
- **Retreats page** — Chaiconi Bari teachings, healer bios, 18 teaching sections, Retreat Guru & Aya Advisors booking
- **Plants & Miracles** — the core teaching: Eagle + Condor, Golden Halo, Winged Sun
- **Spiritual Life Coaching** — ACIM study, 12 & 12, integration coaching
- **Art gallery** — David Amaringo's visionary artwork
- **Re-firecrawl ready** — re-scrape iamoneself.com anytime Kenney updates Wix content

---

## 🚀 Capabilities

### Core Features
- **Home** — Hero with ACIM quote, welcome letter, 6 bento nav cards, 11 teaching pills with modal + FAQ deep-links, agent chat concept
- **FAQ** — 98 questions across 9 color-coded categories, search, anchor-based deep-linking with auto-open + highlight
- **Retreats** — Kenney's welcome, 3 partner centers, 3 healer bios, 18 Winged Sun teaching sections with ACIM quotes, retreat topics, Retreat Guru & Aya Advisors CTAs
- **Custom 404 / Sitemap** — Spiritual theme + integrated Pagefind search + full dual sitemap (live pages + in-development pages with EyeOff indicator)
- **Disclaimer Badge** — Persistent amber banner + concept-prototype disclosure modal
- **AI Agent Concept** — Chat field + modal with sample deep-link questions (prototype, not a live API)

### Technical
- Next.js 16 (App Router) — Static Site Generation (`output: 'export'`)
- Tailwind CSS + Framer Motion — spiritual aesthetic, subtle entrance animations
- TypeScript throughout — typed content data in `src/data/`
- GitHub Pages deployment via public preview repo
- Private → public sync via GitExporter denylist pipeline
- Dark mode support across all pages
- Gold scroll progress bar, scroll indicator, mobile hamburger menu

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
│   ├── faq/                  → FAQ — 98 questions, 9 categories, deep-links
│   ├── retreats/             → Chaiconi Bari — teachings, healers, booking
│   ├── not-found.tsx         → Custom 404 — spiritual theme + sitemap
│   └── layout.tsx            → Root layout — Navbar, DisclaimerBadge, ScrollProgress, Footer
├── components/
│   ├── layout/               → Navbar (hamburger, dropdown, portal home), Footer
│   ├── TeachingModal.tsx     → Teaching pill modal with FAQ deep-links
│   ├── DisclaimerBadge.tsx   → Persistent banner + disclosure modal
│   ├── PageScrollProgress.tsx → Gold scroll progress bar
│   └── ScrollProgress.tsx    → Scroll indicator
├── data/
│   └── faq.ts                → FAQ content data (98 items, typed)
└── lib/
    └── utils.ts              → cn() and helpers
```

---

## 🗺️ Wix Site Map

The official Wix-hosted site at [iamoneself.com](https://www.iamoneself.com) includes:

### Live — linked in site navigation
| Page | URL |
|------|-----|
| Home | iamoneself.com |
| Plants & Miracles | iamoneself.com/plants-and-miracles |
| Letters to Self | iamoneself.com/letters-to-self |
| Spiritual Life Coaching | iamoneself.com/spiritual-life-coaching |
| Psychedelic Mystic Teachings | iamoneself.com/psychedelic-mystic-teachings |
| Voice of the One Podcast | iamoneself.com/voice-of-the-one-podcast |
| Contact | iamoneself.com/about-the-speaker |

### Published — not linked in navigation (in development)
| Page | URL | Note |
|------|-----|------|
| Contact (Legacy) | iamoneself.com/contact | Hidden page on Wix |
| About the Foundation | iamoneself.com/about-the-foundation | |
| Welcome Letter | iamoneself.com/welcome-letter | |
| Talks on YouTube | iamoneself.com/talks-on-youtube | |
| FAQ | iamoneself.com/faq | Wix FAQ — empty, ready for migration test |
| Miracle Retreats | iamoneself.com/miracle-retreats | |

> This dev portal points to the Wix site for all transactions (retreat bookings, coaching, contact). The Next.js layer serves as a technology showcase and context engine — not a replacement.

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
