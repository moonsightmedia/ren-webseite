import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoCircle from "@/assets/logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-ren-light min-h-[80vh] flex items-center">
        <div className="container">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <img 
                src={logoCircle} 
                alt="REN Logo" 
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h1 className="text-2xl font-bold text-card-foreground">Willkommen bei REN</h1>
            </div>

            <Card className="bg-card border-0 card-shadow">
              <CardContent className="p-6 md:p-8">
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="login">Einloggen</TabsTrigger>
                    <TabsTrigger value="register">Registrieren</TabsTrigger>
                  </TabsList>

                  <TabsContent value="login" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">E-Mail</Label>
                      <Input id="login-email" type="email" placeholder="ihre@email.de" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Passwort</Label>
                      <div className="relative">
                        <Input 
                          id="login-password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="••••••••" 
                        />
                        <button 
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-ren-text-secondary hover:text-card-foreground"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <a href="#" className="text-sm text-accent hover:underline">Passwort vergessen?</a>
                    </div>
                    <Button className="w-full bg-accent hover:bg-ren-red-hover text-accent-foreground font-semibold py-6">
                      Einloggen
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </TabsContent>

                  <TabsContent value="register" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Vorname</Label>
                        <Input id="first-name" placeholder="Max" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Nachname</Label>
                        <Input id="last-name" placeholder="Mustermann" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email">E-Mail</Label>
                      <Input id="register-email" type="email" placeholder="ihre@email.de" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Passwort</Label>
                      <Input id="register-password" type="password" placeholder="••••••••" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Passwort bestätigen</Label>
                      <Input id="confirm-password" type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full bg-accent hover:bg-ren-red-hover text-accent-foreground font-semibold py-6">
                      Registrieren
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <p className="text-center text-sm text-ren-text-secondary mt-6">
              Mit der Anmeldung akzeptieren Sie unsere{" "}
              <Link to="/datenschutz" className="text-accent hover:underline">Datenschutzerklärung</Link>
              {" "}und{" "}
              <Link to="/agb" className="text-accent hover:underline">AGB</Link>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
