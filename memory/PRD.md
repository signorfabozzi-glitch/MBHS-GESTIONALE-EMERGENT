# PRD - Salone Parrucchiera Manager

## Problema Originale
App gestionale completa per salone da parrucchiera per signora con:
- Autenticazione JWT (email/password)
- Dashboard, Agenda appuntamenti, viste settimanali/mensili
- Gestione Clienti, Servizi, Statistiche, Storico, Impostazioni
- Promemoria SMS, Export PDF, Gestione Operatori

## User Personas
- **Titolare salone**: gestisce appuntamenti, clienti, statistiche incassi
- **Collaboratrici**: visualizzano propri appuntamenti assegnati
- **Target**: parrucchiere 30-55 anni, gestione rapida e intuitiva

## Requisiti Core (Statici)
1. Autenticazione sicura JWT
2. CRUD Clienti con anagrafica e storico visite
3. CRUD Servizi con categorie, durata, prezzi
4. CRUD Appuntamenti con selezione multipla servizi
5. Viste calendario (giornaliera, settimanale, mensile)
6. Statistiche incassi e servizi popolari
7. Gestione orari apertura/chiusura

## Funzionalità Implementate ✅

### MVP (Sessione 1) - 24/02/2026
- [x] Backend FastAPI con MongoDB
- [x] Autenticazione JWT (register/login)
- [x] Dashboard con statistiche real-time
- [x] Gestione Clienti (CRUD completo)
- [x] Gestione Servizi con categorie
- [x] Agenda appuntamenti giornaliera
- [x] Vista settimanale calendario
- [x] Vista mensile calendario
- [x] Statistiche con grafici (Recharts)
- [x] Storico appuntamenti con filtri
- [x] Impostazioni profilo/salone

### Fase 2 (Sessione 2) - 24/02/2026
- [x] Gestione Operatori/Collaboratrici
- [x] Assegnazione operatore ad appuntamenti
- [x] Promemoria SMS via Twilio (pronto per configurazione)
- [x] Export Report statistiche (TXT)
- [x] Statistiche per operatore
- [x] Preferenze SMS per cliente

## Stack Tecnologico
- **Frontend**: React 18, Tailwind CSS, Shadcn/UI, Recharts
- **Backend**: FastAPI, Motor (async MongoDB)
- **Database**: MongoDB
- **Auth**: JWT (bcrypt + PyJWT)
- **SMS**: Twilio (opzionale)
- **Design**: "Rose & Stone" theme

## Backlog (P0/P1/P2)

### P0 - Critici
- [ ] Configurazione Twilio per SMS produzione

### P1 - Importanti
- [ ] Promemoria automatici 24h prima appuntamento
- [ ] Export PDF professionale con logo
- [ ] Notifiche push browser

### P2 - Nice to Have
- [ ] Calendario multi-operatore (vista parallela)
- [ ] Gestione ferie/assenze operatori
- [ ] Report mensili automatici via email
- [ ] Integrazione Google Calendar
- [ ] App mobile (React Native)
- [ ] Sistema prenotazioni online per clienti

## API Endpoints
- `POST /api/auth/register` - Registrazione
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Profilo utente
- `GET/POST/PUT/DELETE /api/clients` - Clienti
- `GET/POST/PUT/DELETE /api/services` - Servizi
- `GET/POST/PUT/DELETE /api/operators` - Operatori
- `GET/POST/PUT/DELETE /api/appointments` - Appuntamenti
- `GET /api/stats/dashboard` - Stats dashboard
- `GET /api/stats/revenue` - Stats incassi
- `GET /api/stats/export-pdf` - Export report
- `POST /api/sms/send-reminder` - Invia SMS
- `GET /api/sms/status` - Stato Twilio
- `GET/PUT /api/settings` - Impostazioni

## Next Tasks
1. Configurare Twilio con credenziali produzione
2. Implementare scheduler per promemoria automatici
3. Creare export PDF con formattazione professionale
