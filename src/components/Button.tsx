import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

const styles: Record<Variant, string> = {
  solid:
    "bg-gold-500 text-ink-950 hover:bg-gold-300 border border-gold-500 hover:border-gold-300",
  outline:
    "bg-transparent text-bone-100 border border-gold-600/60 hover:border-gold-400 hover:text-gold-200",
  ghost: "bg-transparent text-stone-warm hover:text-gold-300 border border-transparent",
};

const base =
  "group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] transition-all duration-300 ease-out cursor-pointer select-none";

export function Button({
  children,
  to,
  href,
  variant = "solid",
  className = "",
  onClick,
  type = "button",
  disabled,
  ariaLabel,
}: ButtonProps) {
  const cls = `${base} ${styles[variant]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block h-px w-6 bg-current opacity-70 transition-all duration-300 ease-out group-hover/btn:w-9"
      />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
