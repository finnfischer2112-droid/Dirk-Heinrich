import CityLandingPage from "@/components/CityLandingPage";

export default function MainzPage() {
  return (
    <CityLandingPage
      city="Mainz"
      slug="baufinanzierung-mainz"
      titleTag="Baufinanzierung Mainz | Dirk Heinrich – Unabhängige Beratung"
      metaDescription="Unabhängige Baufinanzierung in Mainz ✓ Über 400 Banken verglichen ✓ Kostenlose Erstberatung ▶ Jetzt Termin sichern"
      canonicalUrl="https://heinrich-finanziert.com/baufinanzierung-mainz/"
      h1="Baufinanzierung Mainz – Ihr unabhängiger Experte im Rhein-Main-Gebiet"
      localParagraph="Mainz als Landeshauptstadt von Rheinland-Pfalz mit direkter Rhein-Lage und exzellenter Infrastruktur zieht immer mehr Kaufinteressenten an. Als unabhängiger Berater vergleiche ich für Sie über 400 Banken – damit Sie in Mainz zum besten Zinssatz finanzieren."
      marktInfo="In Mainz bewegen sich die Kaufpreise für Eigentumswohnungen zwischen 4.000 und 6.000 €/m². Besonders gefragt sind Stadtteile wie Gonsenheim, Bretzenheim und die Altstadt. Ein Bankenvergleich kann hier über die Laufzeit Zehntausende Euro Unterschied machen."
      areaServed={["Mainz", "Mainz-Kastel", "Mainz-Kostheim", "Wiesbaden"]}
      faqItems={[
        {
          question: "Berät Dirk Heinrich auch Kunden in Mainz?",
          answer: "Ja, Mainz liegt direkt im Einzugsgebiet. Beratungen finden persönlich oder per Video statt.",
        },
        {
          question: "Was kostet eine Eigentumswohnung in Mainz aktuell?",
          answer: "Mainz liegt preislich auf ähnlichem Niveau wie Wiesbaden – zwischen 4.000 und 6.000 €/m². Gerade hier lohnt sich ein umfassender Bankenvergleich besonders.",
        },
      ]}
    />
  );
}
