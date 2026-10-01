export interface ServiceItem {
  id: string;
  title: string;
  blurb: string;
}

/* ── Planning & Approvals ── */
export const planningServices: ServiceItem[] = [
  { id: "cmda-planning", title: "CMDA Planning Permission", blurb: "Complete CMDA planning permission assistance — from initial feasibility assessment through application, scrutiny, objection response and approval handover." },
  { id: "cmda-building-plan", title: "Building Plan Approval & Submission", blurb: "Building plan approval support, application preparation, submission coordination and status tracking." },
  { id: "cmda-building-permit", title: "Building Permit Coordination", blurb: "Building permit application preparation, submission and follow-up coordination." },
  { id: "cmda-residential", title: "Residential Planning Approvals", blurb: "Planning approvals for individual houses, villas, apartments, stilt + floor buildings and residential redevelopment projects." },
  { id: "cmda-commercial", title: "Commercial Development Approvals", blurb: "Planning approvals for offices, shops, showrooms, business establishments and mixed-use buildings." },
  { id: "cmda-multi-storey", title: "Multi-Storeyed & Group Development", blurb: "Approval coordination for multi-storeyed developments, group developments and special buildings." },
  { id: "cmda-layout", title: "Layout & Land Development", blurb: "Layout and land-development approval assistance for larger development proposals." },
  { id: "cmda-developer-cert", title: "CMDA Developer Certificate", blurb: "CMDA developer certificate registration assistance and documentation." },
  { id: "cmda-zone-conversion", title: "CMDA Zone Conversion", blurb: "CMDA zone conversion applications and coordination." },
  { id: "cmda-institution", title: "CMDA Institution Approval", blurb: "CMDA institution approval applications for educational and institutional projects." },
  { id: "cmda-industrial", title: "CMDA Industrial Approval", blurb: "CMDA industrial approval applications for industrial and warehousing projects." },
  { id: "cmda-compliance", title: "Planning Rule Compliance Review", blurb: "Planning and development rule compliance review, regularisation and compliance assistance." },
  { id: "cmda-objection", title: "Objection Response Coordination", blurb: "Scrutiny and objection response coordination with planning authorities." },
  { id: "cmda-revise", title: "Approval Revision & Resubmission", blurb: "Approval revision and resubmission coordination when modifications are required." },
  { id: "cmda-noc", title: "NOC & Departmental Clearance", blurb: "Required NOC coordination across all relevant departments — CMRL, Fire, CMWSSB, TNPCB, Electricity, Revenue and Highways." },
  { id: "cmda-stalled", title: "Existing & Stalled Application Review", blurb: "Review and recovery of existing or stalled planning applications." },
  { id: "cmda-documentation", title: "Documentation & Final Handover", blurb: "Approval documentation, verification and final handover coordination." },
  { id: "dtcp-approval", title: "DTCP Approval", blurb: "DTCP land and building approval coordination including zone conversion support." },
  { id: "rera", title: "RERA Registration", blurb: "RERA registration guidance and documentation support for applicable projects." },
  { id: "gcc-approval", title: "Chennai Corporation Approval", blurb: "Greater Chennai Corporation building permit and approval coordination." },
  { id: "arch-elevation", title: "Architect 3D Elevation", blurb: "Architectural elevation design and 3D visualization for planning submissions." },
  { id: "structural", title: "Structural Designing", blurb: "Structural design coordination and drawing preparation." },
  { id: "soil-test", title: "Soil Test & Geotech", blurb: "Soil testing, geotechnical engineering and geotech apex survey services." },
  { id: "single-window", title: "Single Window Clearance", blurb: "All NOC coordination through single window clearance process." },
  { id: "feasibility", title: "Pre-Approval Feasibility Assessment", blurb: "Pre-approval feasibility assessment, site and development potential assessment before committing to the approval pathway." },
  { id: "drawing", title: "Approval-Oriented Drawings", blurb: "Site plans, floor plans, elevations, sections, parking, setbacks, FSI statements and structural drawing coordination — organised around actual approval requirements." },
];

/** Related approval services shown together as one planning point. */
export const planningServiceGroups = [
  { id: "planning-building", numbers: [1, 2, 3, 4], title: "Planning & Building Permission" },
  { id: "development-approvals", numbers: [5, 6, 9, 10, 11, 12], title: "Development & Compliance Approvals" },
  { id: "land-development", numbers: [7, 8], title: "Layout & Land Development" },
  { id: "application-support", numbers: [13], title: "Application Support" },
  { id: "clearance-handover", numbers: [14, 15, 16, 17, 19], title: "Clearance, Revision & Handover" },
  {
    id: "dtcp-building-land",
    numbers: [18, 20],
    title: "DTCP, Building & Land Approvals",
    blurb: "DTCP zone conversion, building approval, land approval, land layout, NOC, layout approval and constitution building.",
  },
  { id: "design-coordination", numbers: [21, 22, 23, 24], title: "Design & Technical Coordination" },
  { id: "feasibility-drawings", numbers: [25, 26], title: "Feasibility & Approval-Oriented Drawings" },
] as const;

export const planningProcess = [
  { step: "01", title: "Site & Project Assessment", desc: "Evaluate the site and understand project requirements." },
  { step: "02", title: "Feasibility & Approval Review", desc: "Assess feasibility and applicable approval pathways." },
  { step: "03", title: "Planning & Drawing Coordination", desc: "Develop plans and drawings aligned with regulatory norms." },
  { step: "04", title: "Documentation & Verification", desc: "Prepare and verify all required documents and records." },
  { step: "05", title: "Application & Submission", desc: "Prepare and submit applications to the relevant authorities." },
  { step: "06", title: "Scrutiny & Objection Management", desc: "Coordinate through scrutiny and address any objections." },
  { step: "07", title: "Approval & Handover", desc: "Track status through to approval and complete handover." },
];

/* ── Joint Ventures ── */
export const jvWhy = [
  { title: "Property Evaluation", desc: "Thorough assessment of land value, potential and development suitability." },
  { title: "Feasibility Study", desc: "Detailed feasibility analysis to determine the optimal development approach." },
  { title: "Planning Expertise", desc: "Professionally planned developments from day one, aligned with regulations." },
  { title: "Approval Assistance", desc: "Guidance through all applicable approval processes for the project." },
  { title: "Construction Capability", desc: "In-house execution from approved plan to finished structure." },
  { title: "End-to-End Delivery", desc: "A single accountable partner from concept through completion and settlement." },
];

export const jvProcess = [
  "Property Evaluation",
  "Feasibility Assessment",
  "JV Proposal",
  "Agreement & Due Diligence",
  "Planning & Approvals",
  "Project Development",
  "Completion & Settlement",
];

/* ── Construction ── */
export const constructionServices: ServiceItem[] = [
  { id: "residential", title: "Residential Construction", blurb: "Individual houses, villas, independent residential buildings and apartments — built to approved plans and quality standards." },
  { id: "apartments", title: "Apartment Projects", blurb: "Multi-unit residential apartment projects from foundation to finish, executed with structural discipline." },
  { id: "commercial", title: "Commercial Construction", blurb: "Offices, shops, showrooms, business establishments and commercial buildings with finish quality." },
  { id: "mixed-use", title: "Mixed-Use Developments", blurb: "Combined residential and commercial building projects with coordinated planning and execution." },
  { id: "turnkey", title: "Turnkey Construction", blurb: "Complete delivery under one contract — planning to handover, one point of responsibility." },
  { id: "stilt-floor", title: "Stilt + Floor Developments", blurb: "Stilt parking plus multi-floor residential and mixed-use building construction." },
  { id: "redevelopment", title: "Redevelopment Projects", blurb: "Rebuilding and redeveloping existing properties with modern standards and approved plans." },
  { id: "renovation", title: "Renovation", blurb: "Upgrading and restoring existing structures with care and precision." },
  { id: "interiors", title: "Interior Works", blurb: "Functional, refined interior execution for residential and commercial spaces." },
  { id: "pm", title: "Project Management", blurb: "Planning, monitoring and coordinating every trade on site for timely delivery." },
  { id: "layout-dev", title: "Layout & Development", blurb: "Layout development and land development proposals for larger projects." },
];

export const constructionProcess = [
  "Consultation",
  "Planning & Design",
  "Estimation",
  "Approvals",
  "Construction",
  "Quality Check",
  "Handover",
];

/* ── Why choose us (editorial) ── */
export const whyChooseUs = [
  { num: "01", title: "Early Feasibility Assessment", desc: "We assess feasibility upfront — identifying issues early so your approval process starts strong." },
  { num: "02", title: "Approval-Focused Planning", desc: "Plans and documentation prepared with regulatory awareness, reducing avoidable delays during scrutiny." },
  { num: "03", title: "Detailed Document Checking", desc: "Thorough verification of documents before submission — fewer objections, faster progress." },
  { num: "04", title: "Single-Point Coordination", desc: "One accountable partner for planning, approvals, development and construction." },
  { num: "05", title: "Transparent Tracking", desc: "Clear communication at every stage — you always know where your project stands." },
];

/* ── Our process (cinematic timeline) ── */
export const ourProcess = [
  { num: "01", title: "Discover", desc: "Understand your property, requirements and applicable regulations." },
  { num: "02", title: "Plan", desc: "Develop appropriate planning and design approach." },
  { num: "03", title: "Approve", desc: "Assist with documentation, submission and approval coordination." },
  { num: "04", title: "Develop", desc: "Execute through construction or JV as applicable." },
  { num: "05", title: "Deliver", desc: "Complete the project and hand over with confidence." },
];

/* ── Authorities coordinated ── */
export const authorities = [
  "CMDA (Chennai Metropolitan Development Authority)",
  "Greater Chennai Corporation (GCC)",
  "DTCP (Directorate of Town and Country Planning)",
  "CMWSSB (Chennai Metropolitan Water Supply and Sewerage Board)",
  "Fire & Rescue Services",
  "TNPCB (Tamil Nadu Pollution Control Board)",
  "Electricity Authorities",
  "Revenue Authorities",
  "Highways / Road Authorities",
];
