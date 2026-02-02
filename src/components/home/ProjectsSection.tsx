import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const activeProjects = projects.filter((p) => p.status === "aktiv").slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-ren-light">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Aktuelle Projekte
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            Wo Ihre Spende wirkt
          </h2>
          <p className="text-ren-text-secondary max-w-2xl mx-auto">
            Jedes Projekt wird von der Community gewählt und transparent dokumentiert.
            Sehen Sie genau, wie Ihre Hilfe ankommt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {activeProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/projekte">
            <Button variant="outline" size="lg" className="border-ren-divider bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent group">
              Alle Projekte ansehen
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
