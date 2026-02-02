import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-ren-light min-h-[70vh] flex items-center">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <div className="text-8xl font-bold text-accent mb-6">404</div>
            <h1 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
              Seite nicht gefunden
            </h1>
            <p className="text-ren-text-secondary text-lg mb-8">
              Die gesuchte Seite existiert leider nicht.
            </p>
            <Link to="/">
              <Button className="bg-accent hover:bg-ren-red-hover text-accent-foreground font-semibold">
                <Home className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
