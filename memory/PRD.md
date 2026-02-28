# PRD - MBHS SALON

## Problema Originale
Applicazione gestionale completa per un salone di parrucchiera (MBHS SALON / Bruno Melito Hair).

## Stato Attuale: COMPLETO
- URL Live: https://mbhssalon.onrender.com
- Preview: https://hair-salon-portal-1.preview.emergentagent.com

## Funzionalita Implementate

### Core
- Autenticazione JWT, Dashboard, Planning giornaliero
- Gestione Clienti/Servizi/Operatori, Checkout, Card Prepagate
- Report Incassi, Backup dati, PWA, Programma Fedelta

### Nuove Funzionalita (28 Feb 2026)
- Logo BM sostituito con sfondo bianco + tutte le icone PWA
- Pagine web e prenotazioni con tema vivace luminoso (crema/azzurro)
- Gestione appuntamenti online (modifica/cancella dal cliente)
- Scadenze uscite preimpostate (15gg/30gg/60gg/annuale)
- Annullamento promemoria WhatsApp (pulsante "Annulla")
- Promemoria colore dopo 30 giorni con invio WhatsApp
- Punti fedelta visibili nel dialog modifica appuntamento
- Pulsanti Aggiungi/Rimuovi punti manuali
- Promozioni visibili su pagina /sito
- Pulsante "Gestisci Appuntamento" sulla pagina /prenota

### Sessione Precedente (27 Feb 2026)
- Cambio data/ora appuntamento, Blocco orari passati
- Auto-selezione promo e card prepagate al checkout
- Rimossa colonna "Non assegnato", aggiunto "Cliente Occasionale"
- Pulsanti Uscite/Promozioni nella Dashboard

## Link
- Gestionale: https://mbhssalon.onrender.com (login)
- Sito pubblico: https://mbhssalon.onrender.com/sito
- Prenotazioni: https://mbhssalon.onrender.com/prenota

## Backlog
- (P1) Foto pagina web non si caricano su Render (richiede EMERGENT_LLM_KEY)
- (P1) Attivare Twilio SMS Reminders
- (P2) Stampa ricevuta dopo checkout
- (P2) Blocco fasce orarie per pause/ferie
- (P2) Refactoring server.py (>3000 righe)
