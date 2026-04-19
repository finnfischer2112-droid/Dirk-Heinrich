import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle2, ChevronRight, Star,
  MapPin, Shield, Users, Banknote, ChevronDown, ChevronUp,
  Phone, Clock, Award
} from "lucide-react";
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
  cityImage?: string;
}

const CTA_URL =
  "https://swisslife-select.finlink.de/lutz-starke/start/finance_type?partner=2a78b047-f5f5-47aa-b7ff-f09906c94fa3&partnerCompany=Swiss%20Life%20Select";

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((faq, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/30 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            data-testid={`faq-toggle-${i}`}
          >
            <span className="font-medium pr-4">{faq.question}</span>
            {openIndex === i
              ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
              : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

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
  cityImage,
}: CityLandingPageProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://heinrich-finanziert.com/" },
      { "@type": "ListItem", position: 2, name: `Baufinanzierung ${city}`, item: canonicalUrl },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dirk Heinrich – Baufinanzierung",
    url: canonicalUrl,
    telephone: "+4961289239010",
    email: "dirk.heinrich@swisslife-select.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aarstraße 162",
      addressLocality: "Taunusstein",
      postalCode: "65232",
      addressCountry: "DE",
    },
    areaServed,
    hasCredential: "§34i GewO – Immobiliardarlehensvermittler",
    priceRange: "Kostenlos",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", bestRating: "5", ratingCount: "6" },
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
        <Header transparent={!!cityImage} />

        {/* ── HERO ── */}
        <section className="relative bg-[#fafafa] overflow-hidden pt-24 pb-0">
          {/* City background image with light overlay */}
          {cityImage && (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${cityImage})` }}
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />
            </>
          )}
          {/* Subtle background glow (only without city image) */}
          {!cityImage && (
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          )}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'radial-gradient(#D82033 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-foreground transition-colors">Startseite</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground/70">Baufinanzierung {city}</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

              {/* Left: Copy */}
              <div className="lg:col-span-7">
                {/* Location badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 ${cityImage ? "bg-white/20 backdrop-blur-sm text-white border border-white/30" : "bg-primary/10 text-primary"}`}>
                  <MapPin className="w-3 h-3" />
                  {city} & Rhein-Main-Gebiet
                </div>

                <h1 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] mb-5 ${cityImage ? "text-white drop-shadow-md" : "text-foreground"}`}>
                  {h1}
                </h1>

                <p className={`text-base lg:text-lg leading-relaxed mb-8 max-w-lg ${cityImage ? "text-white/85 drop-shadow-sm" : "text-muted-foreground"}`}>
                  {localParagraph}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
                  <Button
                    size="lg"
                    onClick={() => window.open(CTA_URL, "_blank")}
                    className="text-sm px-7 h-12 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                    data-testid="button-city-cta-hero"
                  >
                    Kostenlose Erstberatung
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <span className={`text-xs ${cityImage ? "text-white/70" : "text-muted-foreground"}`}>Unverbindlich · 400+ Banken verglichen</span>
                </div>

                {/* Quick trust badges */}
                <div className="flex flex-wrap gap-3">
                  {["Über 400 Banken", "§34i GewO", "Kostenlos", "Unabhängig"].map((b) => (
                    <div key={b} className={`flex items-center gap-1.5 text-xs ${cityImage ? "text-white/75" : "text-muted-foreground"}`}>
                      <CheckCircle2 className={`w-3.5 h-3.5 ${cityImage ? "text-white/90" : "text-primary"}`} />
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Trust Panel + optional city image */}
              <div className="lg:col-span-5 flex flex-col gap-4">

                {/* Trust Panel */}
                <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Vertrauen Sie auf Erfahrung</p>
                  <p className="text-foreground font-medium text-sm mb-5">Nachweisbare Qualität in {city}</p>

                  <div className="space-y-4">
                    {[
                      { icon: Banknote, value: "400+", label: "Banken im Vergleich", color: "bg-primary/10 text-primary" },
                      { icon: Star, value: "5.0 / 5", label: "Google Bewertungen", color: "bg-amber-50 text-amber-500" },
                      { icon: Shield, value: "§34i GewO", label: "Offiziell zugelassen", color: "bg-emerald-50 text-emerald-600" },
                      { icon: Award, value: "100% Kostenlos", label: "Keine Beratungsgebühr", color: "bg-blue-50 text-blue-600" },
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl ${stat.color} flex items-center justify-center flex-shrink-0`}>
                          <stat.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-foreground font-semibold text-sm leading-none mb-0.5">{stat.value}</div>
                          <div className="text-muted-foreground text-xs">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stars */}
                  <div className="mt-5 pt-4 border-t border-border flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">Verifizierte Kundenmeinungen</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom border */}
          <div className="border-b border-border/50" />
        </section>

        <main className="pb-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">

            {/* ── STATS BAR ── */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-14">
              {[
                { value: "400+", label: "Banken verglichen" },
                { value: "5.0★", label: "Google Bewertung" },
                { value: "Kostenlos", label: "Erstberatung" },
                { value: "Vor Ort", label: `Beratung in ${city}` },
              ].map((s) => (
                <div key={s.label} className="bg-muted/40 rounded-2xl p-5 text-center border border-border/50">
                  <div className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            {/* ── WARUM UNABHÄNGIG ── */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-3">
                Warum unabhängige Baufinanzierung in {city}?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Ein Bankberater kann Ihnen nur das Angebot seiner eigenen Bank vorlegen. Als unabhängiger Berater nach §34i GewO arbeite ich mit über 400 Banken zusammen – und bin ausschließlich Ihren Interessen verpflichtet.
              </p>

              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    icon: Users,
                    title: "Ihr Vorteil",
                    text: "Ich vergleiche über 400 Banken und Bausparkassen und verhandle für Sie die besten Konditionen.",
                  },
                  {
                    icon: Shield,
                    title: "Unabhängig & zugelassen",
                    text: "Beratung nach §34i GewO, registriert bei der IHK Wiesbaden. Ihre Interessen stehen an erster Stelle.",
                  },
                  {
                    icon: Clock,
                    title: "Vor Ort oder per Video",
                    text: `Persönliche Beratung in ${city} und Umgebung – oder bequem von zu Hause aus per Videokonferenz.`,
                  },
                ].map((card) => (
                  <div key={card.title} className="border border-border rounded-2xl p-6 hover:border-primary/30 hover:bg-muted/20 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── MARKT ── */}
            <section className="mb-14">
              <div className="bg-muted/40 rounded-2xl p-8 lg:p-10 border border-border/60">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Lokale Expertise</p>
                <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-4">
                  Der Immobilienmarkt in {city}
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">{marktInfo}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {areaServed.map((area) => (
                    <span key={area} className="inline-flex items-center gap-1.5 px-3 py-1 bg-background rounded-full text-xs text-muted-foreground border border-border">
                      <MapPin className="w-3 h-3 text-primary" /> {area}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* ── ABLAUF ── */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-2">
                So läuft Ihre Baufinanzierung in {city} ab
              </h2>
              <p className="text-muted-foreground mb-8 text-sm">Strukturierter Prozess – vom Erstgespräch bis zur Auszahlung</p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: "01", title: "Kostenloses Erstgespräch", text: "Wir analysieren Ihre Situation, Wünsche und finanziellen Möglichkeiten – persönlich oder per Video." },
                  { step: "02", title: "Bankenvergleich", text: "Ich vergleiche die Konditionen von über 400 Anbietern und selektiere die Top-Angebote für Ihre Situation." },
                  { step: "03", title: "Optimales Angebot & Abschluss", text: "Sie entscheiden. Ich begleite Sie bis zur vollständigen Auszahlung – transparent, klar und ohne Druck." },
                ].map((s, i) => (
                  <div key={s.step} className="relative">
                    {i < 2 && (
                      <div className="hidden md:block absolute top-7 left-full w-full h-px bg-border z-0 -translate-x-8" />
                    )}
                    <div className="relative z-10">
                      <div className="text-4xl font-serif font-medium text-primary/20 leading-none mb-4">{s.step}</div>
                      <h3 className="font-semibold mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── TRUST ROW ── */}
            <section className="mb-14 bg-muted/30 rounded-2xl p-8 border border-border/50">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                {[
                  { icon: Star, label: "5,0 Sterne", sub: "Google Bewertungen" },
                  { icon: CheckCircle2, label: "Offiziell zugelassen", sub: "IHK Wiesbaden · §34i GewO" },
                  { icon: Phone, label: "Persönlich erreichbar", sub: "Mo–Fr 09:00–18:00 Uhr" },
                ].map((t) => (
                  <div key={t.label} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                      <t.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-semibold text-sm">{t.label}</div>
                    <div className="text-xs text-muted-foreground">{t.sub}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── FAQ ── */}
            <section className="mb-14">
              <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-2">
                Häufige Fragen zur Baufinanzierung in {city}
              </h2>
              <p className="text-muted-foreground text-sm mb-8">Alles Wichtige auf einen Blick</p>
              <FaqAccordion items={faqItems} />
            </section>

            {/* ── FINAL CTA ── */}
            <section className="bg-primary rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
              <div className="relative">
                <p className="text-xs uppercase tracking-widest text-primary-foreground/60 font-semibold mb-3">Baufinanzierung {city}</p>
                <h2 className="font-serif text-2xl lg:text-4xl font-medium text-primary-foreground mb-4">
                  Jetzt kostenlose Beratung vereinbaren
                </h2>
                <p className="text-primary-foreground/75 mb-8 max-w-lg mx-auto leading-relaxed">
                  Dirk Heinrich vergleicht für Sie über 400 Banken und findet das beste Angebot für Ihre persönliche Situation – persönlich in {city} oder bequem per Video.
                </p>

                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => window.open(CTA_URL, "_blank")}
                  className="bg-white text-primary hover:bg-white/90 text-sm px-8 h-12 rounded-full shadow-lg transition-all mb-4"
                  data-testid="button-city-cta-final"
                >
                  Finanzierung prüfen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <div className="flex flex-wrap justify-center gap-4 mt-2">
                  {["§34i GewO zugelassen", "Kostenlose Erstberatung", "Unabhängig"].map((b) => (
                    <div key={b} className="flex items-center gap-1.5 text-xs text-primary-foreground/50">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-foreground/70" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
