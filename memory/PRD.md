# FounderPlane - Product Requirements Document

## Original Problem Statement
User transferred their FounderPlane project from another Emergent session via GitHub (https://github.com/hemasanjaybhambore-eng/founderplane.v5.git). Startup consultancy platform with multiple service pages, lead capture, AI assessment, and admin dashboard.

## Architecture
- **Frontend**: React 19 + TypeScript + Vite 5 + Tailwind CSS + Framer Motion + shadcn/ui
- **Backend**: FastAPI + MongoDB (Motor async driver)
- **AI Integration**: GPT-5.2 via Emergent LLM Key (emergentintegrations library)
- **Intercom**: Live chat widget via react-use-intercom

## User Personas
- **Founders** (primary): Startup founders at Launch/Growth/Scale stages seeking consultancy
- **Admin**: FounderPlane team managing leads via /admin dashboard

## Core Requirements (Static)
1. Multi-page service platform showcasing 6 consulting services
2. Lead capture forms on each service page
3. AI-powered Stage Clarity Check quiz
4. Admin dashboard for lead management
5. Scroll analytics tracking with per-section funnel visualization
6. Animated splash screen and page transitions
7. Legal pages (Privacy Policy, Terms of Service)

## Pages
| Page | Route | Status |
|------|-------|--------|
| Index (Homepage) | / | Working |
| BoltRunway | /services/boltrunway | Working |
| ScaleRunway | /services/scalerunway | Working |
| B2BBolt | /services/b2bbolt | Working |
| D2CBolt | /services/d2cbolt | Working |
| Boltguider | /services/boltguider | Working |
| BrandToFly | /services/brandtofly | Working |
| Admin | /admin | Working |
| Refund Policy | /refund-policy | Working |
| Privacy Policy | /privacy-policy | Working |
| Terms of Service | /terms-of-service | Working |
| 404 | /* | Working |

## What's Been Implemented

### Session 6: Massive Copy & Structure Update — Batch 1 (Feb 2026)
- **Splash Screen Removed**: Eliminated loading/splash animation entirely — users now land directly on the Hero section (zero friction)
- **Section 1 (Hero) Copy Update**: Eyebrow → "Strategy • Structure • Systems", Headline → "Design Your Vision. Engineer Your Business.", CTA → "Take the Clarity Check →"
- **Section 5 (Arsenal) Copy Update**: All 6 engine cards rewritten with new Architect tone — "The Validation Engine", "The Identity Engine", "The B2B Revenue Engine", etc. Badges updated to "Fixes Analysis Paralysis", "Fixes Invisible Authority", etc.
- **Section 8 (Final CTA) Copy Update**: "Stop Guessing. Start Engineering." with diagnostic CTA button wired to trigger Stage Clarity Check modal
- **Testing**: Visual verification confirmed all copy live and correct

### Session 5: Refund Policy Page + Footer Hotfix (Jan 2026)
- **New Page: /refund-policy** — Clean typography-focused legal page matching /privacy-policy and /terms-of-service design
  - Go Back pill button (routes to /)
  - All 5 clauses from PDF: No-Refund, Cancellation, 5,000 Ecosystem Credits, Unilateral Termination, Contact & Support
  - "Need Support? WhatsApp Us" CTA at bottom (wa.me/917353913591)
- **Homepage Footer restructured** to stacked layout: content grid → divider → watermark in-flow → legal bar
- **Service Page Footer** created (ServiceFooter.tsx) — white bg, dynamic branding, Partner Support CTA
- **Footer Navigation Update** — "Find Your Stage (Clarity Check)" added atop OUR SYSTEMS column with divider
- **Dynamic Engine Icon Colors** — each service footer icon uses its brand hex color
- **Copyright Text Fix** — added "All rights reserved." to service footer
- **Testing**: 100% pass across all iterations

### Session 4: Migration to New Emergent Workspace (Jan 2026)
- Cloned from GitHub (hemasanjaybhambore-eng/founderplane.v5) and set up in new Emergent workspace
- Migrated full Vite + TypeScript project structure
- Fixed PostCSS ESM compatibility (renamed .js to .cjs)
- Configured VITE_BACKEND_URL environment variable
- Set up EMERGENT_LLM_KEY for GPT-5.2 AI assessment
- Installed all dependencies (frontend + backend)
- **Testing**: 99% pass rate - Backend 100% (13/13), Frontend 99%, Integration 100%

### Previous Sessions
- Built full multi-page service platform with 6 service pages
- Lead capture system with admin dashboard
- AI-powered Stage Clarity Check quiz (GPT-5.2)
- Scroll analytics with per-page funnel visualization
- Animated splash screen and page transitions
- Footer with legal pages (Privacy Policy, Terms of Service)
- WhatsApp support integration

## Prioritized Backlog

### P0
- All core features operational ✅

### P1
- Razorpay integration for paid services
- Email notifications for new leads
- SEO meta tags, Open Graph tags improvement

### P2
- Lead notes/comments, team assignment
- Calendar integration, Slack webhooks
- Export scroll analytics data to CSV
- Performance optimizations

## Next Tasks
- Step 3: Layout-heavy updates for Section 2 (Hidden Problem), Section 3 (Platform), Section 4 (Clarity Hub + hover interaction)
- Step 4: Header (Section 0) update - "Map Your Stage" CTA, new nav links
- Step 5: Brand new sections - Section 6 (Ecosystem orbital), Section 7 (FAQ accordion)
- Step 6: Service Page Footer icon color fix
