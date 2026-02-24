import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, MapPin, User, Calendar, ExternalLink, Send, XCircle, Clock, Plus } from "lucide-react";
import {
  formatCurrency,
  getTimeRemaining,
  categoryLabels,
  statusLabels,
  type HelpRequest,
} from "@/data/helpRequests";
import { useHelpRequests } from "@/contexts/HelpRequestsContext";

const statusVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  eingereicht: "secondary",
  offen: "secondary",
  genehmigt: "default",
  abgelehnt: "destructive",
  abgeschlossen: "outline",
};

function toDatetimeLocal(iso: string): string {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

const CATEGORIES: HelpRequest["category"][] = ["bildung", "nothilfe", "infrastruktur", "gesundheit"];

export default function AdminAnfrageDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getRequestById, updateRequest } = useHelpRequests();
  const request = id ? getRequestById(id) : undefined;
  const [votingEndsAt, setVotingEndsAt] = useState("");
  const [showPublishForm, setShowPublishForm] = useState(false);
  const [showExtendForm, setShowExtendForm] = useState(false);
  const [showProjectSetup, setShowProjectSetup] = useState(false);

  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDetails, setEditDetails] = useState("");
  const [editCategory, setEditCategory] = useState<HelpRequest["category"]>("nothilfe");
  const [editRequestedAmount, setEditRequestedAmount] = useState(0);
  const [editUsage, setEditUsage] = useState<{ label: string; amount: number }[]>([]);
  const [editLocation, setEditLocation] = useState("");
  const [editImage, setEditImage] = useState("");

  useEffect(() => {
    if (request && request.status === "eingereicht") {
      setEditTitle(request.title);
      setEditDescription(request.description);
      setEditDetails(request.details);
      setEditCategory(request.category);
      setEditRequestedAmount(request.requestedAmount);
      setEditUsage(request.usage.length ? [...request.usage] : [{ label: "Unterstützung", amount: request.requestedAmount }]);
      setEditLocation(request.location);
      setEditImage(request.image);
    }
  }, [request?.id, request?.status]);

  if (!request) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-card-foreground mb-4">Anfrage nicht gefunden</h1>
        <Link to="/admin/anfragen">
          <Button className="bg-accent hover:bg-ren-red-hover text-accent-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Liste
          </Button>
        </Link>
      </div>
    );
  }

  const isVotingOpen = request.status === "offen";
  const timeRemaining = getTimeRemaining(request.votingEndsAt);
  const backToListUrl = request.status === "eingereicht" ? "/admin/anfragen" : "/admin/projekte";

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Link to={backToListUrl}>
            <Button variant="outline" className="border-ren-divider text-card-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Liste
            </Button>
          </Link>
          {request.status !== "eingereicht" && (
            <a
              href={`/anfragen/${request.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button variant="outline" className="border-ren-divider text-card-foreground">
                Öffentliche Seite anzeigen
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          )}
        </div>
      </div>

      {/* Hero nur für echte Projekte (nicht eingereicht); bei eingereicht nur kurzer Header – Bild, Ort etc. kommen erst beim „Projekt anlegen“ */}
      {request.status === "eingereicht" ? (
        <section className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <Badge variant={statusVariant[request.status] ?? "outline"} className="text-sm">
              {statusLabels[request.status]}
            </Badge>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-card-foreground">
            {request.title}
          </h1>
          <p className="text-sm text-ren-text-secondary mt-1">
            Aus dem Formular „Hilfe anfragen“. Bild, Ort und weitere Projektdaten werden beim „Projekt anlegen“ festgelegt.
          </p>
        </section>
      ) : (
        <section className="relative h-[40vh] md:h-[50vh] rounded-xl overflow-hidden mb-8">
          <img
            src={request.image}
            alt={request.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ren-teal via-ren-teal/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex flex-wrap gap-3 mb-3">
              <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full">
                {categoryLabels[request.category]}
              </span>
              <Badge
                variant={statusVariant[request.status] ?? "outline"}
                className="text-sm"
              >
                {isVotingOpen ? timeRemaining : statusLabels[request.status]}
              </Badge>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-3">
              {request.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {request.location}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {request.requestedBy}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Angefragt am {new Date(request.requestedAt).toLocaleDateString("de-DE")}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Bei eingereicht: zuerst Formulareingaben, dann Ablehnen / Projekt anlegen */}
      {request.status === "eingereicht" && (
        <>
          {/* Eingaben aus dem Formular – nur Felder, die das Formular „Hilfe anfragen“ tatsächlich abfragt */}
          <Card className="bg-card border-0 card-shadow mb-6">
            <CardContent className="p-6">
              <h2 className="text-lg font-bold text-card-foreground mb-4">Eingaben aus dem Formular</h2>
              <p className="text-sm text-ren-text-secondary mb-6">
                Angaben der anfragenden Person aus dem Formular „Hilfe anfragen“ (entspricht den Formularfeldern).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-ren-text-secondary">Name (optional) / Anonym</p>
                  <p className="font-semibold text-card-foreground">{request.requestedBy}</p>
                </div>
                <div>
                  <p className="text-sm text-ren-text-secondary">Art der Hilfe</p>
                  <p className="font-semibold text-card-foreground">{categoryLabels[request.category]}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-ren-text-secondary">Beschreibung Ihrer Situation</p>
                  <p className="text-card-foreground leading-relaxed whitespace-pre-wrap">{request.details || request.description}</p>
                </div>
                <div>
                  <p className="text-sm text-ren-text-secondary">Benötigte Summe (ungefähr)</p>
                  <p className="font-semibold text-accent">{formatCurrency(request.requestedAmount)}</p>
                </div>
                <div>
                  <p className="text-sm text-ren-text-secondary">Eingereicht am</p>
                  <p className="font-semibold text-card-foreground">
                    {new Date(request.requestedAt).toLocaleDateString("de-DE", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
              <p className="text-sm text-ren-text-secondary mt-4">
                Die Verwendung der Mittel wird beim „Projekt anlegen“ festgelegt (das Formular fragt keine Aufschlüsselung ab).
              </p>
            </CardContent>
          </Card>

          {!showProjectSetup ? (
            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                variant="destructive"
                onClick={() => id && updateRequest(id, { status: "abgelehnt" })}
              >
                <XCircle className="w-4 h-4 mr-2" />
                Ablehnen
              </Button>
              <Button
                className="bg-accent hover:bg-ren-red-hover text-accent-foreground"
                onClick={() => {
                  setShowProjectSetup(true);
                  const defaultEnd = new Date();
                  defaultEnd.setDate(defaultEnd.getDate() + 14);
                  setVotingEndsAt(toDatetimeLocal(defaultEnd.toISOString()));
                }}
              >
                <Send className="w-4 h-4 mr-2" />
                Projekt anlegen
              </Button>
            </div>
          ) : (
            <>
              {/* Projekt anlegen – Einstellungen (nur sichtbar nach Klick auf „Projekt anlegen“) */}
              <Card className="bg-card border-0 card-shadow mb-6">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold text-card-foreground mb-2">
                    Projekt anlegen – Einstellungen
                  </h2>
                  <p className="text-sm text-ren-text-secondary mb-6">
                    Projektdaten anpassen, dann unten „Projekt online schalten“ ausführen.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="editTitle">Titel</Label>
                      <Input
                        id="editTitle"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        placeholder="Projekttitel"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="editDescription">Kurzbeschreibung</Label>
                      <Textarea
                        id="editDescription"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        placeholder="Kurzbeschreibung"
                        className="min-h-[80px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="editCategory">Kategorie</Label>
                      <Select value={editCategory} onValueChange={(v) => setEditCategory(v as HelpRequest["category"])}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {CATEGORIES.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {categoryLabels[cat]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="editDetails">Ausführliche Beschreibung</Label>
                      <Textarea
                        id="editDetails"
                        value={editDetails}
                        onChange={(e) => setEditDetails(e.target.value)}
                        placeholder="Ausführliche Beschreibung"
                        className="min-h-[120px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="editAmount">Angefragter Betrag (€)</Label>
                      <Input
                        id="editAmount"
                        type="number"
                        min={0}
                        value={editRequestedAmount || ""}
                        onChange={(e) => setEditRequestedAmount(Number(e.target.value) || 0)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="editLocation">Ort</Label>
                      <Input
                        id="editLocation"
                        value={editLocation}
                        onChange={(e) => setEditLocation(e.target.value)}
                        placeholder="z. B. Deutschland"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="editImage">Bild-URL</Label>
                      <Input
                        id="editImage"
                        value={editImage}
                        onChange={(e) => setEditImage(e.target.value)}
                        placeholder="https://..."
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Verwendung der Mittel</Label>
                      <div className="space-y-3">
                        {editUsage.map((item, index) => (
                          <div key={index} className="flex gap-2 flex-wrap items-center">
                            <Input
                              placeholder="Bezeichnung"
                              value={item.label}
                              onChange={(e) => {
                                const next = [...editUsage];
                                next[index] = { ...next[index], label: e.target.value };
                                setEditUsage(next);
                              }}
                              className="flex-1 min-w-[120px]"
                            />
                            <Input
                              type="number"
                              min={0}
                              placeholder="Betrag"
                              value={item.amount || ""}
                              onChange={(e) => {
                                const next = [...editUsage];
                                next[index] = { ...next[index], amount: Number(e.target.value) || 0 };
                                setEditUsage(next);
                              }}
                              className="w-28"
                            />
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="border-ren-divider text-card-foreground"
                          onClick={() => setEditUsage((prev) => [...prev, { label: "", amount: 0 }])}
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Zeile hinzufügen
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Projekt online schalten */}
              <Card className="bg-card border-0 card-shadow mb-8 border-accent/30">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold text-card-foreground mb-2">Projekt online schalten</h2>
                  <p className="text-sm text-ren-text-secondary mb-4">
                    Mit „Projekt online schalten“ erscheint die Anfrage auf der Abstimmungsseite. Legen Sie das Enddatum der Abstimmung fest.
                  </p>
                  <div className="space-y-4 max-w-sm">
                    <div className="space-y-2">
                      <Label htmlFor="votingEndsAt">Abstimmung endet am</Label>
                      <Input
                        id="votingEndsAt"
                        type="datetime-local"
                        value={votingEndsAt}
                        onChange={(e) => setVotingEndsAt(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        className="bg-accent hover:bg-ren-red-hover text-accent-foreground"
                        onClick={() => {
                          if (id && votingEndsAt) {
                            updateRequest(id, {
                              title: editTitle,
                              description: editDescription,
                              details: editDetails,
                              category: editCategory,
                              requestedAmount: editRequestedAmount,
                              usage: editUsage.filter((u) => u.label.trim() || u.amount > 0).length
                                ? editUsage
                                : [{ label: "Unterstützung", amount: editRequestedAmount }],
                              location: editLocation,
                              image: editImage,
                              status: "offen",
                              votingEndsAt: new Date(votingEndsAt).toISOString(),
                            });
                            navigate("/admin/projekte");
                          }
                        }}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Projekt online schalten
                      </Button>
                      <Button
                        variant="outline"
                        className="border-ren-divider text-card-foreground"
                        onClick={() => setShowProjectSetup(false)}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Zurück
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </>
      )}

      {request.status === "offen" && (
        <Card className="bg-card border-0 card-shadow mb-8">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold text-card-foreground mb-2">Abstimmung verlängern</h2>
            {!showExtendForm ? (
              <Button
                variant="outline"
                className="border-ren-divider text-card-foreground"
                onClick={() => {
                  setShowExtendForm(true);
                  setVotingEndsAt(toDatetimeLocal(request.votingEndsAt));
                }}
              >
                <Clock className="w-4 h-4 mr-2" />
                Abstimmung verlängern
              </Button>
            ) : (
              <div className="space-y-4 max-w-sm">
                <div className="space-y-2">
                  <Label htmlFor="extendEndsAt">Neues Abstimmungsende</Label>
                  <Input
                    id="extendEndsAt"
                    type="datetime-local"
                    value={votingEndsAt}
                    onChange={(e) => setVotingEndsAt(e.target.value)}
                  />
                </div>
                <div className="flex gap-3">
                  <Button
                    className="bg-accent hover:bg-ren-red-hover text-accent-foreground"
                    onClick={() => {
                      if (id && votingEndsAt) {
                        updateRequest(id, { votingEndsAt: new Date(votingEndsAt).toISOString() });
                        setShowExtendForm(false);
                      }
                    }}
                  >
                    Speichern
                  </Button>
                  <Button variant="outline" onClick={() => setShowExtendForm(false)}>
                    Abbrechen
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Admin-Infos und Content nur bei nicht-eingereicht (bei eingereicht reicht „Eingaben aus dem Formular“ + Aktionen) */}
      {request.status !== "eingereicht" && (
        <>
          <Card className="bg-card border-0 card-shadow mb-8">
            <CardContent className="p-6">
              <h2 className="text-lg font-bold text-card-foreground mb-4">Admin-Infos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-ren-text-secondary">Status</p>
                  <p className="font-semibold text-card-foreground">{statusLabels[request.status]}</p>
                </div>
                <div>
                  <p className="text-sm text-ren-text-secondary">Angefragter Betrag</p>
                  <p className="font-semibold text-accent">{formatCurrency(request.requestedAmount)}</p>
                </div>
                {request.disbursedAmount != null && (
                  <div>
                    <p className="text-sm text-ren-text-secondary">Ausgezahlt</p>
                    <p className="font-semibold text-card-foreground">
                      {formatCurrency(request.disbursedAmount)}
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-ren-text-secondary">Abstimmung Ende</p>
                  <p className="font-semibold text-card-foreground">
                    {new Date(request.votingEndsAt).toLocaleDateString("de-DE")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-ren-text-secondary">Stimmen (für / gegen)</p>
                  <p className="font-semibold text-card-foreground">
                    {request.votesFor} / {request.votesAgainst}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-card-foreground mb-4">Über diese Anfrage</h2>
                <p className="text-ren-text-secondary leading-relaxed">{request.details}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-card-foreground mb-6">Kurzbeschreibung</h2>
                <p className="text-ren-text-secondary">{request.description}</p>
                <h2 className="text-xl font-bold text-card-foreground mt-6 mb-4">
                  Verwendung der Mittel
                </h2>
                <div className="space-y-4">
                  {request.usage.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-ren-divider last:border-0"
                    >
                      <span className="text-card-foreground">{item.label}</span>
                      <span className="font-semibold text-accent">{formatCurrency(item.amount)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-4">
                    <span className="font-bold text-card-foreground">Angefragte Summe</span>
                    <span className="font-bold text-accent text-lg">
                      {formatCurrency(request.requestedAmount)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
