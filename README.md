# sahxl.com

Official artist site for **SAHXL** (506 Global). Next.js 15 + Tailwind + Shopify headless + Klaviyo.

Full design spec lives in `../sahxl-website-spec/` — open `SAHXL-Website-Design-Spec.docx` first.

## Quick start

```bash
# 1. install
npm install

# 2. env
cp .env.example .env.local
# fill in Shopify + Klaviyo keys

# 3. dev
npm run dev     # http://localhost:3000
npm run build   # production build
npm run typecheck
```

## Routes

| Path              | Wireframe                            | Status |
| ----------------- | ------------------------------------ | ------ |
| `/`               | 01-homepage.svg                      | stub   |
| `/shop`           | 02-shop-collection.svg (506 Global)  | stub   |
| `/shop/[handle]`  | 03-product-detail.svg                | stub   |
| `/music`          | 04-new-music.svg                     | stub   |
| `/music/unreleased` | 04-new-music.svg (bottom section)  | stub   |
| `/tour`           | 05-tour-dates.svg                    | stub   |
| `/vip`            | 06-vip-showroom.svg                  | stub   |
| `/story`          | (no wireframe yet)                   | stub   |
| `/requests`       | inline form from 04-new-music        | stub   |
| `/cart`           | —                                    | stub   |

## Tech stack

- **Next.js 15** App Router, React 19 Server Components
- **Tailwind CSS 3** + CSS variable tokens (`app/globals.css`, `tailwind.config.ts`)
- **Shopify Storefront API** — headless; checkout hosted on `shop.sahxl.com`
- **Klaviyo** — email capture + flows (VIP, waitlist, newsletter)
- **Vercel** hosting with auto SSL
- **GoDaddy DNS** pointing `sahxl.com` A → `76.76.21.21`, www CNAME → `cname.vercel-dns.com`

## Deploy

```bash
vercel link            # once
vercel env pull        # sync env
vercel --prod          # ship
```

DNS setup is in `../sahxl-website-spec/SAHXL-Website-Design-Spec.docx` §15.

## Open questions

See §19 of the spec doc. The big ones are sub-brand split (`shop.506global.com` vs. `sahxl.com/shop`), Shopify plan, and whether Klaviyo or a lighter ESP.
