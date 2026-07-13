# Roadmap

### I Am One Self — The Holy Earth Foundation

This is the public roadmap for the retreat portal — where it stands today and
the direction it is heading. It is written so visitors, future contributors,
and partner organizations can see the path clearly. See
[`sustainability`](sustainability.md) for how the site is hosted and kept lean.

---

## Where we are now

- A concept **prototype and educational resource**, not the official
  iamoneself.com, compliant with GitHub Pages terms of service.
- Teaching content live: the FAQ (founded on *A Course in Miracles* and the
  plants-and-miracles lineage), the retreats page, and the plants-and-miracles
  section.
- A custom **four-step intake form** (personal → retreat → health → journey)
  that collects a full application and medical screen.
- A **guide agent** — the Oracle agent — on the FAQ page that helps newcomers
  find answers through client-side search — the first glimpse of AI-assisted
  guidance here.

---

## Intake backend

How an application actually reaches the team.

- **Now — placeholder, ships gracefully.** The intake form ships unconfigured:
  it relays a submission through the visitor's own email client (`mailto:`) to
  the team, or, if no address is set yet, points the visitor to the foundation's
  contact page. Nothing is stored by this site. The form is the **main entry
  point** for applying to a retreat.
- **Next — third-party relay.** Wire the form to a third-party form backend
  (Formspree) so submissions are delivered to the team reliably. The endpoint is
  a public POST target, not a secret, so it lives in client configuration; the
  form keeps working while this is set up at the team's pace.
- **Later — serverless function.** Move submission handling to a serverless
  function for custom validation and storage, retaining the same static site and
  the same form.

> **Why not a hosted form service like Typeform?** Those services replace your
> form with their own hosted interface. This portal already has a rich, custom,
> brand-faithful four-step form, so a *form backend* (Formspree) that keeps the
> existing form and only handles delivery is the right fit. A hosted UI was
> considered and set aside.

> **How Formspree handles submissions (and where it stops).** A form created on
> formspree.io shows each submission in its dashboard, emails it to the team
> inbox (the foundation's Google Workspace on the iamoneself.com domain), and can
> forward it to Google Sheets, Notion, or a webhook/automation (Zapier/Make). It
> also exposes an API to list submissions, so an early admin view could read
> applications straight from Formspree. But Formspree is a relay and a
> submission log — not a queryable database the admin panel owns. A real
> database with custom validation, search, and a nonprofit-owned store —
> Supabase or Firestore, or a Google Workspace spreadsheet behind a serverless
> function — is the serverless-function stage above. Until then, the admin
> panel manages content (FAQ and retreat text), not the application database.

---

## Agents — guiding newcomers

- **Now — the Oracle agent.** The FAQ guide helps a newcomer ask a question and
  find what the teaching actually says, in the foundation's voice.
- **Next — a form agent (a fork of the Oracle).** With the FAQ guide named and
  proven as the Oracle agent, a companion agent can fork from it to truly guide
  applicants through the intake form — surfacing the right question, the right
  clarification, the right reassurance at each step.
- **Later — spoken guidance.** A voice model (such as ElevenLabs) could let the
  teacher speak to visitors in his own voice, walking them through the
  teaching and the application. The aim is that this portal showcases how
  well an AI guide can serve a newcomer — and third-party platforms may look to
  it as an example of what is possible.

---

## How people find us

- **The ideal path is direct discovery** through search and geographic
  optimization (SEO/GEO), so a seeker finds this portal on their own.
- **Listing directories are partners, not the funnel.** Retreat Guru, Aya
  Advisors, and The Third Wave are accredited Plant Medicine directories that
  vet and legitimize the work. They help people find and trust the foundation —
  and if someone arrives through one of them, the intake form asks for the
  referral source so that partner can be honored appropriately.
- The portal takes primary responsibility for guiding a visitor from the
  teaching and FAQ → exploring retreats and partners → next steps → applying
  here → connecting for lifelong spiritual life coaching.

---

## Miracle Retreats & the Wix FAQ

Two older pages on the foundation's Wix site — **Miracle Retreats** and the
**Wix FAQ** — are simply access points that now redirect visitors here:

- **Miracle Retreats** is a welcome page with a button that sends Wix visitors
  to this portal. The Wix "events" posts that lived there have been taken over
  by this site.
- **The Wix FAQ** similarly funnels readers into this portal's FAQ.

This GitHub Pages portal is now the **real retreat portal** — even if it is
hosted somewhere else one day.

---

## Migration arc

The official Wix site at iamoneself.com remains live; its content is being
liberated into this open, workable source of truth. The long-term direction is a
**full migration off Wix**, with this portal as the foundation's permanent
home for teaching, retreats, and application.

---

## Status recap

This is a living roadmap. Items marked *later* depend on the foundation's
resources and the spiritual lead's direction, and they will be undertaken with
care. Everything here is built to be transparent — the source is public, the
decisions are recorded, and the patterns are shared so others may adapt them.

*Into the hands of the gift the gift is given.*
