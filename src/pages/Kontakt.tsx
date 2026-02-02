import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Kontakt = () => {
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
                Nachricht gesendet
              </h1>
              <p className="text-ren-text-secondary text-lg mb-8">
                Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.
              </p>
              <Button 
                onClick={() => setSubmitted(false)} 
                className="bg-accent hover:bg-ren-cta-hover text-accent-foreground"
              >
                Weitere Nachricht senden
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
              Kontakt
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Sprechen Sie mit uns
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Haben Sie Fragen, Anregungen oder möchten Sie mehr erfahren? 
              Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-ren-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="bg-card border-0 card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">E-Mail</h3>
                        <p className="text-ren-text-secondary text-sm">kontakt@ren-hilft.de</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-0 card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">Telefon</h3>
                        <p className="text-ren-text-secondary text-sm">+49 (0) 30 12345678</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-0 card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">Adresse</h3>
                        <p className="text-ren-text-secondary text-sm">
                          Musterstraße 123<br />
                          10115 Berlin
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="pt-4">
                  <p className="text-sm text-ren-text-secondary">
                    <Link to="/impressum" className="text-accent hover:underline">Impressum</Link>
                    {" · "}
                    <Link to="/datenschutz" className="text-accent hover:underline">Datenschutz</Link>
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-card border-0 card-shadow">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-card-foreground mb-6">Nachricht senden</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input id="name" placeholder="Ihr Name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">E-Mail *</Label>
                          <Input id="email" type="email" placeholder="ihre@email.de" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Betreff *</Label>
                        <Input id="subject" placeholder="Worum geht es?" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Nachricht *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Ihre Nachricht an uns..."
                          className="min-h-[150px]"
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-accent hover:bg-ren-cta-hover text-accent-foreground font-semibold py-6"
                      >
                        Nachricht senden
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
