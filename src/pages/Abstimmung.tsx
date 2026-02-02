import { Layout } from "@/components/layout";
import { HelpRequestCard } from "@/components/HelpRequestCard";
import { PoolDisplay } from "@/components/PoolDisplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { helpRequests, statusLabels } from "@/data/helpRequests";

const Abstimmung = () => {
  const openRequests = helpRequests.filter((r) => r.status === "offen");
  const approvedRequests = helpRequests.filter((r) => r.status === "genehmigt");
  const completedRequests = helpRequests.filter((r) => r.status === "abgeschlossen");
  const rejectedRequests = helpRequests.filter((r) => r.status === "abgelehnt");

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-ren-teal py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Demokratische Entscheidung
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Abstimmungen
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Die Community entscheidet gemeinsam, welche Hilfeanfragen Geld aus dem Pool erhalten.
              Jede Stimme zählt.
            </p>
          </div>

          {/* Pool Display Hero */}
          <div className="max-w-xl mx-auto">
            <PoolDisplay variant="hero" showCTA={false} />
          </div>
        </div>
      </section>

      {/* Tabs & Requests */}
      <section className="py-12 md:py-20 bg-ren-light">
        <div className="container">
          <Tabs defaultValue="offen" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-10 bg-card">
              <TabsTrigger value="offen" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Zur Abstimmung ({openRequests.length})
              </TabsTrigger>
              <TabsTrigger value="genehmigt" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Genehmigt ({approvedRequests.length})
              </TabsTrigger>
              <TabsTrigger value="abgeschlossen" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Abgeschlossen ({completedRequests.length})
              </TabsTrigger>
              <TabsTrigger value="abgelehnt" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Abgelehnt ({rejectedRequests.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="offen">
              {openRequests.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {openRequests.map((request) => (
                    <HelpRequestCard key={request.id} request={request} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-ren-text-secondary text-lg">
                    Aktuell gibt es keine offenen Abstimmungen.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="genehmigt">
              {approvedRequests.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {approvedRequests.map((request) => (
                    <HelpRequestCard key={request.id} request={request} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-ren-text-secondary text-lg">
                    Noch keine genehmigten Anfragen.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="abgeschlossen">
              {completedRequests.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {completedRequests.map((request) => (
                    <HelpRequestCard key={request.id} request={request} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-ren-text-secondary text-lg">
                    Noch keine abgeschlossenen Hilfeleistungen.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="abgelehnt">
              {rejectedRequests.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {rejectedRequests.map((request) => (
                    <HelpRequestCard key={request.id} request={request} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-ren-text-secondary text-lg">
                    Keine abgelehnten Anfragen.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Abstimmung;
