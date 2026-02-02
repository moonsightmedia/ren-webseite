import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Heart, Shield, Users, Check } from "lucide-react";
import { useState } from "react";

const HilfeAnfragen = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-20 md:py-28 bg-ren-light min-h-[70vh] flex items-center">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                Vielen Dank für Ihre Anfrage
              </h1>
              <p className="text-ren-text-secondary text-lg mb-8">
                Wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden. 
                Ihre Anfrage wird vertraulich behandelt.
              </p>
              <Button 
                onClick={() => setSubmitted(false)} 
                className="bg-accent hover:bg-ren-cta-hover text-accent-foreground"
              >
                Neue Anfrage stellen
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-ren-dark py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Hilfe anfragen
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Wir sind für Sie da
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Befinden Sie sich in einer schwierigen Situation? Haben Sie einen Bedarf, 
              den Sie alleine nicht decken können? Wir hören zu und helfen.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-foreground">Vertraulich</h3>
                <p className="text-sm text-secondary-foreground/70">Ihre Daten sind sicher</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-foreground">Unbürokratisch</h3>
                <p className="text-sm text-secondary-foreground/70">Schnelle, direkte Hilfe</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-foreground">Gemeinschaft</h3>
                <p className="text-sm text-secondary-foreground/70">Viele helfen zusammen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-20 bg-ren-light">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">Ihre Anfrage</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name (optional)</Label>
                      <Input id="name" placeholder="Ihr Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input id="email" type="email" placeholder="ihre@email.de" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Art der Hilfe *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Bitte wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="finanziell">Finanzielle Unterstützung</SelectItem>
                        <SelectItem value="miete">Mietunterstützung</SelectItem>
                        <SelectItem value="lebensmittel">Lebensmittel</SelectItem>
                        <SelectItem value="medizinisch">Medizinische Kosten</SelectItem>
                        <SelectItem value="bildung">Bildung & Schulmaterial</SelectItem>
                        <SelectItem value="sonstiges">Sonstiges</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Beschreibung Ihrer Situation *</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Bitte beschreiben Sie Ihre Situation und warum Sie Hilfe benötigen..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Benötigte Summe (ungefähr)</Label>
                    <Input id="amount" type="number" placeholder="z.B. 500" />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox id="anonymous" />
                    <div className="space-y-1">
                      <Label htmlFor="anonymous" className="cursor-pointer">Anonym bleiben</Label>
                      <p className="text-sm text-ren-text-secondary">
                        Falls ein Projekt für Sie erstellt wird, erscheint es ohne Ihren Namen.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox id="privacy" required />
                    <div className="space-y-1">
                      <Label htmlFor="privacy" className="cursor-pointer">Datenschutz akzeptieren *</Label>
                      <p className="text-sm text-ren-text-secondary">
                        Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.
                      </p>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-ren-cta-hover text-accent-foreground font-semibold py-6"
                  >
                    Anfrage absenden
                  </Button>

                  <p className="text-center text-sm text-ren-text-secondary">
                    Ihre Anfrage wird innerhalb von 48 Stunden bearbeitet.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HilfeAnfragen;
