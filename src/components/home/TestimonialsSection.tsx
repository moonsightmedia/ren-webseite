import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const displayTestimonials = testimonials.slice(0, 2);

  return (
    <section className="py-20 md:py-28 bg-ren-light">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Erfolgsgeschichten
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            Menschen, die wir erreicht haben
          </h2>
          <p className="text-ren-text-secondary max-w-2xl mx-auto">
            Echte Geschichten von Menschen, denen REN geholfen hat – und von Spendern, 
            die den Unterschied sehen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {displayTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
