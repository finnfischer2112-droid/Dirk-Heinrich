import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, TrendingUp } from "lucide-react";

export default function PartnerSection() {
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
      id="partner"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-muted/30"
      data-testid="section-partner"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5">
              <Shield className="w-3 h-3 mr-1.5" />
              Offizieller Partner
            </Badge>
            <h2
              className="font-serif text-3xl lg:text-4xl xl:text-5xl font-medium mb-4"
              data-testid="text-partner-title"
            >
              Swiss Life Select
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Als Partner von Swiss Life Select verbinde ich unabhängige Beratung 
              mit der Stärke eines führenden europäischen Finanzdienstleisters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div
              className={`text-center transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">
                Sicherheit
              </h3>
              <p className="text-sm text-muted-foreground">
                Über 160 Jahre Erfahrung in der Finanzberatung
              </p>
            </div>

            <div
              className={`text-center transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">
                Qualität
              </h3>
              <p className="text-sm text-muted-foreground">
                Ausgezeichnete Beratungsqualität und Kundenzufriedenheit
              </p>
            </div>

            <div
              className={`text-center transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">
                Unabhängigkeit
              </h3>
              <p className="text-sm text-muted-foreground">
                Zugang zu über 100 Finanzierungspartnern
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
