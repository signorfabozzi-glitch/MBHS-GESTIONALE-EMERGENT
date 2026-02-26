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
- Autenticazione JWT, Dashboard moduli, Planning giornaliero con Drag & Drop
- Vista settimanale/mensile, Gestione Clienti/Servizi/Operatori
- Checkout, Card Prepagate, Report Incassi, Backup dati
- PWA installabile, Riepilogo Giornaliero, Programma Fedelta

### CMS Sito Web
- Pagina pubblica /sito con contenuti dinamici
- Pagina admin /gestione-sito con 6 tab
- Upload immagini con Object Storage

### Fix Gestionale - Batch Critici
- Metodi pagamento: solo Contanti e Abbonamento/Prepagata
- Checkout con card prepagata: mostra card attive, scala servizi e valore
- Riscatto punti fedelta in cassa
- Appuntamento ricorrente: settimanale E mensile
- Cliente Generico e Nuovo Cliente al volo
- Operatore MBHS aggiunto, Ricerca cliente card/abbonamenti
- Frecce navigazione e swipe touch per cambiare giorno
- Report Incassi con nuovi label

### Promemoria & Richiami (26 Feb 2026)
- Pagina /reminders con template messaggi e variabili
- CRUD template messaggi, dialog anteprima, selezione template
- Reinvio promemoria (reset stato)
- WhatsApp funzionante con wa.me e messaggio personalizzabile

### Pacchetti Preimpostati (26 Feb 2026)
- Sezione "Pacchetti Preimpostati" nella pagina Card & Abbonamenti
- CRUD pacchetti con assegnazione rapida a cliente

### Avviso Telefono Mancante (26 Feb 2026)
- Badge "TEL MANCANTE" nel dropdown clienti del Planning
- Card info cliente diventa rossa quando telefono mancante
- Campo telefono evidenziato nel form nuovo cliente
- Badge "Telefono mancante!" nella lista clienti

### Registro Uscite / Scadenziario (26 Feb 2026)
- Nuova pagina /uscite con CRUD completo spese
- Categorie: affitto, fornitori, bollette, stipendi, tasse, prodotti, manutenzione, altro
- Pagamenti ricorrenti (mensile, trimestrale, annuale) - crea automaticamente la prossima scadenza
- Filtri per stato (da pagare/pagate/tutte) e per categoria
- Stats cards: Da Pagare, Scadute, Pagate
- Badge SCADUTA (rosso) e IN SCADENZA (arancione) per evidenza
- Banner scadenze sul Planning con link diretto

### Promemoria Automatici WhatsApp (26 Feb 2026)
- Endpoint auto-check che verifica appuntamenti domani non ancora avvisati
- Banner verde "Invio Automatico Promemoria" con pulsante batch
- "Invia Tutti su WhatsApp" apre i link wa.me sequenzialmente
- Segna automaticamente tutti come inviati dopo l'invio batch
- Banner animato nel Planning quando ci sono promemoria da inviare

## Credenziali Test
- Email: melitobruno@gmail.com
- Password: password123

## Backlog
- (P1) Attivare Twilio SMS Reminders (richiede chiavi API utente)
- (P1) EMERGENT_LLM_KEY nelle env di Render per upload foto
- (P2) Stampa ricevuta dopo checkout
- (P2) Blocco fasce orarie (pause/ferie)
- (P2) Refactoring server.py in moduli separati (>2700 righe)
- (P2) Refactoring PlanningPage.jsx in componenti piu piccoli
