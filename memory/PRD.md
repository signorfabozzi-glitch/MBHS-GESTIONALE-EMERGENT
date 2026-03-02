# MBHS SALON / Bruno Melito Hair - PRD

## Original Problem Statement
Full-stack salon management application for "Bruno Melito Hair" hairdressing salon.

## Core Architecture
- **Frontend:** React + Tailwind CSS + Shadcn UI (PWA enabled)
- **Backend:** FastAPI (Python), modular routing in `/backend/routes/`
- **Database:** MongoDB
- **Auth:** JWT (access_token)

## What's Been Implemented
- Authentication (JWT), Client, Service, Operator CRUD
- Daily Planning view with 15-minute slots, weekly/monthly views
- Card/Subscription management with alerts for expiring/low-balance cards (CardAlertsPage)
- Promotions system with eligibility check per client
- Card/Promo pre-selection during appointment creation
- Checkout system (Cash, Card, Prepaid)
- Online booking page (/prenota) - **NOW DYNAMIC**, reads from CMS
- Public website (/sito) with CMS
- Website Admin (/gestione-sito) with photo upload fix (z-index)
- Financial reports, expense tracking, daily summaries
- Loyalty program, reminders system
- Data backup/export, PWA with offline support
- SEO (sitemap, robots.txt, structured data, Google verification)
- Full branding with Bruno Melito Hair logo (full-page on login, prenota, sito)
- Online booking notifications banner

## Key CMS Integration (BookingPage /prenota)
- Gallery (salon & hairstyle photos) from `website_gallery` collection
- Service categories from `website_config.service_categories`
- Reviews from `website_reviews` collection
- Contact info (address, phones, email, hours) from `website_config`
- About section text from `website_config`
- All editable from /gestione-sito admin page

## User Account
- Email: melitobruno@gmail.com / Password: password123

## Pending/Future Tasks
- P1: Populate CMS service_categories and reviews via /gestione-sito
- P1: Automated SMS/WhatsApp reminders (Twilio integration exists but needs keys + scheduler)
- P2: Print receipt after checkout
- P2: Block time slots for breaks/holidays
- P2: Loyalty program points system
- P2: Notification sound for new online bookings
