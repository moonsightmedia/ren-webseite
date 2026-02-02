import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Eye, HandHeart } from "lucide-react";

const ctaCards = [
  {
    icon: Eye,
    title: "Spendenverlauf ansehen",
    description: "Volle Transparenz: Sehen Sie genau, wie und wo Ihre Spenden eingesetzt werden.",
    link: "/transparenz",
    buttonText: "Transparenz erkunden",
  },
  {
    icon: HandHeart,
    title: "Hilfe anfragen",
    description: "Sie befinden sich in einer schwierigen Situation? Wir sind für Sie da.",
    link: "/hilfe-anfragen",
    buttonText: "Hilfe anfragen",
  },
];

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {ctaCards.map((cta) => (
            <Card key={cta.title} className="bg-card border-0 card-shadow hover:card-shadow-hover transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <cta.icon className="w-7 h-7 text-accent" />
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {cta.title}
                </h3>
                
                <p className="text-ren-text-secondary mb-6">
                  {cta.description}
                </p>
                
                <Link to={cta.link}>
                  <Button className="bg-accent hover:bg-ren-cta-hover text-accent-foreground font-semibold group/btn">
                    {cta.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
