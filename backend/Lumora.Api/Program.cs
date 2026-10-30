// API der App (Zielbild: ECS Fargate auf AWS). Läuft in der Live-Vorschau nicht mit;
// das Frontend nutzt dort die Testdaten aus src/lib/demo-daten.ts. Felder wie dort.
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var eintraege = new List<Eintrag>
{
    new("A-204871", "A-204871 · Lumora 70, 14 Fenster", "Objekt Schulstraße 4 · Liefertermin KW 46", "arbeit", "2026-10-29"),
    new("A-204902", "A-204902 · Hebeschiebe, 2 Elemente", "Objekt Am Hang 12 · Liefertermin KW 47", "offen", "2026-10-28"),
};

app.MapGet("/api/gesund", () => Results.Ok(new { ok = true }));
app.MapGet("/api/eintraege", () => eintraege);
app.MapGet("/api/eintraege/{id}", (string id) => eintraege.FirstOrDefault(e => e.Id == id) is { } e ? Results.Ok(e) : Results.NotFound());

app.Run();

record Eintrag(string Id, string Titel, string Beschreibung, string Status, string Geaendert);
