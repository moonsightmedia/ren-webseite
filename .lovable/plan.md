
# Plan: REN Pool-Modell mit demokratischer Abstimmung

## Zusammenfassung

Die Website wird vom aktuellen "Direkt-an-Projekt-spenden"-Modell auf das echte REN-Konzept umgestellt: **Spender spenden in einen gemeinsamen Pool, und die Community entscheidet demokratisch, welche Hilfeanfragen Geld erhalten.**

---

## Das neue Konzept im Überblick

```text
┌─────────────────────────────────────────────────────────────────┐
│                         SPENDER                                 │
│                           │                                     │
│                           ▼                                     │
│                    ┌─────────────┐                              │
│                    │  REN-POOL   │  (Gemeinsamer Spendentopf)   │
│                    └─────────────┘                              │
│                           │                                     │
│                           ▼                                     │
│              ┌────────────────────────┐                         │
│              │  COMMUNITY-ABSTIMMUNG  │                         │
│              └────────────────────────┘                         │
│                           │                                     │
│          ┌────────────────┼────────────────┐                    │
│          ▼                ▼                ▼                    │
│    ┌──────────┐    ┌──────────┐    ┌──────────┐                 │
│    │ Anfrage 1│    │ Anfrage 2│    │ Anfrage 3│                 │
│    │   ✓ JA   │    │   ✗ NEIN │    │   ✓ JA   │                 │
│    └──────────┘    └──────────┘    └──────────┘                 │
│          │                                │                     │
│          ▼                                ▼                     │
│    GELD AUS POOL                    GELD AUS POOL               │
└─────────────────────────────────────────────────────────────────┘
```

---

## Änderungen

### 1. Neue Datenstruktur für Hilfeanfragen

Die bisherigen "Projekte" werden zu **"Hilfeanfragen"** umbenannt. Neue Status-Felder:
- **offen** - Kann abgestimmt werden
- **genehmigt** - Community hat zugestimmt, Geld wird ausgezahlt
- **abgelehnt** - Community hat abgelehnt
- **abgeschlossen** - Hilfe wurde geleistet

Neue Felder:
- `requestedAmount` - Angefragte Summe
- `votesFor` / `votesAgainst` - Abstimmungsergebnisse
- `votingEndsAt` - Ende der Abstimmungsperiode

### 2. Spenden-Seite

**Vorher:** "Spende X€ an dieses Projekt"

**Nachher:**
- "Spende an den REN-Pool"
- Erklärung: "Deine Spende fließt in den gemeinsamen Topf. Die Community entscheidet, wer Hilfe erhält."
- Anzeige des aktuellen Pool-Stands
- Keine Projektauswahl mehr

### 3. Projekte-Seite wird zu "Hilfeanfragen"-Übersicht

**Vorher:** Projekte mit Fortschrittsbalken (gesammelt vs. Ziel)

**Nachher:**
- Neue Tabs: "Zur Abstimmung" | "Genehmigt" | "Abgeschlossen"
- Jede Anfrage zeigt:
  - Beschreibung der Notlage
  - Angefragte Summe
  - Abstimmungsstatus (Ja/Nein-Stimmen)
  - Countdown bis Abstimmungsende
  - Button: "Jetzt abstimmen" oder "Details ansehen"

### 4. Neue Abstimmungs-Komponente

- Einfache Ja/Nein-Abstimmung
- Anzeige aktueller Stimmenstand
- Hinweis: "Du musst eingeloggt sein, um abzustimmen" (für spätere Auth-Integration)

### 5. Pool-Anzeige-Komponente

Auf der Startseite und Spenden-Seite:
- Aktueller Pool-Stand (Demo: z.B. 12.450€)
- Anzahl offener Anfragen
- "Das Geld wartet darauf, verteilt zu werden"

### 6. Konzept-Seite

Aktualisierung mit den drei Problemen aus deinem Bild:
- **Vertrauensdefizit** - Spender wissen nicht, wie Mittel verwendet werden
- **Entscheidungsprozesse** - Liegen bei Organisationen, nicht bei Gemeinschaft
- **Missbrauchsrisiken** - Direkte Überweisungen anfällig für Fehlverwendung

### 7. Texte und CTAs anpassen

| Seite | Alt | Neu |
|-------|-----|-----|
| Hero-Button | "Jetzt spenden" | "In den Pool spenden" |
| FeatureBar | "98% direkte Hilfe" | Bleibt, aber Erklärung anpassen |
| ProjectCard | "Jetzt unterstützen" | "Abstimmen" oder "Details" |
| ProjektDetail | "Jetzt spenden" | "Diese Anfrage unterstützen" (Abstimmen) |

---

## Neue Dateien

1. `src/data/helpRequests.ts` - Neue Datenstruktur mit Anfragen statt Projekten
2. `src/components/PoolDisplay.tsx` - Pool-Stand-Anzeige
3. `src/components/VotingCard.tsx` - Abstimmungskomponente
4. `src/pages/Abstimmung.tsx` - Neue Seite für aktive Abstimmungen

---

## Geänderte Dateien

1. `src/pages/Spenden.tsx` - Pool-Spende statt Projekt-Spende
2. `src/pages/Projekte.tsx` - Wird zu Anfragen-Übersicht mit Abstimmungsfunktion
3. `src/pages/ProjektDetail.tsx` - Zeigt Anfrage-Details mit Voting statt Spenden-Button
4. `src/pages/Konzept.tsx` - Aktualisierte Problembeschreibung
5. `src/components/home/HeroSection.tsx` - Angepasste CTAs
6. `src/components/home/ProjectsSection.tsx` - Zeigt Anfragen zur Abstimmung
7. `src/components/ProjectCard.tsx` - Wird zu `HelpRequestCard` mit Voting-Status
8. `src/App.tsx` - Neue Route `/abstimmung`
9. `src/components/layout/Header.tsx` - Neuer Menüpunkt "Abstimmung"

---

## Hinweise

- **Authentifizierung:** Für echte Abstimmungen wäre später Supabase-Auth nötig. Vorerst wird das UI vorbereitet mit Demo-Daten.
- **Pool-Stand:** Zunächst als statischer Demo-Wert, später mit echten Daten aus der Datenbank.
- **Voting-Logik:** Zunächst Frontend-only mit localStorage, später Backend-Integration.
