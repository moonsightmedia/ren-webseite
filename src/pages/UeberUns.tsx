import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Shield, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Menschlichkeit",
    description: "Jeder Mensch verdient Hilfe und Würde – unabhängig von Herkunft oder Situation.",
  },
  {
    icon: Target,
    title: "Transparenz",
    description: "Wir zeigen offen, wie jeder Euro eingesetzt wird. Keine versteckten Kosten.",
  },
  {
    icon: Users,
    title: "Gemeinschaft",
    description: "Gemeinsam entscheiden wir, wem geholfen wird. Demokratie in Aktion.",
  },
  {
    icon: Shield,
    title: "Verantwortung",
    description: "Wir übernehmen Verantwortung dafür, dass Hilfe dort ankommt, wo sie gebraucht wird.",
  },
];

const UeberUns = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-ren-dark py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Über REN
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Wer wir sind
            </h1>
            <p className="text-lg text-primary-foreground/70">
              REN ist mehr als eine Spendenplattform – wir sind eine Gemeinschaft von Menschen, 
              die an direkte, transparente Hilfe glauben.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-ren-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                  alt="Menschen, die zusammenarbeiten"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                  Unsere Mission
                </span>
                <h2 className="text-3xl font-bold text-card-foreground mb-4">
                  Menschlichkeit in Aktion
                </h2>
                <p className="text-ren-text-secondary leading-relaxed mb-4">
                  Wir glauben daran, dass Hilfe einfach, direkt und transparent sein sollte. 
                  Keine langen Wege, keine hohen Verwaltungskosten – nur echte Menschen, 
                  die echten Menschen helfen.
                </p>
                <p className="text-ren-text-secondary leading-relaxed">
                  Unsere Vision ist eine Welt, in der jeder, der Hilfe braucht, sie auch bekommt – 
                  schnell, unbürokratisch und würdevoll.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-secondary-foreground mb-6">
              Wie alles begann
            </h2>
            <p className="text-secondary-foreground/70 leading-relaxed mb-6">
              REN entstand aus einer einfachen Frage: Warum versickert so viel von dem Geld, 
              das Menschen spenden, in Verwaltungskosten? Warum wissen Spender oft nicht, 
              wohin ihr Geld fließt?
            </p>
            <p className="text-secondary-foreground/70 leading-relaxed mb-6">
              2022 haben wir REN gegründet – mit dem Ziel, Spenden so zu organisieren, 
              wie es eigentlich sein sollte: transparent, direkt, gemeinschaftlich.
            </p>
            <p className="text-secondary-foreground/70 leading-relaxed">
              Heute sind wir eine wachsende Gemeinschaft von Helfern und Hilfebedürftigen, 
              die gemeinsam zeigen, dass es anders geht.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-ren-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-card-foreground mb-4">
              Unsere Werte
            </h2>
            <p className="text-ren-text-secondary max-w-xl mx-auto">
              Diese Grundsätze leiten alles, was wir tun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="bg-card border-0 card-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-card-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-ren-text-secondary">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-20 md:py-28 bg-ren-dark">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Das Team
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Ehrenamtliche Helfer, die ihre Zeit und Energie für andere einsetzen.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Anna Schmidt", role: "Gründerin" },
              { name: "Thomas Müller", role: "Technik" },
              { name: "Sarah Weber", role: "Community" },
              { name: "Michael Koch", role: "Projekte" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-primary-foreground">{member.name}</h3>
                <p className="text-sm text-primary-foreground/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UeberUns;
