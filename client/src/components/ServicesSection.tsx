import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Home, Repeat, Building2, PiggyBank, Paintbrush, Coins, Construction } from "lucide-react";

const services = [
  {
    id: "neubau",
    icon: Construction,
    title: "Kauf Neubau",
    description: "Finanzierung für Ihr neues Bauprojekt oder den Erstbezug.",
  },
  {
    id: "bestand",
    icon: Home,
    title: "Kauf Bestandsimmobilie",
    description: "Sichere Finanzierung beim Erwerb einer bestehenden Immobilie.",
  },
  {
    id: "eigenes-bauvorhaben",
    icon: Building2,
    title: "Eigenes Bauvorhaben",
    description: "Individuelle Begleitung für Ihr privates Hausbauprojekt.",
  },
  {
    id: "modernisierung",
    icon: Paintbrush,
    title: "Modernisierung",
    description: "Kapital für Renovierung, Sanierung oder energetische Optimierung.",
  },
  {
    id: "anschluss",
    icon: Repeat,
    title: "Anschlussfinanzierung",
    description: "Optimale Konditionen für die Verlängerung Ihrer bestehenden Baufinanzierung.",
  },
  {
    id: "kapitalbeschaffung",
    icon: Coins,
    title: "Kapitalbeschaffung",
    description: "Nutzen Sie Ihre Immobilie als Sicherheit für neues Kapital.",
  },
];

export default function ServicesSection() {
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
      id="leistungen"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-muted/30"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            className="font-serif text-3xl lg:text-4xl xl:text-5xl font-medium mb-4"
            data-testid="text-services-title"
          >
            Unsere Leistungen
          </h2>
          <p className="text-lg text-muted-foreground">
            Umfassende Finanzierungslösungen für jeden Bedarf
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`group p-4 sm:p-6 lg:p-8 transition-all duration-700 hover-elevate ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              data-testid={`card-service-${service.id}`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-5 transition-colors group-hover:bg-primary/15">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-serif text-base sm:text-xl font-medium mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
