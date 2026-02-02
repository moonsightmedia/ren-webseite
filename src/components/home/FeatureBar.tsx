import { Eye, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Transparenz",
    description: "98% der Spenden kommen an.",
  },
  {
    icon: Users,
    title: "Gemeinschaft",
    description: "Wir entscheiden gemeinsam.",
  },
  {
    icon: Shield,
    title: "Verantwortung",
    description: "Hilfe, die ankommt.",
  },
];

export function FeatureBar() {
  return (
    <section className="relative z-10 -mt-16 md:-mt-20">
      <div className="container">
        <div className="bg-card rounded-2xl card-shadow p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className={`flex items-center justify-center gap-4 ${
                  index !== features.length - 1 ? "md:border-r md:border-ren-divider" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-ren-text-secondary">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
