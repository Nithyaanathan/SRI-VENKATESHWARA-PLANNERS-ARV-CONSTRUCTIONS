import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { PageMeta } from "../lib/meta";
import { Reveal } from "../components/Reveal";
import { Gold, SectionHeading } from "../components/SectionHeading";
import { getProject, projects, type Project } from "../data/projects";
import { Lightbox } from "../components/Lightbox";

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="hairline-b py-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-mist/50">{label}</p>
      <p className="mt-2 font-serif text-xl text-bone-50">{value}</p>
    </div>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project: Project | undefined = slug ? getProject(slug) : undefined;
  const [lightbox, setLightbox] = useState<number | null>(null);

  PageMeta(project ? `${project.name} — Project` : "Project", project?.overview ?? "");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!project) {
    return (
      <section className="flex min-h-[80vh] flex-col items-center justify-center bg-ink-950 pt-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="display-2 mt-6 text-4xl text-bone-50">Project not found.</h1>
        <div className="mt-10">
          <Button to="/projects" variant="outline">Back to Projects</Button>
        </div>
      </section>
    );
  }

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      {/* ── Project hero ── */}
      <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-ink-950">
        <img src={project.cover} alt={project.name} className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/30" />
        <div className="container-x relative pb-16 pt-36">
          <Reveal variant="fade">
            <Link to="/projects" className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-mist/70 transition-colors hover:text-gold-300">
              <span aria-hidden className="h-px w-8 bg-current transition-all group-hover:w-12" />
              All Projects
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display-1 mt-7 max-w-3xl text-[clamp(2.6rem,6vw,5rem)] text-bone-50">{project.name}</h1>
          </Reveal>
          <Reveal delay={220}>
            <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-mist/80">
              <li><span className="text-gold-500">Type</span> — {project.type}</li>
              <li><span className="text-gold-500">Status</span> — {project.status}</li>
              <li><span className="text-gold-500">Area</span> — {project.area}</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Overview + facts ── */}
      <section className="hairline-y bg-ink-900 py-14 lg:py-20" aria-label="Project overview">
        <div className="container-x grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <div>
            <SectionHeading eyebrow="Overview" title={<>About This <Gold>Project.</Gold></>} />
            <Reveal delay={200}>
              <div className="mt-6 space-y-4">
                {project.description.map((d, i) => (
                  <p key={i} className="max-w-xl text-[15px] leading-[1.9] text-mist/85">{d}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={280}>
              <h3 className="mt-8 text-[11px] font-bold uppercase tracking-[0.24em] text-gold-500">Services Provided</h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {project.scope.map((s) => (
                  <li key={s} className="border border-gold-600/25 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-mist/80">{s}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside>
            <Reveal delay={140}>
              <MetaItem label="Location" value={project.location} />
              <MetaItem label="Project Type" value={project.type} />
              <MetaItem label="Area" value={project.area} />
              <MetaItem label="Status" value={project.status} />
              {project.completionYear && <MetaItem label="Completion Year" value={project.completionYear} />}
            </Reveal>
          </aside>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="bg-ink-950 py-14 lg:py-20" aria-label="Project gallery">
        <div className="container-x">
          <SectionHeading eyebrow="Gallery" title={<>The Project <Gold>In Frames.</Gold></>} />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.gallery.map((g, i) => (
              <Reveal key={g + String(i)} variant="fade" delay={(i % 2) * 100} className={i % 3 === 0 ? "sm:col-span-2" : ""}>
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="img-zoom-wrap block w-full overflow-hidden focus-visible:outline-none"
                  style={{ aspectRatio: i % 3 === 0 ? "16/8" : "4/3" }}
                  aria-label={`Open image ${i + 1}`}
                >
                  <img src={g} alt={`${project.name} — image ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After (when provided) ── */}
      {project.beforeAfter && (
        <section className="hairline-t bg-ink-900 py-14 lg:py-20" aria-label="Before and after">
          <div className="container-x">
            <SectionHeading eyebrow="Transformation" title={<>Before &amp; <Gold>After.</Gold></>} />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {(["before", "after"] as const).map((k, i) => (
                <Reveal key={k} variant="img" delay={i * 130}>
                  <figure className="relative overflow-hidden">
                    <div className="img-zoom-wrap" style={{ aspectRatio: "4/3" }}>
                      <img src={project.beforeAfter![k]} alt={`${project.name} — ${k}`} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <figcaption className={`absolute left-5 top-5 border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] backdrop-blur-sm ${k === "before" ? "border-bone-100/30 bg-ink-950/70 text-bone-100" : "border-gold-500/60 bg-ink-950/70 text-gold-300"}`}>
                      {k}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Location map placeholder ── */}
      <section className="hairline-t bg-ink-950 py-14" aria-label="Location map">
        <div className="container-x">
          <SectionHeading eyebrow="Location" title={<>Where It <Gold>Stands.</Gold></>} />
          <Reveal delay={160}>
            <div className="blueprint-grid hairline-y mt-8 flex min-h-[320px] items-center justify-center bg-ink-900 text-center">
              {project.mapQuery ? (
                <iframe
                  title={`${project.name} location map`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(project.mapQuery)}&output=embed`}
                  className="h-[420px] w-full grayscale-[35%] invert-[92%] hue-rotate-180"
                  loading="lazy"
                />
              ) : (
                <p className="px-6 text-xs uppercase tracking-[0.22em] text-mist/45">
                  Google Maps embed appears here once the project address is confirmed
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-14 lg:py-20" aria-label="Similar project enquiry">
        <img src="/assets/img/dusk-3_5.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/85 to-ink-950" />
        <div className="container-x relative text-center">
          <SectionHeading
            align="center"
            eyebrow="Next Step"
            title={<>Interested in a <Gold>Similar Project?</Gold></>}
          />
          <Reveal delay={200} className="mt-8">
            <Button to="/enquiry" variant="solid">Get a Consultation</Button>
          </Reveal>
        </div>
      </section>

      {/* ── More projects ── */}
      {others.length > 0 && (
        <section className="hairline-t bg-ink-900 py-14" aria-label="More projects">
          <div className="container-x">
            <h2 className="eyebrow">More Projects</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {others.map((p, i) => (
                <Reveal key={p.slug} delay={i * 110}>
                  <Link to={`/projects/${p.slug}`} className="group block">
                    <div className="img-zoom-wrap relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      <img src={p.cover} alt={`${p.name} cover`} loading="lazy" className="h-full w-full object-cover" />
                      <span aria-hidden className="absolute inset-0 bg-ink-950/20 transition-colors duration-500 group-hover:bg-ink-950/45" />
                    </div>
                    <div className="mt-5 flex items-baseline justify-between gap-6">
                      <h3 className="font-serif text-2xl text-bone-50 transition-colors group-hover:text-gold-200">{p.name}</h3>
                      <span className="shrink-0 text-xs tracking-wider text-mist/55">{p.location}</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {lightbox !== null && (
        <Lightbox
          images={project.gallery}
          index={lightbox}
          alt={`${project.name} image`}
          onClose={() => setLightbox(null)}
          onNavigate={setLightbox}
        />
      )}
    </>
  );
}
