import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Eye, Heart, ArrowRight, AlertTriangle, ShieldOff, UserX, Vote, Wallet, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: ShieldOff,
    title: "Vertrauensdefizit",
    description: "Spender wissen oft nicht, wie und wo ihre Mittel tatsächlich verwendet werden. Fehlende Transparenz führt zu Misstrauen.",
  },
  {
    icon: UserX,
    title: "Entscheidungsprozesse",
    description: "Entscheidungen über die Verwendung von Spendengeldern liegen bei wenigen Organisationen – nicht bei der Gemeinschaft.",
  },
  {
    icon: AlertTriangle,
    title: "Missbrauchsrisiken",
    description: "Direkte Überweisungen an Hilfesuchende sind anfällig für Fehlverwendung. Es fehlt an Kontrolle und Nachverfolgung.",
  },
];

const solutions = [
  {
    icon: Heart,
    title: "98% direkte Hilfe",
    description: "Nur 2% fließen in notwendige Verwaltung. Jeder Euro zählt und wird transparent dokumentiert.",
  },
  {
    icon: Eye,
    title: "Volle Transparenz",
    description: "Öffentlicher Pool-Stand, detaillierte Anfragen-Dokumentation, nachverfolgbare Auszahlungen.",
  },
  {
    icon: Vote,
    title: "Demokratische Abstimmung",
    description: "Die Community entscheidet gemeinsam, welche Hilfeanfragen Geld aus dem Pool erhalten.",
  },
];

const Konzept = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-ren-teal py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Das Konzept
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Warum REN anders ist
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Wir haben REN gegründet, weil wir glauben, dass Hilfe anders funktionieren kann – 
              transparenter, direkter, gemeinschaftlicher. Durch demokratische Entscheidungen.
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
                Die Probleme klassischer Spendenmodelle
              </h2>
              <p className="text-ren-text-secondary">
                Drei zentrale Herausforderungen, die wir mit REN lösen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problems.map((problem) => (
                <Card key={problem.title} className="bg-card border-0 card-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                      <problem.icon className="w-7 h-7 text-destructive" />
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-ren-text-secondary text-sm">
                      {problem.description}
                    </p>
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
                Unsere Lösung: Das Pool-Modell
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

      {/* How it works - Pool Model */}
      <section className="py-20 md:py-28 bg-ren-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                So funktioniert das Pool-Modell
              </h2>
            </div>

            {/* Visual Flow */}
            <div className="relative">
              {/* Desktop Flow */}
              <div className="hidden md:block">
                <div className="flex items-center justify-between gap-4">
                  {/* Step 1: Donate */}
                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-10 h-10 text-accent-foreground" />
                    </div>
                    <h3 className="font-bold text-card-foreground mb-1">Spenden</h3>
                    <p className="text-ren-text-secondary text-sm">In den Pool einzahlen</p>
                  </div>

                  <ArrowRight className="w-8 h-8 text-ren-divider flex-shrink-0" />

                  {/* Step 2: Pool */}
                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 rounded-full bg-ren-teal flex items-center justify-center mx-auto mb-4">
                      <Wallet className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-card-foreground mb-1">REN-Pool</h3>
                    <p className="text-ren-text-secondary text-sm">Gemeinsamer Spendentopf</p>
                  </div>

                  <ArrowRight className="w-8 h-8 text-ren-divider flex-shrink-0" />

                  {/* Step 3: Vote */}
                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                      <Vote className="w-10 h-10 text-secondary-foreground" />
                    </div>
                    <h3 className="font-bold text-card-foreground mb-1">Abstimmen</h3>
                    <p className="text-ren-text-secondary text-sm">Community entscheidet</p>
                  </div>

                  <ArrowRight className="w-8 h-8 text-ren-divider flex-shrink-0" />

                  {/* Step 4: Help */}
                  <div className="flex-1 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-bold text-card-foreground mb-1">Hilfe</h3>
                    <p className="text-ren-text-secondary text-sm">Geld wird ausgezahlt</p>
                  </div>
                </div>
              </div>

              {/* Mobile Flow */}
              <div className="md:hidden space-y-6">
                {[
                  { icon: Heart, title: "Spenden", desc: "Sie spenden in den gemeinsamen Pool", color: "bg-accent" },
                  { icon: Wallet, title: "REN-Pool", desc: "Alle Spenden sammeln sich im Topf", color: "bg-ren-teal" },
                  { icon: Vote, title: "Abstimmen", desc: "Community entscheidet über Anfragen", color: "bg-secondary" },
                  { icon: CheckCircle2, title: "Hilfe", desc: "Geld wird an Genehmigte ausgezahlt", color: "bg-green-500" },
                ].map((step, index) => (
                  <div key={step.title} className="flex gap-4 items-start">
                    <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-card-foreground">{step.title}</h3>
                      <p className="text-ren-text-secondary text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 98/2 Model */}
      <section className="py-20 md:py-28 bg-ren-teal">
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
                    Geht über den Pool direkt an genehmigte Hilfeanfragen
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

      {/* Detailed Steps */}
      <section className="py-20 md:py-28 bg-ren-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                Der Weg einer Hilfeanfrage
              </h2>
            </div>

            <div className="space-y-6">
              {[
                { step: 1, title: "Hilfe wird angefragt", description: "Menschen in Not stellen eine Anfrage mit konkretem Betrag und Verwendungszweck." },
                { step: 2, title: "Community prüft", description: "Die REN-Community prüft und diskutiert die Anfrage. Jeder kann Fragen stellen." },
                { step: 3, title: "Abstimmung läuft", description: "Für einen festgelegten Zeitraum können alle Mitglieder mit Ja oder Nein abstimmen." },
                { step: 4, title: "Mehrheit entscheidet", description: "Bei einer Mehrheit von Ja-Stimmen wird die Anfrage genehmigt." },
                { step: 5, title: "Auszahlung aus dem Pool", description: "Der angefragte Betrag wird aus dem Pool an die Hilfesuchenden überwiesen." },
                { step: 6, title: "Transparente Dokumentation", description: "Die Verwendung wird dokumentiert und für alle einsehbar veröffentlicht." },
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

            <div className="text-center mt-12 space-x-4">
              <Link to="/spenden">
                <Button className="bg-accent hover:bg-ren-red-hover text-accent-foreground font-semibold">
                  In den Pool spenden
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/abstimmung">
                <Button variant="outline" className="border-ren-divider text-card-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent">
                  Zu den Abstimmungen
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
