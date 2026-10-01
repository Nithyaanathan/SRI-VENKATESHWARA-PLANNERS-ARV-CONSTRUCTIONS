import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { Reveal } from "./Reveal";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

/**
 * Editorial portfolio card — large image, hairline frame,
 * meta strip with gold accents. Hover: slow image zoom.
 */
export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Reveal variant="fade" delay={(index % 2) * 120}>
      <Link
        to={`/projects/${project.slug}`}
        className="group block focus-visible:outline-none"
        aria-label={`${project.name} — view project`}
      >
        <article>
          <div className="img-zoom-wrap reveal-img-wrap relative overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
            <img
              src={project.cover}
              alt={`${project.name}, ${project.location}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-transparent to-ink-950/20 transition-opacity duration-500 group-hover:opacity-80" />
            {/* status chip */}
            <span
              className={`absolute left-5 top-5 border px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] backdrop-blur-sm ${
                project.status === "Ongoing"
                  ? "border-gold-400/60 bg-ink-950/60 text-gold-300"
                  : "border-bone-100/25 bg-ink-950/50 text-bone-100/90"
              }`}
            >
              {project.status}
            </span>
            {/* hover arrow */}
            <span
              aria-hidden
              className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center border border-gold-500/70 bg-ink-950/60 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 14L14 2M14 2H6M14 2v8" stroke="#d9ba74" strokeWidth="1.4" />
              </svg>
            </span>
          </div>

          <div className="hairline-b group-hover:border-gold-600/40 mt-0 flex items-start justify-between gap-6 border-t-0 pt-6 pb-7 transition-colors duration-500">
            <div>
              <p className="eyebrow !text-[10px]">{project.type}</p>
              <h3 className="display-2 mt-2.5 text-[clamp(1.5rem,2.4vw,2rem)] text-bone-50 transition-colors duration-300 group-hover:text-gold-200">
                {project.name}
              </h3>
              <p className="mt-2 text-[13px] tracking-wide text-mist/70">{project.location}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-mist/50">Area</p>
              <p className="mt-1 font-serif text-lg text-gold-400">{project.area}</p>
            </div>
          </div>
        </article>
      </Link>
    </Reveal>
  );
}
