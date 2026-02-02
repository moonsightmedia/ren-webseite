import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Project, formatCurrency, calculateProgress } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "compact";
}

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const progress = calculateProgress(project.current, project.goal);
  const remaining = project.goal - project.current;

  return (
    <Card className="group overflow-hidden bg-card border-0 card-shadow hover:card-shadow-hover transition-all duration-300">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ren-teal/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
            {project.location}
          </span>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-1 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        {variant === "default" && (
          <p className="text-ren-text-secondary text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
        )}

        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="font-semibold text-accent">{progress}% finanziert</span>
            <span className="text-ren-text-secondary">
              Noch {formatCurrency(remaining)} benötigt
            </span>
          </div>
          <Progress value={progress} className="h-2 bg-ren-divider [&>div]:bg-accent" />
        </div>

        <Link to={`/projekte/${project.id}`} className="block mt-5">
          <Button 
            variant="outline" 
            className="w-full border-ren-divider text-card-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all group/btn"
          >
            Projekt ansehen
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
