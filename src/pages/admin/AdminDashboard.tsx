import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, FileText, Wallet, Users, ArrowRight, Inbox } from "lucide-react";
import { poolData, formatCurrency, statusLabels } from "@/data/helpRequests";
import { transparencyStats } from "@/data/testimonials";
import { useHelpRequests } from "@/contexts/HelpRequestsContext";

export default function AdminDashboard() {
  const { requests } = useHelpRequests();
  const submittedCount = requests.filter((r) => r.status === "eingereicht").length;
  const openCount = requests.filter((r) => r.status === "offen").length;
  const approvedCount = requests.filter((r) => r.status === "genehmigt").length;
  const completedCount = requests.filter((r) => r.status === "abgeschlossen").length;

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-card-foreground mb-2">
        Admin-Übersicht
      </h1>
      <p className="text-ren-text-secondary mb-8">
        Pool, Anfragen und Auszahlungen im Überblick
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {submittedCount > 0 && (
          <Link to="/admin/anfragen">
            <Card className="bg-card border-0 card-shadow border-accent/30 hover:border-accent/50 transition-colors h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Inbox className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-ren-text-secondary">Neue Anfragen</p>
                    <p className="text-xl font-bold text-card-foreground">{submittedCount}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        )}
        <Card className="bg-card border-0 card-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-ren-text-secondary">Pool-Stand</p>
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
                <FileText className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-ren-text-secondary">Offene Anfragen</p>
                <p className="text-xl font-bold text-card-foreground">{openCount}</p>
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
                <p className="text-sm text-ren-text-secondary">Gesamt ausgezahlt</p>
                <p className="text-xl font-bold text-card-foreground">
                  {formatCurrency(transparencyStats.disbursed)}
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
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-card-foreground">Projekte nach Status</h2>
              <Link to="/admin/projekte">
                <span className="text-sm text-accent hover:underline flex items-center gap-1">
                  Alle anzeigen <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
            <ul className="space-y-3">
              {submittedCount > 0 && (
                <li className="flex justify-between text-sm">
                  <span className="text-ren-text-secondary">{statusLabels.eingereicht}</span>
                  <span className="font-medium text-card-foreground">{submittedCount}</span>
                </li>
              )}
              <li className="flex justify-between text-sm">
                <span className="text-ren-text-secondary">{statusLabels.offen}</span>
                <span className="font-medium text-card-foreground">{openCount}</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-ren-text-secondary">{statusLabels.genehmigt}</span>
                <span className="font-medium text-card-foreground">{approvedCount}</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-ren-text-secondary">{statusLabels.abgeschlossen}</span>
                <span className="font-medium text-card-foreground">{completedCount}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-card border-0 card-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-card-foreground">Pool & Transparenz</h2>
              <Link to="/admin/pool">
                <span className="text-sm text-accent hover:underline flex items-center gap-1">
                  Details <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-ren-text-secondary">Aktuell im Pool</span>
                <span className="font-medium text-card-foreground">
                  {formatCurrency(poolData.currentAmount)}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-ren-text-secondary">Gesamt eingegangen</span>
                <span className="font-medium text-card-foreground">
                  {formatCurrency(poolData.totalDonated)}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-ren-text-secondary">Bereits ausgezahlt</span>
                <span className="font-medium text-card-foreground">
                  {formatCurrency(poolData.totalDisbursed)}
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
