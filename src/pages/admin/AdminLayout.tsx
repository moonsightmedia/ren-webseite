import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  Wallet,
  ArrowLeft,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import logoFull from "@/assets/logo-full-white.png";

const navItems = [
  { to: "/admin", label: "Übersicht", icon: LayoutDashboard },
  { to: "/admin/anfragen", label: "Hilfeanfragen", icon: FileText },
  { to: "/admin/projekte", label: "Projekte", icon: FolderKanban },
  { to: "/admin/pool", label: "Pool & Auszahlungen", icon: Wallet },
];

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-ren-light flex">
      <aside className="w-56 md:w-64 bg-ren-teal border-r border-ren-burgundy/20 flex flex-col fixed inset-y-0 left-0 z-40">
        <div className="p-4 border-b border-white/10">
          <Link to="/admin" className="flex flex-col gap-1">
            <img
              src={logoFull}
              alt="REN"
              className="h-6 md:h-7 w-auto"
            />
            <span className="text-xs text-primary-foreground/70 font-medium">Admin</span>
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map(({ to, label, icon: Icon }) => {
            const isActive =
              location.pathname === to ||
              (to !== "/admin" && location.pathname.startsWith(to));
            return (
              <Link key={to} to={to}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 ${
                    isActive
                      ? "bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Button>
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-white/10 space-y-1">
          <Link to="/">
            <Button
              variant="outline"
              className="w-full justify-start gap-2 border-primary-foreground/50 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Zur Website
            </Button>
          </Link>
          <Button
            variant="outline"
            className="w-full justify-start gap-2 border-primary-foreground/50 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" />
            Ausloggen
          </Button>
        </div>
      </aside>
      <main className="flex-1 pl-56 md:pl-64 min-h-screen">
        <div className="container py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
