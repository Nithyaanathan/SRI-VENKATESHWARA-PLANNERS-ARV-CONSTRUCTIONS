import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Counter } from "../components/Counter";
import { FinalCTA } from "../components/FinalCTA";
import { PageMeta } from "../lib/meta";
import { Reveal } from "../components/Reveal";
import { Gold, SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { constructionProcess, jvProcess, ourProcess, planningProcess, whyChooseUs } from "../data/services";
import { team } from "../data/testimonials";

/* ══════════════════════ 01 · HERO ══════════════════════ */

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setPlaying(true);
    video.addEventListener("play", onPlay);

    video.load();
    video.play().catch((err) => {
      console.warn("[hero-video] autoplay blocked:", err.message);
      const handler = () => {
        video.play().catch(() => {});
        document.removeEventListener("click", handler);
        document.removeEventListener("touchstart", handler);
      };
      document.addEventListener("click", handler, { once: true });
      document.addEventListener("touchstart", handler, { once: true });
    });

    return () => video.removeEventListener("play", onPlay);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight && contentRef.current) {
          contentRef.current.style.transform = `translateY(${y * 0.22}px)`;
          contentRef.current.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.7)));
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink-950">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/hero-fallback.jpg"
        aria-hidden
        src="/assets/hero-video.mp4"
      />
      <div aria-hidden className="absolute inset-0 bg-ink-950/45" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,8,10,0.82) 0%, rgba(8,8,10,0.55) 38%, rgba(8,8,10,0.18) 68%, rgba(8,8,10,0.42) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-56"
        style={{ background: "linear-gradient(to top, rgba(8,8,10,0.95), transparent)" }}
      />

      <div ref={contentRef} className="container-x relative pb-20 pt-36 md:pb-28">
        {!playing && (
          <button
            type="button"
            aria-label="Play background video"
            onClick={() => {
              videoRef.current?.play().then(() => setPlaying(true)).catch(() => {});
            }}
            className="absolute right-6 top-6 z-20 flex h-14 w-14 items-center justify-center border border-gold-500/60 bg-ink-950/60 text-gold-400 backdrop-blur-sm transition-colors hover:border-gold-300 hover:text-gold-200 md:right-10 md:top-10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <polygon points="6,3 20,12 6,21" />
            </svg>
          </button>
        )}
        <p className="hero-rise eyebrow !text-gold-300" style={{ animationDelay: "150ms" }}>
          ARV Constructions — Precision Before Permission
        </p>

        <h1 className="display-1 mt-8 text-[clamp(3.2rem,9vw,7.5rem)] text-bone-50">
          <span className="hero-rise block" style={{ animationDelay: "300ms" }}>
            Plan. Approve.
          </span>
          <span className="hero-rise block italic text-gold-400" style={{ animationDelay: "460ms" }}>
            Develop. Build.
          </span>
        </h1>

        <p className="hero-rise mt-9 max-w-xl text-[15px] leading-relaxed text-mist" style={{ animationDelay: "620ms" }}>
          CMDA/DTCP Approval Assistance, Joint Ventures &amp; Construction Solutions — 23+ Years of Expertise.
        </p>

        <div className="hero-rise mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6" style={{ animationDelay: "780ms" }}>
          <Button to="/enquiry" variant="solid">
            Get a Consultation
          </Button>
          <Button to="/services/planning-approvals" variant="outline">
            Explore Our Services
          </Button>
        </div>
      </div>

    </section>
  );
}

/* ══════════════════════ 02 · INTRODUCTION / TRUST ══════════════════════ */

function TrustIntro() {
  return (
    <section className="hairline-b relative bg-ink-900 py-12 lg:py-20" aria-label="Introduction">
      <div className="container-x grid items-start gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="SRI VENKATESHWARA PLANNERS"
            title={
              <>
                Building Better.
                <br />
                <Gold>Planning Smarter.</Gold>
              </>
            }
          />
          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.9] text-mist/85">
              ARV Constructions is an integrated planning and construction practice with over 23 years of
              expertise. We simplify the path from property to project — combining approval expertise,
              project coordination and development insight to help builders and landowners make informed
              decisions, avoid unnecessary delays and move viable projects forward with confidence.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.9] text-mist/85">
              We believe the fastest approval is a well-prepared approval. Instead of waiting for problems
              to appear during scrutiny, we identify them early, prepare the application carefully, and
              keep the entire approval journey under one transparent system.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8">
              <Button to="/about" variant="ghost" className="!px-0">
                Our Story
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="hairline-y grid grid-cols-2 bg-ink-850/50">
            {[
              [0, 1],
              [2, 3],
            ].map((row, ri) => (
              <div key={ri} className="contents">
                {row.map((si, ci) => {
                  const s = [
                    { v: 23, suf: "+", label: "Years Experience" },
                    { v: 120, suf: "+", label: "Projects" },
                    { v: 80, suf: "+", label: "Clients" },
                    { v: 12, suf: "+", label: "Ongoing Projects" },
                  ][si];
                  return (
                    <div
                      key={s.label}
                      className={`px-8 py-10 ${ci === 0 ? "border-r border-gold-600/12" : ""} ${ri === 0 ? "border-b border-gold-600/12" : ""}`}
                    >
                      <p className="font-serif text-5xl font-light text-gold-400 lg:text-6xl">
                        <Counter value={s.v} suffix={s.suf} />
                      </p>
                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-mist/70">{s.label}</p>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════ 03 · THREE CORE SERVICES ══════════════════════ */

const coreServices = [
  {
    num: "01",
    title: "Planning & Approvals",
    desc: "CMDA/DTCP planning permissions, building plans, documentation and approval assistance.",
    img: "/assets/img/plan-1_5.jpg",
    to: "/services/planning-approvals",
  },
  {
    num: "02",
    title: "Joint Ventures",
    desc: "Development opportunities for landowners and strategic partners across Chennai.",
    img: "/assets/img/dusk-6_5.jpg",
    to: "/services/joint-ventures",
  },
  {
    num: "03",
    title: "Construction",
    desc: "Residential and commercial construction solutions — from blueprint to built space.",
    img: "/assets/img/plan-6.jpg",
    to: "/services/construction",
  },
];

function CoreServices() {
  return (
    <section className="bg-ink-950" aria-label="Core services">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal variant="fade">
              <div className="flex items-center gap-4">
                <span aria-hidden className="h-px w-10 bg-gold-600/70" />
                <p className="eyebrow">What We Do</p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="display-2 mt-1 text-[clamp(2.1rem,4.6vw,3.9rem)] text-bone-50">
                Three Disciplines.<br /><Gold>One Standard.</Gold>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Button to="/services/planning-approvals" variant="outline" className="hidden md:inline-flex">
              All Services
            </Button>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {coreServices.map((s, i) => (
            <Reveal key={s.num} variant="fade" delay={i * 130}>
              <Link to={s.to} className="group block h-full focus-visible:outline-none" aria-label={`${s.title} — learn more`}>
                <article className="flex h-full flex-col border border-gold-600/15 bg-ink-900 transition-all duration-500 hover:border-gold-600/45 hover:bg-ink-850">
                  <div className="img-zoom-wrap relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                    <img src={s.img} alt={`${s.title} — representative imagery`} loading="lazy" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
                    <span className="absolute right-5 top-4 font-serif text-5xl italic leading-none text-bone-100/25 transition-colors duration-500 group-hover:text-gold-400/60">
                      {s.num}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-[1.5rem] leading-tight text-bone-50 transition-colors duration-300 group-hover:text-gold-200">
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-mist/75">{s.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-500 transition-colors duration-300 group-hover:text-gold-300">
                      Explore
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
                        <path d="M0 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 05 · PLANNING & APPROVALS TEASER ══════════════════════ */

function PlanningTeaser() {
  return (
    <section className="hairline-y relative -mt-px overflow-hidden bg-ink-900 pb-12 pt-0 lg:pb-20 lg:pt-0" aria-label="Planning and approvals">
      <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="container-x relative grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Service 01"
            title={
              <>
                From Planning to Approval,
                <br />
                <Gold>We Handle the Process.</Gold>
              </>
            }
            intro="Building plans, documentation and approval assistance — prepared carefully, coordinated professionally. We support the applicable approval processes; we never claim authority to issue government licenses."
          />
          <Reveal delay={260}>
            <div className="mt-8">
              <Button to="/services/planning-approvals" variant="solid">
                Planning &amp; Approvals
              </Button>
            </div>
          </Reveal>
        </div>

        <ol className="relative space-y-0 border-l border-gold-600/20 pl-0">
          {planningProcess.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 80}>
              <div className="group relative flex gap-8 py-5 pl-8 transition-colors duration-300 hover:bg-gold-500/[0.04] sm:gap-10 sm:pl-10">
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-1/2 h-[9px] w-[9px] -translate-y-1/2 rotate-45 border border-gold-600 bg-ink-900 transition-colors duration-300 group-hover:bg-gold-400"
                />
                <span className="w-10 shrink-0 pt-1 font-serif text-xl italic text-gold-600 transition-colors duration-300 group-hover:text-gold-400">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bone-50">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-mist/70">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ══════════════════════ 06 · JOINT VENTURES ══════════════════════ */

function JVTeaser() {
  return (
    <section className="relative overflow-hidden bg-gold-500 py-12 text-ink-900 lg:py-20" aria-label="Joint ventures">
      <svg aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] opacity-[0.07]" viewBox="0 0 200 200" fill="none">
        <rect x="30" y="60" width="60" height="110" stroke="#0c0c0e" />
        <rect x="100" y="30" width="70" height="140" stroke="#0c0c0e" />
        <path d="M30 90h130M30 120h130M65 60v110M135 30v140" stroke="#0c0c0e" />
      </svg>

      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              dark
              className="[&_.eyebrow]:!text-ink-900"
              eyebrow="Joint Ventures"
              title={
                <>
                  Have Land?
                  <br />
                  <span className="italic">Let's Build Something</span>
                  <br />
                  Valuable Together.
                </>
              }
            />
            <Reveal delay={220}>
              <p className="mt-6 max-w-lg text-[15px] leading-[1.9] text-ink-700/85">
                We collaborate with landowners through Joint Venture opportunities to transform suitable
                properties into well-planned developments — combining your land with our planning,
                approvals, development and construction capability.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Link
                  to="/enquiry"
                  className="group inline-flex items-center justify-center gap-3 border border-ink-900 bg-ink-900 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-bone-50 transition-all duration-300 hover:bg-transparent hover:text-ink-900"
                >
                  JV Enquiry
                  <span aria-hidden className="h-px w-6 bg-current transition-all duration-300 group-hover:w-9" />
                </Link>
                <Link
                  to="/services/joint-ventures"
                  className="group inline-flex items-center justify-center gap-3 border border-gold-700/50 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-ink-800 transition-all duration-300 hover:border-gold-600 hover:text-gold-700"
                >
                  How JVs Work
                  <span aria-hidden className="h-px w-6 bg-current transition-all duration-300 group-hover:w-9" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <nav aria-label="Joint venture process" className="hairline-t hairline-b border-ink-900/15 bg-white/40 px-8 py-10 backdrop-blur-sm sm:px-12">
              <p className="eyebrow !text-gold-700">The Path</p>
              <ol className="mt-7 space-y-0">
                {jvProcess.map((step, i) => (
                  <li key={step} className={`py-3 ${i > 0 ? "border-t border-dotted border-ink-900/15" : ""}`}>
                    <div className="flex items-center gap-5">
                      <span className="font-serif text-lg italic text-gold-600">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-800">{step}</span>
                      {i === 0 && <span aria-hidden className="ml-auto h-1.5 w-1.5 rotate-45 bg-gold-500" />}
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 07 · CONSTRUCTION TEASER ══════════════════════ */

function ConstructionTeaser() {
  return (
    <section className="relative bg-ink-950 py-12 lg:py-20" aria-label="Construction">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
          <div className="relative">
            <Reveal variant="img">
              <div className="img-zoom-wrap relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src="/assets/img/plan-4_5.jpg" alt="Construction execution on a residential project" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal variant="img" delay={200} className="absolute -bottom-10 -right-2 hidden w-[46%] border-8 border-ink-950 sm:block lg:-right-8">
              <div className="img-zoom-wrap overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <img src="/assets/img/dusk-2.jpg" alt="Completed building at dusk" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <span aria-hidden className="gold-rule absolute -left-6 top-0 hidden h-24 w-px bg-none lg:block" style={{ backgroundImage: "linear-gradient(#c6a15b,transparent)", height: "120px", width: "1px" }} />
          </div>

          <div>
            <SectionHeading
              eyebrow="Service 03"
              title={
                <>
                  From Blueprint
                  <br />
                  <Gold>to Built Space.</Gold>
                </>
              }
              intro="Residential and commercial construction executed with structural discipline and finish quality — managed from estimate to handover."
            />
            <Reveal delay={240}>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {constructionProcess.map((step, i) => (
                  <li key={step} className="flex items-center gap-2.5">
                    <span className="border border-gold-600/25 bg-ink-850 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-mist/85 transition-colors duration-300 hover:border-gold-500/60 hover:text-gold-300">
                      {step}
                    </span>
                    {i < constructionProcess.length - 1 && (
                      <span aria-hidden className="text-gold-600/70">→</span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-8">
                <Button to="/services/construction" variant="outline">
                  Construction Services
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 08 · PROJECTS PREVIEW ══════════════════════ */

function ProjectsPreview() {
  const featured = projects.slice(0, 2);
  if (featured.length === 0) return null;
  return (
    <section className="hairline-t bg-ink-900 py-12 lg:py-20" aria-label="Featured projects">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Portfolio"
            title={
              <>
                Projects That Speak
                <br />
                <Gold>for Our Work.</Gold>
              </>
            }
          />
          <Reveal delay={200}>
            <Button to="/projects" variant="outline" className="hidden md:inline-flex">
              View All Projects
            </Button>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <Reveal delay={120} className="mt-10 text-center md:hidden">
          <Button to="/projects" variant="outline">View All Projects</Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════ 10 · WHY CHOOSE US ══════════════════════ */

function WhyChooseUs() {
  return (
    <section className="bg-ink-950 py-12 lg:py-20" aria-label="Why choose us">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Why Choose Us"
          title={
            <>
              One Partner.
              <br />
              <Gold>Multiple Capabilities.</Gold>
            </>
          }
        />
        <div className="mx-auto mt-10 max-w-4xl">
          {whyChooseUs.map((w, i) => (
            <Reveal key={w.num} delay={i * 70}>
              <div className="group hairline-y grid grid-cols-[auto_1fr] items-baseline gap-6 px-2 py-7 transition-all duration-500 hover:bg-gold-500/[0.035] sm:grid-cols-[90px_1fr_auto] sm:gap-10 sm:px-6 lg:px-10">
                <span className="font-serif text-3xl italic text-gold-600/70 transition-colors duration-500 group-hover:text-gold-400 sm:text-4xl">
                  {w.num}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-bone-50 transition-colors duration-300 group-hover:text-gold-100 sm:text-[1.75rem]">
                    {w.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist/70">{w.desc}</p>
                </div>
                <span
                  aria-hidden
                  className="hidden h-px w-10 bg-gold-600/50 transition-all duration-500 group-hover:w-20 group-hover:bg-gold-400 sm:block"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 11 · OUR PROCESS ══════════════════════ */

function ProcessTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setFill(1);
      return;
    }
    let raf = 0;
    const update = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.4;
      const passed = Math.min(Math.max(vh * 0.8 - rect.top, 0), total);
      setFill(passed / total);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="blueprint-grid hairline-t relative bg-ink-900 py-12 lg:py-16" aria-label="Our process">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="How We Work"
          title={
            <>
              A Process Built on
              <br />
              <Gold>Clarity.</Gold>
            </>
          }
        />

        <div ref={trackRef} className="relative mx-auto mt-10 max-w-3xl">
          <div aria-hidden className="absolute bottom-0 left-[27px] top-0 w-px bg-gold-600/15 sm:left-1/2" />
          <div
            aria-hidden
            className="absolute left-[27px] top-0 w-px bg-gradient-to-b from-gold-300 to-gold-600 transition-[height] duration-150 ease-out sm:left-1/2"
            style={{ height: `${fill * 100}%` }}
          />

          <ol className="space-y-8 lg:space-y-10">
            {ourProcess.map((p, i) => {
              const leftSide = i % 2 === 0;
              return (
                <li key={p.num} className="relative">
                  <span
                    aria-hidden
                    className={`absolute top-2 flex h-14 w-14 rotate-45 items-center justify-center border transition-colors duration-700 ${
                      fill * ourProcess.length > i + 0.35
                        ? "border-gold-400 bg-ink-900"
                        : "border-gold-600/25 bg-ink-900"
                    } left-0 sm:left-1/2 sm:-translate-x-1/2`}
                  >
                    <span className="-rotate-45 font-serif text-sm italic text-gold-400">{p.num}</span>
                  </span>

                  <div
                    className={`pl-24 sm:w-1/2 sm:pl-0 ${
                      leftSide ? "sm:pr-20 sm:text-right" : "sm:ml-auto sm:pl-20"
                    }`}
                  >
                    <Reveal variant="fade">
                      <p className="eyebrow !text-[10px]">Step {p.num}</p>
                      <h3 className="display-2 mt-3 text-3xl text-bone-50 lg:text-4xl">{p.title}</h3>
                      <p className={`mt-3 max-w-xs text-sm leading-relaxed text-mist/75 ${leftSide ? "sm:ml-auto" : ""}`}>
                        {p.desc}
                      </p>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 12 · TEAM ══════════════════════ */

function TeamStrip() {
  return (
    <section className="hairline-t bg-ink-950 py-12 lg:py-20" aria-label="Team">
      <div className="container-x">
        <SectionHeading
          eyebrow="Leadership"
          title={
            <>
              The People Behind
              <br />
              <Gold>the Work.</Gold>
            </>
          }
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:max-w-4xl">
          {team.map((m, i) => (
            <Reveal key={m.role} delay={i * 100}>
              <div className="group hairline-y flex items-center gap-7 bg-ink-900 p-7">
                <span className="flex h-20 w-20 shrink-0 items-center justify-center border border-gold-600/30 bg-ink-850">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden className="text-gold-700">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-serif text-xl text-bone-50">{m.name}</h3>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-500">{m.role}</p>
                  <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-mist/70">{m.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 13 · TRUST & CREDIBILITY ══════════════════════ */

function TrustSection() {
  return (
    <section className="hairline-t blueprint-grid bg-ink-900 py-12 lg:py-20" aria-label="Our commitment">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Our Commitment"
          title={
            <>
              Accurate Preparation.<span className="text-gold-400"> Transparent Communication.</span>
            </>
          }
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            { num: "01", title: "Faster Preparation", desc: "Well-prepared applications mean fewer delays — we identify issues early and prepare documentation carefully." },
            { num: "02", title: "Clear Progress", desc: "Transparent communication at every stage — you always know where your project stands." },
            { num: "03", title: "Compliant & Complete", desc: "Complete, efficiently managed applications — our goal is a smoother approval journey with no surprises." },
          ].map((item, i) => (
            <Reveal key={item.num} delay={i * 110}>
              <div className="border border-gold-600/15 bg-ink-950/60 p-8 transition-all duration-500 hover:border-gold-600/40">
                <span className="font-serif text-3xl italic text-gold-600/70">{item.num}</span>
                <h3 className="mt-5 font-serif text-xl text-bone-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist/70">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ PAGE ═══════════════════════ */

export default function Home() {
  PageMeta(
    "ARV Constructions | Plan. Approve. Develop. Build.",
    "CMDA/DTCP Approval Assistance, Joint Ventures & Construction Solutions — 23+ Years of Expertise.",
  );

  return (
    <>
      <Hero />
      <TrustIntro />
      <CoreServices />
      <PlanningTeaser />
      <JVTeaser />
      <ConstructionTeaser />
      <ProjectsPreview />
      <WhyChooseUs />
      <ProcessTimeline />
      <TeamStrip />
      <TrustSection />
      <FinalCTA />
    </>
  );
}
