import { Card, CardContent } from "@/components/ui/card";
import { Wallet, TrendingUp, Heart, Users, FileText } from "lucide-react";
import { poolData, formatCurrency } from "@/data/helpRequests";
import { transparencyStats, recentDisbursements } from "@/data/testimonials";

export default function AdminPool() {
  const adminPercentage =
    transparencyStats.totalDonations > 0
      ? ((transparencyStats.adminCosts / transparencyStats.totalDonations) * 100).toFixed(1)
      : "0";

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-card-foreground mb-2">
        Pool & Auszahlungen
      </h1>
      <p className="text-ren-text-secondary mb-8">
        Aktueller Pool-Stand, Statistiken und letzte Auszahlungen
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-card border-0 card-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-ren-text-secondary">Aktueller Pool</p>
                <p className="text-xl font-bold text-card-foreground">
                  {formatCurrency(poolData.currentAmount)}
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
                <p className="text-sm text-ren-text-secondary">Gesamt eingegangen</p>
                <p className="text-xl font-bold text-card-foreground">
                  {formatCurrency(poolData.totalDonated)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-0 card-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-ren-text-secondary">Ausgezahlt</p>
                <p className="text-xl font-bold text-card-foreground">
                  {formatCurrency(poolData.totalDisbursed)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-0 card-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-ren-text-secondary">Spender</p>
                <p className="text-xl font-bold text-card-foreground">{poolData.donorCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-card border-0 card-shadow">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold text-card-foreground mb-4">
              Verwaltungskosten
            </h2>
            <p className="text-sm text-ren-text-secondary mb-4">
              {formatCurrency(transparencyStats.adminCosts)} ({adminPercentage}% der
              Gesamtspenden) – Server, Zahlungsgebühren, Infrastruktur
            </p>
            <p className="text-sm text-card-foreground">
              Menschen geholfen: <strong>{transparencyStats.helpedPeople}</strong>
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card border-0 card-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-accent" />
              <h2 className="text-lg font-bold text-card-foreground">
                Letzte Auszahlungen
              </h2>
            </div>
            <ul className="space-y-4">
              {recentDisbursements.map((d, i) => (
                <li
                  key={i}
                  className="flex justify-between items-start py-2 border-b border-ren-divider last:border-0"
                >
                  <div>
                    <p className="font-medium text-card-foreground">{d.project}</p>
                    <p className="text-xs text-ren-text-secondary">
                      {new Date(d.date).toLocaleDateString("de-DE")} · {d.description}
                    </p>
                  </div>
                  <span className="font-semibold text-accent whitespace-nowrap ml-4">
                    {formatCurrency(d.amount)}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
