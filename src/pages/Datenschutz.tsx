import { Layout } from "@/components/layout";

const Datenschutz = () => {
  return (
    <Layout>
      <section className="bg-ren-dark py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Datenschutzerklärung
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-ren-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-xl card-shadow p-8 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="font-semibold text-card-foreground mb-2">Allgemeine Hinweise</h3>
                <p className="text-ren-text-secondary mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                  Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, 
                  mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">2. Datenerfassung auf unserer Website</h2>
                <h3 className="font-semibold text-card-foreground mb-2">Wer ist verantwortlich für die Datenerfassung?</h3>
                <p className="text-ren-text-secondary mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                  Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
                <h3 className="font-semibold text-card-foreground mb-2">Wie erfassen wir Ihre Daten?</h3>
                <p className="text-ren-text-secondary mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                  Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">3. Ihre Rechte</h2>
                <p className="text-ren-text-secondary mb-4">
                  Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
                  Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, 
                  die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">4. Kontaktformular</h2>
                <p className="text-ren-text-secondary mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">5. Spendenvorgänge</h2>
                <p className="text-ren-text-secondary mb-4">
                  Bei Spendenvorgängen werden Ihre Zahlungsdaten sicher über unseren Zahlungsdienstleister 
                  verarbeitet. Wir speichern lediglich die für die Spendenquittung notwendigen Daten 
                  (Name, Adresse, Spendenhöhe, Datum).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">6. SSL-Verschlüsselung</h2>
                <p className="text-ren-text-secondary">
                  Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine verschlüsselte 
                  Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" 
                  wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;
