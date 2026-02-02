import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="bg-card border-0 card-shadow hover:card-shadow-hover transition-all duration-300 h-full">
      <CardContent className="p-8 flex flex-col h-full">
        <Quote className="w-10 h-10 text-accent/30 mb-4" />
        
        <blockquote className="text-card-foreground leading-relaxed flex-1 mb-6">
          "{testimonial.quote}"
        </blockquote>

        <div className="flex items-center gap-4 pt-4 border-t border-ren-divider">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-card-foreground">
              {testimonial.name}
              {testimonial.age && <span className="text-ren-text-secondary font-normal">, {testimonial.age}</span>}
            </p>
            <p className="text-sm text-accent capitalize">
              {testimonial.role === "hilfeempfänger" ? "Hilfeempfänger:in" : "Spender:in"}
              {testimonial.location && <span className="text-ren-text-secondary"> · {testimonial.location}</span>}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
