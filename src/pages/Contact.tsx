import { PageMeta } from "../lib/meta";
import { Reveal } from "../components/Reveal";
import { site } from "../data/site";

const inter = { fontFamily: "var(--font-inter)" } as const;

const channels = [
  {
    label: "Call Us",
    value: site.contact.phone,
    action: "CALL NOW",
    href: site.contact.phoneHref,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: site.contact.whatsapp,
    action: "WHATSAPP US",
    href: site.contact.whatsappHref,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: site.contact.email,
    action: "WRITE TO US",
    href: site.contact.email.includes("@") ? `mailto:${site.contact.email}` : "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
  {
    label: "Office",
    value: site.contact.office,
    action: "GET DIRECTIONS",
    href: site.contact.mapLink,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Contact() {
  PageMeta(
    "Contact",
    "Contact ARV Constructions — call, WhatsApp or visit our office to discuss your next project.",
  );

  return (
    <>
      {/* Top spacer to clear the fixed navbar */}
      <div className="h-24 bg-ink-950" />

      {/* Contact Details */}
      <section className="bg-ink-950 py-14 lg:py-20" aria-label="Contact details">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow !text-gold-400" style={inter}>Get in Touch</p>
              <h1 className="display-2 mt-5 text-4xl text-bone-50 lg:text-5xl">
                We'd Like to Hear <span className="italic text-gold-400">From You.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-mist/70" style={inter}>
                Reach out via any of the channels below. We respond promptly during business hours.
              </p>
            </div>
          </Reveal>

          {/* Cards */}
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 90}>
                <div className="group hairline-y flex h-full flex-col bg-ink-900 p-8 transition-colors duration-500 hover:border-gold-600/40 hover:bg-ink-850" style={inter}>
                  <span className="flex h-12 w-12 items-center justify-center border border-gold-600/25 bg-ink-850 text-gold-500 transition-colors duration-300 group-hover:border-gold-500/50 group-hover:text-gold-400">
                    {c.icon}
                  </span>
                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-mist/50">{c.label}</p>
                  <p className="mt-3 flex-1 min-w-0 text-[17px] font-medium leading-snug text-bone-50" style={{ ...inter, overflowWrap: "anywhere", wordBreak: "break-word" }}>{c.value}</p>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-500 transition-colors duration-300 hover:text-gold-300"
                    aria-label={`${c.action} — ${c.label}`}
                  >
                    {c.action}
                    <span aria-hidden className="h-px w-5 bg-current transition-all duration-300 group-hover:w-8" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Hours */}
          <Reveal delay={400}>
            <p className="mt-12 text-center text-xs uppercase tracking-[0.2em] text-mist/45" style={inter}>
              {site.contact.hours}
            </p>
          </Reveal>
        </div>
      </section>

    </>
  );
}
