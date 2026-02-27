# Laiba Contracting W.L.L  Next.js Website

A production-ready **Next.js 16** clone of [laibacontracting-wll.com](https://laibacontracting-wll.com/), featuring:

- Full App Router with TypeScript
- Tailwind CSS v4 (CSS-first configuration)
- Framer Motion animations
- Nodemailer contact-form backend
- Fully responsive (mobile-first)
- SEO: per-page metadata, Open Graph, sitemap.xml, robots.txt

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Email | Nodemailer (SMTP) |
| Toasts | React Hot Toast |
| Images | next/image + Unsplash |

---

## Getting Started

### 1. Install dependencies

```bash
cd laiba-contracting
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your SMTP credentials:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server hostname (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | SMTP port (587 for TLS, 465 for SSL) |
| `SMTP_SECURE` | `true` for port 465, `false` otherwise |
| `SMTP_USER` | SMTP username / email address |
| `SMTP_PASS` | SMTP password or app password |
| `TO_EMAIL` | Recipient address for contact-form submissions |

### 3. Run development server

```bash
npm run dev
```

Open http://localhost:3000.

---

## Build and Production

```bash
# Type-check + build
npm run build

# Start production server
npm start
```

---

## Project Structure

```
src/
  app/
    layout.tsx                       Root layout (Header, Footer, WhatsApp)
    page.tsx                         Home page
    about/page.tsx
    services/page.tsx
    contact/page.tsx
    carpentry-joinery-works/page.tsx
    gypsum-ceiling-works/page.tsx
    marble-stone-works/page.tsx
    masonry-civil-works/page.tsx
    mep-works/page.tsx
    moving-shifting/page.tsx
    painting-works/page.tsx
    tiling-works/page.tsx
    api/contact/route.ts             Contact form API endpoint
    sitemap.ts
    robots.ts
  components/
    layout/         Header, MobileMenu, Footer
    shared/         PageHero, ServiceCard, SectionHeading, AnimatedCounter, WhatsAppButton
    home/           Hero, PrimaryServices, StatsCounter, FAQ, Gallery, ...
    services/       ServiceDetail, ServiceCTA, ServicePageTemplate
    about/          CoreValues, MissionVision
    contact/        ContactInfo, ContactForm
  data/             services.ts, nav.ts, faqs.ts, gallery.ts
  hooks/            useCounterAnimation, useScrollReveal
  lib/              mailer.ts
  types/            index.ts
```

---

## Deployment (Vercel)

```bash
npm i -g vercel
vercel
```

Add environment variables via the Vercel dashboard > Settings > Environment Variables.

---

## Brand Colours

| Token | Value | Usage |
|-------|-------|-------|
| --color-brand | #e8620a | CTA buttons, underlines, accents |
| --color-navy  | #0b1120 | Primary background, header, footer |
| --color-off-white | #f8f7f5 | Alternating section backgrounds |

Colours are defined in src/app/globals.css using Tailwind v4 @theme block.
