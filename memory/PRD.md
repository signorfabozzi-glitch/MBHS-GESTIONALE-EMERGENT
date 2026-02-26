# PRD - MBHS SALON

## Problema Originale
Applicazione gestionale completa per un salone di parrucchiera con autenticazione, gestione appuntamenti, clienti, servizi, operatori, statistiche e funzionalita avanzate.

## Stato Attuale: COMPLETO E LIVE

### Hosting Produzione
- **Frontend:** Render.com (Static Site)
- **Backend:** Render.com (Web Service)
- **Database:** MongoDB Atlas (Free Tier)
- **URL Live:** https://mbhssalon.onrender.com

### Funzionalita Implementate

#### Core Application
- Autenticazione JWT (email/password)
- Dashboard con moduli cliccabili (16 moduli + Gestione Sito)
- Planning giornaliero con griglia 15 minuti + DRAG & DROP
- Vista settimanale e mensile
- Gestione Clienti, Servizi, Operatori (CRUD)
- Checkout, Card Prepagate, Report Incassi
- Riepilogo Giornaliero, Programma Fedelta
- PWA installabile, Backup dati

#### CMS Sito Web (25 Feb 2026) - NUOVO
- **Pagina pubblica /sito**: sito web completo con contenuti dinamici dal database
- **Pagina admin /gestione-sito**: pannello CMS con 6 tab per modificare tutto
  - Generale: nome salone, slogan, descrizione, chi siamo, punti di forza
  - Servizi: categorie e listino prezzi modificabili
  - Foto Salone: upload e gestione foto del salone
  - Gallery Lavori: upload foto acconciature con etichette e tag
  - Recensioni: CRUD completo per recensioni clienti
  - Orari & Contatti: orari apertura, telefoni, email, indirizzo, WhatsApp, Maps
- **Upload immagini**: integrazione Object Storage per caricamento foto
- **API pubbliche**: /api/public/website (config + reviews + gallery + services)
- **API admin**: /api/website/config, /api/website/reviews, /api/website/gallery, /api/website/upload

#### Prenotazione Online (esistente, non modificata)
- Pagina /prenota con flusso prenotazione a 3 step
- Pagina /sito include anche il sistema di prenotazione integrato

## Bug Fix (25 Feb 2026)
- Fix percorsi Dashboard: Planning, Settimanale, Mensile, Card Prepagate
- Aggiunta rotta /planning dedicata

## Credenziali Test
- Email: melitobruno@gmail.com
- Password: password123

## Backlog Futuro
- (P1) Attivare Twilio SMS Reminders (richiede chiavi API utente)
- (P1) Cambio nome repository/username GitHub
- (P1) Aggiungere EMERGENT_LLM_KEY nelle env di Render per upload foto sul sito live
- (P2) Stampa ricevuta dopo pagamento
- (P2) Blocco fasce orarie (pause/ferie)
- (P2) Refactoring server.py in moduli separati (>2500 righe)
