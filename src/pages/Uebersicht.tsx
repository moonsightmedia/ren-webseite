import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/home";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, History, Vote, PieChart, HandHeart, Heart } from "lucide-react";

const links = [
  {
    to: "/konzept",
    label: "Das Konzept",
    description: "Warum REN anders ist",
    detail: "Pool-Modell, 98/2-Regel und demokratische Entscheidungen – so funktioniert Hilfe bei uns.",
    icon: BookOpen,
  },
  {
    to: "/geschichte",
    label: "Geschichte",
    description: "Wie REN entstand & Über mich",
    detail: "Lenny erzählt von seiner Familie, seinen Werten und der Idee hinter REN.",
    icon: History,
  },
  {
    to: "/abstimmung",
    label: "Abstimmung",
    description: "Mitentscheiden über Hilfeanfragen",
    detail: "Aktuelle Anfragen ansehen und mit Ihrer Stimme entscheiden, wer Unterstützung erhält.",
    icon: Vote,
  },
  {
    to: "/transparenz",
    label: "Transparenz",
    description: "Einblick in Pool und Ausgaben",
    detail: "Jeder Euro nachvollziehbar: Pool-Stand, genehmigte Anfragen und Auszahlungen.",
    icon: PieChart,
  },
  {
    to: "/hilfe-anfragen",
    label: "Hilfe anfragen",
    description: "Unterstützung beantragen",
    detail: "Brauchen Sie oder jemand, den Sie kennen, Hilfe? Hier können Sie eine Anfrage stellen.",
    icon: HandHeart,
  },
  {
    to: "/spenden",
    label: "Spenden",
    description: "In den Pool einzahlen",
    detail: "98 % Ihrer Spende gehen direkt in Hilfe – schnell, sicher und transparent.",
    icon: Heart,
  },
];

const Uebersicht = () => {
  return (
    <Layout>
      <HeroSection />

      <section className="py-16 md:py-24 bg-ren-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-2">
              Alle Bereiche
            </h2>
            <p className="text-ren-text-secondary">
              Wählen Sie, wohin Sie möchten.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {links.map(({ to, label, description, detail, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="group flex items-start gap-5 p-6 md:p-8 rounded-2xl bg-card border border-ren-divider hover:border-accent hover:shadow-md transition-all text-left"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-lg font-semibold text-card-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                    {label}
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0" />
                  </span>
                  <p className="text-sm font-medium text-ren-text-secondary mt-1">
                    {description}
                  </p>
                  <p className="text-sm text-ren-text-secondary/90 mt-2 leading-relaxed">
                    {detail}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Uebersicht;
