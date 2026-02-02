import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, Check, CreditCard, Building } from "lucide-react";
import { useState } from "react";
import logoCircle from "@/assets/logo.png";

const presetAmounts = [10, 25, 50, 100, 250];

const Spenden = () => {
  const [amount, setAmount] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const displayAmount = amount === "custom" ? Number(customAmount) || 0 : amount;

  if (submitted) {
    return (
      <Layout>
        <section className="py-20 md:py-28 bg-ren-light min-h-[70vh] flex items-center">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-accent fill-current" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                Vielen Dank für Ihre Spende!
              </h1>
              <p className="text-ren-text-secondary text-lg mb-8">
                Ihre Großzügigkeit macht einen echten Unterschied. 
                98% Ihrer Spende gehen direkt an Hilfebedürftige.
              </p>
              <Button 
                onClick={() => setSubmitted(false)} 
                className="bg-accent hover:bg-ren-red-hover text-accent-foreground"
              >
                Erneut spenden
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
      <section className="bg-ren-teal py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <img 
              src={logoCircle} 
              alt="REN Logo" 
              className="w-20 h-20 rounded-full mx-auto mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Jetzt spenden
            </h1>
            <p className="text-lg text-primary-foreground/70">
              98% Ihrer Spende gehen direkt an Menschen, die Hilfe brauchen. 
              Nur 2% decken notwendige Kosten.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12 md:py-20 bg-ren-light">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Amount Selection */}
                  <div>
                    <h2 className="text-xl font-bold text-card-foreground mb-4">Betrag wählen</h2>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                      {presetAmounts.map((preset) => (
                        <Button
                          key={preset}
                          type="button"
                          variant={amount === preset ? "default" : "outline"}
                          onClick={() => setAmount(preset)}
                          className={amount === preset 
                            ? "bg-accent hover:bg-ren-red-hover text-accent-foreground" 
                            : "border-ren-divider text-card-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent"
                          }
                        >
                          {preset}€
                        </Button>
                      ))}
                    </div>
                    <div className="flex gap-3 items-center">
                      <Button
                        type="button"
                        variant={amount === "custom" ? "default" : "outline"}
                        onClick={() => setAmount("custom")}
                        className={amount === "custom" 
                          ? "bg-accent hover:bg-ren-red-hover text-accent-foreground" 
                          : "border-ren-divider text-card-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent"
                        }
                      >
                        Anderer Betrag
                      </Button>
                      {amount === "custom" && (
                        <div className="flex-1 relative">
                          <Input
                            type="number"
                            placeholder="Betrag"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="pr-8"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ren-text-secondary">€</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h2 className="text-xl font-bold text-card-foreground mb-4">Zahlungsart</h2>
                    <RadioGroup defaultValue="card" className="space-y-3">
                      <div className="flex items-center space-x-3 p-4 border border-ren-divider rounded-lg hover:border-accent transition-colors cursor-pointer">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                          <CreditCard className="w-5 h-5 text-accent" />
                          <span>Kreditkarte / Debitkarte</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border border-ren-divider rounded-lg hover:border-accent transition-colors cursor-pointer">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="flex items-center gap-3 cursor-pointer flex-1">
                          <Building className="w-5 h-5 text-accent" />
                          <span>Überweisung</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Personal Info */}
                  <div>
                    <h2 className="text-xl font-bold text-card-foreground mb-4">Ihre Daten</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Vorname *</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nachname *</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input id="email" type="email" required />
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-muted rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-ren-text-secondary">Spendenbetrag</span>
                      <span className="text-2xl font-bold text-card-foreground">{displayAmount}€</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-ren-text-secondary border-t border-ren-divider pt-4">
                      <span>Davon gehen {(displayAmount * 0.98).toFixed(2)}€ direkt in Hilfe</span>
                      <span className="text-accent font-semibold">98%</span>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-ren-red-hover text-accent-foreground font-semibold py-6 text-lg"
                    disabled={displayAmount <= 0}
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    {displayAmount}€ spenden
                  </Button>

                  <p className="text-center text-sm text-ren-text-secondary">
                    Sichere Zahlung. Sie erhalten eine Spendenquittung per E-Mail.
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

export default Spenden;
