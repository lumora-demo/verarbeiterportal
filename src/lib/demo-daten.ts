// Testdaten der erfundenen Lumora Systeme AG. Keine echten Firmen, Personen oder Zahlen.
export type Status = "offen" | "arbeit" | "erledigt";

export interface Eintrag {
  id: string;
  titel: string;
  beschreibung: string;
  status: Status;
  geaendert: string;
}

export const EINTRAEGE: Eintrag[] = [
  { id: "A-204871", titel: "A-204871 · Lumora 70, 14 Fenster", beschreibung: "Objekt Schulstraße 4 · Liefertermin KW 46", status: "arbeit", geaendert: "2026-10-29" },
  { id: "A-204902", titel: "A-204902 · Hebeschiebe, 2 Elemente", beschreibung: "Objekt Am Hang 12 · Liefertermin KW 47", status: "offen", geaendert: "2026-10-28" },
  { id: "A-205017", titel: "A-205017 · Lumora 82 Plus, 6 Fenster", beschreibung: "Objekt Lindenweg 3 · Liefertermin KW 45", status: "arbeit", geaendert: "2026-10-27" },
  { id: "A-203655", titel: "A-203655 · Türen T60, 3 Elemente", beschreibung: "Objekt Marktplatz 1 · geliefert am 21.10.", status: "erledigt", geaendert: "2026-10-21" },
];
