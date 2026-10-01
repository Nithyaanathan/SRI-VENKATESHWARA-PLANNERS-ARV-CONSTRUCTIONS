import { useEffect, useState } from "react";

/** Thin gold scroll-progress bar fixed under the navbar. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[55] h-[2px] bg-transparent">
      <div
        className="h-full origin-left bg-gradient-to-r from-gold-700 via-gold-400 to-gold-200 transition-transform duration-100 ease-linear"
        style={{ transform: `scaleX(${progress})`, width: "100%" }}
      />
    </div>
  );
}
