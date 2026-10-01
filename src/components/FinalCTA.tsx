import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

/**
 * Final CTA — full-width cinematic band using the client's
 * second brand video (modern building at dusk) as background.
 * Video mounts only when scrolled near, protecting page load.
 */
export function FinalCTA() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={wrapRef} className="relative overflow-hidden" aria-label="Start your project">
      {near && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          src="/assets/cta-video.mp4"
        />
      )}
      {!near && <img src="/assets/img/dusk-8.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />}
      <div className="absolute inset-0 bg-ink-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/40 to-ink-950/70" />

      <div className="container-x relative py-12 text-center lg:py-16">
        <Reveal variant="fade">
          <p className="eyebrow">Begin the Conversation</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-1 mx-auto mt-7 max-w-3xl text-[clamp(2.6rem,6vw,5.2rem)] text-bone-50">
            Your Property.
            <br />
            <em className="italic text-gold-400">Our Expertise.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-7 max-w-xl font-serif text-xl italic text-mist">
            Let’s build the future together.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button to="/enquiry" variant="solid">
              Plan Your Project
            </Button>
            <Link
              to="/services/joint-ventures"
              className="group inline-flex items-center gap-3 border border-gold-600/60 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-bone-100 transition-all duration-300 hover:border-gold-300 hover:text-gold-200"
            >
              Start a JV Conversation
              <span aria-hidden className="h-px w-6 bg-current transition-all duration-300 group-hover:w-9" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
