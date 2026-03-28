import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
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
      ref={sectionRef}
      className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden"
      data-testid="section-cta"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            className="font-serif text-3xl lg:text-4xl xl:text-5xl font-medium mb-6"
            data-testid="text-cta-title"
          >
            Bereit für Ihre Finanzierung?
          </h2>
          <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Lassen Sie uns gemeinsam die optimale Lösung für Ihre 
            Immobilienfinanzierung finden. Kostenlos und unverbindlich.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.open("https://swisslife-select.finlink.de/lutz-starke/start/finance_type?partner=2a78b047-f5f5-47aa-b7ff-f09906c94fa3&partnerCompany=Swiss%20Life%20Select", "_blank")}
              className="text-base px-8 bg-white text-primary"
              data-testid="button-cta-primary"
            >
              Finanzierung prüfen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
