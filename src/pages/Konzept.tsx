import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, Eye, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const problems = [
  "Hohe Verwaltungskosten verschlingen einen Großteil der Spenden",
  "Intransparenz: Spender wissen nicht, wo ihr Geld landet",
  "Hierarchische Entscheidungen ohne Mitsprache der Community",
  "Lange Wege vom Spender zum Hilfebedürftigen",
];

const solutions = [
  {
    icon: Heart,
    title: "98% direkte Hilfe",
    description: "Nur 2% fließen in notwendige Verwaltung. Jeder Euro zählt.",
  },
  {
    icon: Eye,
    title: "Volle Transparenz",
    description: "Öffentlicher Spendenverlauf, detaillierte Projektberichte, keine versteckten Kosten.",
  },
  {
    icon: Users,
    title: "Demokratische Entscheidungen",
    description: "Die Community entscheidet gemeinsam, welche Projekte gefördert werden.",
  },
];

const Konzept = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-ren-dark py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Das Konzept
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Warum REN existiert
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Wir haben REN gegründet, weil wir glauben, dass Hilfe anders funktionieren kann – 
              transparenter, direkter, gemeinschaftlicher.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28 bg-ren-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                Das Problem klassischer Spendenmodelle
              </h2>
              <p className="text-ren-text-secondary">
                Viele Menschen wollen helfen – aber sie vertrauen den bestehenden Systemen nicht mehr.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problems.map((problem, index) => (
                <Card key={index} className="bg-card border-0 card-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-destructive font-bold text-sm">✕</span>
                    </div>
                    <p className="text-card-foreground">{problem}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
                Unsere Lösung
              </h2>
              <p className="text-secondary-foreground/70">
                REN macht Hilfe so, wie sie sein sollte: direkt, transparent, gemeinschaftlich.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutions.map((solution) => (
                <Card key={solution.title} className="bg-card border-0 card-shadow text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                      <solution.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-ren-text-secondary text-sm">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 98/2 Model */}
      <section className="py-20 md:py-28 bg-ren-dark">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Das 98/2-Modell
              </h2>
              <p className="text-primary-foreground/70">
                So einfach ist unsere Kostenstruktur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-accent border-0 overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl md:text-7xl font-bold text-accent-foreground mb-4">
                    98%
                  </div>
                  <h3 className="text-xl font-bold text-accent-foreground mb-2">
                    Direkte Hilfe
                  </h3>
                  <p className="text-accent-foreground/80 text-sm">
                    Geht direkt in Projekte und an Hilfebedürftige
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary border-0 overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl md:text-7xl font-bold text-secondary-foreground mb-4">
                    2%
                  </div>
                  <h3 className="text-xl font-bold text-secondary-foreground mb-2">
                    Verwaltung
                  </h3>
                  <p className="text-secondary-foreground/70 text-sm">
                    Server, Zahlungsgebühren, notwendige Infrastruktur
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 bg-ren-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                So funktioniert's
              </h2>
            </div>

            <div className="space-y-6">
              {[
                { step: 1, title: "Hilfe wird beantragt", description: "Menschen in Not stellen einen Antrag – anonym oder öffentlich." },
                { step: 2, title: "Community prüft", description: "Die REN-Community prüft und bewertet die Anträge gemeinsam." },
                { step: 3, title: "Projekt wird gestartet", description: "Bei Zustimmung wird ein transparentes Spendenprojekt erstellt." },
                { step: 4, title: "Spenden fließen", description: "Spender unterstützen gezielt – jeder Cent wird dokumentiert." },
                { step: 5, title: "Hilfe kommt an", description: "98% der Spenden gehen direkt an die Hilfebedürftigen." },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-bold">{item.step}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-bold text-card-foreground mb-1">{item.title}</h3>
                    <p className="text-ren-text-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/projekte">
                <Button className="bg-accent hover:bg-ren-cta-hover text-accent-foreground font-semibold">
                  Projekte ansehen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Konzept;
