# PRD - MBHS SALON

## Problema Originale
Applicazione gestionale completa per un salone di parrucchiera con autenticazione, gestione appuntamenti, clienti, servizi, operatori, statistiche e funzionalità avanzate.

## Stato Attuale: IN SVILUPPO

### Funzionalità Implementate

#### Core Application
- Autenticazione JWT (email/password)
- Dashboard principale
- Planning giornaliero con griglia 15 minuti
- Vista settimanale e mensile
- Gestione Clienti (CRUD)
- Gestione Servizi (CRUD)
- Gestione Operatori (CRUD)
- Statistiche con export PDF
- Storico appuntamenti

#### Funzionalità Avanzate
- Promemoria SMS (Twilio - richiede credenziali)
- Export PDF statistiche
- Card Prepagate / Abbonamenti
- Ricerca Rapida Cliente nel Planning
- Appuntamenti Ricorrenti
- Checkout in-appointment con metodi pagamento (Contanti, Carta, Bonifico, Prepagata) e sconti

#### Import Dati
- Import clienti da Excel (161 clienti)
- 18 Trattamenti importati da XML
- 61 Note Clienti aggiornate da Excel

#### PWA & Offline
- Progressive Web App installabile
- Icona personalizzata
- Service Worker per funzionalità offline
- Indicatore offline

#### Prenotazione Online
- Pagina pubblica /prenota per prenotazioni clienti
- Controllo sovrapposizione orari

#### Report & Backup
- Report Incassi
- Backup Dati con export Excel

#### Programma Fedeltà (24 Feb 2026)
- 1 punto ogni €10 spesi (assegnazione automatica al checkout)
- Premio: Sconto 20% Colorazione (5 punti)
- Premio: Taglio Gratuito (10 punti)
- Pagina dedicata /loyalty con statistiche, lista clienti, progress bars
- Punti visibili nello storico cliente
- Anteprima punti nel checkout
- Riscatto e utilizzo premi
- Aggiunta manuale punti

#### Branding
- Logo MBHS SALON su login, booking, sidebar
- Schema colori blue palette

## Architettura Tecnica

### Frontend: React 18, React Router, Tailwind CSS, Shadcn/UI, Axios, date-fns
### Backend: FastAPI (Python), MongoDB, JWT, Twilio
### PWA: Service Workers, Web App Manifest

## Credenziali Test
- Email: melitobruno@gmail.com
- Password: password123

## API Endpoints Principali
- Auth: /api/auth/login, /api/auth/register, /api/auth/me
- Clients: /api/clients, /api/clients/{id}/history
- Services: /api/services
- Appointments: /api/appointments, /api/appointments/{id}/checkout
- Operators: /api/operators
- Cards: /api/cards
- Loyalty: /api/loyalty, /api/loyalty/config, /api/loyalty/{client_id}, /api/loyalty/{client_id}/redeem, /api/loyalty/{client_id}/use-reward/{reward_id}, /api/loyalty/{client_id}/add-points
- Public: /api/public/services, /api/public/operators, /api/public/booking
- Reports: /api/payments, /api/stats/*

## Backlog Futuro
- (P1) Promemoria automatici SMS/WhatsApp (logica schedulata)
- (P2) Stampa ricevuta dopo pagamento
- (P2) Blocco fasce orarie (pause/ferie)
- (P2) Refactoring server.py in moduli separati (>1800 righe)
