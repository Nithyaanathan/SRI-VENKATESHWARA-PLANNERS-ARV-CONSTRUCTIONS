import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode; // may include <br/> and <em> for gold italics
  intro?: string;
  align?: "left" | "center";
  dark?: boolean; // on bone background
  className?: string;
}

/**
 * Editorial section header:
 * numbered eyebrow → large serif display → optional intro paragraph.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-4 ${alignCls} ${className}`}>
      <Reveal variant="fade">
        <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
          <span aria-hidden className="h-px w-10 bg-gold-600/70" />
          <p className="eyebrow">{eyebrow}</p>
          {align === "center" && <span aria-hidden className="h-px w-10 bg-gold-600/70" />}
        </div>
      </Reveal>
      <Reveal delay={90}>
        <h2
          className={`display-2 text-[clamp(2.1rem,4.6vw,3.9rem)] ${
            dark ? "text-ink-900" : "text-bone-50"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={180}>
          <p className={`max-w-xl text-[15px] leading-relaxed ${dark ? "text-ink-700/80" : "text-mist/85"}`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Serif italic gold accent used inside headings */
export function Gold({ children }: { children: React.ReactNode }) {
  return <em className="font-serif italic text-gold-400">{children}</em>;
}
