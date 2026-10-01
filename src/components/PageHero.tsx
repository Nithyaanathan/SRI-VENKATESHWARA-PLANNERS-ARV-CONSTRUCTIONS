import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image?: string;
}

/** Inner-page banner — quiet, editorial, blueprint grid + optional imagery. */
export function PageHero({ eyebrow, title, intro, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-28 pb-14 lg:pt-36 lg:pb-16">
      {image && (
        <>
          <img src={image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-[0.22]" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/55 to-ink-950" />
        </>
      )}
      <div className="blueprint-grid absolute inset-0 opacity-70" aria-hidden />
      <div className="container-x relative">
        <Reveal variant="fade">
          <div className="flex items-center gap-4">
            <span aria-hidden className="h-px w-12 bg-gold-500" />
            <p className="eyebrow">{eyebrow}</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="display-2 mt-7 max-w-3xl text-[clamp(2.1rem,4.6vw,3.9rem)] text-bone-50">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-mist/85">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
