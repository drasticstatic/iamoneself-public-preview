# Sustainability

### I Am One Self — The Holy Earth Foundation

This page explains how the I Am One Self retreat portal is built, hosted, and
stewarded so that it can run lean, stay free, and remain a resource the
community and other nonprofits can rely on — and learn from.

---

## Why this page exists

Most retreat and nonprofit websites sit inside a closed, paid platform. This
portal is intentionally different: it is an open, static, donation-light
foundation that can be read, understood, and adapted by anyone. This document
records the decisions that keep it sustainable over the long run.

---

## How the site is hosted

The portal is a **pure static site** — a Next.js app compiled ahead of time into
plain HTML, CSS, and JavaScript. At deploy time there is no server, no
database, and no server-side runtime.

- **Hosting:** GitHub Pages — free, generous limits, no monthly fee.
- **Runtime cost:** effectively zero. Pages are served as files.
- **Build cost:** a GitHub Actions run recompiles the site only when content
  changes.

Because nothing executes on a server, the prototype's own infrastructure
**collects and stores no personal data**. Nothing about a visitor is saved by
this site. (See the disclaimer on every page for the full wording, and the
[`roadmap`](roadmap.md) for how application submissions are relayed instead of
stored.)

---

## The two-repo model

Two repositories work together:

1. **A private source repository** — where the site is authored, edited, and
   reviewed. This holds the content, the code, and the team's working notes.
2. **A public preview repository** — the read-only mirror that GitHub Pages
   actually serves to visitors. This is where you are reading this file now.

A GitHub Actions workflow rebuilds the static site and copies **only the built
output** (plus a few documents such as this one and the
[`roadmap`](roadmap.md)) into the public preview repository. Source code is in
the public preview too, so the project is genuinely transparent and
auditable — but private notes, drafts, and operations material never leave
the private repo.

---

## What stays private (the denylist model)

The export follows a **denylist**: *everything* is included in the public
preview *except* an explicit list of private paths — setup scripts, raw
research scrapes, content backups, operations documents, environment files,
and internal task tracking. This is the inverse of an allowlist, which keeps a
site small by permitting only listed files. The denylist keeps the project
open by default and private only where it must be.

---

## Content stewardship

The site's teaching content — founded on *A Course in Miracles* and the
plants-and-miracles lineage — was **liberated from a closed Wix site** into an
open, version-controlled source of truth. Edits are now reviewable,
attributable, and recoverable.

For the FAQ specifically, the canonical content lives in one typed source file
and is automatically mirrored into a readable document and a spreadsheet for
review. This means a spiritual lead can mark up words on paper or in a sheet,
a developer applies the changes once, and every format stays in sync — no
duplicated effort, no drift.

---

## Open-source patterns for others

The technical patterns here are intentionally simple and reusable:

- A static-site generator with no server runtime.
- A two-repo private/public split with an automated export.
- A denylist-based publish model.
- Automatically-derived review copies of content.
- A client-side search index that ships with the site.

Other retreat centers and small nonprofits can adapt this scaffolding to stand
up a lean, transparent, low-cost web presence of their own.

---

## Stewardship

This portal is currently stewarded independently by a single developer who is
also a minister and an ACIM teacher. The work reflects a personal synthesis of
technical research, spiritual study, and community service. All content and
implementations should be understood in that context.

The webmaster is not anonymous in the sense that people cannot find or make
contact — but the true Author of this work is the Higher Power, the Holy
Spirit, the Voice for God. As *A Course in Miracles* teaches:

> *I am not a body. I am free. For I am still as God created me.*

---

## Lean nonprofit economics

A foundation serving a spiritual community should not have to spend its
resources on recurring hosting and platform fees. This architecture keeps the
recurring cost near zero, so donations and energy can go toward the work
itself — retreats, teaching, and service — rather than infrastructure.

---

## Status

This portal is a **concept prototype and educational resource**, not the
official iamoneself.com, and is compliant with GitHub Pages terms of service.
The official site remains live elsewhere; this portal exists to make the
foundation's retreat application and teaching content workable, transparent,
and open. See the [`roadmap`](roadmap.md) for where it is headed.

*Into the hands of the gift the gift is given.*
