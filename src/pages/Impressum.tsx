import { Layout } from "@/components/layout";

const Impressum = () => {
  return (
    <Layout>
      <section className="bg-ren-teal py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Impressum
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-ren-light">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <div className="bg-card rounded-xl card-shadow p-8 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">Angaben gemäß § 5 TMG</h2>
                <p className="text-ren-text-secondary">
                  REN – Gemeinsam helfen e.V.<br />
                  Musterstraße 123<br />
                  10115 Berlin
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">Vertreten durch</h2>
                <p className="text-ren-text-secondary">
                  Vorstand: Anna Schmidt, Thomas Müller
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">Kontakt</h2>
                <p className="text-ren-text-secondary">
                  Telefon: +49 (0) 30 12345678<br />
                  E-Mail: kontakt@ren-hilft.de
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">Registereintrag</h2>
                <p className="text-ren-text-secondary">
                  Eintragung im Vereinsregister.<br />
                  Registergericht: Amtsgericht Berlin-Charlottenburg<br />
                  Registernummer: VR 12345
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">Umsatzsteuer-ID</h2>
                <p className="text-ren-text-secondary">
                  Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                  DE 123456789
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p className="text-ren-text-secondary">
                  Anna Schmidt<br />
                  Musterstraße 123<br />
                  10115 Berlin
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-card-foreground mb-4">Streitschlichtung</h2>
                <p className="text-ren-text-secondary">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                <p className="text-ren-text-secondary mt-4">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
