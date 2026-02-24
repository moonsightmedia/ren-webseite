import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { formatCurrency, categoryLabels } from "@/data/helpRequests";
import { useHelpRequests } from "@/contexts/HelpRequestsContext";
import { Inbox } from "lucide-react";

export default function AdminAnfragen() {
  const { requests } = useHelpRequests();
  const newRequests = requests.filter((r) => r.status === "eingereicht");

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-card-foreground mb-2">
        Hilfeanfragen
      </h1>
      <p className="text-ren-text-secondary mb-8">
        Eingegangene Anfragen prüfen und in Projekte umwandeln. Nach Freischaltung erscheinen sie unter „Projekte“ und auf der Abstimmungsseite.
      </p>

      {newRequests.length === 0 ? (
        <Card className="bg-card border-0 card-shadow">
          <CardContent className="py-12 text-center">
            <Inbox className="w-12 h-12 text-ren-divider mx-auto mb-4" />
            <p className="text-ren-text-secondary">
              Keine neuen Hilfeanfragen. Neue Einträge erscheinen hier zur Prüfung.
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-card border-0 card-shadow border-accent/30">
          <CardContent className="p-0">
            <div className="p-6 border-b border-ren-divider">
              <div className="flex items-center gap-2 mb-2">
                <Inbox className="w-5 h-5 text-accent" />
                <h2 className="text-lg font-bold text-card-foreground">
                  Warten auf Umwandlung ({newRequests.length})
                </h2>
              </div>
              <p className="text-sm text-ren-text-secondary">
                Öffnen Sie eine Anfrage und wählen Sie „Projekt öffentlich schalten“ (mit Abstimmungsende) oder „Nicht veröffentlichen“. Danach erscheint das Projekt unter „Projekte“.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-ren-divider bg-muted/50">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                      Anfrage
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                      Kategorie
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
                  {newRequests.map((req) => (
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
                      <td className="py-3 px-4 text-right text-sm">
                        <span className="font-medium text-card-foreground">
                          {formatCurrency(req.requestedAmount)}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Link
                          to={`/admin/anfragen/${req.id}`}
                          className="text-sm text-accent hover:underline"
                        >
                          Ansehen & umwandeln
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
