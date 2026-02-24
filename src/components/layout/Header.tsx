import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import logoFull from "@/assets/logo-full-white.png";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
  { label: "Das Konzept", href: "/konzept" },
  { label: "Geschichte", href: "/geschichte" },
  { label: "Abstimmung", href: "/abstimmung" },
  { label: "Transparenz", href: "/transparenz" },
  { label: "Hilfe anfragen", href: "/hilfe-anfragen" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, isAdmin, logout } = useAuth();

  const isActive = (href: string) => location.pathname === href;

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ren-teal/95 backdrop-blur-md border-b border-ren-burgundy/20">
      <div className="container">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group">
            <img 
              src={logoFull} 
              alt="REN" 
              className="h-6 md:h-7 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.href) ? "text-accent" : "text-primary-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-ren-burgundy/30">
                    Profil
                  </Button>
                </Link>
                {isAdmin && (
                  <Link to="/admin">
                    <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-ren-burgundy/30">
                      Admin
                    </Button>
                  </Link>
                )}
                <Button
                  variant="ghost"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-ren-burgundy/30"
                  onClick={handleLogout}
                >
                  Ausloggen
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-ren-burgundy/30">
                  Einloggen
                </Button>
              </Link>
            )}
            <Link to="/spenden">
              <Button className="bg-accent hover:bg-ren-red-hover text-accent-foreground font-semibold px-6">
                Jetzt spenden
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-ren-teal border-ren-burgundy/30 p-0">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-ren-burgundy/30">
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    <img 
                      src={logoFull} 
                      alt="REN" 
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>

                <nav className="flex-1 p-6">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                          isActive(item.href)
                            ? "bg-accent text-accent-foreground"
                            : "text-primary-foreground/80 hover:bg-ren-burgundy/30 hover:text-primary-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </nav>

                <div className="p-6 border-t border-ren-burgundy/30 flex flex-col gap-4">
                  {isLoggedIn ? (
                    <>
                      <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                        <Button variant="outline" className="w-full border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20">
                          Profil
                        </Button>
                      </Link>
                      {isAdmin && (
                        <Link to="/admin" onClick={() => setIsOpen(false)}>
                          <Button variant="outline" className="w-full border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20">
                            Admin
                          </Button>
                        </Link>
                      )}
                      <Button
                        variant="outline"
                        className="w-full border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20"
                        onClick={handleLogout}
                      >
                        Ausloggen
                      </Button>
                    </>
                  ) : (
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20">
                        Einloggen
                      </Button>
                    </Link>
                  )}
                  <Link to="/spenden" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-accent hover:bg-ren-red-hover text-accent-foreground font-semibold">
                      Jetzt spenden
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
