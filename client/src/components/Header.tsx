import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      setLocation("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl lg:text-2xl font-semibold text-foreground">
              Dirk Heinrich
            </span>
            <span className="hidden sm:inline text-muted-foreground text-sm">
              | Baufinanzierung
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("leistungen")}
              className="text-sm font-medium text-muted-foreground transition-colors duration-200"
              data-testid="link-services"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection("vorteile")}
              className="text-sm font-medium text-muted-foreground transition-colors duration-200"
              data-testid="link-benefits"
            >
              Vorteile
            </button>
            <Button
              onClick={() => window.open("https://swisslife-select.finlink.de/lutz-starke/start/finance_type?partner=2a78b047-f5f5-47aa-b7ff-f09906c94fa3&partnerCompany=Swiss%20Life%20Select", "_blank")}
              data-testid="button-header-cta"
            >
              Finanzierung prüfen
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-background border-t border-border">
          <nav className="flex flex-col p-4 gap-2">
            <button
              onClick={() => scrollToSection("leistungen")}
              className="text-left py-3 px-4 text-sm font-medium text-muted-foreground rounded-md"
              data-testid="mobile-link-services"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection("vorteile")}
              className="text-left py-3 px-4 text-sm font-medium text-muted-foreground rounded-md"
              data-testid="mobile-link-benefits"
            >
              Vorteile
            </button>
            <Button
              onClick={() => window.open("https://swisslife-select.finlink.de/lutz-starke/start/finance_type?partner=2a78b047-f5f5-47aa-b7ff-f09906c94fa3&partnerCompany=Swiss%20Life%20Select", "_blank")}
              className="mt-2"
              data-testid="mobile-button-cta"
            >
              Finanzierung prüfen
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
