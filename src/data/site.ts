/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — single source of truth
 *  Updated with verified client information for ARV Constructions.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "ARV",
  nameLine2: "Constructions",
  fullName: "ARV Constructions",
  shortName: "ARV",
  displayName: "SRI VENKATESHWARA PLANNERS",
  tagline: "Precision Before Permission",

  logo: "/assets/logo.png",

  contact: {
    phone: "9841240029",
    phoneHref: "tel:+919841240029",
    whatsapp: "8925267752",
    whatsappHref: "https://wa.me/918925267752",
    whatsappAlt: "9841240029",
    whatsappAltHref: "https://wa.me/919841240029",
    email: "arvcontsructions@gmail.com",
    office: "1B, Kamalam Nagar, Kolathur, Chennai 600099",
    hours: "Mon – Sat: 9:00 AM – 7:00 PM",
    areas: "Chennai, Tiruvallur, Kanchipuram, Coimbatore, Madurai",
    mapEmbedUrl: "",
    mapLink: "https://maps.google.com/?q=Kamalam+Nagar+Kolathur+Chennai+600099",
  },

  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],

  stats: [
    { value: 23, suffix: "+", label: "Years Experience" },
    { value: 120, suffix: "+", label: "Projects" },
    { value: 80, suffix: "+", label: "Clients" },
    { value: 12, suffix: "+", label: "Ongoing Projects" },
  ],
} as const;

export type Stat = (typeof site.stats)[number];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services/planning-approvals", children: true },
  { label: "Projects", to: "/projects" },
  { label: "Joint Ventures", to: "/services/joint-ventures" },
  { label: "Contact", to: "/contact" },
] as const;

export const serviceMenu = [
  {
    label: "Planning & Approvals",
    to: "/services/planning-approvals",
    desc: "CMDA/DTCP approvals, building plans & documentation",
  },
  {
    label: "Construction",
    to: "/services/construction",
    desc: "Residential & commercial construction solutions",
  },
] as const;
