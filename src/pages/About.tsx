import { useEffect, useRef, useState } from "react";
import { FinalCTA } from "../components/FinalCTA";
import { PageHero } from "../components/PageHero";
import { PageMeta } from "../lib/meta";
import { Reveal } from "../components/Reveal";
import { Gold, SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";

/* ════════════════════════ 01 · STORY ══════════════════════ */

function Story() {
  return (
    <section className="hairline-b bg-ink-900 py-16 lg:py-24" aria-label="Company story">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title={
              <>
                Built on Experience.
                <br />
                <Gold>Driven by Trust.</Gold>
              </>
            }
          />
          <Reveal delay={220}>
            <p className="mt-8 max-w-xl text-[15px] leading-[1.9] text-mist/85">
              ARV Constructions was established with a clear purpose — to simplify the process from
              land to development by bringing together planning, approvals and construction under one
              coordinated system. Founded by <strong className="font-medium text-bone-100">R.C. Raviraj</strong>,
              B.E., the practice reflects more than two decades of industry experience and a belief
              that projects move faster when preparation, compliance and communication are managed
              together from the start.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.9] text-mist/85">
              Over the years, we have supported projects across Chennai, Tiruvallur, Kanchipuram,
              Coimbatore, Madurai and several other regions in Tamil Nadu. Our role is to help
              landowners, builders and investors navigate the planning, approval and development
              process with clarity, consistency and professional guidance — so that each project is
              positioned for better outcomes from the very beginning.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-12 bg-gold-600/50" />
              <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-gold-500">Since 2003</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="group relative overflow-hidden bg-ink-850">
            <div className="img-zoom-wrap" style={{ aspectRatio: "4/3.2" }}>
              <img
                src="/assets/img/plan-6.jpg"
                alt="Office exterior view"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-8">
              <p className="eyebrow !text-gold-300">The Foundation</p>
              <p className="mt-3 max-w-md font-serif text-lg italic leading-relaxed text-bone-50">
                "We believe every approval journey can be better when the planning, documentation and
                coordination are handled with equal care."
              </p>
              <span className="mt-4 inline-block h-px w-8 bg-gold-500/50" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════════════ 02 · JOURNEY COUNTER ══════════════════════ */

function JourneyCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const counters = [
    { end: 23, suffix: "+", label: "Years of Expertise" },
    { end: 120, suffix: "+", label: "Projects Delivered" },
    { end: 80, suffix: "+", label: "Clients Served" },
    { end: 12, suffix: "+", label: "Ongoing Projects" },
  ];

  return (
    <section ref={ref} className="bg-ink-950 py-14 lg:py-20" aria-label="Our journey in numbers">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px bg-gold-600/10 lg:grid-cols-4">
          {counters.map((c, i) => (
            <div
              key={c.label}
              className="group relative flex flex-col items-center bg-ink-950 px-6 py-10 text-center transition-colors duration-500 hover:bg-ink-900"
            >
              <span
                className="absolute inset-x-0 top-0 h-px origin-left bg-gold-500 transition-transform duration-700"
                style={{
                  transform: visible ? "scaleX(1)" : "scaleX(0)",
                  transitionDelay: `${i * 120}ms`,
                }}
              />
              <span className="font-serif text-4xl font-light text-gold-400 transition-colors duration-500 group-hover:text-gold-300 lg:text-5xl">
                {visible ? (
                  <CountUp end={c.end} duration={2000} delay={i * 120} />
                ) : (
                  "0"
                )}
                <span className="text-gold-600">{c.suffix}</span>
              </span>
              <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-mist/60">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Simple count-up number animation */
function CountUp({ end, duration = 2000, delay = 0 }: { end: number; duration?: number; delay?: number }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * end));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timeout);
  }, [end, duration, delay]);
  return <>{value}</>;
}

/* ════════════════════════ 03 · DIFFERENTIATOR ══════════════════════ */

function Differentiator() {
  return (
    <section className="bg-ink-900 py-14 lg:py-22" aria-label="Our difference">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="What Sets Us Apart"
          title={
            <>
              Unified Approach.
              <br />
              <Gold>Client First Process.</Gold>
            </>
          }
        />
        <Reveal delay={180}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-[1.9] text-mist/80">
            Our approach combines planning expertise, approval coordination and construction capability —
            allowing clients to manage multiple stages of a project through a single, experienced team.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-px bg-gold-600/10 sm:grid-cols-2">
            {[
              { num: "01", title: "Planning & Documentation Expertise", desc: "Building plans, elevation design, land survey support and application preparation — structured for clearance at every stage." },
              { num: "02", title: "End to End Project Coordination", desc: "From planning approvals to construction milestones, each phase is coordinated professionally — reducing delays and rework." },
            ].map((item) => (
              <div
                key={item.num}
                className="group relative bg-ink-900 px-8 py-10 transition-colors duration-500 hover:bg-ink-850 sm:h-full"
              >
                <span className="absolute bottom-0 left-8 right-8 h-px origin-left bg-gold-600/0 transition-all duration-500 group-hover:bg-gold-500/40" />
                <span className="font-serif text-3xl italic text-gold-600/60 transition-colors duration-500 group-hover:text-gold-400">
                  {item.num}
                </span>
                <h3 className="mt-4 font-serif text-[1.2rem] leading-snug text-bone-50 transition-colors duration-300 group-hover:text-gold-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={340}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[13px] leading-relaxed text-mist/55">
            We do not claim authority to issue government approvals — our role is to help clients
            prepare professional applications, navigate applicable processes and manage their projects
            with better planning, transparency and coordination.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════════════ 04 · ABOUT GROUP ═══════════════════════════════════════════════════════ */

function AboutGroup() {
  return (
    <section className="blueprint-grid hairline-t bg-ink-950 py-14 lg:py-22" aria-label="Group structure">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="The Group"
          title={
            <>
              Integrated Capability.
              <br />
              <Gold>For Every Stage.</Gold>
            </>
          }
        />

        <Reveal delay={180}>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-px bg-gold-600/10 sm:grid-cols-2">
            {[
              { num: "01", title: "ARV Planning & Design Studio", desc: "Planning support for residential, commercial, institutional and industrial projects — from drawing and application to clearance." },
              { num: "02", title: "ARV Build", desc: "Construction services delivered with structural discipline, clear pricing and professional site management." },
            ].map((item) => (
              <div
                key={item.num}
                className="group relative bg-ink-950 px-8 py-10 transition-colors duration-500 hover:bg-ink-900 sm:h-full"
              >
                <span className="absolute bottom-0 left-8 right-8 h-px origin-left bg-gold-600/0 transition-all duration-500 group-hover:bg-gold-500/40" />
                <span className="font-serif text-3xl italic text-gold-600/60 transition-colors duration-500 group-hover:text-gold-400">
                  {item.num}
                </span>
                <h3 className="mt-4 font-serif text-[1.2rem] leading-snug text-bone-50 transition-colors duration-300 group-hover:text-gold-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={260}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-[1.9] text-mist/80">
            The group's structure allows a single point of coordination across planning, approvals and
            construction — making it easier for clients to move from concept to completion with
            consistent support.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
            <Button to="/services/planning-approvals" variant="solid">
              Planning &amp; Approvals
            </Button>
            <Button to="/services/construction" variant="outline">
              Construction
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════════════ 05 · FOUNDER ═══════════════════════════════════════════════════════════════ */

function FounderMessage() {
  return (
    <section className="hairline-t bg-ink-900 py-14 lg:py-22" aria-label="Founder message">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Leadership"
          title={
            <>
              A Message From
              <br />
              <Gold>Our Founder.</Gold>
            </>
          }
        />

        <Reveal delay={200}>
          <div className="mx-auto mt-8 max-w-2xl text-center">
            <p className="eyebrow !text-gold-300">R.C. Raviraj, B.E.</p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-mist/70">
              Founder &amp; Managing Director
            </p>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <blockquote className="relative mx-auto mt-10 max-w-3xl bg-ink-850/50 px-8 py-10 text-center sm:px-12 sm:py-12">
            <span aria-hidden className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold-500/40 to-transparent" />
            <span aria-hidden className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold-500/40 to-transparent" />
            <svg
              aria-hidden
              className="mx-auto mb-5 text-gold-600/30"
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="currentColor"
            >
              <path d="M0 24V14.4C0 10.267 0.733 7.2 2.2 5.2C3.733 3.133 5.933 1.667 8.8 0.8L10.8 3.6C8.8 4.4 7.267 5.6 6.2 7.2C5.2 8.8 4.667 10.667 4.6 12.8H10V24H0ZM18 24V14.4C18 10.267 18.733 7.2 20.2 5.2C21.733 3.133 23.933 1.667 26.8 0.8L28.8 3.6C26.8 4.4 25.267 5.6 24.2 7.2C23.2 8.8 22.667 10.667 22.6 12.8H28V24H18Z" />
            </svg>
            <p className="font-serif text-[1.15rem] italic leading-[1.9] text-bone-100/90">
              We don't just help projects get approved — we help them get prepared. When the
              documentation is right, the planning is structured, and the coordination is clear, the
              approval process becomes less stressful and far more predictable.
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={340}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] leading-[1.9] text-mist/85">
            With over 23 years of expertise in planning, approvals and project development, Mr.
            Raviraj leads the practice with a focus on professional preparation, client transparency
            and integrated project delivery — ensuring every project is positioned for a smoother
            journey from land to completion.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
            <Button to="/enquiry" variant="solid">
              Get in Touch
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════ PAGE ═══════════════════════ */

export default function About() {
  PageMeta(
    "About Us | ARV Constructions",
    "Over 23 years of expertise in Planning, Approvals, Land Development and Construction — helping projects move with clarity and professional coordination.",
  );

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            An Integrated Planning &amp; Construction Practice.
            <br />
            <em className="italic text-gold-400">Built on Experience.</em>
          </>
        }
        image="/assets/img/plan-3.jpg"
      />
      <Story />
      <JourneyCounter />
      <Differentiator />
      <AboutGroup />
      <FounderMessage />
      <FinalCTA />
    </>
  );
}
