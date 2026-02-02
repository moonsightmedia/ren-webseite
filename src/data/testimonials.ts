export interface Testimonial {
  id: string;
  name: string;
  age?: number;
  role: "hilfeempfänger" | "spender";
  quote: string;
  image: string;
  location?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "maria",
    name: "Maria",
    age: 68,
    role: "hilfeempfänger",
    quote: "Nach dem Tod meines Mannes wusste ich nicht mehr weiter. Die Miete, die Arztkosten – alles wurde zu viel. REN hat mir nicht nur finanziell geholfen, sondern mir auch das Gefühl gegeben, dass ich nicht allein bin.",
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&q=80",
    location: "München",
  },
  {
    id: "tobias",
    name: "Tobias",
    role: "spender",
    quote: "Bei REN weiß ich genau, wohin mein Geld fließt. Keine versteckten Verwaltungskosten, keine Intransparenz. Ich sehe die Projekte, die Fortschritte – und fühle mich als Teil einer echten Gemeinschaft.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    location: "Berlin",
  },
  {
    id: "anna",
    name: "Anna",
    age: 34,
    role: "hilfeempfänger",
    quote: "Als alleinerziehende Mutter von drei Kindern stand ich vor dem Nichts. REN hat uns durch den Winter gebracht – mit Lebensmitteln, Kleidung und so viel Menschlichkeit.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    location: "Hamburg",
  },
];

export const transparencyStats = {
  totalDonations: 125000,
  disbursed: 122500,
  adminCosts: 2500,
  activeProjects: 5,
  helpedPeople: 847,
  donorCount: 312,
};

export const yearlyReports = [
  { year: 2024, donations: 45000, disbursed: 44100 },
  { year: 2023, donations: 52000, disbursed: 50960 },
  { year: 2022, donations: 28000, disbursed: 27440 },
];

export const recentDisbursements = [
  {
    date: "2024-01-15",
    project: "Schulessen für Kinder",
    amount: 3500,
    description: "Monatliche Lebensmittellieferung",
  },
  {
    date: "2024-01-10",
    project: "Nothilfe für Familien",
    amount: 1200,
    description: "Mietunterstützung für Familie M.",
  },
  {
    date: "2024-01-05",
    project: "Brunnenbau in Afrika",
    amount: 4000,
    description: "Anzahlung Bohrunternehmen",
  },
  {
    date: "2023-12-20",
    project: "Winterhilfe für Obdachlose",
    amount: 2500,
    description: "Einkauf Winterschlafsäcke",
  },
];
