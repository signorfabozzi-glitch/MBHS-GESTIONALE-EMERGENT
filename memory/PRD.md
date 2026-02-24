# PRD - Salone Bella Donna

## Problema Originale
Applicazione gestionale completa per un salone di parrucchiera con autenticazione, gestione appuntamenti, clienti, servizi, operatori, statistiche e funzionalità avanzate.

## Stato Attuale: COMPLETATO ✅

### Funzionalità Implementate

#### Core Application
- ✅ Autenticazione JWT (email/password)
- ✅ Dashboard principale
- ✅ Planning giornaliero con griglia 15 minuti
- ✅ Vista settimanale e mensile
- ✅ Gestione Clienti (CRUD)
- ✅ Gestione Servizi (CRUD)
- ✅ Gestione Operatori (CRUD)
- ✅ Statistiche con export PDF
- ✅ Storico appuntamenti

#### Fase 2 - Funzionalità Avanzate
- ✅ Promemoria SMS (Twilio)
- ✅ Export PDF statistiche
- ✅ Gestione Operatori

#### Fase 3 - Import Dati
- ✅ Import clienti da Excel (161 clienti)
- ✅ UI per import Excel nella pagina Clienti

#### Fase 4 - UX Improvements
- ✅ Landing page = Planning giornaliero
- ✅ Vista per operatore con colonne

#### Fase 5 - Nuove Funzionalità (24 Feb 2026)
- ✅ **Card Prepagate / Abbonamenti**: Pagina completa per gestire card prepagate e abbonamenti clienti
- ✅ **Ricerca Rapida Cliente**: Barra di ricerca nel Planning con highlight appuntamenti
- ✅ **Appuntamenti Ricorrenti**: Pulsante "Ripeti" su ogni appuntamento per creare serie ricorrenti

#### Import Dati Aggiuntivi (24 Feb 2026)
- ✅ **18 Trattamenti** importati da Trattamenti.xml
- ✅ **61 Note Clienti** aggiornate da Memo.xlsx

## Architettura Tecnica

### Frontend
- React 18 con React Router
- Tailwind CSS + Shadcn/UI
- Axios per API calls
- date-fns per gestione date

### Backend
- FastAPI (Python)
- MongoDB
- JWT Authentication
- Twilio SMS

### Struttura File
```
/app/
├── backend/
│   ├── server.py          # API FastAPI
│   ├── requirements.txt
│   └── .env
├── frontend/
│   └── src/
│       ├── pages/
│       │   ├── PlanningPage.jsx    # Home + Search + Recurring
│       │   ├── PrepaidCardsPage.jsx # Card Prepagate
│       │   └── ...
│       └── components/
│           └── Layout.jsx          # Sidebar con Cards
└── scripts/
    ├── import_clients_api.py
    ├── import_services.py
    └── import_memo.py
```

## API Endpoints Principali
- `/api/auth/login`, `/api/auth/register`
- `/api/clients`, `/api/clients/search/appointments`
- `/api/services`
- `/api/appointments`, `/api/appointments/recurring`
- `/api/operators`
- `/api/cards` (CRUD + use/recharge)

## Credenziali Test
- Email: salone@example.com
- Password: password123

## Integrazioni 3rd Party
- **Twilio**: SMS reminders (richiede credenziali in .env)

## Backlog Futuro (P2)
- Blocco fasce orarie (pause, ferie)
- Sconti e promozioni
- Pulsante WhatsApp diretto
- Analisi clienti (fedeltà, ore punta)
- Refactoring server.py in moduli separati
