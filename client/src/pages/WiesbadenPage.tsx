import CityLandingPage from "@/components/CityLandingPage";

export default function WiesbadenPage() {
  return (
    <CityLandingPage
      city="Wiesbaden"
      slug="baufinanzierung-wiesbaden"
      titleTag="Baufinanzierung Wiesbaden | Dirk Heinrich – Unabhängige Beratung"
      metaDescription="Unabhängige Baufinanzierung in Wiesbaden ✓ Über 400 Banken verglichen ✓ Kostenlose Erstberatung ▶ Jetzt Termin sichern"
      canonicalUrl="https://heinrich-finanziert.com/baufinanzierung-wiesbaden/"
      h1="Baufinanzierung Wiesbaden – Ihr unabhängiger Experte im Rhein-Main-Gebiet"
      localParagraph="Als Wiesbadener wissen Sie: Die Landeshauptstadt Hessens zählt zu den begehrtesten Wohnlagen in Deutschland. Umso wichtiger ist eine Baufinanzierung, die zu Ihren individuellen Möglichkeiten passt – und nicht zum Standardprodukt einer Hausbank."
      marktInfo="Wiesbaden verzeichnet als Landeshauptstadt Hessens eine konstant hohe Immobiliennachfrage. Quadratmeterpreise für Eigentumswohnungen bewegen sich im Schnitt zwischen 4.500 und 6.500 €/m², für Einfamilienhäuser in guten Lagen deutlich darüber. Gerade in diesem Preisniveau macht ein umfassender Bankenvergleich erhebliche Unterschiede – oft mehrere Tausend Euro über die Laufzeit."
      areaServed={["Wiesbaden", "Taunusstein", "Mainz-Kastel"]}
      faqItems={[
        {
          question: "Lohnt sich eine Beratung bei Dirk Heinrich auch wenn ich in Wiesbaden wohne und nicht in Taunusstein?",
          answer: "Ja, absolut. Das Einzugsgebiet umfasst das gesamte Rhein-Main-Gebiet. Beratungen finden persönlich vor Ort oder bequem per Video statt.",
        },
        {
          question: "Wie teuer sind Immobilien in Wiesbaden aktuell?",
          answer: "Wiesbaden gehört zu den teureren Wohnlagen in Hessen. Eigentumswohnungen kosten im Schnitt 4.500–6.500 €/m². Ein umfassender Bankenvergleich ist hier besonders wertvoll.",
        },
        {
          question: "Welche Förderungen gibt es beim Hauskauf in Wiesbaden?",
          answer: "Neben KfW-Programmen gibt es in Hessen das Wohnraumförderungsprogramm (WFP). Welche Förderung für Sie passt, klären wir im kostenlosen Erstgespräch.",
        },
      ]}
    />
  );
}
