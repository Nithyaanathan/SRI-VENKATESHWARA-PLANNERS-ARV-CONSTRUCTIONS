import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, serviceMenu, site } from "../data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu
  const [dropOpen, setDropOpen] = useState(false);
  const dropTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus on route change
  useEffect(() => {
    setOpen(false);
    setDropOpen(false);
  }, [location.pathname]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Esc closes mobile menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const servicesActive = location.pathname.startsWith("/services");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
          scrolled || open
            ? "bg-ink-950/92 backdrop-blur-md border-b border-gold-600/15 py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-4 shrink-0" aria-label={`${site.fullName} — Home`}>
            <img
              src={site.logo}
              alt={`${site.fullName} logo`}
              className={`w-auto transition-all duration-500 ${scrolled ? "h-11" : "h-14"}`}
            />
            <span className="hidden lg:flex flex-col leading-tight">
              <span className="font-serif text-[13px] text-bone-100 tracking-[0.12em]">
                {site.displayName}
              </span>
              <span className="font-serif text-[11px] text-gold-400 tracking-[0.18em] uppercase">
                ARV Constructions
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-9">
              {navLinks.map((link) =>
                "children" in link && link.children ? (
                  <li
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => {
                      if (dropTimer.current) window.clearTimeout(dropTimer.current);
                      setDropOpen(true);
                    }}
                    onMouseLeave={() => {
                      dropTimer.current = window.setTimeout(() => setDropOpen(false), 140);
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setDropOpen((v) => !v)}
                      aria-expanded={dropOpen}
                      aria-haspopup="true"
                      className={`flex items-center gap-2 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                        servicesActive ? "text-gold-400" : "text-bone-100/85 hover:text-gold-300"
                      }`}
                    >
                      {link.label}
                      <svg
                        width="9"
                        height="6"
                        viewBox="0 0 9 6"
                        fill="none"
                        aria-hidden
                        className={`transition-transform duration-300 ${dropOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute left-1/2 top-full w-[340px] -translate-x-1/2 pt-4 transition-all duration-300 ${
                        dropOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2"
                      }`}
                    >
                      <div className="border border-gold-600/25 bg-ink-900/97 backdrop-blur-md shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
                        {serviceMenu.map((s, i) => (
                          <NavLink
                            key={s.label}
                            to={s.to}
                            end
                            className={({ isActive }) =>
                              `group block px-7 py-5 transition-colors duration-300 hover:bg-gold-500/[0.06] ${
                                i > 0 ? "border-t border-gold-600/12" : ""
                              } ${isActive ? "bg-gold-500/[0.08]" : ""}`
                            }
                          >
                            <span className="flex items-center justify-between">
                              <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-bone-100 group-hover:text-gold-200">
                                {s.label}
                              </span>
                              <span
                                aria-hidden
                                className="h-px w-4 bg-gold-500 transition-all duration-300 group-hover:w-7"
                              />
                            </span>
                            <span className="mt-1.5 block text-xs leading-relaxed text-mist/70">
                              {s.desc}
                            </span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) =>
                        `relative py-2 text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-gold-400 after:transition-all after:duration-300 ${
                          isActive
                            ? "text-gold-400 after:w-full"
                            : "text-bone-100/85 after:w-0 hover:text-gold-300 hover:after:w-full"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Right cluster */}
          <div className="hidden xl:block">
            <Link
              to="/enquiry"
              className="group relative inline-flex items-center gap-3 border border-gold-600/60 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.26em] text-bone-100 overflow-hidden transition-colors duration-500 hover:text-ink-950"
            >
              <span className="absolute inset-0 bg-gold-500 translate-y-full transition-transform duration-400 ease-out group-hover:translate-y-0" />
              <span className="relative">Get a Consultation</span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="xl:hidden relative z-[60] flex h-11 w-11 items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-4 w-7">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-bone-100 transition-all duration-300 ${
                  open ? "top-1/2 rotate-45 bg-gold-400" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-full bg-bone-100 transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                aria-hidden
                className={`absolute bottom-0 left-0 h-px w-2/3 bg-gold-400 transition-all duration-300 ${
                  open ? "bottom-[calc(50%-1px)] w-full -rotate-45 bg-gold-400" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* ── Mobile fullscreen menu ── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-ink-950 transition-all duration-500 xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mt-28 flex-1 overflow-y-auto">
          <nav aria-label="Mobile primary" className="container-x pb-10">
            <ul className="flex flex-col">
              {navLinks.map((link, i) =>
                "children" in link && link.children ? (
                  <li key={link.label} className="border-b border-gold-600/12">
                    <span className="block py-4 font-serif text-4xl text-bone-50">{link.label}</span>
                    <ul className="mb-4 ml-1 flex flex-col gap-2 border-l border-gold-600/25 pl-5">
                      {serviceMenu.map((s) => (
                        <li key={s.label}>
                          <Link
                            to={s.to}
                            className="block py-1.5 text-sm uppercase tracking-[0.18em] text-mist/80 transition-colors hover:text-gold-300"
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={link.label} className="border-b border-gold-600/12">
                    <Link
                      to={link.to}
                      className="hero-rise block py-4 font-serif text-4xl text-bone-50 transition-colors hover:text-gold-300"
                      style={{ animationDelay: `${80 + i * 60}ms` }}
                      tabIndex={open ? 0 : -1}
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <div className="mt-10 hero-rise" style={{ animationDelay: "480ms" }}>
              <Link
                to="/enquiry"
                tabIndex={open ? 0 : -1}
                className="inline-flex items-center gap-3 border border-gold-500 bg-gold-500 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-ink-950"
              >
                Get a Consultation
                <span aria-hidden className="h-px w-6 bg-current" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
