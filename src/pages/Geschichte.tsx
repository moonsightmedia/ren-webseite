import { Layout } from "@/components/layout";
import { Heart, Sparkles, Target, Quote } from "lucide-react";

const Geschichte = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-ren-teal py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Geschichte
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Wie REN entstand & Über mich
            </h1>
            <p className="text-lg text-primary-foreground/70">
              REN ist mehr als eine Spendenplattform – wir sind eine Gemeinschaft von Menschen,
              die an direkte, transparente Hilfe glauben.
            </p>
          </div>
        </div>
      </section>

      {/* Teil 1: Über mich – Überschrift */}
      <section className="pt-16 pb-8 bg-ren-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground border-b border-ren-divider pb-3">
              Über mich
            </h2>
          </div>
        </div>
      </section>

      {/* Über den Gründer – zentriert, Name als Headline */}
      <section className="py-20 md:py-28 bg-ren-light">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-2">
              Lenny Enrico Menocal Rivera
            </h2>
            <p className="text-ren-text-secondary font-medium mb-8">
              20 Jahre · Ausbildung zum Automobilkaufmann · Nebenbei in der Pflege
            </p>
            <p className="text-ren-text-secondary leading-relaxed text-lg">
              Schon früh habe ich gelernt, Verantwortung zu übernehmen und für andere da zu sein – sowohl beruflich als auch privat.
            </p>
          </div>
        </div>
      </section>

      {/* Familie & Werte – Icon oben, Text zentriert, schmaler */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-6">
              Familie & Werte
            </h2>
            <p className="text-secondary-foreground/85 leading-relaxed text-lg">
              Ich habe fünf Geschwister und bin in einer Familie aufgewachsen, in der Nächstenliebe nicht nur ein Wort ist, sondern gelebt wird. Meine Eltern haben vier Kinder adoptiert. Von ihnen habe ich gelernt, dass Helfen keine Frage von Herkunft, Status oder Gegenleistung ist, sondern eine Frage des Herzens. Diese Werte prägen mich bis heute.
            </p>
          </div>
        </div>
      </section>

      {/* Freizeit & Persönlichkeit – zweispaltig: Text links, Icon/Stichworte rechts */}
      <section className="py-20 md:py-28 bg-ren-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                Freizeit & Persönlichkeit
              </h2>
              <p className="text-ren-text-secondary leading-relaxed text-lg">
                In meiner Freizeit spiele ich Volleyball, imkere, spiele Klavier oder verbringe Zeit mit Freunden. Ich würde mich selbst als lebensfroh, humorvoll und verständnisvoll beschreiben – als jemanden, der daran glaubt, dass Menschlichkeit im Alltag beginnt.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              <span className="px-4 py-2 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-200 text-sm font-medium">Volleyball</span>
              <span className="px-4 py-2 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-200 text-sm font-medium">Imkern</span>
              <span className="px-4 py-2 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-200 text-sm font-medium">Klavier</span>
              <span className="px-4 py-2 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-200 text-sm font-medium">Zeit mit Freunden</span>
              <div className="w-full flex justify-center md:justify-end mt-4">
                <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-amber-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teil 2: Wie REN entstand – Überschrift */}
      <section className="pt-16 pb-8 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground border-b border-ren-divider pb-3">
              Wie REN entstand
            </h2>
          </div>
        </div>
      </section>

      {/* Die Idee zu REN – großes Zitat, darunter Erklärung */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-8 text-center">
              Die Idee
            </h3>
            <blockquote className="text-xl md:text-2xl font-semibold text-card-foreground text-center leading-relaxed mb-10 px-4 md:px-8">
              „Wer entscheidet eigentlich, wer Hilfe verdient – und warum werden so viele Stimmen nicht gehört?“
            </blockquote>
            <p className="text-ren-text-secondary leading-relaxed text-lg max-w-2xl mx-auto text-center">
              Die Idee zu REN entstand aus dieser Frage. Ich habe mich gefragt, warum Menschen oft nur an sich denken, obwohl wir alle aufeinander angewiesen sind. Daraus entstand der Wunsch, einen Raum zu schaffen, in dem jeder gehört wird und Hilfe gemeinsam entschieden wird.
            </p>
          </div>
        </div>
      </section>

      {/* Meine Vision – Absätze als Stufen / mehrere Zeilen */}
      <section className="py-20 md:py-28 bg-ren-light pt-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">
                Meine Vision
              </h2>
            </div>
            <div className="space-y-6 text-ren-text-secondary leading-relaxed text-lg">
              <p>
                Meine Vision ist eine Gesellschaft, in der Menschen nicht erst helfen, wenn sie müssen – sondern weil sie es wollen.
              </p>
              <p>
                In der man automatisch hinschaut, wenn jemand Unterstützung braucht. In der man nicht nur an sich denkt, sondern andere so behandelt, wie man selbst behandelt werden möchte – oder wie jemanden, den man liebt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schluss – nur Zitat, groß und zentriert, minimal */}
      <section className="py-24 md:py-32 bg-ren-teal">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Quote className="w-10 h-10 text-accent/70 mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-medium text-primary-foreground leading-relaxed">
              Denn am Ende ist das größte Glück im Leben, geliebt zu werden.
            </p>
            <p className="text-xl md:text-2xl font-medium text-primary-foreground/90 mt-6">
              Und genau darauf baut REN auf.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Geschichte;
