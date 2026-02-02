import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PoolDisplay } from "@/components/PoolDisplay";
import logoFull from "@/assets/logo-full.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center justify-center overflow-hidden pb-24 md:pb-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80"
          alt="Menschen, die sich helfen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ren-burgundy/30 backdrop-blur-sm rounded-full mb-8 animate-fade-in">
            <img src={logoFull} alt="REN" className="h-6 w-auto" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Demokratisch entscheiden, direkt helfen
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
            Menschlichkeit in Aktion
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Spenden Sie in den gemeinsamen Pool. Die Community entscheidet, wer Hilfe erhält. 
            98% kommen direkt an.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/spenden">
              <Button size="lg" className="bg-accent hover:bg-ren-red-hover text-accent-foreground font-semibold px-8 py-6 text-base h-auto">
                In den Pool spenden
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/abstimmung">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 px-8 py-6 text-base h-auto backdrop-blur-sm"
              >
                Jetzt mitentscheiden
              </Button>
            </Link>
          </div>

          {/* Pool Display */}
          <div className="max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <PoolDisplay variant="hero" showCTA={false} />
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile to avoid overlap */}
      <div className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
