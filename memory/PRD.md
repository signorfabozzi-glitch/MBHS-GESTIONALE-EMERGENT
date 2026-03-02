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
- **Card/Promo → Checkout flow:** promo_id e card_id salvati sull'appuntamento durante la creazione. In cassa vengono pre-selezionati automaticamente
- Card/Subscription management with alerts (CardAlertsPage + WhatsApp)
- Promotions system with eligibility check per client
- Checkout system (Cash, Card, Prepaid)
- **Video support:** Upload e visualizzazione video (MP4, WebM, MOV) su Gallery e Foto Salone. Video si avviano al passaggio del mouse
- Online booking page (/prenota) - FULLY DYNAMIC from CMS
- Public website (/sito) with CMS
- Website Admin (/gestione-sito) with working photo/video upload
- Financial reports, expense tracking, daily summaries
- Loyalty program, reminders system
- Data backup/export, PWA with offline support
- SEO (sitemap, robots.txt, structured data, Google verification)
- Full branding with Bruno Melito Hair logo

## User Account
- Email: melitobruno@gmail.com / Password: password123

## Pending/Future Tasks
- P1: Automated SMS/WhatsApp reminders (Twilio integration exists but needs keys + scheduler)
- P2: Print receipt after checkout
- P2: Block time slots for breaks/holidays
- P2: Loyalty program points system
- P2: Notification sound for new online bookings
