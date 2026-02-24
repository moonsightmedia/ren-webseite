export interface HelpRequest {
  id: string;
  title: string;
  description: string;
  category: "bildung" | "nothilfe" | "infrastruktur" | "gesundheit";
  status: "eingereicht" | "offen" | "genehmigt" | "abgelehnt" | "abgeschlossen";
  requestedAmount: number;
  disbursedAmount?: number;
  votesFor: number;
  votesAgainst: number;
  votingEndsAt: string;
  image: string;
  location: string;
  details: string;
  usage: { label: string; amount: number }[];
  requestedBy: string;
  requestedAt: string;
}

// Demo pool data
export const poolData = {
  currentAmount: 12450,
  totalDonated: 87500,
  totalDisbursed: 75050,
  donorCount: 342,
  openRequestsCount: 4,
};

export const helpRequests: HelpRequest[] = [
  {
    id: "schulessen-kinder",
    title: "Schulessen für Kinder",
    description: "Gesunde Mahlzeiten für 200 Kinder an drei Grundschulen in ländlichen Regionen.",
    category: "bildung",
    status: "offen",
    requestedAmount: 15000,
    votesFor: 127,
    votesAgainst: 12,
    votingEndsAt: "2026-02-10T23:59:59Z",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    location: "Deutschland",
    details: "Viele Kinder kommen ohne Frühstück zur Schule und können sich kein Mittagessen leisten. Wir sorgen dafür, dass 200 Kinder an drei Schulen täglich eine warme, gesunde Mahlzeit bekommen. Das verbessert nicht nur ihre Konzentration, sondern auch ihre Gesundheit und Lebensfreude.",
    usage: [
      { label: "Lebensmittel & Zubereitung", amount: 12000 },
      { label: "Küchenpersonal", amount: 2500 },
      { label: "Geschirr & Ausstattung", amount: 500 },
    ],
    requestedBy: "Förderverein Grundschule Mitte",
    requestedAt: "2026-01-15T10:00:00Z",
  },
  {
    id: "nothilfe-familien",
    title: "Nothilfe für Familien",
    description: "Soforthilfe für Familien in akuter finanzieller Not – Miete, Strom, Lebensmittel.",
    category: "nothilfe",
    status: "offen",
    requestedAmount: 8000,
    votesFor: 89,
    votesAgainst: 23,
    votingEndsAt: "2026-02-08T23:59:59Z",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    location: "Deutschland",
    details: "Wenn plötzlich der Job wegfällt oder eine Krankheit alles verändert, geraten Familien schnell in existenzielle Not. Unser Nothilfe-Fonds springt ein, wenn es darauf ankommt – unbürokratisch und schnell.",
    usage: [
      { label: "Mietunterstützung", amount: 4000 },
      { label: "Stromkosten-Übernahme", amount: 2000 },
      { label: "Lebensmittelgutscheine", amount: 2000 },
    ],
    requestedBy: "Anonym",
    requestedAt: "2026-01-20T14:30:00Z",
  },
  {
    id: "brunnenbau-afrika",
    title: "Brunnenbau in Afrika",
    description: "Sauberes Trinkwasser für ein Dorf mit 500 Einwohnern durch einen neuen Tiefbrunnen.",
    category: "infrastruktur",
    status: "offen",
    requestedAmount: 12000,
    votesFor: 156,
    votesAgainst: 8,
    votingEndsAt: "2026-02-12T23:59:59Z",
    image: "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=800&q=80",
    location: "Ghana",
    details: "Ohne sauberes Wasser gibt es keine Gesundheit, keine Bildung, keine Entwicklung. Mit diesem Brunnen versorgen wir ein ganzes Dorf mit Trinkwasser – nachhaltig und für Generationen.",
    usage: [
      { label: "Bohrung & Material", amount: 8000 },
      { label: "Pumpe & Installation", amount: 3000 },
      { label: "Schulung der Dorfbewohner", amount: 1000 },
    ],
    requestedBy: "WaterAid Ghana Partner",
    requestedAt: "2026-01-10T08:00:00Z",
  },
  {
    id: "medizinische-versorgung",
    title: "Medizinische Versorgung",
    description: "Mobile Arztpraxis für abgelegene Dörfer ohne Zugang zu medizinischer Versorgung.",
    category: "gesundheit",
    status: "offen",
    requestedAmount: 25000,
    votesFor: 45,
    votesAgainst: 67,
    votingEndsAt: "2026-02-05T23:59:59Z",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    location: "Kenia",
    details: "In vielen ländlichen Regionen Afrikas gibt es keinen Arzt im Umkreis von 50 Kilometern. Mit einer mobilen Arztpraxis bringen wir medizinische Grundversorgung direkt zu den Menschen.",
    usage: [
      { label: "Fahrzeug & Ausstattung", amount: 15000 },
      { label: "Medikamente & Material", amount: 7000 },
      { label: "Ärzte & Personal", amount: 3000 },
    ],
    requestedBy: "Doctors Without Borders Partner",
    requestedAt: "2026-01-05T12:00:00Z",
  },
  {
    id: "winterhilfe-obdachlose",
    title: "Winterhilfe für Obdachlose",
    description: "Warme Schlafsäcke, Kleidung und heiße Mahlzeiten für obdachlose Menschen.",
    category: "nothilfe",
    status: "abgeschlossen",
    requestedAmount: 5000,
    disbursedAmount: 5000,
    votesFor: 234,
    votesAgainst: 5,
    votingEndsAt: "2025-12-01T23:59:59Z",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
    location: "Deutschland",
    details: "Jeder Winter kostet obdachlosen Menschen das Leben. Mit wärmenden Schlafsäcken, Kleidung und heißen Mahlzeiten helfen wir ihnen, die kalte Jahreszeit zu überstehen.",
    usage: [
      { label: "Winterschlafsäcke", amount: 2000 },
      { label: "Warme Kleidung", amount: 1500 },
      { label: "Heiße Mahlzeiten", amount: 1500 },
    ],
    requestedBy: "Kältehilfe Berlin e.V.",
    requestedAt: "2025-11-01T09:00:00Z",
  },
  {
    id: "schulbau-nepal",
    title: "Schulbau in Nepal",
    description: "Wiederaufbau einer durch das Erdbeben zerstörten Schule für 150 Kinder.",
    category: "bildung",
    status: "genehmigt",
    requestedAmount: 35000,
    disbursedAmount: 22000,
    votesFor: 312,
    votesAgainst: 18,
    votingEndsAt: "2025-12-15T23:59:59Z",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80",
    location: "Nepal",
    details: "Nach dem verheerenden Erdbeben 2015 sind viele Schulen noch immer zerstört. Wir bauen eine erdbebensichere Schule, damit 150 Kinder wieder einen sicheren Ort zum Lernen haben.",
    usage: [
      { label: "Baumaterialien", amount: 20000 },
      { label: "Arbeitskräfte", amount: 10000 },
      { label: "Schulmöbel & Ausstattung", amount: 5000 },
    ],
    requestedBy: "Nepal School Foundation",
    requestedAt: "2025-11-10T10:00:00Z",
  },
  {
    id: "lesefoerderung-bibliothek",
    title: "Leseförderung in Stadtbibliothek",
    description: "Bücher und Lese-Ecken für benachteiligte Kinder in der Stadtbibliothek.",
    category: "bildung",
    status: "eingereicht",
    requestedAmount: 4500,
    votesFor: 0,
    votesAgainst: 0,
    votingEndsAt: "2026-12-31T23:59:59Z",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    location: "Deutschland",
    details: "Viele Kinder haben zu Hause keine Bücher. Wir richten Lese-Ecken ein und kaufen aktuelle Kinderbücher, damit alle Zugang zu Lesestoff haben.",
    usage: [
      { label: "Kinderbücher", amount: 2500 },
      { label: "Möbel Lese-Ecken", amount: 1500 },
      { label: "Workshops", amount: 500 },
    ],
    requestedBy: "Stadtbibliothek Musterstadt",
    requestedAt: "2026-02-20T14:00:00Z",
  },
  {
    id: "warmes-essen-tafel",
    title: "Warmes Essen für Tafel-Besucher",
    description: "Tägliche warme Mahlzeiten für Bedürftige an der örtlichen Tafel.",
    category: "nothilfe",
    status: "eingereicht",
    requestedAmount: 6000,
    votesFor: 0,
    votesAgainst: 0,
    votingEndsAt: "2026-12-31T23:59:59Z",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
    location: "Deutschland",
    details: "Die Tafel versorgt viele Menschen mit Lebensmitteln. Für warme Mahlzeiten fehlt jedoch die Küchenausstattung. Mit dieser Spende können wir täglich kochen.",
    usage: [
      { label: "Küchenausstattung", amount: 3000 },
      { label: "Lebensmittel", amount: 2500 },
      { label: "Honorar Koch", amount: 500 },
    ],
    requestedBy: "Tafel e.V. Region Mitte",
    requestedAt: "2026-02-22T09:30:00Z",
  },
];

export const categoryLabels: Record<HelpRequest["category"], string> = {
  bildung: "Bildung",
  nothilfe: "Nothilfe",
  infrastruktur: "Infrastruktur",
  gesundheit: "Gesundheit",
};

export const statusLabels: Record<HelpRequest["status"], string> = {
  eingereicht: "Eingereicht",
  offen: "Zur Abstimmung",
  genehmigt: "Genehmigt",
  abgelehnt: "Abgelehnt",
  abgeschlossen: "Abgeschlossen",
};

export function getHelpRequestById(id: string): HelpRequest | undefined {
  return helpRequests.find((r) => r.id === id);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateVotePercentage(votesFor: number, votesAgainst: number): number {
  const total = votesFor + votesAgainst;
  if (total === 0) return 0;
  return Math.round((votesFor / total) * 100);
}

export function getTimeRemaining(endDate: string): string {
  const end = new Date(endDate);
  const now = new Date();
  const diff = end.getTime() - now.getTime();
  
  if (diff <= 0) return "Beendet";
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  if (days > 0) return `${days} Tag${days > 1 ? "e" : ""} übrig`;
  if (hours > 0) return `${hours} Stunde${hours > 1 ? "n" : ""} übrig`;
  return "Weniger als 1 Stunde";
}
