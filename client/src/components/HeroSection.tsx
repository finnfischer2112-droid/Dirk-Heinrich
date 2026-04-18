import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star, TrendingUp, ShieldCheck } from "lucide-react";
import { useLocation } from "wouter";
import dirkHeinrichImg from "@assets/23002-Herr-Heinrich-Dirk-74085_1767387906796.png";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      data-testid="section-hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa]"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#D82033 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left order-1">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Ihr Experte im Rhein-Main-Gebiet
            </div>

            <h1
              className={`font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] mb-8 transition-all duration-700 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              data-testid="text-hero-headline"
            >
              Baufinanzierung Taunusstein – <br />
              <span className="text-primary">Klar. Sicher.</span> <br />
              Maßgeschneidert.
            </h1>

            <p
              className={`text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed transition-all duration-700 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              data-testid="text-hero-subheadline"
            >
              Vergleichen Sie die Konditionen von über 400 Banken. 
              Individuell, unabhängig und komplett kostenfrei für Sie.
            </p>

            {/* Feature Tags */}
            <div className={`flex flex-wrap justify-center lg:justify-start gap-4 mb-10 transition-all duration-700 delay-600 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              {[
                "Über 400 Banken im Vergleich",
                "Persönliche Beratung"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {text}
                </div>
              ))}
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                onClick={() => window.open("https://swisslife-select.finlink.de/lutz-starke/start/finance_type?partner=2a78b047-f5f5-47aa-b7ff-f09906c94fa3&partnerCompany=Swiss%20Life%20Select", "_blank")}
                className="text-base px-10 h-14 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all active-elevate-2"
                data-testid="button-hero-cta"
              >
                Finanzierung prüfen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth" })}
                className="text-base h-14 px-10 rounded-full border-2 hover-elevate active-elevate-2"
                data-testid="button-hero-secondary"
              >
                Leistungen ansehen
              </Button>
            </div>
          </div>

          {/* Right Visual Column */}
          <div
            className={`lg:col-span-5 relative order-2 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative max-w-[280px] sm:max-w-[320px] lg:max-w-[450px] mx-auto lg:ml-auto">
              {/* Decorative floating cards */}
              <div className="absolute -top-6 -left-12 z-20 bg-white p-4 rounded-xl shadow-xl animate-bounce-slow hidden xl:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Zinskondition</div>
                    <div className="text-sm font-bold">Top 3.42%</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 -right-8 z-20 bg-white p-4 rounded-xl shadow-xl animate-float hidden xl:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Bewertung</div>
                    <div className="text-sm font-bold">Exzellent</div>
                  </div>
                </div>
              </div>

              {/* Main Image Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-[40px] rotate-3 translate-x-4 translate-y-4 -z-10" />
                <div className="absolute inset-0 bg-muted rounded-[40px] -z-10" />
                <img
                  src={dirkHeinrichImg}
                  alt="Dirk Heinrich"
                  className="relative z-10 w-full h-auto object-contain rounded-[40px] transform hover:scale-[1.02] transition-transform duration-500"
                  data-testid="img-dirk-heinrich"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5px, -15px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}} />
    </section>
  );
}
