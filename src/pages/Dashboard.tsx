import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, TrendingUp, FileText, Clock, User, LogOut, Settings } from "lucide-react";
import { formatCurrency } from "@/data/helpRequests";
import { Link } from "react-router-dom";

const mockUserData = {
  name: "Max Mustermann",
  email: "max@beispiel.de",
  memberSince: "Januar 2023",
  totalDonated: 1250,
  projectsSupported: 4,
  donations: [
    { date: "2024-01-15", project: "Schulessen für Kinder", amount: 50 },
    { date: "2024-01-02", project: "Brunnenbau in Afrika", amount: 100 },
    { date: "2023-12-20", project: "Winterhilfe für Obdachlose", amount: 75 },
    { date: "2023-11-10", project: "Nothilfe für Familien", amount: 200 },
  ],
  requests: [
    { 
      id: 1, 
      type: "Mietunterstützung", 
      amount: 500, 
      status: "in-bearbeitung",
      date: "2024-01-10",
    },
  ],
};

const Dashboard = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20 bg-ren-light min-h-screen">
        <div className="container">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-card-foreground">
                Hallo, {mockUserData.name}!
              </h1>
              <p className="text-ren-text-secondary">Willkommen in Ihrem persönlichen Bereich</p>
            </div>
            <div className="flex gap-3">
              <Link to="/einstellungen">
                <Button variant="outline" className="border-ren-divider text-card-foreground">
                  <Settings className="w-4 h-4 mr-2" />
                  Einstellungen
                </Button>
              </Link>
              <Button variant="outline" className="border-ren-divider text-card-foreground">
                <LogOut className="w-4 h-4 mr-2" />
                Ausloggen
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-ren-text-secondary">Gesamt gespendet</p>
                    <p className="text-2xl font-bold text-card-foreground">
                      {formatCurrency(mockUserData.totalDonated)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-ren-text-secondary">Projekte unterstützt</p>
                    <p className="text-2xl font-bold text-card-foreground">
                      {mockUserData.projectsSupported}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-ren-text-secondary">Mitglied seit</p>
                    <p className="text-2xl font-bold text-card-foreground">
                      {mockUserData.memberSince}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Donation History */}
            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-card-foreground">Ihre Spenden</h2>
                  <Link to="/transparenz">
                    <Button variant="ghost" size="sm" className="text-accent">
                      Alle ansehen
                    </Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {mockUserData.donations.map((donation, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between py-3 border-b border-ren-divider last:border-0"
                    >
                      <div>
                        <p className="font-medium text-card-foreground">{donation.project}</p>
                        <p className="text-sm text-ren-text-secondary">
                          {new Date(donation.date).toLocaleDateString("de-DE")}
                        </p>
                      </div>
                      <span className="font-bold text-accent">{formatCurrency(donation.amount)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Help Requests */}
            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-card-foreground">Ihre Hilfe-Anträge</h2>
                  <Link to="/hilfe-anfragen">
                    <Button variant="ghost" size="sm" className="text-accent">
                      Neue Anfrage
                    </Button>
                  </Link>
                </div>
                {mockUserData.requests.length > 0 ? (
                  <div className="space-y-4">
                    {mockUserData.requests.map((request) => (
                      <div key={request.id} className="p-4 bg-muted rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-medium text-card-foreground">{request.type}</p>
                            <p className="text-sm text-ren-text-secondary">
                              {new Date(request.date).toLocaleDateString("de-DE")}
                            </p>
                          </div>
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            <Clock className="w-3 h-3 mr-1" />
                            In Bearbeitung
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-ren-text-secondary">Beantragte Summe</span>
                          <span className="font-semibold text-card-foreground">
                            {formatCurrency(request.amount)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="w-12 h-12 text-ren-divider mx-auto mb-3" />
                    <p className="text-ren-text-secondary">Keine aktiven Anträge</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Action */}
          <div className="mt-8">
            <Card className="bg-accent border-0">
              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-accent-foreground mb-2">
                    Möchten Sie weiter helfen?
                  </h3>
                  <p className="text-accent-foreground/80">
                    98% Ihrer Spende gehen direkt an Hilfebedürftige.
                  </p>
                </div>
                <Link to="/spenden">
                  <Button size="lg" variant="secondary" className="whitespace-nowrap">
                    Jetzt spenden
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
