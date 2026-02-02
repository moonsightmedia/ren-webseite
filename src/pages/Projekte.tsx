import { Layout } from "@/components/layout";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects, categoryLabels, statusLabels } from "@/data/projects";
import { useState } from "react";

type CategoryFilter = "alle" | "bildung" | "nothilfe" | "infrastruktur" | "gesundheit";
type StatusFilter = "alle" | "aktiv" | "abgeschlossen" | "in-planung";

const Projekte = () => {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("alle");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("alle");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = categoryFilter === "alle" || project.category === categoryFilter;
    const matchesStatus = statusFilter === "alle" || project.status === statusFilter;
    return matchesCategory && matchesStatus;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-ren-dark py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Unsere Projekte
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Wo Ihre Hilfe ankommt
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Jedes Projekt wird transparent dokumentiert. Sehen Sie genau, 
              wie Spenden verwendet werden und welchen Unterschied sie machen.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Projects */}
      <section className="py-12 md:py-20 bg-ren-light">
        <div className="container">
          {/* Filters */}
          <div className="mb-10 space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-card-foreground mr-2 self-center">Kategorie:</span>
              {(["alle", "bildung", "nothilfe", "infrastruktur", "gesundheit"] as const).map((cat) => (
                <Button
                  key={cat}
                  variant={categoryFilter === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategoryFilter(cat)}
                  className={categoryFilter === cat 
                    ? "bg-accent hover:bg-ren-cta-hover text-accent-foreground" 
                    : "border-ren-divider text-card-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent"
                  }
                >
                  {cat === "alle" ? "Alle" : categoryLabels[cat]}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-card-foreground mr-2 self-center">Status:</span>
              {(["alle", "aktiv", "abgeschlossen", "in-planung"] as const).map((status) => (
                <Button
                  key={status}
                  variant={statusFilter === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter(status)}
                  className={statusFilter === status 
                    ? "bg-accent hover:bg-ren-cta-hover text-accent-foreground" 
                    : "border-ren-divider text-card-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent"
                  }
                >
                  {status === "alle" ? "Alle" : statusLabels[status]}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-ren-text-secondary text-lg">
                Keine Projekte gefunden, die Ihren Filterkriterien entsprechen.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projekte;
