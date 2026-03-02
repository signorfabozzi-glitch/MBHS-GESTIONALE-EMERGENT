# MBHS SALON / Bruno Melito Hair - PRD

## Original Problem Statement
Full-stack salon management application for "Bruno Melito Hair" hairdressing salon. The app manages appointments, clients, services, operators, prepaid cards, promotions, loyalty programs, reminders, financial reports, and includes a public website and online booking system.

## Core Architecture
- **Frontend:** React + Tailwind CSS + Shadcn UI (PWA enabled)
- **Backend:** FastAPI (Python), modular routing in `/backend/routes/`
- **Database:** MongoDB
- **Auth:** JWT (access_token)
- **Object Storage:** Emergent Object Storage with local fallback

## What's Been Implemented
- Authentication (JWT), Client, Service, Operator CRUD
- Daily Planning view with 15-minute slots, weekly/monthly views
- Card/Subscription management with alerts for expiring/low-balance cards
- Promotions system with check eligibility per client
- Card/Promo pre-selection during appointment creation
- Checkout system (Cash, Card, Prepaid)
- Online booking page (/prenota) and public website (/sito) with CMS
- Financial reports, expense tracking, daily summaries
- Loyalty program, reminders system
- Data backup/export, PWA with offline support
- SEO (sitemap, robots.txt, structured data, Google verification)
- Full branding with Bruno Melito Hair logo (full-page on login, prenota, sito)
- CardAlertsPage for monitoring card expiration and low balance

## User Account
- Email: melitobruno@gmail.com
- Password: password123

## Key Routes
- `/` - Planning (logged in) / Login (visitor)
- `/prenota` - Public online booking
- `/sito` - Public website
- `/card-alerts` - Card expiration/low balance alerts
- `/promozioni` - Promotions management
- `/cards` - Prepaid cards/subscriptions
- `/gestione-sito` - Website CMS admin

## Pending/Future Tasks
- P1: Automated SMS/WhatsApp reminders (Twilio integration exists but needs keys + scheduler)
- P1: Make BookingPage (/prenota) read from CMS instead of hardcoded content
- P2: Print receipt after checkout
- P2: Block time slots for breaks/holidays
- P2: Loyalty program points system
- P2: Notification sound for new online bookings
