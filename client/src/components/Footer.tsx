import { Link } from "wouter";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 lg:py-16 bg-muted/50 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
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
              Ich biete Ihnen unabhängige Finanzierungslösungen.
            </p>
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
                <span>dirk.heinrich@swisslife-select.de</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(06128) 923 9010</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4 text-foreground">Baufinanzierung in Ihrer Region</h3>
            <div className="space-y-2">
              {[
                { label: "Baufinanzierung Wiesbaden", href: "/baufinanzierung-wiesbaden/" },
                { label: "Baufinanzierung Idstein", href: "/baufinanzierung-idstein/" },
                { label: "Baufinanzierung Bad Schwalbach", href: "/baufinanzierung-bad-schwalbach/" },
                { label: "Baufinanzierung Rheingau", href: "/baufinanzierung-rheingau/" },
                { label: "Baufinanzierung Mainz", href: "/baufinanzierung-mainz/" },
                { label: "Baufinanzierungsrechner", href: "/baufinanzierungsrechner/" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4 text-foreground">Rechtliches</h3>
            <div className="space-y-3">
              <Link
                href="/impressum/"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-impressum"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Dirk Heinrich - Baufinanzierung. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
