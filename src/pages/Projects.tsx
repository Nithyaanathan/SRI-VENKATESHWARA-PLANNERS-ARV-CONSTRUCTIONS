import { useState } from "react";
import { PageMeta } from "../lib/meta";
import { Reveal } from "../components/Reveal";
import { Gold } from "../components/SectionHeading";
import { PageHero } from "../components/PageHero";
import { ProjectCard } from "../components/ProjectCard";
import { filterProjects, projectFilters, type ProjectFilterId } from "../data/projects";

export default function Projects() {
  PageMeta(
    "Projects",
    "Explore our portfolio of planning, construction and joint venture projects — completed and ongoing.",
  );

  const [active, setActive] = useState<ProjectFilterId>("all");
  const list = filterProjects(active);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Projects That Speak
            <br />
            <em className="italic text-gold-400">for Our Work.</em>
          </>
        }
        intro="Explore our portfolio of planning, construction and joint-venture work across Chennai and surrounding regions."
        image="/assets/img/dusk-2.jpg"
      />

      <section className="hairline-t bg-ink-900 py-14 lg:py-20" aria-label="Project list">
        <div className="container-x">
          {/* Filters */}
          <Reveal variant="fade" className="flex flex-wrap gap-2.5">
            <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter projects">
            {projectFilters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={active === f.id}
                onClick={() => setActive(f.id)}
                className={`border px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] transition-all duration-300 ${
                  active === f.id
                    ? "border-gold-500 bg-gold-500 text-ink-950"
                    : "border-gold-600/25 text-mist/70 hover:border-gold-600/60 hover:text-gold-300"
                }`}
              >
                {f.label}
              </button>
            ))}
            </div>
          </Reveal>

          {/* Grid */}
          {list.length > 0 ? (
            <div key={active} className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2">
              {list.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          ) : (
            <div className="hairline-y mt-10 py-16 text-center">
              <Gold>No projects in this category yet.</Gold>
            </div>
          )}

          <p className="mt-8 text-xs italic text-mist/40">
            Projects are being added as they are confirmed by our clients.
          </p>
        </div>
      </section>
    </>
  );
}
