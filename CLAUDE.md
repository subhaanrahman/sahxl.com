# CLAUDE.md — sahxl.com

> Read this first. This file is Claude Code's working memory for the SAHXL
> website project. Keep it updated as decisions change.

## Who this is for

**SAHXL** — recording artist, 506 Global, Los Angeles.
**Haan** (subhaanrahman05@gmail.com) — artist manager. Decisions come from him.
Owner domain: `sahxl.com` (registered at GoDaddy).

## Project goal

Ship a cinematic, commerce-first artist site that does five jobs:

1. **Sell merch** under the "506 Global" visual identity — headless Shopify.
2. **Release music** with a voting + request mechanic that feeds back into what SAHXL makes next.
3. **Capture tour demand** before dates are booked (waitlist per city).
4. **Gate exclusive drops** behind an email unlock (VIP showroom).
5. **Tell the story** — bio, press, identity.

The brand feels dark, cinematic, "after hours". References: `xo.store`, `drakerelated.com`.

## Source of truth (must read before building)

All design decisions live in a sibling folder, `../sahxl-website-spec/`:

- `SAHXL-Website-Design-Spec.docx` — 19-section handoff. The definitive spec.
- `brand-tokens.md` — color, type, spacing, motion tokens. Mirrors `tailwind.config.ts`.
- `site-map.md` — routing tree + page-state matrix.
- `wireframes/01-homepage.svg` through `wireframes/06-vip-showroom.svg` — annotated SVG mockups.

**When a page stub references a wireframe in its comment header, open that SVG.**
The annotations in red on each SVG explain intent (scarcity mechanics, gate
behavior, etc.). Don't invent UX that isn't in the spec or wireframes —
check with Haan first.

## Tech stack

| Layer      | Choice                                            | Why                              |
| ---------- | ------------------------------------------------- | -------------------------------- |
| Framework  | Next.js 15 App Router + React 19 RSC              | Full design freedom, SSR, RSC    |
| Styling    | Tailwind + CSS variable tokens                    | Fast, theme-able                 |
| Commerce   | Shopify Storefront API (headless)                 | Native PayPal + Shop Pay         |
| Checkout   | Shopify-hosted on `shop.sahxl.com`                | PCI/tax/shipping already handled |
| Email      | Klaviyo                                           | Flows for VIP, waitlist, winback |
| Hosting    | Vercel                                            | Auto SSL, Next.js-native         |
| DNS        | GoDaddy → Vercel (A 76.76.21.21, CNAME www)       | See spec §15                     |

## File map

```
sahxl.com/
├─ app/
│  ├─ layout.tsx          # root layout — fonts, header, footer, skip link
│  ├─ globals.css         # CSS variable tokens (source of truth w/ tailwind.config.ts)
│  ├─ page.tsx            # homepage (w/f 01)
│  ├─ not-found.tsx       # 404
│  ├─ shop/
│  │  ├─ layout.tsx       # wraps /shop/** in data-surface="shop" (506 Global)
│  │  ├─ page.tsx         # collection grid (w/f 02)
│  │  └─ [handle]/page.tsx # product detail (w/f 03)
│  ├─ music/
│  │  ├─ page.tsx         # archive + vote + request form (w/f 04)
│  │  └─ unreleased/page.tsx # email-gated tapes
│  ├─ tour/page.tsx       # waitlist (w/f 05)
│  ├─ vip/page.tsx        # email-gate + vitrines (w/f 06)
│  ├─ story/page.tsx      # bio / contact
│  ├─ requests/page.tsx   # standalone request form
│  └─ cart/page.tsx       # bag → hands off to Shopify checkout
├─ components/
│  └─ nav/
│     ├─ SiteHeader.tsx   # swaps wordmark & 4th nav slot by route
│     ├─ SiteFooter.tsx
│     └─ LaClock.tsx      # live LA clock, client-only
├─ lib/
│  ├─ fonts.ts            # next/font loaders (Inter, Cinzel, Anton, JetBrains Mono)
│  ├─ cn.ts               # Tailwind class composer
│  └─ nav.ts              # nav model + footer links
├─ public/
│  ├─ images/  (empty — placeholders used for now)
│  ├─ video/
│  └─ fonts/
├─ tailwind.config.ts
├─ tsconfig.json
├─ next.config.js
├─ postcss.config.js
├─ package.json
└─ README.md
```

## Conventions

- **Server components by default.** Reach for `"use client"` only when you need
  state, refs, event handlers, or browser APIs (see `SiteHeader.tsx`, `LaClock.tsx`).
- **Tokens over hard-coded values.** If you need a new color or size, add it
  to `tailwind.config.ts` + `globals.css`, then use the semantic class. Don't
  inline hex codes.
- **No localStorage for session state.** VIP unlock = short-lived signed HttpOnly
  cookie. Music player persistence = React Context provider. Votes =
  fingerprint-based anonymous hash server-side.
- **Match the wireframe's annotation intent, not just its pixels.** The red
  annotations explain the *why* (scarcity, gate timing, behavior on unlock).
- **Accessibility: WCAG 2.1 AA.** Skip link exists in `layout.tsx`. Focus ring
  is global. Every button/link needs a real label. Hotspots need `aria-label`.
  Respect `prefers-reduced-motion` (done globally in `globals.css`).
- **Imports.** Use the `@/*` alias (configured in `tsconfig.json`), not relative
  paths, for anything outside the same folder.

## Current status

- ✅ Project scaffolded, routes stubbed, tokens wired up.
- ✅ Header swaps "SAHXL / After Hours" ↔ "506 Global" based on route.
- ✅ VIP page renders a blurred-vitrine + email gate stub.
- ⬜ **Shopify Storefront client** — `lib/shopify.ts` needs writing. Use the
  `SHOPIFY_STOREFRONT_ACCESS_TOKEN` env var. Replace `MOCK_PRODUCTS` in
  `app/shop/[handle]/page.tsx` with a real `getProductByHandle()` call.
- ⬜ **Klaviyo subscribe action** — server action that posts to Klaviyo's
  `/api/profile-subscription-bulk-create-jobs/` with the correct list ID per form.
- ⬜ **VIP cookie signing** — `lib/vip-session.ts`: HMAC with `VIP_SESSION_SECRET`,
  24h TTL, set on `UNLOCK` form POST, read by the server component on `/vip`.
- ⬜ **Vote handler** — `app/api/vote/route.ts`. Fingerprint + track id → votes table.
  Pick storage (Vercel KV, Supabase, or Shopify metafields). Flagged in spec §19.
- ⬜ **Hero video** — replace hero placeholder when video asset lands. Reduced-motion
  fallback = poster image.
- ⬜ **Real imagery** — Haan will supply product photos, artist portraits, hero video.
  Current grid uses `bg-ink-2` boxes as placeholders.

## Decisions locked in

- Single-domain strategy: everything lives on `sahxl.com`. The "506 Global"
  identity is a *visual* swap on `/shop/**`, not a separate domain.
- `shop.sahxl.com` subdomain is reserved for the Shopify-hosted checkout only.
- Placeholders everywhere; no real assets yet.

## Open questions (ask before guessing)

Full list is in spec §19. The ones most likely to block work:

1. **Sub-brand split** — is `shop.506global.com` ever needed, or do we stay on
   the `sahxl.com` domain indefinitely?
2. **Shopify plan** — Basic is enough for headless but confirm before launch.
3. **Klaviyo vs. lighter ESP** — Klaviyo is powerful but paid; alternatives: Loops, Resend + self-hosted lists.
4. **Vote storage** — Vercel KV, Supabase Postgres, or Shopify metafields?
5. **Geo-targeting for tour** — should Aussie visitors see AU stops first?
6. **VIP session TTL** — spec says 24h. Confirm before shipping the cookie signer.
7. **PayPal live** — confirmed via Shopify, but dev sandbox needs to be set up.
8. **Reduced-motion hero** — poster image vs. a 1-second looped still?
9. **Merch localization** — AUD-only or multi-currency via Shopify Markets?
10. **Refund policy copy** — legal review needed.

## How to talk to Haan

He's an artist manager, not an engineer. Frame work in terms of *what the
fan/customer experiences*, not implementation detail. When a decision is
stuck, give him a clear A/B choice with the trade-off in one sentence each —
don't make him wade through implementation options.
