import { Button } from "../components/Button";
import { EnquiryForm } from "../components/EnquiryForm";
import { PageMeta } from "../lib/meta";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { jvProcess, jvWhy } from "../data/services";

/**
 * Joint Ventures page — deliberately distinct:
 * warm bone canvas, landowner-focused narrative,
 * cinematic flow diagram.
 */
export default function JointVentures() {
  PageMeta(
    "Joint Ventures",
    "Joint venture development opportunities for landowners — planning expertise, approval assistance, construction capability and end-to-end coordination.",
  );

  return (
    <>
      {/* Hero — light editorial */}
      <section className="relative overflow-hidden bg-gold-500 pt-32 pb-16 text-ink-900 lg:pt-40 lg:pb-20">
        <svg aria-hidden className="pointer-events-none absolute -left-20 bottom-0 h-[480px] w-[480px] opacity-[0.06]" viewBox="0 0 200 200" fill="none">
          <rect x="40" y="50" width="55" height="120" stroke="#0c0c0e" />
          <rect x="105" y="25" width="60" height="145" stroke="#0c0c0e" />
          <path d="M40 85h125M40 120h125M67 50v120M135 25v145" stroke="#0c0c0e" />
        </svg>
        <div className="container-x relative">
          <Reveal variant="fade">
            <div className="flex items-center gap-4">
              <span aria-hidden className="h-px w-12 bg-gold-700" />
              <p className="eyebrow !text-gold-700">Joint Ventures</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="display-1 mt-7 max-w-3xl text-[clamp(2.6rem,6vw,5rem)] text-ink-900">
              Have Land?
              <br />
              Let’s Build Something
              <br />
                <em className="italic text-ink-900">Valuable Together.</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-[15px] leading-[1.9] text-ink-700/85">
              We collaborate with landowners through Joint Venture opportunities to transform suitable
              properties into well-planned developments. Your land. Our expertise. Shared value.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why partner */}
      <section className="bg-gold-200 py-14 lg:py-20" aria-label="Why partner with us">
        <div className="container-x">
          <SectionHeading dark eyebrow="The Partnership" title={<>Why Partner With Us?</>} />
          <div className="mt-10 grid gap-x-14 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {jvWhy.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 90}>
                <div className="group border-t-2 border-ink-900/10 py-8 pr-4 transition-colors duration-400 hover:border-gold-500">
                  <span aria-hidden className="font-serif text-lg leading-none text-gold-600">•</span>
                  <h3 className="mt-3 font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-ink-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/75">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic JV flow */}
      <section className="relative overflow-hidden bg-ink-950 py-14 lg:py-20" aria-label="JV process">
        <img src="/assets/img/dusk-5.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />
        <div className="container-x relative">
          <SectionHeading
            align="center"
            eyebrow="From Land to Landmark"
            title={
              <>
                The Journey of a
                <br />
                <em className="italic text-gold-400">Joint Venture.</em>
              </>
            }
          />
          <ol className="mx-auto mt-10 flex max-w-5xl flex-col items-stretch gap-0 md:flex-row md:items-center md:justify-between md:gap-2">
            {jvProcess.map((step, i) => (
              <Reveal as="li" key={step} delay={i * 90} className="flex flex-col items-center">
                <span
                  className={`flex h-full w-full flex-col items-center justify-center border px-6 py-6 text-center transition-colors duration-500 md:h-32 md:w-32 md:border ${
                    i === 0 || i === jvProcess.length - 1
                      ? "border-gold-500/70 bg-gold-500/[0.08]"
                      : "border-gold-600/25 bg-ink-900/70"
                  }`}
                >
                  <span className="font-serif text-base italic text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-2 text-[10px] font-bold uppercase leading-relaxed tracking-[0.16em] text-bone-100/90">
                    {step}
                  </span>
                </span>
                {i < jvProcess.length - 1 && (
                  <>
                    <span aria-hidden className="my-2 h-6 w-px bg-gold-600/50 md:my-0 md:h-px md:w-4" />
                    <span aria-hidden className="hidden" />
                  </>
                )}
              </Reveal>
            ))}
          </ol>

          <Reveal delay={160}>
            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button to="/enquiry" variant="solid">Own Land? Explore a JV Opportunity</Button>
            </div>
            <p className="mt-6 text-center text-xs uppercase tracking-[0.24em] text-mist/50">
              Confidential conversation — no obligation
            </p>
          </Reveal>
        </div>
      </section>

      {/* Enquiry */}
      <section className="hairline-t bg-ink-900 py-14" aria-label="JV enquiry">
        <div className="container-x max-w-4xl">
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
