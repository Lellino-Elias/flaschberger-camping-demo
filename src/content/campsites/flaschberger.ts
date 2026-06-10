import type { CampsiteConfig } from "../types";

/**
 * Sport Camping Flaschberger — Obervellach bei Hermagor, Gailtal/Kärnten.
 * Inhalte 100 % aus raw/digest abgeleitet. Preise = echte Quellpreise aus den
 * Tarif-PDFs (raw/digest/prices.md): Stellplatz-Pauschale 2 Erw. €33 (Neben-) bis
 * €44,80 (Hauptsaison) inkl. aller Abgaben, +€7/Pers. >14 J.; FeWo 60 m² €65–85,
 * FeWo 36 m² €55–69 (jeweils 2 Pers./Nacht). booking.perNight = Hochsaison-Richtwert,
 * Saison-Spannen offengelegt in priceNote. See bewusst OMITTED: der Platz liegt
 * 3,5 km vom Pressegger See entfernt (nicht direkt am Wasser).
 */
const IMG = "/campsites/flaschberger";

const flaschberger: CampsiteConfig = {
  name: "Sport Camping Flaschberger",
  shortName: "Flaschberger",
  slug: "flaschberger",
  ort: "Hermagor im Gailtal",
  region: "Kärnten",
  brandKind: "Camping & Ferienwohnungen",
  regionLong: "Nassfeld · Pressegger See · Kärnten",

  theme: "alpin",
  heroVariant: "left",

  claim: "Camping, Tennis & Bergblick im Gailtal",
  claimEmphasis: "Bergblick im Gailtal",
  intro:
    "Zwischen Hermagor und dem Pressegger See liegt unser familiärer Campingplatz: 100 ebene Rasen-Stellplätze, eigene Tennishalle, Freibad und Kegelcafé — und ringsum der Blick auf die Karnischen Alpen.",

  logo: { src: `${IMG}/logo.png`, alt: "Sport Camping Flaschberger Logo" },

  statement: {
    text: "Tennishalle, Kegelcafé und eigenes Freibad gehören bei uns direkt zum Platz.",
    emphasis: "direkt zum Platz",
  },

  pillars: [
    {
      title: "100 Rasen-Stellplätze",
      text: "Du hast die Wahl zwischen 100 gepflegten Rasen-Stellplätzen von 80 bis 120 m² — alle mit Stromanschluss.",
      image: { src: `${IMG}/gallery-3713f01d39.webp`, alt: "Rasen-Stellplatz mit Wohnwagen und Bergpanorama am Sport Camping Flaschberger" },
    },
    {
      title: "Eigene Tennishalle",
      text: "Zwei Hallenplätze, ein Freiplatz und eine Tennisschule mit Kursen für alle Altersgruppen — direkt am Platz.",
      image: { src: `${IMG}/activity-1aeebffb36.webp`, alt: "Tennishalle mit zwei Sandplätzen am Sport Camping Flaschberger" },
    },
    {
      title: "Sechs Ferienwohnungen",
      text: "Sechs gemütliche Ferienwohnungen für bis zu 5 Personen, von 36 bis 60 m² — im Sommer wie im Winter buchbar.",
      image: { src: `${IMG}/accommodation-dfa55f8efa.webp`, alt: "Helle Ferienwohnung mit Galerie-Treppe am Sport Camping Flaschberger" },
    },
  ],

  usps: [
    "100 Stellplätze mit Strom",
    "Tennishalle & -schule",
    "Eigenes Freibad",
    "Kegelcafé am Platz",
    "Haustiere willkommen",
    "Gratis an den Badesee",
  ],

  trust: {
    heading: "Was den Flaschberger besonders macht",
    headingEmphasis: "besonders",
    intro:
      "Seit Jahren in Familienhand und sportlich wie kaum ein anderer Platz: eigene Tennishalle, Kegelcafé und Freibad, dazu der wärmste Badesee Kärntens in der Nähe und ringsum die Karnischen Alpen.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-b99eddd350.webp`, alt: "Luftaufnahme: Sport Camping Flaschberger vor den Karnischen Alpen" },
  },

  breather: {
    image: { src: `${IMG}/gallery-ee2cabbafe.webp`, alt: "Sonniger Abend zwischen den Stellplätzen am Sport Camping Flaschberger" },
    line: "Natur hautnah — ein Ort zum Ankommen und Entspannen.",
  },

  camping: {
    heading: "Camping am Flaschberger",
    intro:
      "Vom ebenen Rasen-Stellplatz ist alles schnell erreichbar — Freibad, Tennishalle, Kegelcafé und der Spielplatz liegen direkt auf der Anlage.",
    features: [
      {
        title: "100 Rasen-Stellplätze",
        text: "100 gepflegte Rasenplätze von 80 bis 120 m², jeder mit eigenem Stromanschluss — gärtnerisch gestaltet und eben.",
        image: { src: `${IMG}/gallery-6c28f064cc.webp`, alt: "Ebene Rasen-Stellplätze mit Wohnwagen am Sport Camping Flaschberger" },
      },
      {
        title: "Eigenes Freibad",
        text: "Das eigene Schwimmbad liegt mitten auf der Anlage — abkühlen mit Blick auf die Berge, ganz ohne Anfahrt.",
        image: { src: `${IMG}/amenity-b902f7d421.webp`, alt: "Freibad des Sport Camping Flaschberger von oben" },
      },
      {
        title: "Drei Tennisplätze",
        text: "Zwei Hallen- und ein Freiplatz, dazu Tennisschule und Kurse — mit Sonderpreisen für unsere Campinggäste.",
        image: { src: `${IMG}/activity-6901d3126a.webp`, alt: "Tennis-Freiplatz am Sport Camping Flaschberger aus der Luft" },
      },
      {
        title: "Kegelcafé",
        text: "Unser Kegelcafé mit zwei Sportkegelbahnen, Tischfußball und Dartautomat sorgt für gesellige Abende.",
        image: { src: `${IMG}/gallery-46be95bac1.webp`, alt: "Sportkegelbahn im Kegelcafé des Sport Camping Flaschberger" },
      },
      {
        title: "Haustiere willkommen",
        text: "Dein Vierbeiner ist herzlich willkommen — wir heißen jedes Haustier auf dem Platz willkommen.",
        image: { src: `${IMG}/gallery-8014af1f76.webp`, alt: "Familie mit Hund am Stellplatz des Sport Camping Flaschberger" },
      },
      {
        title: "Radtouren ab Platz",
        text: "Vom Platz starten Touren durchs Gailtal und ans Nassfeld — flache Talwege und alpine Anstiege inklusive.",
        image: { src: `${IMG}/activity-7672c8b1f4.webp`, alt: "Radfahrer zwischen den Stellplätzen am Sport Camping Flaschberger" },
      },
    ],
  },

  mobilheime: {
    heading: "Unsere Ferienwohnungen",
    intro:
      "Sechs Ferienapartments für bis zu 5 Personen, ausgestattet mit Kochecke, SAT-TV und Internet — und einem Skistall direkt im Haus.",
    items: [
      {
        name: "Ferienwohnung 60 m²",
        kind: "Bis 5 Personen · 1. Stock",
        text: "60 m² mit Wohn-/Schlafraum und separatem Schlafzimmer über Schiebetür, dazu Balkon mit Blick auf die Karnischen Alpen.",
        image: { src: `${IMG}/accommodation-18533c9e6c.webp`, alt: "Wohnraum der 60-m²-Ferienwohnung mit Galerie-Treppe am Sport Camping Flaschberger" },
        features: ["60 m² Wohnfläche", "Balkon mit Bergblick", "Kochecke & SAT-TV", "Bis 5 Personen"],
      },
      {
        name: "Ferienapartment 36 m²",
        kind: "1–4 Personen · Terrasse",
        text: "36 m² kompakt geschnitten mit Wohn-/Schlafraum und zweitem Schlafzimmer, davor eine Terrasse mit vorgelagerter Wiese.",
        image: { src: `${IMG}/accommodation-c7546e166e.webp`, alt: "Wohnraum des 36-m²-Ferienapartments mit Terrassenzugang am Sport Camping Flaschberger" },
        features: ["36 m² Wohnfläche", "Terrasse mit Wiese", "Kochecke & Bad", "Skistall im Haus"],
      },
    ],
  },

  kinder: {
    heading: "Für die Kleinen",
    intro:
      "Unser Schwimmbad, ein Kinderspielplatz und der nahe Badesee — bei uns sind die Kleinen den ganzen Tag in Bewegung.",
    features: [
      {
        title: "Kinderspielplatz",
        text: "Klettergerüst, Rutsche und Hangelnetze auf unserem Kinderspielplatz — Toben mit Bergpanorama im Rücken.",
        image: { src: `${IMG}/kids-9479b91053.webp`, alt: "Kind am Klettergerüst des Spielplatzes am Sport Camping Flaschberger" },
      },
      {
        title: "Badespaß im Pool",
        text: "Unser Schwimmbad liegt mitten auf dem Platz — Badespaß mit Bergblick, gleich vor der Wohnung.",
        image: { src: `${IMG}/amenity-2dbc90e5a1.webp`, alt: "Kind und Mutter beim Baden im Pool des Sport Camping Flaschberger" },
      },
      {
        title: "Stand-up-Paddeln",
        text: "Stand-up-Paddeln am nahen Pressegger See, dem wärmsten Badesee Kärntens mit bis zu 28 Grad Wassertemperatur.",
        image: { src: `${IMG}/activity-1298f7b25d.webp`, alt: "Stand-up-Paddeln auf dem Pressegger See vor Bergkulisse" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Deine Freizeit am Nassfeld",
    intro:
      "Die Region Nassfeld–Pressegger See liegt vor der Tür: Biken, Tennis, Baden und Wandern in den Karnischen Alpen.",
    items: [
      {
        title: "Biken im Gailtal",
        text: "Naturreiche Berg- und Taltouren starten direkt am Platz — vom flachen Gailtal-Radweg bis zur Nassfeld-Auffahrt.",
        image: { src: `${IMG}/activity-28b008f3a7.webp`, alt: "Radfahrer auf einer Gailtal-Route vor den Karnischen Alpen" },
      },
      {
        title: "Tennis mit Alpenblick",
        text: "Auf dem Freiplatz spielst du mit Blick auf die Karnischen Alpen, bei Regen geht es in die Tennishalle.",
        image: { src: `${IMG}/activity-8d33c3ebe6.webp`, alt: "Tennisspielerin auf dem Freiplatz vor Bergkulisse am Sport Camping Flaschberger" },
      },
      {
        title: "Baden & Paddeln am See",
        text: "Der Pressegger See, einer der wärmsten Badeseen Österreichs, lädt zu Stand-up-Paddeln und langen Badetagen.",
        image: { src: `${IMG}/activity-47521e3da2.webp`, alt: "Stand-up-Paddeln auf dem Pressegger See vor Bergkulisse" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Gailtal",
    modes: [
      { title: "Mit dem Auto", text: "Über die A2 oder A10 bis Villach, dann auf der Gailtal Straße (B111) nach Hermagor und weiter nach Obervellach." },
      { title: "Mit der Bahn", text: "Der Bahnhof Hermagor an der Gailtalbahn liegt rund 2 km entfernt — Taxi oder Abholung nach Absprache." },
      { title: "Mit dem Flugzeug", text: "Flughafen Klagenfurt rund 70 km, Flughafen Salzburg etwa zweieinhalb Stunden Fahrt." },
    ],
  },

  galerie: {
    heading: "Sommer & Sport am Flaschberger",
    headingEmphasis: "Sport",
    intro: "Sport, Berge und gesellige Abende — ein paar Eindrücke vom Sport Camping Flaschberger im Gailtal.",
    tag: "Ganzjährig geöffnet",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-445f34b059.webp`, alt: "Tennisplatz und Pool des Sport Camping Flaschberger aus der Vogelperspektive" },
      { src: `${IMG}/gallery-9efb11ee8d.webp`, alt: "Gemütliche Ferienwohnung mit Wohngalerie am Sport Camping Flaschberger" },
      { src: `${IMG}/gallery-0ef0d5251d.webp`, alt: "Abend im Kegelcafé des Sport Camping Flaschberger" },
      { src: `${IMG}/kids-d776fb8c20.webp`, alt: "Kinder am Spielplatz des Sport Camping Flaschberger" },
    ],
  },

  booking: {
    heading: "Bereit für deinen Aktivurlaub im Gailtal?",
    headingEmphasis: "Aktivurlaub im Gailtal",
    intro: "Wähle Zeitraum und Personen — Familie Flaschberger meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote: "Saisonpreise laut Tarifliste: Stellplatz-Pauschale 2 Erw. mit Strom €33 (Neben-) bis €44,80 (Hauptsaison) inkl. aller Abgaben, +€7/Pers. ab 14 J. · Ferienwohnung 60 m² €65–85, Apartment 36 m² €55–69 (je 2 Pers./Nacht). Angezeigt sind Hochsaison-Richtwerte — die vollständigen Saisontarife bestätigen wir vor Buchung.",
    highlight: { title: "Sport inklusive", text: "Tennishalle, Kegelcafé und Freibad direkt am Platz — mit Sonderpreisen für Gäste." },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 33, perExtraGuest: 7 },
      { id: "fewo60", label: "Ferienwohnung 60 m²", perNight: 85 },
      { id: "fewo36", label: "Ferienapartment 36 m²", perNight: 69 },
    ],
  },

  kontakt: {
    coords: { lat: 46.631779, lng: 13.396424 },
    tel: "+43 4282 2020",
    telHref: "tel:+4342822020",
    mail: "office@flaschberger.at",
    facebook: "https://www.facebook.com/profile.php?id=100041431395911",
    adresse: "Obervellach 53 · 9620 Hermagor · Kärnten",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Ferienwohnungen", href: "#mobilheime" },
    { label: "Aktiv & Familie", href: "#aktivitaeten", children: [
      { label: "Aktivitäten", href: "#aktivitaeten" },
      { label: "Für Kinder", href: "#kinder" },
    ]},
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default flaschberger;
