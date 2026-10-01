import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Adds `.is-visible` to the element once it enters the viewport.
 * Honors prefers-reduced-motion (CSS handles the instant state).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

interface RevealProps {
  children: ReactNode;
  /** visual variant */
  variant?: "up" | "fade" | "line" | "img";
  delay?: number; // ms
  className?: string;
  as?: "div" | "section" | "li" | "span";
}

export function Reveal({ children, variant = "up", delay = 0, className = "", as = "div" }: RevealProps) {
  const { ref, visible } = useReveal();
  const Tag = as as "div";
  const base =
    variant === "fade"
      ? "reveal-fade"
      : variant === "line"
        ? "reveal-line"
        : variant === "img"
          ? "reveal-img"
          : "reveal";
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${base}${visible ? " is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
