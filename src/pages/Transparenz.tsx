import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download, TrendingUp, Heart, Users, Wallet, FileText } from "lucide-react";
import { transparencyStats, yearlyReports, recentDisbursements } from "@/data/testimonials";
import { formatCurrency } from "@/data/helpRequests";

const Transparenz = () => {
  const adminPercentage = (transparencyStats.adminCosts / transparencyStats.totalDonations) * 100;
  const disbursedPercentage = (transparencyStats.disbursed / transparencyStats.totalDonations) * 100;

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-ren-teal py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Transparenz
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Volle Transparenz, immer
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Wir zeigen Ihnen genau, wie jeder Euro eingesetzt wird. Keine versteckten Kosten, 
              keine Überraschungen – nur ehrliche Zahlen.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 md:py-20 bg-ren-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-accent" />
                </div>
                <div className="text-3xl font-bold text-card-foreground mb-1">
                  {formatCurrency(transparencyStats.totalDonations)}
                </div>
                <p className="text-ren-text-secondary text-sm">Gesamtspenden</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-accent" />
                </div>
                <div className="text-3xl font-bold text-card-foreground mb-1">
                  {formatCurrency(transparencyStats.disbursed)}
                </div>
                <p className="text-ren-text-secondary text-sm">Ausgezahlt</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <div className="text-3xl font-bold text-card-foreground mb-1">
                  {transparencyStats.helpedPeople}
                </div>
                <p className="text-ren-text-secondary text-sm">Menschen geholfen</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Wallet className="w-7 h-7 text-accent" />
                </div>
                <div className="text-3xl font-bold text-card-foreground mb-1">
                  {formatCurrency(transparencyStats.adminCosts)}
                </div>
                <p className="text-ren-text-secondary text-sm">Verwaltungskosten (2%)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visualization */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground text-center mb-10">
              Wohin Ihre Spenden fließen
            </h2>

            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-card-foreground">Direkte Hilfe</span>
                      <span className="font-bold text-accent">{disbursedPercentage.toFixed(0)}%</span>
                    </div>
                    <Progress value={disbursedPercentage} className="h-4 bg-ren-divider [&>div]:bg-accent" />
                    <p className="text-sm text-ren-text-secondary mt-2">
                      {formatCurrency(transparencyStats.disbursed)} direkt an Projekte und Hilfebedürftige
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-card-foreground">Verwaltung</span>
                      <span className="font-bold text-ren-text-secondary">{adminPercentage.toFixed(0)}%</span>
                    </div>
                    <Progress value={adminPercentage} className="h-4 bg-ren-divider [&>div]:bg-ren-text-secondary" />
                    <p className="text-sm text-ren-text-secondary mt-2">
                      {formatCurrency(transparencyStats.adminCosts)} für Server, Zahlungsgebühren, notwendige Infrastruktur
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Disbursements */}
      <section className="py-12 md:py-20 bg-ren-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground text-center mb-10">
              Letzte Auszahlungen
            </h2>

            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-0">
                <div className="divide-y divide-ren-divider">
                  {recentDisbursements.map((item, index) => (
                    <div key={index} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-card-foreground">{item.project}</p>
                        <p className="text-sm text-ren-text-secondary">{item.description}</p>
                      </div>
                      <div className="flex items-center gap-4 md:text-right">
                        <span className="text-sm text-ren-text-secondary">
                          {new Date(item.date).toLocaleDateString("de-DE")}
                        </span>
                        <span className="font-bold text-accent whitespace-nowrap">
                          {formatCurrency(item.amount)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Yearly Reports */}
      <section className="py-12 md:py-20 bg-ren-teal">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-10">
              Jahresberichte
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {yearlyReports.map((report) => (
                <Card key={report.year} className="bg-secondary border-0">
                  <CardContent className="p-6 text-center">
                    <FileText className="w-10 h-10 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-secondary-foreground mb-4">
                      Jahresbericht {report.year}
                    </h3>
                    <div className="text-sm text-secondary-foreground/70 mb-4 space-y-1">
                      <p>Einnahmen: {formatCurrency(report.donations)}</p>
                      <p>Ausgezahlt: {formatCurrency(report.disbursed)}</p>
                    </div>
                    <Button variant="outline" className="w-full border-secondary-foreground text-secondary-foreground bg-secondary-foreground/10 hover:bg-secondary-foreground/20">
                      <Download className="w-4 h-4 mr-2" />
                      PDF herunterladen
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transparenz;
