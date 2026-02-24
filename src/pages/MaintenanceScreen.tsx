import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState, useRef } from "react";
import logoCircle from "@/assets/logo.png";

const MAINTENANCE_STORAGE_KEY = "ren-maintenance-unlocked";

export const setMaintenanceUnlocked = () => {
  try {
    sessionStorage.setItem(MAINTENANCE_STORAGE_KEY, "1");
  } catch {
    // ignore
  }
};

export const isMaintenanceUnlocked = (): boolean => {
  try {
    return sessionStorage.getItem(MAINTENANCE_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

type MaintenanceScreenProps = {
  expectedPassword: string;
  onUnlock: () => void;
};

const MaintenanceScreen = ({ expectedPassword, onUnlock }: MaintenanceScreenProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const value = passwordRef.current?.value?.trim() ?? "";
    if (!value) {
      setError("Bitte Passwort eingeben.");
      return;
    }
    if (value !== expectedPassword) {
      setError("Falsches Passwort.");
      return;
    }
    setMaintenanceUnlocked();
    onUnlock();
  };

  return (
    <div className="min-h-screen bg-ren-light flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src={logoCircle}
            alt="REN Logo"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <div className="flex items-center justify-center gap-2 text-ren-text-secondary mb-2">
            <Lock className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Wartungsmodus</span>
          </div>
          <h1 className="text-2xl font-bold text-card-foreground">REN – in Entwicklung</h1>
          <p className="text-ren-text-secondary mt-2 text-sm max-w-sm mx-auto">
            Diese Webseite befindet sich noch im Aufbau. Mit dem Zugangspasswort können Sie die Vorschau nutzen.
          </p>
        </div>

        <Card className="bg-card border-0 card-shadow">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="maintenance-password">Zugangspasswort</Label>
                <div className="relative">
                  <Input
                    ref={passwordRef}
                    id="maintenance-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="pr-10"
                    aria-invalid={!!error}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-ren-text-secondary hover:text-card-foreground"
                    aria-label={showPassword ? "Passwort verbergen" : "Passwort anzeigen"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-ren-red-hover text-accent-foreground font-semibold py-6"
              >
                Zugang anfordern
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-ren-text-secondary mt-6">
          Bei Fragen:{" "}
          <a href="mailto:kontakt@ren.de" className="text-accent hover:underline">
            kontakt@ren.de
          </a>
        </p>
      </div>
    </div>
  );
};

export default MaintenanceScreen;
