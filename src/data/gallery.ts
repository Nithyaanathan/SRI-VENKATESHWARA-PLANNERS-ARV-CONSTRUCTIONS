/**
 * ─────────────────────────────────────────────────────────────
 *  GALLERY — imagery from the client's brand materials.
 * ─────────────────────────────────────────────────────────────
 */

export type GalleryCategory =
  | "projects"
  | "construction"
  | "completed"
  | "office"
  | "team"
  | "events";

export const galleryFilters: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "projects", label: "Projects" },
  { id: "construction", label: "Construction" },
  { id: "completed", label: "Completed Buildings" },
  { id: "office", label: "Office" },
  { id: "team", label: "Team" },
  { id: "events", label: "Events" },
];

export interface GalleryImage {
  src: string;
  category: GalleryCategory;
  alt: string;
  tall?: boolean;
}

export const galleryImages: GalleryImage[] = [
  { src: "/assets/img/dusk-0_5.jpg", category: "completed", alt: "Completed modern building facade at dusk", tall: true },
  { src: "/assets/img/plan-1_5.jpg", category: "projects", alt: "Architectural planning documentation" },
  { src: "/assets/img/plan-3.jpg", category: "construction", alt: "Construction activity on site" },
  { src: "/assets/img/dusk-2.jpg", category: "completed", alt: "Premium residential building exterior at dusk" },
  { src: "/assets/img/plan-4_5.jpg", category: "projects", alt: "Project site overview" },
  { src: "/assets/img/dusk-3_5.jpg", category: "completed", alt: "Modern architecture against evening sky" },
  { src: "/assets/img/plan-6.jpg", category: "construction", alt: "Structural work under way" },
  { src: "/assets/img/dusk-5.jpg", category: "projects", alt: "Development project at blue hour", tall: true },
  { src: "/assets/img/plan-7_5.jpg", category: "construction", alt: "Site progress documentation" },
  { src: "/assets/img/dusk-6_5.jpg", category: "completed", alt: "Illuminated building facade after completion" },
  { src: "/assets/img/plan-9.jpg", category: "projects", alt: "Project documentation and planning review" },
  { src: "/assets/img/dusk-8.jpg", category: "completed", alt: "City-scale development at night" },
];
