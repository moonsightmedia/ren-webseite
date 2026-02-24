import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { VotingCard } from "@/components/VotingCard";
import { PoolDisplay } from "@/components/PoolDisplay";
import { ArrowLeft, MapPin, Clock, User, Calendar } from "lucide-react";
import {
  formatCurrency,
  getTimeRemaining,
  categoryLabels,
  statusLabels,
} from "@/data/helpRequests";
import { useHelpRequests } from "@/contexts/HelpRequestsContext";

const AnfrageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getRequestById } = useHelpRequests();
  const request = id ? getRequestById(id) : undefined;
  const notFound = !request || request.status === "eingereicht";

  if (notFound) {
    return (
      <Layout>
        <section className="py-20 md:py-28 bg-ren-light">
          <div className="container text-center">
            <h1 className="text-3xl font-bold text-card-foreground mb-4">Anfrage nicht gefunden</h1>
            <Link to="/abstimmung">
              <Button className="bg-accent hover:bg-ren-red-hover text-accent-foreground">
                Zurück zu den Abstimmungen
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const isVotingOpen = request.status === "offen";
  const timeRemaining = getTimeRemaining(request.votingEndsAt);

  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img
          src={request.image}
          alt={request.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ren-teal via-ren-teal/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container">
            <Link to="/abstimmung" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Zurück zu den Abstimmungen
            </Link>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full">
                {categoryLabels[request.category]}
              </span>
              <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                isVotingOpen 
                  ? "bg-blue-500/20 text-blue-200" 
                  : "bg-accent/20 text-accent"
              }`}>
                {isVotingOpen ? timeRemaining : statusLabels[request.status]}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3">
              {request.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{request.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{request.requestedBy}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Angefragt am {new Date(request.requestedAt).toLocaleDateString("de-DE")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-ren-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-card border-0 card-shadow">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-card-foreground mb-4">Über diese Anfrage</h2>
                  <p className="text-ren-text-secondary leading-relaxed">
                    {request.details}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-0 card-shadow">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-card-foreground mb-6">Wofür das Geld verwendet wird</h2>
                  <div className="space-y-4">
                    {request.usage.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-ren-divider last:border-0">
                        <span className="text-card-foreground">{item.label}</span>
                        <span className="font-semibold text-accent">{formatCurrency(item.amount)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center pt-4">
                      <span className="font-bold text-card-foreground">Angefragte Summe</span>
                      <span className="font-bold text-accent text-lg">{formatCurrency(request.requestedAmount)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pool Info */}
              <Card className="bg-secondary border-0">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-bold text-secondary-foreground mb-4">Wie funktioniert die Abstimmung?</h3>
                  <div className="space-y-3 text-secondary-foreground/80 text-sm">
                    <p>• Alle registrierten Nutzer können abstimmen</p>
                    <p>• Bei einer Mehrheit von „Direkt unterstützen“-Stimmen wird die Anfrage genehmigt</p>
                    <p>• Nach Genehmigung wird die Rechnung direkt aus dem REN-Pool bezahlt</p>
                    <p>• Die Verwendung wird transparent dokumentiert</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Voting Card */}
              {isVotingOpen ? (
                <div className="sticky top-24">
                  <VotingCard 
                    request={request} 
                    isLoggedIn={false} // Demo: not logged in
                  />
                  <div className="mt-6">
                    <PoolDisplay variant="card" showCTA={true} />
                  </div>
                </div>
              ) : (
                <Card className="bg-card border-0 card-shadow sticky top-24">
                  <CardContent className="p-6 md:p-8">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-accent mb-1">
                        {formatCurrency(request.requestedAmount)}
                      </div>
                      <p className="text-ren-text-secondary">
                        Angefragte Summe
                      </p>
                    </div>

                    <div className="space-y-4 py-4 border-y border-ren-divider mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-ren-text-secondary">Status:</span>
                        <span className="font-semibold text-card-foreground">{statusLabels[request.status]}</span>
                      </div>
                      {request.disbursedAmount && (
                        <div className="flex justify-between text-sm">
                          <span className="text-ren-text-secondary">Ausgezahlt:</span>
                          <span className="font-semibold text-accent">{formatCurrency(request.disbursedAmount)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-ren-text-secondary">Abstimmungsergebnis:</span>
                        <span className="font-semibold text-card-foreground">
                          {request.votesFor} Direkt unterstützen / {request.votesAgainst} Zurückstellen
                        </span>
                      </div>
                    </div>

                    <p className="text-center text-ren-text-secondary text-sm">
                      Diese Abstimmung ist beendet.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AnfrageDetail;
