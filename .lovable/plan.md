
# REN Website – Vollständige Frontend-Implementierung

## Übersicht
Entwicklung einer modernen, visuell konsistenten Website für die transparente Spendenorganisation REN. Mobile-First-Ansatz mit Premium-Charity-Ästhetik. Alle Seiten werden mit statischen Demo-Daten und Placeholder-Bildern umgesetzt.

---

## Design-System

### Farbpalette
- **Primär dunkel (Hero/Footer):** #0A0630
- **Sekundär dunkel:** #272357
- **CTA Rot:** #8E1E2D (Hover: #B23A48)
- **Heller Hintergrund:** #F9F9F9
- **Cards:** Weiß mit dezenten Schatten
- **Divider:** #E6E6EB
- **Sekundärtext:** #6B6B7A

### Typografie & Stil
- Moderne Sans-Serif (Inter oder ähnlich)
- Große, klare Headlines mit viel Weißraum
- Abgerundete Cards mit dezenten Schatten
- Outline-Icons (Lucide)
- Große Touch-Zonen für Mobile

---

## Seitenstruktur

### 1. Gemeinsame Komponenten
- **Header:** Logo + Navigation (Das Konzept, Projekte, Transparenz, Hilfe Anfragen) + Einloggen + Spenden-Button
- **Footer:** Quick-Links, Social Icons, Impressum/Datenschutz
- **Mobile Navigation:** Hamburger-Menü mit slide-in Panel

### 2. Startseite
- **Hero-Sektion:** Emotionales Hintergrundbild, dunkler Gradient, „Menschlichkeit in Aktion" Headline, zwei CTAs
- **Feature-Leiste:** Drei Icons (Transparenz, Gemeinschaft, Verantwortung)
- **Aktuelle Projekte:** Drei Projekt-Cards mit Fortschrittsbalken
- **Trust-Sektion:** „98% gehen in direkte Hilfe" Banner
- **Erfolgsgeschichten:** Zwei Testimonial-Cards (Maria & Tobias)
- **Abschluss-CTAs:** Zwei große Action-Boxes (Spendenverlauf / Hilfe anfragen)

### 3. Das Konzept
- Erklärung warum REN existiert
- Probleme klassischer Spendenmodelle
- Demokratische Entscheidungsprozesse
- 98%/2% Modell visualisiert
- Infografik zur Transparenz

### 4. Aktuelle Projekte (Übersicht)
- Filterbarer Grid mit Projekt-Cards
- Kategorien & Status-Filter
- Fortschrittsanzeige pro Projekt
- Link zu Detailseiten

### 5. Projekt-Detailseite
- Großes Hero-Bild
- Projektbeschreibung
- Zielsumme + aktueller Stand
- Großer Fortschrittsbalken
- „Was mit dem Geld passiert" Auflistung
- Prominenter Spenden-CTA

### 6. Transparenz / Spendenverlauf
- Gesamtübersicht: Einnahmen, Ausgaben, laufende Projekte
- Visualisierung mit Diagrammen
- Jahresberichte (als Dummy-Downloads)
- Timeline der Auszahlungen

### 7. Hilfe Anfragen
- Erklärung wer Hilfe beantragen kann
- Formular mit: Art der Hilfe, Beschreibung, Summe, Anonym-Option
- Vertrauenswürdiger, warmer Ton
- Visuelle Erfolgsmeldung nach Absenden

### 8. Account-Bereich (UI-Mockup)
- Login/Registrierung Formulare
- Dashboard-Layout mit:
  - Übersicht eigener Spenden
  - Eigene Hilfe-Anträge
  - Status-Anzeigen

### 9. Über REN
- Mission & Vision
- Entstehungsgeschichte
- Kernwerte
- Team/Organisation (optional mit Platzhaltern)

### 10. Kontakt
- Kontaktformular (Name, E-Mail, Nachricht)
- E-Mail-Adresse
- Links zu Impressum & Datenschutz

---

## Demo-Daten

### Projekte
1. **Schulessen für Kinder** – 67% finanziert, 15.000€ Ziel
2. **Nothilfe für Familien** – noch 3.500€ benötigt
3. **Brunnenbau in Afrika** – noch 3.500€ benötigt
4. Weitere Beispielprojekte für Übersicht

### Testimonials
- Maria, 68 – Hilfe im Alltag
- Tobias – Spender-Perspektive

### Transparenz-Zahlen
- Gesamtspenden: 125.000€
- Ausgezahlt: 122.500€
- Verwaltungskosten: 2.500€

---

## Technische Umsetzung
- React mit TypeScript
- Tailwind CSS mit definiertem Farbschema
- React Router für Navigation
- Wiederverwendbare Komponenten (Cards, Buttons, Progress-Bars)
- Responsive Design (Mobile First)
- Hochwertige Unsplash-Placeholder

---

## Ergebnis
Eine vollständig navigierbare, visuell fertige Website, die als Fundament für echte Backend-Integration (Supabase), Zahlungsanbindung und Admin-Bereich dienen kann.
