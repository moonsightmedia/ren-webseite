import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HelpRequestCard } from "@/components/HelpRequestCard";
import { useHelpRequests } from "@/contexts/HelpRequestsContext";

export function ProjectsSection() {
  const { requests } = useHelpRequests();
  const openRequests = requests.filter((r) => r.status === "offen").slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-ren-light">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Aktuelle Abstimmungen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            Entscheiden Sie mit
          </h2>
          <p className="text-ren-text-secondary max-w-2xl mx-auto">
            Diese Hilfeanfragen warten auf Ihre Stimme. 
            Die Community entscheidet gemeinsam, wer Unterstützung aus dem Pool erhält.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {openRequests.map((request) => (
            <HelpRequestCard key={request.id} request={request} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/abstimmung">
            <Button variant="outline" size="lg" className="border-ren-divider bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent group">
              Alle Abstimmungen ansehen
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
