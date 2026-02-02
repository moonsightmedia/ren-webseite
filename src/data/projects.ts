export interface Project {
  id: string;
  title: string;
  description: string;
  category: "bildung" | "nothilfe" | "infrastruktur" | "gesundheit";
  status: "aktiv" | "abgeschlossen" | "in-planung";
  goal: number;
  current: number;
  image: string;
  location: string;
  details: string;
  usage: { label: string; amount: number }[];
}

export const projects: Project[] = [
  {
    id: "schulessen-kinder",
    title: "Schulessen für Kinder",
    description: "Gesunde Mahlzeiten für 200 Kinder an drei Grundschulen in ländlichen Regionen.",
    category: "bildung",
    status: "aktiv",
    goal: 15000,
    current: 10050,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    location: "Deutschland",
    details: "Viele Kinder kommen ohne Frühstück zur Schule und können sich kein Mittagessen leisten. Wir sorgen dafür, dass 200 Kinder an drei Schulen täglich eine warme, gesunde Mahlzeit bekommen. Das verbessert nicht nur ihre Konzentration, sondern auch ihre Gesundheit und Lebensfreude.",
    usage: [
      { label: "Lebensmittel & Zubereitung", amount: 12000 },
      { label: "Küchenpersonal", amount: 2500 },
      { label: "Geschirr & Ausstattung", amount: 500 },
    ],
  },
  {
    id: "nothilfe-familien",
    title: "Nothilfe für Familien",
    description: "Soforthilfe für Familien in akuter finanzieller Not – Miete, Strom, Lebensmittel.",
    category: "nothilfe",
    status: "aktiv",
    goal: 8000,
    current: 4500,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    location: "Deutschland",
    details: "Wenn plötzlich der Job wegfällt oder eine Krankheit alles verändert, geraten Familien schnell in existenzielle Not. Unser Nothilfe-Fonds springt ein, wenn es darauf ankommt – unbürokratisch und schnell.",
    usage: [
      { label: "Mietunterstützung", amount: 4000 },
      { label: "Stromkosten-Übernahme", amount: 2000 },
      { label: "Lebensmittelgutscheine", amount: 2000 },
    ],
  },
  {
    id: "brunnenbau-afrika",
    title: "Brunnenbau in Afrika",
    description: "Sauberes Trinkwasser für ein Dorf mit 500 Einwohnern durch einen neuen Tiefbrunnen.",
    category: "infrastruktur",
    status: "aktiv",
    goal: 12000,
    current: 8500,
    image: "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=800&q=80",
    location: "Ghana",
    details: "Ohne sauberes Wasser gibt es keine Gesundheit, keine Bildung, keine Entwicklung. Mit diesem Brunnen versorgen wir ein ganzes Dorf mit Trinkwasser – nachhaltig und für Generationen.",
    usage: [
      { label: "Bohrung & Material", amount: 8000 },
      { label: "Pumpe & Installation", amount: 3000 },
      { label: "Schulung der Dorfbewohner", amount: 1000 },
    ],
  },
  {
    id: "medizinische-versorgung",
    title: "Medizinische Versorgung",
    description: "Mobile Arztpraxis für abgelegene Dörfer ohne Zugang zu medizinischer Versorgung.",
    category: "gesundheit",
    status: "in-planung",
    goal: 25000,
    current: 5000,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    location: "Kenia",
    details: "In vielen ländlichen Regionen Afrikas gibt es keinen Arzt im Umkreis von 50 Kilometern. Mit einer mobilen Arztpraxis bringen wir medizinische Grundversorgung direkt zu den Menschen.",
    usage: [
      { label: "Fahrzeug & Ausstattung", amount: 15000 },
      { label: "Medikamente & Material", amount: 7000 },
      { label: "Ärzte & Personal", amount: 3000 },
    ],
  },
  {
    id: "winterhilfe-obdachlose",
    title: "Winterhilfe für Obdachlose",
    description: "Warme Schlafsäcke, Kleidung und heiße Mahlzeiten für obdachlose Menschen.",
    category: "nothilfe",
    status: "abgeschlossen",
    goal: 5000,
    current: 5000,
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
    location: "Deutschland",
    details: "Jeder Winter kostet obdachlosen Menschen das Leben. Mit wärmenden Schlafsäcken, Kleidung und heißen Mahlzeiten helfen wir ihnen, die kalte Jahreszeit zu überstehen.",
    usage: [
      { label: "Winterschlafsäcke", amount: 2000 },
      { label: "Warme Kleidung", amount: 1500 },
      { label: "Heiße Mahlzeiten", amount: 1500 },
    ],
  },
  {
    id: "schulbau-nepal",
    title: "Schulbau in Nepal",
    description: "Wiederaufbau einer durch das Erdbeben zerstörten Schule für 150 Kinder.",
    category: "bildung",
    status: "aktiv",
    goal: 35000,
    current: 22000,
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80",
    location: "Nepal",
    details: "Nach dem verheerenden Erdbeben 2015 sind viele Schulen noch immer zerstört. Wir bauen eine erdbebensichere Schule, damit 150 Kinder wieder einen sicheren Ort zum Lernen haben.",
    usage: [
      { label: "Baumaterialien", amount: 20000 },
      { label: "Arbeitskräfte", amount: 10000 },
      { label: "Schulmöbel & Ausstattung", amount: 5000 },
    ],
  },
];

export const categoryLabels: Record<Project["category"], string> = {
  bildung: "Bildung",
  nothilfe: "Nothilfe",
  infrastruktur: "Infrastruktur",
  gesundheit: "Gesundheit",
};

export const statusLabels: Record<Project["status"], string> = {
  aktiv: "Aktiv",
  abgeschlossen: "Abgeschlossen",
  "in-planung": "In Planung",
};

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateProgress(current: number, goal: number): number {
  return Math.min(Math.round((current / goal) * 100), 100);
}
