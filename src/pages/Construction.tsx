import { Button } from "../components/Button";
import { EnquiryForm } from "../components/EnquiryForm";
import { FinalCTA } from "../components/FinalCTA";
import { PageMeta } from "../lib/meta";
import { Reveal } from "../components/Reveal";
import { Gold, SectionHeading } from "../components/SectionHeading";
import { PageHero } from "../components/PageHero";
import { constructionProcess, constructionServices } from "../data/services";

export default function Construction() {
  PageMeta(
    "Construction",
    "Residential, commercial and turnkey construction — renovation, interior works and project management executed with discipline.",
  );

  return (
    <>
      <PageHero
        eyebrow="Service 02 — Construction"
        title={
          <>
            From Blueprint
            <br />
            <em className="italic text-gold-400">to Built Space.</em>
          </>
        }
        intro="Residential and commercial construction executed with structural discipline, finish quality and honest timelines — managed end to end."
        image="/assets/img/plan-6.jpg"
      />

      {/* Services */}
      <section className="bg-ink-900 py-14 lg:py-20" aria-label="Construction services">
        <div className="container-x">
          <SectionHeading
            eyebrow="Capabilities"
            title={
              <>
                Built With
                <br />
                <Gold>Discipline.</Gold>
              </>
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {constructionServices.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 100}>
                <div className="group hairline-y h-full bg-ink-850/60 p-9 transition-all duration-500 hover:bg-gold-500/[0.05]">
                  <span aria-hidden className="font-serif text-xl leading-none text-gold-600 transition-colors duration-300 group-hover:text-gold-400">
                    •
                  </span>
                  <h3 className="mt-5 font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-bone-50">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist/70">{s.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process chain */}
      <section className="blueprint-grid hairline-t bg-ink-950 py-14 lg:py-20" aria-label="Construction process">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="How It Runs"
            title={
              <>
                Consultation to Handover.
                <br />
                <Gold>Managed Throughout.</Gold>
              </>
            }
          />
          <ol className="mx-auto mt-10 flex max-w-5xl flex-wrap items-start justify-center gap-x-3 gap-y-6">
            {constructionProcess.map((step, i) => (
              <Reveal as="li" key={step} delay={i * 80} className="flex items-center">
                <div className="flex flex-col items-center text-center">
                  <span className="font-serif text-sm italic text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-2 border border-gold-600/30 bg-ink-900 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-bone-100/90 transition-colors duration-300 hover:border-gold-400 hover:text-gold-200">
                    {step}
                  </span>
                </div>
                {i < constructionProcess.length - 1 && (
                  <span aria-hidden className="mx-1 mt-6 hidden text-gold-600/70 sm:block">→</span>
                )}
              </Reveal>
            ))}
          </ol>
          <Reveal delay={140} className="mt-16 text-center">
            <Button to="/enquiry" variant="solid">Discuss Your Construction</Button>
          </Reveal>
        </div>
      </section>

      <section className="hairline-t bg-ink-900 py-14" aria-label="Enquire about construction">
        <div className="container-x max-w-4xl">
          <EnquiryForm />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
