import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CTA_URL =
  "https://swisslife-select.finlink.de/lutz-starke/start/finance_type?partner=2a78b047-f5f5-47aa-b7ff-f09906c94fa3&partnerCompany=Swiss%20Life%20Select";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie berechnet sich meine monatliche Baufinanzierungsrate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die monatliche Rate ergibt sich aus Darlehensbetrag, Sollzinssatz und Tilgungssatz. Die Formel lautet: Rate = Darlehensbetrag × (Monatszins / (1 − (1 + Monatszins)^(−Laufzeit in Monaten))). Unser Rechner berechnet dies automatisch für Sie.",
      },
    },
    {
      "@type": "Question",
      name: "Wie viel Eigenkapital brauche ich für eine Baufinanzierung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Empfohlen werden mindestens 20% Eigenkapital – also etwa 10–15% Kaufpreis plus Nebenkosten (Notar, Grunderwerbsteuer, Makler). Mit mehr Eigenkapital erhalten Sie in der Regel günstigere Zinsen.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Sollzins und Effektivzins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Sollzins ist der reine Zinssatz ohne Nebenkosten. Der Effektivzins enthält zusätzliche Kosten wie Bearbeitungsgebühren und ist daher für den Vergleich verschiedener Angebote aussagekräftiger.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://heinrich-finanziert.com/" },
    { "@type": "ListItem", position: 2, name: "Baufinanzierungsrechner", item: "https://heinrich-finanziert.com/baufinanzierungsrechner/" },
  ],
};

function fmt(val: number) {
  return val.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function RechnerPage() {
  const [betrag, setBetrag] = useState(350000);
  const [zinssatz, setZinssatz] = useState(3.8);
  const [tilgung, setTilgung] = useState(2.0);
  const [bindung, setBindung] = useState(15);

  const result = useMemo(() => {
    const monatszins = zinssatz / 100 / 12;
    const monate = bindung * 12;
    const rate = betrag * (monatszins / (1 - Math.pow(1 + monatszins, -monate)));
    const restschuld =
      betrag * Math.pow(1 + monatszins, monate) -
      (rate * (Math.pow(1 + monatszins, monate) - 1)) / monatszins;
    const gesamtzinsen = rate * monate - (betrag - restschuld);
    return { rate, restschuld, gesamtzinsen };
  }, [betrag, zinssatz, tilgung, bindung]);

  return (
    <>
      <Helmet>
        <title>Baufinanzierungsrechner | Monatliche Rate berechnen – Dirk Heinrich</title>
        <meta name="description" content="Berechnen Sie kostenlos Ihre monatliche Baufinanzierungsrate ✓ Zinsen & Tilgung anpassen ✓ Sofort online – unverbindlich" />
        <link rel="canonical" href="https://heinrich-finanziert.com/baufinanzierungsrechner/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-foreground transition-colors">Startseite</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Baufinanzierungsrechner</span>
            </nav>

            <h1 className="font-serif text-4xl lg:text-5xl font-medium leading-tight mb-4">
              Baufinanzierungsrechner – Ihre monatliche Rate sofort berechnen
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
              Passen Sie die Werte an und sehen Sie sofort, wie sich Ihre monatliche Rate verändert.
            </p>

            {/* Calculator */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Inputs */}
              <div className="bg-muted/30 rounded-2xl p-6 space-y-7">

                {/* Darlehensbetrag */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">Darlehensbetrag</label>
                    <span className="text-sm font-bold text-primary">{betrag.toLocaleString("de-DE")} €</span>
                  </div>
                  <input
                    type="range"
                    min={50000} max={800000} step={5000}
                    value={betrag}
                    onChange={(e) => setBetrag(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>50.000 €</span><span>800.000 €</span>
                  </div>
                </div>

                {/* Sollzinssatz */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">Sollzinssatz</label>
                    <span className="text-sm font-bold text-primary">{zinssatz.toFixed(1).replace(".", ",")} %</span>
                  </div>
                  <input
                    type="range"
                    min={1.0} max={6.0} step={0.1}
                    value={zinssatz}
                    onChange={(e) => setZinssatz(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1,0 %</span><span>6,0 %</span>
                  </div>
                </div>

                {/* Tilgungssatz */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">Tilgungssatz</label>
                    <span className="text-sm font-bold text-primary">{tilgung.toFixed(1).replace(".", ",")} %</span>
                  </div>
                  <input
                    type="range"
                    min={1.0} max={5.0} step={0.1}
                    value={tilgung}
                    onChange={(e) => setTilgung(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1,0 %</span><span>5,0 %</span>
                  </div>
                </div>

                {/* Zinsbindung */}
                <div>
                  <label className="text-sm font-medium block mb-2">Zinsbindung</label>
                  <select
                    value={bindung}
                    onChange={(e) => setBindung(Number(e.target.value))}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                  >
                    {[5, 10, 15, 20, 25].map((y) => (
                      <option key={y} value={y}>{y} Jahre</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col gap-4">
                <div className="bg-primary text-primary-foreground rounded-2xl p-6 flex-1 flex flex-col justify-center">
                  <p className="text-sm text-primary-foreground/70 mb-1">Monatliche Rate</p>
                  <p className="font-serif text-5xl font-medium">{fmt(result.rate)} €</p>
                </div>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div className="bg-muted/30 rounded-2xl p-5">
                    <p className="text-xs text-muted-foreground mb-1">Gesamtzinskosten</p>
                    <p className="font-serif text-2xl font-medium">{fmt(result.gesamtzinsen)} €</p>
                  </div>
                  <div className="bg-muted/30 rounded-2xl p-5">
                    <p className="text-xs text-muted-foreground mb-1">Restschuld nach {bindung} J.</p>
                    <p className="font-serif text-2xl font-medium">{fmt(result.restschuld)} €</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Erklärung */}
            <section className="mb-12">
              <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-4">Was sagt mir mein Ergebnis?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die monatliche Rate zeigt Ihre voraussichtliche Belastung aus Zinsen und Tilgung. Die Restschuld ist der nach Ablauf der Zinsbindung noch ausstehende Darlehensbetrag – für diesen benötigen Sie eine Anschlussfinanzierung. Die Gesamtzinskosten zeigen, wie viel Sie über die Zinsbindungszeit an die Bank zahlen. Bitte beachten: Echte Konditionen variieren je nach Bank, Bonität und Beleihungsauslauf – der Rechner bietet eine erste Orientierung.
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="font-serif text-2xl font-medium mb-6">Häufige Fragen zum Baufinanzierungsrechner</h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq, i) => (
                  <div key={i} className="border border-border rounded-xl p-5">
                    <h3 className="font-medium mb-2">{faq.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-10 text-center">
              <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-3">
                Ihr persönliches Angebot – kostenlos & unverbindlich
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                Der Rechner zeigt Ihnen eine erste Orientierung. Dirk Heinrich vergleicht für Sie über 400 Banken und findet das Angebot mit den besten Konditionen für Ihre persönliche Situation.
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.open(CTA_URL, "_blank")}
                className="bg-white text-primary text-base px-8"
              >
                Jetzt Beratung vereinbaren
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </section>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
