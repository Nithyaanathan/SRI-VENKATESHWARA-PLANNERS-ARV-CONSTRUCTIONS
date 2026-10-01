import { Link } from "react-router-dom";
import { navLinks, serviceMenu, site } from "../data/site";
import { Reveal } from "./Reveal";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-gold-600/15 bg-ink-950">
      <div className="container-x py-14 lg:py-16">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <Reveal variant="fade">
            <div>
              <Link to="/" className="inline-flex items-center gap-4" aria-label={`${site.fullName} — Home`}>
                <img src={site.logo} alt={`${site.fullName} logo`} className="h-16 w-auto" />
              </Link>
              <p className="mt-6 font-serif text-xl leading-snug text-bone-100">
                {site.displayName}
                <br />
                <span className="text-gold-400">ARV Constructions</span>
              </p>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist/70">
                Professional planning, CMDA/DTCP approval assistance, joint ventures and construction solutions — Precision Before Permission.
              </p>
            </div>
          </Reveal>

          {/* Quick links */}
          <Reveal variant="fade" delay={80}>
            <nav aria-label="Footer quick links">
              <h3 className="eyebrow">Quick Links</h3>
              <ul className="mt-6 space-y-3">
                {[
                  ...navLinks.filter((l) => !("children" in l && l.children)).map((l) => ({ label: l.label, to: l.to })),
                  { label: "Gallery", to: "/gallery" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="group inline-flex items-center gap-0 text-sm text-mist/75 transition-colors duration-300 hover:text-gold-300"
                    >
                      <span aria-hidden className="mr-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:mr-3 group-hover:w-4" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          {/* Services */}
          <Reveal variant="fade" delay={140}>
            <nav aria-label="Footer services">
              <h3 className="eyebrow">Services</h3>
              <ul className="mt-6 space-y-3">
                {serviceMenu.map((s) => (
                  <li key={s.label}>
                    <Link
                      to={s.to}
                      className="group inline-flex items-center text-sm text-mist/75 transition-colors duration-300 hover:text-gold-300"
                    >
                      <span aria-hidden className="mr-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:mr-3 group-hover:w-4" />
                      {s.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/enquiry" className="group inline-flex items-center text-sm text-mist/75 transition-colors duration-300 hover:text-gold-300">
                    <span aria-hidden className="mr-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:mr-3 group-hover:w-4" />
                    JV Enquiry
                  </Link>
                </li>
              </ul>
            </nav>
          </Reveal>

          {/* Contact */}
          <Reveal variant="fade" delay={200}>
            <div>
              <h3 className="eyebrow">Contact</h3>
              <ul className="mt-6 space-y-4 text-sm text-mist/75">
                <li>Phone: <span className="text-bone-100">{site.contact.phone}</span></li>
                <li>Email: <span className="text-bone-100">{site.contact.email}</span></li>
                <li>Office: <span className="text-bone-100">{site.contact.office}</span></li>
              </ul>
              <ul className="mt-7 flex gap-3">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="inline-flex h-10 items-center border border-gold-600/30 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-mist/70 transition-all duration-300 hover:border-gold-400 hover:text-gold-300"
                      aria-label={s.label}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="hairline-t">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-7 sm:flex-row">
          <p className="text-xs text-mist/50">
            © {year} {site.fullName}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-mist/50 transition-colors hover:text-gold-300">Privacy Policy</a>
            <a href="#" className="text-xs text-mist/50 transition-colors hover:text-gold-300">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
