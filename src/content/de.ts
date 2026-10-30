// Alle sichtbaren Texte der App an einer Stelle (STYLEGUIDE.md, Abschnitt 12). Nie Texte fest in Komponenten.
// Beim Bauen einer neuen App: Name, Beschreibung und Bereiche hier ersetzen.
export const de = {
  app: {
    name: "Verarbeiterportal",
    beschreibung: "Portal für Verarbeiter der Lumora Systeme AG (erfundene Firma, Testdaten).",
    navLabel: "Bereiche",
    testdaten: "Lumora Systeme AG ist erfunden, alle Daten sind Testdaten.",
  },
  nav: { uebersicht: "Übersicht", eintraege: "Aufträge" },
  uebersicht: {
    title: "Übersicht",
    lead: "Deine Aufträge bei Lumora: was in Fertigung ist, was diese Woche kommt.",
    neu: "Neue Bestellung",
    kennzahlen: "Auf einen Blick",
    offen: "Bestätigt",
    inArbeit: "In Fertigung",
    erledigt: "Geliefert diesen Monat",
    testdaten: "Testdaten",
    zuletzt: "Zuletzt geändert",
    alle: "Alle Aufträge",
  },
  eintraege: {
    title: "Aufträge",
    lead: "Alle Aufträge mit Liefertermin. Fragen zum Auftrag beantwortet dein Innendienst.",
    filter: "Status",
    leerTitel: "Noch keine Aufträge",
    leerText: "Sobald du bestellst, erscheint der Auftrag hier.",
    status: { offen: "Bestätigt", arbeit: "In Fertigung", erledigt: "Geliefert" },
    alle: "Alle",
  },
} as const;
