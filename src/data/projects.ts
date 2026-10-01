/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECTS DATA MODEL
 *
 *  Project photographs supplied by the client.
 * ─────────────────────────────────────────────────────────────
 */

export type ProjectStatus = "Completed" | "Ongoing";

export interface Project {
  slug: string;
  name: string;
  location: string;
  /** Primary discipline — used for filtering */
  category: "planning" | "construction" | "jv";
  /** Additional tags — used for filtering */
  tags: ("completed" | "ongoing")[];
  type: string; // e.g. "Residential Apartment"
  area: string; // e.g. "12,400 sq.ft"
  status: ProjectStatus;
  completionYear?: string;
  client?: string;
  scope: string[]; // services provided
  overview: string;
  description: string[];
  cover: string;
  gallery: string[];
  beforeAfter?: { before: string; after: string };
  video?: string;
  mapQuery?: string;
}

const projectLocations = [
  "Chennai",
  "Ranipet",
  "Chennai",
  "Ranipet",
  "Ranipet",
  "Chennai",
  "Chennai",
  "Ranipet",
  "Chennai",
  "Ranipet",
  "Chennai",
] as const;

export const projects: Project[] = projectLocations.map((location, index) => {
  const image = `/assets/projects/project-${String(index + 1).padStart(2, "0")}.jpeg`;
  const number = String(index + 1).padStart(2, "0");

  return {
    slug: `residential-project-${number}`,
    name: `Residential Project ${number}`,
    location,
    category: "construction",
    tags: ["completed"],
    type: "Residential Building",
    area: "Details to be confirmed",
    status: "Completed",
    scope: ["Planning", "Elevation Design", "Construction Coordination"],
    overview: "Residential project details will be updated with the confirmed project information.",
    description: [
      "This project image has been added to the portfolio for reference.",
      "Project specifications, area and final location details will be updated once confirmed.",
    ],
    cover: image,
    gallery: [image],
  };
});

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "planning", label: "Planning" },
  { id: "construction", label: "Construction" },
  { id: "jv", label: "JV" },
  { id: "completed", label: "Completed" },
  { id: "ongoing", label: "Ongoing" },
] as const;

export type ProjectFilterId = (typeof projectFilters)[number]["id"];

export function filterProjects(filter: ProjectFilterId): Project[] {
  if (filter === "all") return projects;
  return projects.filter(
    (p) => p.category === filter || p.tags.includes(filter as "completed" | "ongoing"),
  );
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
