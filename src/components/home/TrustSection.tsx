import { Heart, TrendingUp, Users } from "lucide-react";
import { transparencyStats } from "@/data/testimonials";
import { formatCurrency } from "@/data/projects";

export function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-ren-teal">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            98% gehen in direkte Hilfe
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Nur 2% fließen in Verwaltungskosten. Jeder Euro zählt – und wir zeigen Ihnen genau, 
            wohin er fließt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <div className="text-4xl font-bold text-primary-foreground mb-2">
              {formatCurrency(transparencyStats.totalDonations)}
            </div>
            <p className="text-primary-foreground/60">Gesamtspenden</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <div className="text-4xl font-bold text-primary-foreground mb-2">
              {formatCurrency(transparencyStats.disbursed)}
            </div>
            <p className="text-primary-foreground/60">Ausgezahlt</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <div className="text-4xl font-bold text-primary-foreground mb-2">
              {transparencyStats.helpedPeople}
            </div>
            <p className="text-primary-foreground/60">Menschen geholfen</p>
          </div>
        </div>
      </div>
    </section>
  );
}
