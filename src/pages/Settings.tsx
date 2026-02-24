import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { User, Lock, Bell, ArrowLeft, Save, Eye, EyeOff, UserX } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Mock user data
  const [profileData, setProfileData] = useState({
    firstName: "Max",
    lastName: "Mustermann",
    email: "max@beispiel.de",
    phone: "+49 123 456789",
  });

  const [profileAnonymous, setProfileAnonymous] = useState(false);

  const [notifications, setNotifications] = useState({
    emailNewProjects: true,
    emailVotingResults: true,
    emailDonationReceipts: true,
    emailNewsletter: false,
    emailRequestUpdates: true,
  });

  const handleProfileSave = () => {
    toast({
      title: "Profil gespeichert",
      description: "Ihre Änderungen wurden erfolgreich gespeichert.",
    });
  };

  const handlePasswordChange = () => {
    toast({
      title: "Passwort geändert",
      description: "Ihr Passwort wurde erfolgreich aktualisiert.",
    });
  };

  const handleNotificationsSave = () => {
    toast({
      title: "Benachrichtigungen aktualisiert",
      description: "Ihre E-Mail-Einstellungen wurden gespeichert.",
    });
  };

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-ren-light min-h-screen">
        <div className="container">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon" className="text-card-foreground">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-card-foreground">
                Einstellungen
              </h1>
              <p className="text-ren-text-secondary">Verwalten Sie Ihr Konto und Ihre Präferenzen</p>
            </div>
          </div>

          {/* Settings Tabs */}
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mb-8">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profil</span>
              </TabsTrigger>
              <TabsTrigger value="password" className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span className="hidden sm:inline">Passwort</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                <span className="hidden sm:inline">E-Mails</span>
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card className="bg-card border-0 card-shadow max-w-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">Persönliche Daten</CardTitle>
                  <CardDescription>
                    Aktualisieren Sie Ihre persönlichen Informationen
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Vorname</Label>
                      <Input
                        id="firstName"
                        value={profileData.firstName}
                        onChange={(e) =>
                          setProfileData({ ...profileData, firstName: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nachname</Label>
                      <Input
                        id="lastName"
                        value={profileData.lastName}
                        onChange={(e) =>
                          setProfileData({ ...profileData, lastName: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail-Adresse</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) =>
                        setProfileData({ ...profileData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefonnummer (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) =>
                        setProfileData({ ...profileData, phone: e.target.value })
                      }
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between rounded-lg border border-ren-divider p-4">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <UserX className="w-4 h-4 text-ren-text-secondary" />
                        <Label className="text-base">Profil anonym halten</Label>
                      </div>
                      <p className="text-sm text-ren-text-secondary">
                        Ihr Name und Ihre Spenden werden nicht öffentlich angezeigt. Die Zuordnung zu Ihrem Konto erfolgt nur intern für Ihr Dashboard und Spendenquittungen.
                      </p>
                    </div>
                    <Switch
                      checked={profileAnonymous}
                      onCheckedChange={setProfileAnonymous}
                    />
                  </div>

                  <Separator />

                  <Button
                    onClick={handleProfileSave}
                    className="bg-accent hover:bg-ren-red-hover text-accent-foreground"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Änderungen speichern
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Password Tab */}
            <TabsContent value="password">
              <Card className="bg-card border-0 card-shadow max-w-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">Passwort ändern</CardTitle>
                  <CardDescription>
                    Aktualisieren Sie Ihr Passwort für mehr Sicherheit
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Aktuelles Passwort</Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showCurrentPassword ? "text" : "password"}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-ren-text-secondary hover:text-card-foreground"
                      >
                        {showCurrentPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Neues Passwort</Label>
                    <div className="relative">
                      <Input
                        id="newPassword"
                        type={showNewPassword ? "text" : "password"}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-ren-text-secondary hover:text-card-foreground"
                      >
                        {showNewPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-ren-text-secondary">
                      Mindestens 8 Zeichen, mit Groß- und Kleinbuchstaben
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Passwort bestätigen</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-ren-text-secondary hover:text-card-foreground"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <Separator />

                  <Button
                    onClick={handlePasswordChange}
                    className="bg-accent hover:bg-ren-red-hover text-accent-foreground"
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Passwort ändern
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications">
              <Card className="bg-card border-0 card-shadow max-w-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">E-Mail-Benachrichtigungen</CardTitle>
                  <CardDescription>
                    Wählen Sie, welche E-Mails Sie erhalten möchten
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Neue Hilfeprojekte</Label>
                        <p className="text-sm text-ren-text-secondary">
                          Benachrichtigung über neue Projekte zur Abstimmung
                        </p>
                      </div>
                      <Switch
                        checked={notifications.emailNewProjects}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, emailNewProjects: checked })
                        }
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Abstimmungsergebnisse</Label>
                        <p className="text-sm text-ren-text-secondary">
                          Ergebnisse der monatlichen Abstimmungen
                        </p>
                      </div>
                      <Switch
                        checked={notifications.emailVotingResults}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, emailVotingResults: checked })
                        }
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Spendenquittungen</Label>
                        <p className="text-sm text-ren-text-secondary">
                          Bestätigungen und Quittungen für Ihre Spenden
                        </p>
                      </div>
                      <Switch
                        checked={notifications.emailDonationReceipts}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, emailDonationReceipts: checked })
                        }
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Anfragen-Updates</Label>
                        <p className="text-sm text-ren-text-secondary">
                          Status-Updates zu Ihren Hilfe-Anfragen
                        </p>
                      </div>
                      <Switch
                        checked={notifications.emailRequestUpdates}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, emailRequestUpdates: checked })
                        }
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Newsletter</Label>
                        <p className="text-sm text-ren-text-secondary">
                          Monatliche Updates und Erfolgsgeschichten
                        </p>
                      </div>
                      <Switch
                        checked={notifications.emailNewsletter}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, emailNewsletter: checked })
                        }
                      />
                    </div>
                  </div>

                  <Separator />

                  <Button
                    onClick={handleNotificationsSave}
                    className="bg-accent hover:bg-ren-red-hover text-accent-foreground"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Einstellungen speichern
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Settings;
