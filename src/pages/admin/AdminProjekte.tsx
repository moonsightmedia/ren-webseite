import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { formatCurrency, statusLabels, categoryLabels } from "@/data/helpRequests";
import { useHelpRequests } from "@/contexts/HelpRequestsContext";

const statusVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  offen: "secondary",
  genehmigt: "default",
  abgelehnt: "destructive",
  abgeschlossen: "outline",
};

export default function AdminProjekte() {
  const { requests } = useHelpRequests();
  const projects = requests.filter((r) => r.status !== "eingereicht");

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-card-foreground mb-2">
        Projekte
      </h1>
      <p className="text-ren-text-secondary mb-8">
        Veröffentlichte Projekte verwalten: Ansehen, Abstimmung verlängern, Status prüfen
      </p>

      <Card className="bg-card border-0 card-shadow">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-ren-divider bg-muted/50">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                    Projekt
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                    Kategorie
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                    Status
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-card-foreground">
                    Betrag
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-card-foreground">
                    Aktion
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-ren-text-secondary">
                      Noch keine Projekte. Schalten Sie Hilfeanfragen unter „Hilfeanfragen“ als Projekt frei.
                    </td>
                  </tr>
                ) : (
                  projects.map((req) => (
                    <tr key={req.id} className="border-b border-ren-divider last:border-0 hover:bg-muted/30">
                      <td className="py-3 px-4">
                        <Link
                          to={`/admin/anfragen/${req.id}`}
                          className="font-medium text-card-foreground hover:text-accent"
                        >
                          {req.title}
                        </Link>
                        <p className="text-xs text-ren-text-secondary mt-0.5">
                          {req.requestedBy} · {new Date(req.requestedAt).toLocaleDateString("de-DE")}
                        </p>
                      </td>
                      <td className="py-3 px-4 text-sm text-ren-text-secondary">
                        {categoryLabels[req.category]}
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant={statusVariant[req.status] ?? "outline"}>
                          {statusLabels[req.status]}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right text-sm">
                        <span className="font-medium text-card-foreground">
                          {formatCurrency(req.requestedAmount)}
                        </span>
                        {req.disbursedAmount != null && (
                          <p className="text-xs text-ren-text-secondary">
                            ausgezahlt: {formatCurrency(req.disbursedAmount)}
                          </p>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Link
                          to={`/admin/anfragen/${req.id}`}
                          className="text-sm text-accent hover:underline"
                        >
                          Ansehen
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
