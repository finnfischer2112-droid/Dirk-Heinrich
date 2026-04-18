import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <>
      <Helmet>
        <title>Impressum | Dirk Heinrich – Baufinanzierung Taunusstein</title>
        <meta name="description" content="Impressum von Dirk Heinrich, unabhängiger Baufinanzierungsberater in Taunusstein. Angaben gemäß § 5 TMG." />
        <link rel="canonical" href="https://heinrich-finanziert.com/impressum/" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 pb-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">

            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-foreground transition-colors">Startseite</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Impressum</span>
            </nav>

            <h1 className="font-serif text-4xl font-medium mb-10">Impressum</h1>

            <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
              <div>
                <h2 className="font-serif text-xl font-medium text-foreground mb-3">Angaben gemäß § 5 TMG</h2>
                <p>Dirk Heinrich</p>
                <p>BWV-Versicherungsfachmann</p>
                <p>Zertifizierter Experte für den Öffentlichen Dienst</p>
                <p>DIN-Gewerbefachmann</p>
                <br />
                <p>Aarstraße 162</p>
                <p>65232 Taunusstein</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-medium text-foreground mb-3">Kontakt</h2>
                <p>Telefon: (06128) 923 9010</p>
                <p>Mobil: 0172 616 5555</p>
                <p>E-Mail: dirk.heinrich@swisslife-select.de</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-medium text-foreground mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <p>Immobiliardarlehensvermittler gemäß § 34i Absatz 1 Satz 1 Gewerbeordnung (GewO)</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-medium text-foreground mb-3">Zuständige Aufsichtsbehörde</h2>
                <p>Industrie- und Handelskammer Wiesbaden</p>
                <p>Wilhelmstraße 24–26</p>
                <p>65183 Wiesbaden</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-medium text-foreground mb-3">Vermittlerregister</h2>
                <p>Industrie- und Handelskammer Wiesbaden</p>
                <p>Registrierungsnummer: D-W-1 79-6V5S-62</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-medium text-foreground mb-3">Steuer-ID</h2>
                <p>DE 04 826 00947</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-medium text-foreground mb-3">Streitschlichtung</h2>
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
                <p className="mt-2">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-medium text-foreground mb-3">Haftung für Inhalte</h2>
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
