import { PageMeta } from "../lib/meta";
import { Reveal } from "../components/Reveal";
import { EnquiryForm } from "../components/EnquiryForm";
import { PageHero } from "../components/PageHero";
import { FinalCTA } from "../components/FinalCTA";

export default function Enquiry() {
  PageMeta(
    "Enquiry",
    "Start your enquiry — planning, construction or joint venture. Tell us what you're looking for and we'll respond promptly.",
  );

  return (
    <>
      <PageHero
        eyebrow="Enquiry"
        title={
          <>
            Start the
            <br />
            <em className="italic text-gold-400">Conversation.</em>
          </>
        }
        intro="One short form, tailored to what you need — planning, construction or a joint venture."
        image="/assets/img/dusk-0_5.jpg"
      />

      <section className="hairline-t bg-ink-900 py-14 lg:py-20" aria-label="Enquiry form">
        <div className="container-x max-w-4xl">
          <Reveal>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
