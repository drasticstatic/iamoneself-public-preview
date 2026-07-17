# How It Works

### I Am One Self — The Holy Earth Foundation

This page explains the mechanics behind the two interactive parts of this
portal that a visitor actually touches: how an application reaches the team,
and how the guide agents work today and as they grow. It is written so anyone
curious about the machinery can read it plainly. See
[`sustainability`](sustainability.md) for how the site is hosted and kept lean,
and the [`roadmap`](roadmap.md) for where it is headed.

---

## Part one — how an application reaches the team

### What ships today (the graceful placeholder)

The intake form collects a full application in four steps — personal,
retreat, health, and journey. Today it ships **unconfigured**: it relays a
submission through the visitor's own email client (`mailto:`) to the team, or,
if no address is set yet, points the visitor to the foundation's contact page.
Nothing about the application is stored by this site.

### How the form backend (Formspree) works once enabled

The next step is to wire the form to **Formspree**, a third-party form
backend.

1. A form created at formspree.io returns a **public POST endpoint** — a URL
   like `https://formspree.io/f/abcd1234`. It is a public target, not a secret,
   so it lives in client configuration, not in a locked file.
2. When a visitor submits, the form sends the application to that endpoint.
3. Formspree then takes over delivery:
   - **shows each submission** in its dashboard,
   - **emails it** to the team inbox (the foundation's Google Workspace on the
     iamoneself.com domain),
   - and can **forward it** to Google Sheets, Notion, or a webhook/automation
     such as Zapier or Make.
4. Formspree also exposes an **API to list submissions**, so an early admin
   view could read applications straight from the Formspree dashboard.

### Where it stops, and the next stage

Formspree is a **relay and a submission log** — it is not a queryable
database that this portal owns. The stage after that is a real database:
custom validation, search, and a nonprofit-owned store — Supabase or
Firestore, or a Google Workspace spreadsheet behind a serverless function —
keeping the same static site and the same form. Until then, the admin panel
manages content (FAQ and retreat text), not the application database.

### What is never stored

This portal is a **pure static site** — no server, no database, no server-side
runtime runs at deploy time. It **collects and stores no personal data**.
Application data lives only in Formspree (and wherever Formspree forwards it),
never on this site. See the disclaimer on every page for the full wording.

> **Why not a hosted form service like Typeform?** Those services replace your
> form with their own hosted interface. This portal already has a rich, custom,
> brand-faithful four-step form, so a *form backend* (Formspree) that keeps
> the existing form and only handles delivery is the right fit. A hosted UI was
> considered and set aside.

### A technical note — the failure modal is a portal

When the form cannot submit (no Formspree endpoint configured, or the network
can't reach it), a small `Form submission unavailable` modal opens so the
visitor can contact the team directly or reach a listing partner. A discreet
`See an issue with the form? Contact us here.` link at the foot of the form
opens the same modal.

That modal is rendered into a **portal at `document.body`** rather than where
the form sits in the page. The reason is mechanical. The form lives inside a
scroll-linked reveal wrapper whose inner element is animated with a CSS
`transform` (the scroll-driven `y` and `scale`). A `transform` on an ancestor
becomes the containing block for any descendant using `position: fixed`, so a
modal placed inline there would position itself against that animated ancestor
instead of the viewport and float in the wrong place. Portaling the modal to
`<body>` escapes the transformed ancestor, and `position: fixed` resolves to
the viewport as intended.

The portal is also **static-export safe**. The target is `null` during the
static pre-render (the build server has no `document`), then set to
`document.body` in a browser effect, so the exported site never tries to touch
the DOM. This is the only React portal on the site — most modals here render
inline at the top of their page with no transformed ancestor above them, so
they need none. The same pattern is worth knowing for any future interactive
surface that has to live inside a scroll-linked animation.

---

## Part two — how the guide agents work (now and next)

### Now — the Oracle agent runs in your browser

The **Oracle agent** on the FAQ page helps a newcomer ask a question and find
what the teaching actually says, in the foundation's voice. It runs **entirely
client-side**: a search index (Pagefind) ships with the static site, and the
search happens in the visitor's own browser. There is no server call, no API
key, and no data leaves the device.

This is AI-assisted guidance in its first form: it surfaces the matching FAQ
answer and the relevant *A Course in Miracles* and plants-and-miracles
teaching, grounded in this foundation's own content rather than the open
internet.

### Next — connecting an API key through a gateway

Today the Oracle agent searches locally only — it finds what is already on
the site. The next step is to connect it to a language model through an **API
key and a gateway**.

- A model **gateway** sits between the browser and the model provider. It holds
  the **API key server-side**, so the key is never shipped inside the static
  bundle, usage can be controlled and capped, and the provider is kept at arm's
  length.
- Once connected, a newcomer can ask in their own words and receive a
  **synthesized, conversational answer** drawn from the teaching — not just a
  list of matching FAQ entries, but a reasoned response that can still point
  back to its sources on this site.
- The local search index stays the grounding layer: the model answers from the
  foundation's content, not from the open internet, so the voice and the
  doctrine stay faithful.

### The form agent (a fork of the Oracle)

A companion agent will **fork from the Oracle** to truly guide an applicant
through the intake form — surfacing the right question, the right
clarification, or the right reassurance at each step. Like the Oracle, it
begins as client-side relevance search, then grows into a conversational guide
once the gateway is connected. The aim is that the form itself *teaches* — how
to prepare, and how to respect the Medicine, oneself, and others who are that
same Self.

### Spoken guidance (later)

A voice model could let the teacher speak to visitors in his own voice,
walking them through the teaching and the application. The portal would then
showcase how well an AI guide — in text and in voice — can serve a newcomer.

---

## Why this is shared

The point of recording the machinery in the open is twofold:

- It lets a visitor **trust what they are using**: they can see exactly how an
  application is relayed, what is and is not stored, and where AI guidance
  begins and ends.
- It lets **other retreat centers, nonprofits, and third-party platforms look
  to this portal as an example** of what is possible — a lean, transparent,
  donation-light foundation running real AI-assisted guidance on a free static
  site. The patterns here are intentionally simple and reusable.

---

## Status

This portal is a **concept prototype and educational resource**, not the
official iamoneself.com, and is compliant with GitHub Pages terms of service.
The Formspree backend and the gateway-connected agents are the next stages
described here and in the [`roadmap`](roadmap.md), to be undertaken at the
foundation's pace and the spiritual lead's direction.

*Into the hands of the gift the gift is given.*
