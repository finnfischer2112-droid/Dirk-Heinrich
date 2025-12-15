import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Users, Target, Handshake, Award, Clock, Shield } from "lucide-react";

const benefits = [
  {
    id: "personal",
    icon: Users,
    title: "Persönliche Beratung",
    description:
      "Individuelle Betreuung durch einen erfahrenen Finanzierungsexperten.",
  },
  {
    id: "strategy",
    icon: Target,
    title: "Klare Strategien",
    description:
      "Transparente Finanzierungskonzepte, die auf Ihre Situation zugeschnitten sind.",
  },
  {
    id: "partner",
    icon: Handshake,
    title: "Starker Partner",
    description:
      "Als Swiss Life Select Partner Zugang zu exklusiven Konditionen.",
  },
  {
    id: "quality",
    icon: Award,
    title: "Höchste Qualität",
    description:
      "Umfassende Marktanalyse für die bestmögliche Finanzierungslösung.",
  },
  {
    id: "fast",
    icon: Clock,
    title: "Schnelle Bearbeitung",
    description:
      "Effiziente Prozesse für eine zügige Finanzierungszusage.",
  },
  {
    id: "secure",
    icon: Shield,
    title: "Langfristige Sicherheit",
    description:
      "Nachhaltige Finanzierungsstrategien für Ihre finanzielle Zukunft.",
  },
];

export default function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="vorteile"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-background"
      data-testid="section-benefits"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            className="font-serif text-3xl lg:text-4xl xl:text-5xl font-medium mb-4"
            data-testid="text-benefits-title"
          >
            Warum Dirk Heinrich?
          </h2>
          <p className="text-lg text-muted-foreground">
            Vertrauen Sie auf jahrelange Erfahrung und exzellente Beratung
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.id}
              className={`group p-6 lg:p-8 transition-all duration-700 hover-elevate ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              data-testid={`card-benefit-${benefit.id}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
