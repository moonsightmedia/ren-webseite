import { Layout } from "@/components/layout";

const AGB = () => {
  return (
    <Layout>
      <section className="bg-ren-dark py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Allgemeine Geschäftsbedingungen
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-ren-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-xl card-shadow p-8 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">§1 Geltungsbereich</h2>
                <p className="text-ren-text-secondary">
                  Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der Plattform REN – Gemeinsam helfen 
                  sowie für alle über die Plattform abgewickelten Spendenvorgänge und Hilfsanträge.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">§2 Spenden</h2>
                <p className="text-ren-text-secondary mb-4">
                  Spenden über unsere Plattform sind freiwillige Zuwendungen ohne Gegenleistung. 
                  Mit Ihrer Spende unterstützen Sie die auf der Plattform vorgestellten Projekte 
                  und Hilfebedürftigen.
                </p>
                <p className="text-ren-text-secondary">
                  98% jeder Spende gehen direkt in Hilfsmaßnahmen. Maximal 2% werden für notwendige 
                  Verwaltungs- und Infrastrukturkosten verwendet.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">§3 Spendenquittungen</h2>
                <p className="text-ren-text-secondary">
                  Für Spenden ab 200€ erhalten Sie automatisch eine Spendenbescheinigung per E-Mail. 
                  Für Spenden unter 200€ genügt der Kontoauszug als Nachweis gegenüber dem Finanzamt.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">§4 Hilfsanträge</h2>
                <p className="text-ren-text-secondary mb-4">
                  Hilfsanträge können von jedermann gestellt werden. Die Prüfung und Freigabe von 
                  Hilfsanträgen erfolgt durch die REN-Community nach transparenten Kriterien.
                </p>
                <p className="text-ren-text-secondary">
                  Ein Rechtsanspruch auf Hilfe besteht nicht. Die Entscheidung über die Förderung 
                  liegt bei der Gemeinschaft.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">§5 Transparenz</h2>
                <p className="text-ren-text-secondary">
                  Wir verpflichten uns zu vollständiger Transparenz über die Verwendung aller Mittel. 
                  Spender können jederzeit nachvollziehen, wie ihre Spenden eingesetzt wurden.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">§6 Haftung</h2>
                <p className="text-ren-text-secondary">
                  REN übernimmt keine Gewähr für die Richtigkeit der von Antragstellern gemachten Angaben. 
                  Wir bemühen uns um sorgfältige Prüfung, können aber keine absolute Sicherheit garantieren.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">§7 Schlussbestimmungen</h2>
                <p className="text-ren-text-secondary">
                  Es gilt deutsches Recht. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, 
                  bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                </p>
              </div>

              <p className="text-sm text-ren-text-secondary pt-4 border-t border-ren-divider">
                Stand: Januar 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AGB;
