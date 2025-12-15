import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const [impressumOpen, setImpressumOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 lg:py-16 bg-muted/50 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-serif text-xl font-semibold text-foreground">
                Dirk Heinrich
              </span>
              <span className="text-muted-foreground text-sm ml-2">
                | Baufinanzierung
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mb-6">
              Ihre persönliche Beratung für maßgeschneiderte Baufinanzierungen. 
              Als Partner von Swiss Life Select biete ich Ihnen unabhängige 
              Finanzierungslösungen.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                Swiss Life Select Partner
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4 text-foreground">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Aarstraße 162</p>
                  <p>65232 Taunusstein</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@dh-baufinanzierung.de</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+49 (0) 6128 XXXXXX</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4 text-foreground">Rechtliches</h3>
            <div className="space-y-3">
              <Dialog open={impressumOpen} onOpenChange={setImpressumOpen}>
                <DialogTrigger asChild>
                  <button
                    className="block text-sm text-muted-foreground transition-colors"
                    data-testid="button-impressum"
                  >
                    Impressum
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl">
                      Impressum
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 text-sm text-muted-foreground">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">
                        Angaben gemäß § 5 TMG
                      </h4>
                      <p>Dirk Heinrich</p>
                      <p>Baufinanzierung</p>
                      <p>Aarstraße 162</p>
                      <p>65232 Taunusstein</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Kontakt</h4>
                      <p>Telefon: +49 (0) 6128 XXXXXX</p>
                      <p>E-Mail: info@dh-baufinanzierung.de</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">
                        Berufsbezeichnung und berufsrechtliche Regelungen
                      </h4>
                      <p>
                        Finanzanlagenvermittler gemäß § 34f Abs. 1 GewO
                      </p>
                      <p>
                        Immobiliendarlehensvermittler gemäß § 34i Abs. 1 GewO
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">
                        Zuständige Aufsichtsbehörde
                      </h4>
                      <p>
                        Industrie- und Handelskammer Wiesbaden
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">
                        Registereintrag
                      </h4>
                      <p>
                        Eintragung im Vermittlerregister nach § 11a GewO
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">
                        Streitschlichtung
                      </h4>
                      <p>
                        Die Europäische Kommission stellt eine Plattform zur 
                        Online-Streitbeilegung (OS) bereit: 
                        https://ec.europa.eu/consumers/odr/
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <button
                className="block text-sm text-muted-foreground transition-colors"
                data-testid="button-privacy"
              >
                Datenschutz
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Dirk Heinrich - Baufinanzierung. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-muted-foreground">
              Partner von Swiss Life Select
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
