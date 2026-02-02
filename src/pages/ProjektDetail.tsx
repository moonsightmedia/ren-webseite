import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, MapPin, Heart } from "lucide-react";
import { getProjectById, formatCurrency, calculateProgress, categoryLabels, statusLabels } from "@/data/projects";

const ProjektDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <Layout>
        <section className="py-20 md:py-28 bg-ren-light">
          <div className="container text-center">
            <h1 className="text-3xl font-bold text-card-foreground mb-4">Projekt nicht gefunden</h1>
            <Link to="/projekte">
              <Button className="bg-accent hover:bg-ren-red-hover text-accent-foreground">
                Zurück zu allen Projekten
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const progress = calculateProgress(project.current, project.goal);
  const remaining = project.goal - project.current;

  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ren-teal via-ren-teal/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container">
            <Link to="/projekte" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Zurück zu allen Projekten
            </Link>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                {categoryLabels[project.category]}
              </span>
              <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full">
                {statusLabels[project.status]}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3">
              {project.title}
            </h1>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-ren-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-card border-0 card-shadow">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-card-foreground mb-4">Über dieses Projekt</h2>
                  <p className="text-ren-text-secondary leading-relaxed">
                    {project.details}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-0 card-shadow">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-card-foreground mb-6">Was mit dem Geld passiert</h2>
                  <div className="space-y-4">
                    {project.usage.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-ren-divider last:border-0">
                        <span className="text-card-foreground">{item.label}</span>
                        <span className="font-semibold text-accent">{formatCurrency(item.amount)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center pt-4">
                      <span className="font-bold text-card-foreground">Gesamt</span>
                      <span className="font-bold text-accent text-lg">{formatCurrency(project.goal)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-card border-0 card-shadow sticky top-24">
                <CardContent className="p-6 md:p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-accent mb-1">
                      {formatCurrency(project.current)}
                    </div>
                    <p className="text-ren-text-secondary">
                      von {formatCurrency(project.goal)} gesammelt
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-accent">{progress}% finanziert</span>
                      <span className="text-ren-text-secondary">
                        Noch {formatCurrency(remaining)}
                      </span>
                    </div>
                    <Progress value={progress} className="h-3 bg-ren-divider [&>div]:bg-accent" />
                  </div>

                  <Link to="/spenden">
                    <Button className="w-full bg-accent hover:bg-ren-red-hover text-accent-foreground font-semibold py-6 text-base">
                      <Heart className="w-5 h-5 mr-2" />
                      Jetzt spenden
                    </Button>
                  </Link>

                  <p className="text-center text-ren-text-secondary text-sm mt-4">
                    98% Ihrer Spende gehen direkt in dieses Projekt.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjektDetail;
