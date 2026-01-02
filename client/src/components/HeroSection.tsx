import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dirkHeinrichImg from "@assets/23002-Herr-Heinrich-Dirk-74085_1767387906796.png";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      data-testid="section-hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1
              className={`font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-6 transition-all duration-700 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              data-testid="text-hero-headline"
            >
              Ihre Baufinanzierung.
              <br />
              <span className="text-primary">Klar. Sicher.</span>
              <br />
              Maßgeschneidert.
            </h1>

            <p
              className={`text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 transition-all duration-700 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              data-testid="text-hero-subheadline"
            >
              Persönliche Beratung für Ihre Immobilienfinanzierung. 
              Transparent, unabhängig und auf Ihre Ziele ausgerichtet.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                onClick={() => window.location.href = "https://swisslife-select.finlink.de/lutz-starke/start/finance_type?partner=2a78b047-f5f5-47aa-b7ff-f09906c94fa3&partnerCompany=Swiss%20Life%20Select"}
                className="text-base px-8"
                data-testid="button-hero-cta"
              >
                Finanzierung prüfen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth" })}
                className="text-base"
                data-testid="button-hero-secondary"
              >
                Mehr erfahren
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative max-w-md mx-auto">
              <img
                src={dirkHeinrichImg}
                alt="Dirk Heinrich"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
                data-testid="img-dirk-heinrich"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
