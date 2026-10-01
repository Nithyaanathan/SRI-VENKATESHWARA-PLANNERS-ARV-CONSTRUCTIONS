import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

type EnquiryType = "planning" | "construction" | "jv" | null;
type Status = "idle" | "submitting" | "success" | "error";

interface FieldDef {
  name: string;
  label: string;
  type?: "text" | "tel" | "email" | "date" | "select" | "textarea";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  half?: boolean;
}

const typeChoices: { id: Exclude<EnquiryType, null>; label: string; desc: string }[] = [
  { id: "planning", label: "Planning", desc: "Plans, documentation & approval assistance" },
  { id: "construction", label: "Construction", desc: "Residential / commercial construction" },
  { id: "jv", label: "Joint Venture", desc: "Landowner development partnership" },
];

const forms: Record<Exclude<EnquiryType, null>, { title: string; fields: FieldDef[] }> = {
  planning: {
    title: "Planning Enquiry",
    fields: [
      { name: "name", label: "Full Name", required: true, half: true },
      { name: "phone", label: "Phone", type: "tel", required: true, half: true },
      { name: "location", label: "Site Location", required: true, half: true },
      {
        name: "propertyType",
        label: "Property Type",
        type: "select",
        required: true,
        half: true,
        options: ["Residential Plot", "Residential Building", "Commercial Plot", "Commercial Building", "Agricultural Land", "Other"],
      },
      { name: "area", label: "Land / Building Area", placeholder: "e.g. 40 × 60 ft plot / 2,400 sq.ft", half: true },
      {
        name: "requirement",
        label: "Requirement",
        type: "select",
        half: true,
        options: ["Building Plan Preparation", "Approval Assistance", "Complete Planning Package", "Not Sure — Need Guidance"],
      },
      { name: "message", label: "Message", type: "textarea", placeholder: "Briefly describe your requirement…" },
    ],
  },
  construction: {
    title: "Construction Enquiry",
    fields: [
      { name: "name", label: "Full Name", required: true, half: true },
      { name: "phone", label: "Phone", type: "tel", required: true, half: true },
      { name: "location", label: "Location", required: true, half: true },
      {
        name: "propertyType",
        label: "Property Type",
        type: "select",
        required: true,
        half: true,
        options: ["Residential", "Commercial", "Industrial", "Renovation", "Other"],
      },
      { name: "area", label: "Approximate Area", placeholder: "e.g. 1,800 sq.ft", half: true },
      {
        name: "budget",
        label: "Budget Range",
        type: "select",
        half: true,
        options: ["Under ₹25 Lakh", "₹25 – 50 Lakh", "₹50 Lakh – 1 Crore", "₹1 – 5 Crore", "Above ₹5 Crore", "Prefer to Discuss"],
      },
      { name: "requirement", label: "Construction Requirement", placeholder: "e.g. Ground + 2 floors residential building", required: true, half: true },
      { name: "startDate", label: "Expected Start Date", type: "date", half: true },
      { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your project…" },
    ],
  },
  jv: {
    title: "JV Enquiry",
    fields: [
      { name: "name", label: "Full Name", required: true, half: true },
      { name: "phone", label: "Phone", type: "tel", required: true, half: true },
      { name: "landLocation", label: "Land Location", required: true, half: true },
      { name: "landArea", label: "Land Area", placeholder: "e.g. 6,000 sq.ft / 3 grounds", required: true, half: true },
      {
        name: "propertyType",
        label: "Property Type",
        type: "select",
        required: true,
        half: true,
        options: ["Residential Land", "Commercial Land", "Agricultural Land (convertible)", "Existing Structure", "Other"],
      },
      {
        name: "documents",
        label: "Documents Available",
        type: "select",
        half: true,
        options: ["Patta & EC Ready", "Title Deed Only", "Partial Documentation", "Need Guidance on Documents"],
      },
      { name: "requirement", label: "Development Requirement", type: "textarea", placeholder: "Describe your land and development intent…" },
      { name: "attachment", label: "Document Upload (Optional)", type: "text", placeholder: "Attach via email after submission — file upload connects with backend later" },
    ],
  },
};

const inputCls =
  "w-full border border-ink-600 bg-ink-850 px-4 py-3.5 text-sm text-bone-100 placeholder:text-mist/40 transition-colors duration-300 focus:border-gold-500 focus:outline-none";

/**
 * Smart enquiry system:
 * Step 1 — choose intent → Step 2 — tailored validated form.
 * Submission is simulated; wire `submitEnquiry()` to a real
 * API / email service when backend configuration is provided.
 */
export function EnquiryForm() {
  const [type, setType] = useState<EnquiryType>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const def = type ? forms[type] : null;

  async function submitEnquiry(payload: Record<string, string>) {
    // ── BACKEND INTEGRATION POINT ──
    // Replace this simulation with a fetch() to your API /
    // email service (Formspree, EmailJS, custom endpoint…).
    return new Promise<void>((resolve, reject) =>
      setTimeout(() => (Object.values(payload).some((v) => v.trim()) ? resolve() : reject()), 1400),
    );
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!def) return;
    const data = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    const errs: Record<string, string> = {};

    for (const f of def.fields) {
      const v = String(data.get(f.name) ?? "").trim();
      payload[f.name] = v;
      if (f.required && !v) errs[f.name] = `${f.label} is required`;
      if (f.type === "tel" && v && !/^[\d\s+()-]{7,15}$/.test(v)) errs[f.name] = "Enter a valid phone number";
    }

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    submitEnquiry({ type: type ?? "", ...payload })
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  }

  /* ── Success state ── */
  if (status === "success") {
    return (
      <div className="hairline-y blueprint-grid flex min-h-[420px] flex-col items-center justify-center bg-ink-900 px-8 py-20 text-center">
        <span className="flex h-16 w-16 items-center justify-center border border-gold-500 text-gold-400">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
            <path d="M4 13.5l6 6L22 7" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
        <h3 className="display-2 mt-8 text-3xl text-bone-50">Enquiry Received.</h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-mist/80">
          Thank you. Our team will review your {type === "jv" ? "joint venture" : type} enquiry and respond shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setType(null);
          }}
          className="mt-10 border border-gold-600/60 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.24em] text-gold-300 transition-colors hover:border-gold-300"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  /* ── Step 1 — choose intent ── */
  if (!def) {
    return (
      <div className="hairline-y blueprint-grid bg-ink-900 px-6 py-14 md:px-12 md:py-16">
        <Reveal>
          <h3 className="display-2 text-center text-[clamp(1.6rem,3vw,2.4rem)] text-bone-50">
            What are you looking for?
          </h3>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {typeChoices.map((c, i) => (
            <Reveal key={c.id} delay={i * 100}>
              <button
                type="button"
                onClick={() => setType(c.id)}
                className="group hairline-y flex h-full w-full flex-col items-start bg-ink-850/60 p-8 text-left transition-all duration-400 hover:bg-gold-500/[0.07] hover:shadow-[inset_0_0_0_1px_rgba(198,161,91,0.45)]"
              >
                <span className="font-serif text-3xl text-gold-600 transition-colors group-hover:text-gold-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-6 font-serif text-2xl text-bone-50">{c.label}</span>
                <span className="mt-2 text-[13px] leading-relaxed text-mist/70">{c.desc}</span>
                <span
                  aria-hidden
                  className="mt-6 h-px w-8 bg-gold-600 transition-all duration-400 group-hover:w-full group-hover:bg-gold-400"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    );
  }

  /* ── Step 2 — dynamic form ── */
  return (
    <form onSubmit={onSubmit} noValidate className="hairline-y bg-ink-900 px-6 py-14 md:px-12 md:py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="eyebrow">{def.title}</h3>
        <button
          type="button"
          onClick={() => setType(null)}
          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mist/60 transition-colors hover:text-gold-300"
        >
          ← Change Requirement
        </button>
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-7 sm:grid-cols-2">
        {def.fields.map((f) => (
          <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
            <label htmlFor={`eq-${f.name}`} className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-mist/70">
              {f.label} {f.required && <span className="text-gold-500">*</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea id={`eq-${f.name}`} name={f.name} rows={4} placeholder={f.placeholder} className={`${inputCls} resize-none`} aria-invalid={!!errors[f.name]} />
            ) : f.type === "select" ? (
              <select id={`eq-${f.name}`} name={f.name} className={`${inputCls} appearance-none`} defaultValue="" aria-invalid={!!errors[f.name]}>
                <option value="" disabled>Select…</option>
                {f.options?.map((o) => (
                  <option key={o} value={o} className="bg-ink-850">
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input id={`eq-${f.name}`} name={f.name} type={f.type ?? "text"} placeholder={f.placeholder} className={inputCls} aria-invalid={!!errors[f.name]} />
            )}
            {errors[f.name] && <p role="alert" className="mt-2 text-xs text-red-400/90">{errors[f.name]}</p>}
          </div>
        ))}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-8 border border-red-400/30 bg-red-950/30 px-5 py-4 text-sm text-red-300">
          Something went wrong while submitting. Please try again.
        </p>
      )}

      <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-mist/50">
          By submitting, you agree to be contacted regarding your enquiry. Your details are never shared.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group relative inline-flex items-center gap-3 overflow-hidden border border-gold-500 bg-gold-500 px-9 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-ink-950 transition-colors duration-300 disabled:cursor-wait disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
                <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              Submitting…
            </>
          ) : (
            <>
              Submit Enquiry
              <span aria-hidden className="h-px w-6 bg-current transition-all duration-300 group-hover:w-9" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
