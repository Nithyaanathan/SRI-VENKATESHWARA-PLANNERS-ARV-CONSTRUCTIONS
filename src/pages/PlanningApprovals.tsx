import { Button } from "../components/Button";
import { EnquiryForm } from "../components/EnquiryForm";
import { FinalCTA } from "../components/FinalCTA";
import { PageMeta } from "../lib/meta";
import { Reveal } from "../components/Reveal";
import { Gold, SectionHeading } from "../components/SectionHeading";
import { PageHero } from "../components/PageHero";
import { planningProcess, planningServiceGroups, planningServices } from "../data/services";

export default function PlanningApprovals() {
  PageMeta(
    "Planning & Approvals",
    "Building plan preparation, architectural planning, documentation and approval assistance — guided professionally from consultation to execution.",
  );

  return (
    <>
      <PageHero
        eyebrow="Service 01 — Planning & Approvals"
        title={
          <>
            From Planning to Approval,
            <br />
            <em className="italic text-gold-400">We Handle the Process.</em>
          </>
        }
        intro="Careful plans. Complete documentation. Guided approvals. We support you through every statutory step of getting a building from paper to permission."
        image="/assets/img/plan-3.jpg"
      />

      {/* Services list — editorial two-column */}
      <section className="bg-ink-900 py-14 lg:py-20" aria-label="Planning services">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Cover"
            title={
              <>
                Every Document.
                <br />
                <Gold>Every Detail.</Gold>
              </>
            }
            intro="We provide planning, documentation and coordination support. Approval decisions rest with the respective authorities; our role is to prepare and guide — accurately and completely."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {planningServiceGroups.map((group, i) => (
              <Reveal key={group.id} delay={(i % 2) * 90}>
                <div className="group h-full border border-gold-600/15 bg-ink-850/55 p-6 transition-colors duration-400 hover:border-gold-600/35 sm:p-7">
                  <div className="flex items-start gap-5">
                    <div>
                      <h3 className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-bone-50 transition-colors duration-300 group-hover:text-gold-200">
                        {group.title}
                      </h3>
                      <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-mist/70">
                        {group.numbers.map((number) => (
                          <li key={number} className="flex items-baseline gap-2">
                            <span aria-hidden className="shrink-0 text-gold-500/80">
                              •
                            </span>
                            <span>{planningServices[number - 1].title}</span>
                          </li>
                        ))}
                      </ul>
                      {"blurb" in group && group.blurb && <p className="mt-3 text-sm leading-relaxed text-gold-200/80">{group.blurb}</p>}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t bg-ink-950 py-14 lg:py-20" aria-label="Site photographs">
        <div className="container-x">
          <SectionHeading eyebrow="Site Work" title={<>Plans on Paper.<br /><Gold>Progress on Site.</Gold></>} />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {["/assets/img/plan-3.jpg", "/assets/img/plan-6.jpg", "/assets/img/plan-7_5.jpg"].map((src) => (
              <div key={src} className="img-zoom-wrap overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src={src} alt="Construction site progress" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="blueprint-grid hairline-t bg-ink-950 py-14 lg:py-20" aria-label="Our planning process">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="The Process"
            title={
              <>
                Six Steps.
                <br />
                <Gold>Zero Guesswork.</Gold>
              </>
            }
          />
          <ol className="mx-auto mt-10 grid max-w-4xl gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {planningProcess.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 90} className="relative px-2 lg:px-6">
                <span aria-hidden className="gold-rule absolute left-0 top-7 hidden w-full opacity-60 lg:block" />
                <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center border border-gold-600/40 bg-ink-900 font-serif text-lg italic text-gold-400">
                  {p.step}
                </span>
                <h3 className="mt-6 font-sans text-[12px] font-bold uppercase tracking-[0.22em] text-bone-50">{p.title}</h3>
                <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-mist/70">{p.desc}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={140} className="mt-16 text-center">
            <Button to="/enquiry" variant="solid">Start With a Consultation</Button>
          </Reveal>
        </div>
      </section>

      {/* Note + enquiry */}
      <section className="hairline-t bg-ink-900 py-14" aria-label="Enquire about planning">
        <div className="container-x max-w-4xl">
          <Reveal variant="fade">
            <p className="mb-6 border border-gold-600/25 bg-gold-500/[0.05] px-6 py-5 text-xs leading-relaxed text-mist/75">
              <strong className="font-bold uppercase tracking-wider text-gold-400">Please note:</strong>{" "}
              We provide approval assistance, guidance, documentation support and coordination. Government
              licenses and permits are issued solely by the concerned authorities.
            </p>
          </Reveal>
          <EnquiryForm />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
