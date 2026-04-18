import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FaqItem {
  question: string;
  answer: string;
}

interface CityLandingPageProps {
  city: string;
  titleTag: string;
  metaDescription: string;
  canonicalUrl: string;
  h1: string;
  localParagraph: string;
  marktInfo: string;
  faqItems: FaqItem[];
  areaServed: string[];
  slug: string;
}

const CTA_URL =
  "https://swisslife-select.finlink.de/lutz-starke/start/finance_type?partner=2a78b047-f5f5-47aa-b7ff-f09906c94fa3&partnerCompany=Swiss%20Life%20Select";

export default function CityLandingPage({
  city,
  titleTag,
  metaDescription,
  canonicalUrl,
  h1,
  localParagraph,
  marktInfo,
  faqItems,
  areaServed,
  slug,
}: CityLandingPageProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: "https://heinrich-finanziert.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Baufinanzierung ${city}`,
        item: canonicalUrl,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dirk Heinrich – Baufinanzierung",
    url: canonicalUrl,
    telephone: "+496128923900010",
    email: "dirk.heinrich@swisslife-select.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aarstraße 162",
      addressLocality: "Taunusstein",
      postalCode: "65232",
      addressCountry: "DE",
    },
    areaServed: areaServed,
    hasCredential: "§34i GewO – Immobiliardarlehensvermittler",
    priceRange: "Kostenlos",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{titleTag}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={titleTag} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-foreground transition-colors">
                Startseite
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Baufinanzierung {city}</span>
            </nav>

            {/* H1 */}
            <h1 className="font-serif text-4xl lg:text-5xl font-medium leading-tight mb-6">
              {h1}
            </h1>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-10">
              {["Über 400 Banken im Vergleich", "Kostenlose Erstberatung", "§34i GewO zugelassen", "Unabhängig"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </div>

            {/* Local intro paragraph */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 border-l-4 border-primary/30 pl-6">
              {localParagraph}
            </p>

            {/* Warum unabhängige Beratung */}
            <section className="mb-12">
              <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-4">
                Warum unabhängige Beratung in {city}?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ein Bankberater kann Ihnen immer nur das Angebot seiner eigenen Bank vorlegen. Als unabhängiger Baufinanzierungsberater arbeite ich mit über 400 Banken, Sparkassen und Bausparkassen zusammen – und bin dabei ausschließlich Ihren Interessen verpflichtet.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Das Ergebnis: Sie erhalten nicht irgendein Angebot, sondern das beste Angebot für Ihre persönliche Situation – transparent, nachvollziehbar und ohne versteckte Kosten. Meine Beratung ist für Sie vollständig kostenlos.
              </p>
            </section>

            {/* Immobilienmarkt */}
            <section className="mb-12 bg-muted/30 rounded-2xl p-6 lg:p-8">
              <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-4">
                Der Immobilienmarkt in {city}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{marktInfo}</p>
            </section>

            {/* Ablauf */}
            <section className="mb-12">
              <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-6">
                Ihre Baufinanzierung in {city} – So läuft es ab
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Kostenloses Erstgespräch", text: "Wir analysieren Ihre Situation, Wünsche und finanziellen Möglichkeiten – persönlich vor Ort oder per Video." },
                  { step: "2", title: "Bankenvergleich", text: "Ich vergleiche für Sie die Konditionen von über 400 Anbietern und wähle die besten Angebote für Sie aus." },
                  { step: "3", title: "Optimales Angebot & Abschluss", text: "Sie entscheiden, ich begleite Sie bis zur Auszahlung – transparent und ohne Druck." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-6">
                Häufige Fragen zur Baufinanzierung in {city}
              </h2>
              <div className="space-y-4">
                {faqItems.map((faq, i) => (
                  <div key={i} className="border border-border rounded-xl p-5">
                    <h3 className="font-medium mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Block */}
            <section className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-10 text-center">
              <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-3">
                Jetzt kostenlose Beratung vereinbaren
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
                Finanzierung prüfen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-xs text-primary-foreground/60 mt-4">
                Zulassung nach §34i GewO · Unabhängig · Kostenlose Erstberatung
              </p>
            </section>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
