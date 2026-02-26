# PRD - MBHS SALON

## Problema Originale
Applicazione gestionale completa per un salone di parrucchiera.

## Stato Attuale: COMPLETO E LIVE
- URL Live: https://mbhssalon.onrender.com
- Frontend: Render.com (Static Site)
- Backend: Render.com (Web Service)
- Database: MongoDB Atlas

## Funzionalita Implementate

### Core
- Autenticazione JWT, Dashboard moduli, Planning giornaliero
- Vista settimanale/mensile, Gestione Clienti/Servizi/Operatori
- Checkout, Card Prepagate, Report Incassi, Backup dati
- PWA installabile, Riepilogo Giornaliero, Programma Fedelta

### CMS Sito Web
- Pagina pubblica /sito con contenuti dinamici
- Pagina admin /gestione-sito con 6 tab
- Upload immagini con Object Storage

### Promemoria & Richiami
- Template messaggi personalizzabili con variabili
- Invio WhatsApp individuale e batch automatico
- Reset/reinvio promemoria
- Banner auto-reminder nel Planning

### Registro Uscite / Scadenziario
- CRUD spese con 8 categorie
- Pagamenti ricorrenti automatici
- Banner scadenze evidenziato sul Planning
- Filtri per stato e categoria

### Avviso Telefono Mancante
- Badge nel dropdown clienti e nella lista
- Card rossa nel Planning quando manca
- Campo evidenziato nel form nuovo cliente

### Pacchetti Preimpostati Card/Abbonamenti
- Template pacchetti con assegnazione rapida

### Sistema Promozioni (26 Feb 2026)
- Nuova pagina /promozioni per creare e gestire promozioni
- 7 tipi di regole: Under 30, Prima Visita, Compleanno, Porta un'Amica, Recensione Google, Fidelity VIP, Codice Promo
- Servizio extra in omaggio (non sconti!)
- Codice promo copiabile per condivisione social
- Toggle attiva/disattiva per ogni promo
- Toggle "Mostra sulla prenotazione online"
- Tracking utilizzi per ogni promozione
- Suggerimento automatico promozioni al checkout
- Promozioni visibili sulla pagina pubblica /prenota con design accattivante
- 8 promozioni default create:
  1. Speciale Under 30 (UNDER30) - Piega o Trattamento Lucidante
  2. Recensione Google (REVIEW) - Maschera Ristrutturante o Olaplex
  3. Porta un'Amica (AMICA) - Taglio Punte o Trattamento
  4. Prima Visita (BENVENUTA) - Consulenza Colore + Trattamento
  5. Buon Compleanno (AUGURI) - Piega o Trattamento
  6. Fidelity VIP (VIP10) - Servizio a Scelta
  7. Card Prepagata -15% (CARD15) - Sconto 15% su tutti i servizi
  8. Abbonamento Mensile + Piega Omaggio (ABBO)

## Credenziali Test
- Email: melitobruno@gmail.com
- Password: password123

## Backlog
- (P1) Attivare Twilio SMS Reminders (richiede chiavi API utente)
- (P1) EMERGENT_LLM_KEY su Render per upload foto sito
- (P2) Stampa ricevuta dopo checkout
- (P2) Blocco fasce orarie (pause/ferie)
- (P2) Refactoring server.py (>3000 righe) in moduli separati
