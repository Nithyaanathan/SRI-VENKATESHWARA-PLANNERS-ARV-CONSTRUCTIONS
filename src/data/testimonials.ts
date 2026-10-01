/**
 * ─────────────────────────────────────────────────────────────
 *  TESTIMONIALS — No fake testimonials published.
 *  Real client testimonials to be added as confirmed.
 * ─────────────────────────────────────────────────────────────
 */

export interface Testimonial {
  name: string;
  project: string;
  quote: string | null;
}

export const testimonials: Testimonial[] = [];

/**
 * ── TEAM — Founder profile from confirmed client data ──
 */
export const team = [
  {
    name: "R.C. Raviraj",
    role: "Founder & Managing Director",
    photo: null as string | null,
    bio: "With over 23 years of expertise in building planning, approvals and construction, R.C. Raviraj leads ARV Constructions with a vision to make building approvals faster, clearer, and more predictable. A qualified engineer (B.E.), he brings deep knowledge of CMDA, DTCP and GCC approval processes to every project.",
  },
];
