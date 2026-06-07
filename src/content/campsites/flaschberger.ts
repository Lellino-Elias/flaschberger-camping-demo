import type { CampsiteConfig } from "../types";

/**
 * Sport Camping Flaschberger — Obervellach bei Hermagor, Gailtal, Kärnten.
 * Alle Texte/Fakten belegt aus flaschberger.at (Stand-Scrape 2026-06):
 * Seiten /camping, /ferienwohnung, /freizeit, /cyber-sicherheit, /datenschutzerklaerung.
 * Bilder = ausschließlich eigene Flaschberger-Fotos in /public/campsites/flaschberger/
 * (jedes per Vision geprüft).
 *
 * EHRLICH:
 * - KEIN See am Platz → `see` wird WEGGELASSEN. Der Pressegger See liegt 3,5 km
 *   entfernt (Quelle: "zwischen Hermagor (2km) und dem Pressegger See (3,5km)").
 *   Wird daher NIE als "am See"/"direkt am See" geframt.
 * - PREISE: Auf den gescrapten Seiten steht KEIN €-Preis — alle Tarife liegen nur
 *   als verlinkte PDFs vor (Preise-2026.pdf, Winterpreise, fewopreisealle.pdf) und
 *   wurden NICHT erfasst. Daher pricesArePlaceholder = true + offene Disclosure.
 *   NUR die Preiszahlen sind Platzhalter; sonst nichts erfunden.
 * - Adresse: Quelle widersprüchlich. Das rechtlich maßgebliche Impressum (§5 TMG),
 *   die Datenschutz-"verantwortliche Stelle" UND der Footer JEDER Seite (inkl. der
 *   Cyber-Sicherheit-Seite selbst, alle mit demselben Google-Maps-Pin) nennen
 *   "Obervellach 53". Nur EIN Inline-Kontaktblock auf /cyber-sicherheit (und der
 *   Lead-Input) nennt "Obervellach 27". Verwendet wird daher die rechtlich
 *   maßgebliche Angabe "Obervellach 53"; Hausnummer vor Versand mit dem Betrieb
 *   bestätigen (27 vs. 53). In REPORT.md geflaggt.
 * - Keine Auszeichnung auf der Quelle → awards bleibt leer.
 */
const IMG = "/campsites/flaschberger";

export const flaschberger: CampsiteConfig = {
  name: "Sport Camping Flaschberger",
  shortName: "Flaschberger",
  slug: "flaschberger",
  ort: "Obervellach bei Hermagor",
  region: "Kärnten",
  brandKind: "Sport-Camping & Ferienwohnungen",
  // KEIN See am Platz → see bewusst weggelassen (Pressegger See ist 3,5 km entfernt).
  regionLong: "Gailtal · Nassfeld–Pressegger See · Kärnten · Österreich",

  claim: "Dein aktiver Campingurlaub im Kärntner Gailtal",
  claimEmphasis: "im Kärntner Gailtal",
  intro:
    "Sport-Camping, Tennishalle & Ferienwohnungen auf gepflegtem Rasengelände — zwischen Hermagor und dem warmen Pressegger See, mit Blick auf die Karnischen Alpen und das Nassfeld.",

  logo: { src: `${IMG}/logo-flaschberger.png`, alt: "Sport Camping Flaschberger Logo" },

  statement: {
    text: "Bei uns wird Urlaub zum aktiven Erlebnis — Tennis, Pool und Kegeln direkt am Platz, die Berge gleich vor der Tür.",
    emphasis: "aktiven Erlebnis",
  },

  pillars: [
    {
      title: "Tennishalle am Platz",
      text: "3 Tennisplätze direkt am Platz: 2 Hallenplätze und 1 Freiplatz, mit Tennisschule und Kursen für alle Altersgruppen.",
      image: { src: `${IMG}/tennishalle.webp`, alt: "Tennishalle mit Sandplatz am Sport Camping Flaschberger" },
    },
    {
      title: "Pool & Badespaß",
      text: "Eine eigene Poolanlage direkt am Campingplatz sorgt für Erfrischung an heißen Sommertagen.",
      image: { src: `${IMG}/pool-sprung.webp`, alt: "Kinder springen in die Poolanlage am Campingplatz Flaschberger" },
    },
    {
      title: "Blick auf die Karnischen Alpen",
      text: "Vom Platz aus ein herrlicher Blick auf die Karnischen Alpen und das Nassfeld — ideale Ausgangslage zum Wandern.",
      image: { src: `${IMG}/lage-alpen.webp`, alt: "Campingplatz Flaschberger mit Blick auf die Karnischen Alpen" },
    },
  ],

  usps: [
    "Tennishalle & Freiplatz am Platz",
    "Eigene Poolanlage",
    "Kegelcafé mit 2 Sportkegelbahnen",
    "Gratis Eintritt Pressegger See",
    "Wintercamping – 10 km zum Nassfeld",
    "Haustiere willkommen",
  ],

  trust: {
    heading: "Worauf du dich bei Flaschberger verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Bernhard Flaschberger: familienfreundliche Angebote, Sport direkt am Platz und eine ruhige Lage im Gailtal — zwischen Hermagor und dem warmen Pressegger See.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer.
  awards: [],

  // Sommer- wie Wintercamping wird ausdrücklich angeboten (Winter-/Sommerpreise, Wintercamping zum Nassfeld).
  saison: { von: "Sommer", bis: "Winter" },

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme.webp`, alt: "Luftaufnahme: Sport Camping Flaschberger mit Pool vor den Karnischen Alpen" },
  },

  camping: {
    heading: "Camping im Gailtal",
    intro:
      "Ein ebenes, sehr gepflegtes Rasengelände, gärtnerisch gestaltet und ruhig zwischen Hermagor und dem Pressegger See gelegen — Natur, Berge und Sport direkt vor der Tür.",
    features: [
      {
        title: "Rasen-Stellplätze mit Strom",
        text: "Rund 100 ebene Rasen-Stellplätze von 80 bis 120 m², alle mit Stromversorgung — viele individuell angelegt.",
        image: { src: `${IMG}/stellplaetze.webp`, alt: "Ebene Rasen-Stellplätze mit Wohnwagen und Zelten am Camping Flaschberger" },
      },
      {
        title: "Gepflegtes Gartengelände",
        text: "Ein ebenes, sehr gepflegtes Rasengelände, das durch Bepflanzungen gärtnerisch gestaltet wurde.",
        image: { src: `${IMG}/camping-gelaende.webp`, alt: "Gepflegtes, begrüntes Campinggelände am Sport Camping Flaschberger" },
      },
      {
        title: "Zentrale Lage im Gailtal",
        text: "Zwischen Hermagor (2 km) und dem Pressegger See (3,5 km) — im südlichsten Längstal Österreichs, dem Gailtal.",
        image: { src: `${IMG}/luftaufnahme-pool.webp`, alt: "Luftaufnahme des Campingplatzes Flaschberger mit Pool und Ferienwohnungen" },
      },
      {
        title: "Eigene Poolanlage",
        text: "Die Poolanlage am Platz lädt zum Schwimmen und Abkühlen ein — Badespaß ohne weite Wege.",
        image: { src: `${IMG}/poolanlage.webp`, alt: "Poolanlage am Sport Camping Flaschberger von oben" },
      },
    ],
  },

  mobilheime: {
    heading: "Ferienwohnungen",
    intro:
      "Lieber feste Wände? 6 gemütliche Ferienwohnungen von 36 bis 60 m² für bis zu 5 Personen — ein Urlaubszuhause im Sommer wie Winter, nur 3,5 km vom Pressegger See. Sportgeräte finden im hauseigenen Skistall Platz.",
    items: [
      {
        name: "Ferienwohnung Groß · 60 m²",
        kind: "Ferienwohnung · 1. Stock",
        text: "Wohn-/Schlafraum für 3 Personen (ausziehbare Doppelcouch + Einzelcouch) und ein darüberliegender Schlafraum für 2 Personen. Vom Balkon im Sommer Blick auf die Karnischen Alpen, im Winter aufs Nassfeld.",
        image: { src: `${IMG}/fewo-gross-wohnraum.webp`, alt: "Wohnraum der großen Ferienwohnung mit Galerie-Schlafraum am Flaschberger" },
        priceFrom: 110,
        features: ["bis 5 Personen", "ca. 60 m²", "Balkon · Kochecke · SAT-TV"],
      },
      {
        name: "Ferienwohnung Klein · 36 m²",
        kind: "Ferienwohnung",
        text: "Wohn-/Schlafraum für 1–2 Personen und ein durch Schiebetür getrennter Schlafraum für 2 Personen. Anliegend eine Terrasse mit vorgelagerter Wiese.",
        image: { src: `${IMG}/fewo-klein.webp`, alt: "Gemütliche kleine Ferienwohnung mit Terrassenzugang am Flaschberger" },
        priceFrom: 85,
        features: ["bis 4 Personen", "ca. 36 m²", "Terrasse · Kochecke · SAT-TV"],
      },
    ],
  },

  kinder: {
    heading: "Für die ganze Familie",
    intro:
      "Familienfreundlich von A bis Z: ein Kinderspielplatz am Platz, die Poolanlage zum Plantschen und viel Raum zum Spielen — hier wird Urlaub zur Familiensache.",
    features: [
      {
        title: "Kinderspielplatz",
        text: "Ein Spielplatz direkt am Platz mit Klettergerüst — toben und spielen vor der Bergkulisse.",
        image: { src: `${IMG}/spielplatz.webp`, alt: "Kinderspielplatz mit Klettergerüst am Camping Flaschberger" },
      },
      {
        title: "Rutsche & Spielspaß",
        text: "Rutsche, Schaukel und Klettern: der Spielplatz lässt bei den Kleinen keine Langeweile aufkommen.",
        image: { src: `${IMG}/spielplatz-rutsche.webp`, alt: "Kind auf der Rutsche am Spielplatz des Camping Flaschberger" },
      },
      {
        title: "Plantschen im Pool",
        text: "Die Poolanlage ist auch für die Kleinen ein Highlight — Wasserspaß für die ganze Familie.",
        image: { src: `${IMG}/pool-familie.webp`, alt: "Mutter und Kind beim Plantschen in der Poolanlage am Flaschberger" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Sport & Freizeit",
    intro:
      "Tennishalle, Kegelcafé und Pool direkt am Platz — dazu Pressegger See, Nassfeld und das ganze Gailtal vor der Tür. Im Sommer Schwimmen, Biken, Stand-up-Paddeln und Wandern, im Winter Skifahren, Eislaufen und Langlaufen.",
    items: [
      {
        title: "Tennis – Halle & Freiplatz",
        text: "2 Hallenplätze und 1 Freiplatz mit Tennisschule und Kursen für alle Altersgruppen — Sonderpreise für unsere Gäste.",
        image: { src: `${IMG}/tennis-freiplatz.webp`, alt: "Tennis-Freiplatz vor Bergkulisse am Sport Camping Flaschberger" },
      },
      {
        title: "Stand-up-Paddeln am See",
        text: "Der warme Pressegger See – einer der wärmsten Badeseen Kärntens (bis 28 °C) – liegt nur 3,5 km entfernt.",
        image: { src: `${IMG}/standup-paddeln.webp`, alt: "Stand-up-Paddeln auf dem Pressegger See" },
      },
      {
        title: "Biken im Gailtal",
        text: "Vom Platz aus rein ins Gailtal: Radtouren und Mountainbike-Strecken durch Wiesen, Wald und Berge.",
        image: { src: `${IMG}/biken-gailtal.webp`, alt: "Radfahrer im Gailtal vor den Karnischen Alpen" },
      },
      {
        title: "Kegelcafé",
        text: "Unser Kegelcafé mit 2 Sportkegelbahnen, Tischfußball und Dartautomat sorgt für gesellige Abende — Sonderpreise für Gäste.",
        image: { src: `${IMG}/kegelbahn.webp`, alt: "Sportkegelbahn im Kegelcafé am Camping Flaschberger" },
      },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Im Kärntner Gailtal gelegen — 2 km von Hermagor und 3,5 km vom Pressegger See. Adresse: Obervellach 53, 9620 Hermagor.",
      },
      {
        title: "Aufs Nassfeld",
        text: "Nur 10 km bis zur Talstation des Millennium-Express in Tröpolach — bequem aufs Nassfeld, Kärntens größtes Skigebiet, zu jeder Jahreszeit.",
      },
      {
        title: "Lage & Natur",
        text: "Südlichstes Längstal Österreichs mit Blick auf die Karnischen Alpen — herrliche Möglichkeiten zum Wandern direkt vor der Tür.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Platz",
    headingEmphasis: "Platz",
    intro:
      "Gepflegtes Rasengelände, Pool, Tennishalle und gemütliche Ferienwohnungen — ein paar Eindrücke vom Sport Camping Flaschberger im Gailtal.",
    tag: "Sommer & Winter",
    images: [
      { src: `${IMG}/luftaufnahme-platz.webp`, alt: "Luftaufnahme des gesamten Campingplatzes Flaschberger mit Tennisplatz und Pool" },
      { src: `${IMG}/biken-platz.webp`, alt: "Radfahrer am Campingplatz Flaschberger" },
      { src: `${IMG}/fewo-schlafzimmer.webp`, alt: "Schlafzimmer einer Ferienwohnung am Flaschberger" },
      { src: `${IMG}/fewo-bad.webp`, alt: "Modernes Badezimmer einer Ferienwohnung am Flaschberger" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum, Unterkunft und Personen — Bernhard Flaschberger meldet sich mit deiner persönlichen Verfügbarkeit.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — die tatsächlichen Tarife liegen auf der Website nur als PDF vor und wurden nicht erfasst; diese Werte sind realistische Platzhalter (bitte mit dem Betrieb bestätigen).",
    highlight: {
      title: "Gratis Eintritt Pressegger See",
      text: "Als unser Gast badest du gratis im warmen Pressegger See — einem der wärmsten Badeseen Kärntens (bis 28 °C), nur 3,5 km entfernt.",
    },
    categories: [
      // PLATZHALTER-Preise (keine Preise auf den gescrapten Seiten – nur PDF-Links). Mit Betrieb bestätigen.
      { id: "stellplatz", label: "Stellplatz", perNight: 32, perExtraGuest: 9 },
      { id: "ferienwohnung-klein", label: "Ferienwohnung 36 m²", perNight: 85 },
      { id: "ferienwohnung-gross", label: "Ferienwohnung 60 m²", perNight: 110 },
    ],
  },

  kontakt: {
    coords: { lat: 46.631779, lng: 13.396424 },
    tel: "+43 4282 2020",
    telHref: "tel:+4342822020",
    mail: "office@flaschberger.at",
    facebook: "https://www.facebook.com/profile.php?id=100041431395911",
    adresse: "Obervellach 53 · 9620 Hermagor · Kärnten",
    // Keine expliziten Koordinaten in der Quelle → coords weggelassen (Karte aus, Adresse sichtbar).
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Gelände & Lage", href: "#camping" },
        { label: "Poolanlage", href: "#camping" },
      ],
    },
    {
      label: "Ferienwohnungen",
      href: "#mobilheime",
      children: [
        { label: "Ferienwohnung Groß", href: "#mobilheime" },
        { label: "Ferienwohnung Klein", href: "#mobilheime" },
        { label: "Ausstattung", href: "#mobilheime" },
      ],
    },
    {
      label: "Sport & Freizeit",
      href: "#aktivitaeten",
      children: [
        { label: "Tennis", href: "#aktivitaeten" },
        { label: "Kegelcafé", href: "#aktivitaeten" },
        { label: "See & Biken", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Spielplatz", href: "#kinder" },
        { label: "Pool", href: "#kinder" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default flaschberger;
