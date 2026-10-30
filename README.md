# Verarbeiterportal

> Demo: Die Lumora Systeme AG ist erfunden. Alle Namen, Daten und Zahlen sind Testdaten.

Portal für Verarbeiter (Metall- und Fensterbauer): Aufträge, Liefertermine, Dokumente. Gebaut im Lumora Design-System.

| | |
|---|---|
| **Set** | Digitale Produkte |
| **Betreut von** | Team Portal & Vertrieb |
| **Genutzt von** | Verarbeiter, Vertrieb & Marketing |
| **Technik** | Next.js + TypeScript (`src/`) · API C# .NET 8 (`backend/`) |
| **Betrieb (Zielbild)** | AWS Frankfurt: CloudFront + S3, ECS Fargate, RDS Postgres, Kundenkonto (Cognito) |
| **Schnittstellen** | SAP S/4HANA (OData: Aufträge, Lieferungen), Dokumentenablage |

Regeln für Änderungen: [CLAUDE.md](CLAUDE.md) · Aussehen: [STYLEGUIDE.md](STYLEGUIDE.md)

## Lokal starten

```
npm install
npm run dev
```
