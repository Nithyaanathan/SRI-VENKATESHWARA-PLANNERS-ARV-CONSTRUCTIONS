import { useCallback, useEffect } from "react";

interface LightboxProps {
  images: string[];
  index: number;
  alt?: string;
  onClose: () => void;
  onNavigate: (i: number) => void;
}

/** Fullscreen image viewer with keyboard navigation. */
export function Lightbox({ images, index, alt = "Gallery image", onClose, onNavigate }: LightboxProps) {
  const prev = useCallback(() => onNavigate((index - 1 + images.length) % images.length), [index, images.length, onNavigate]);
  const next = useCallback(() => onNavigate((index + 1) % images.length), [index, images.length, onNavigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-950/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      {/* close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close viewer"
        className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center border border-gold-600/40 text-bone-100 transition-colors hover:border-gold-400 hover:text-gold-300"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>

      {/* prev / next */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-gold-600/40 text-bone-100 transition-colors hover:border-gold-400 hover:text-gold-300 md:left-8"
          >
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden><path d="M6 1L1 6l5 5M1 6h16" stroke="currentColor" strokeWidth="1.3" /></svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-gold-600/40 text-bone-100 transition-colors hover:border-gold-400 hover:text-gold-300 md:right-8"
          >
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden><path d="M12 1l5 5-5 5M17 6H1" stroke="currentColor" strokeWidth="1.3" /></svg>
          </button>
        </>
      )}

      <figure onClick={(e) => e.stopPropagation()} className="max-h-[86vh] max-w-[88vw]">
        <img
          src={images[index]}
          alt={alt}
          className="max-h-[80vh] w-auto max-w-full object-contain shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
        />
        <figcaption className="mt-4 text-center text-xs tracking-[0.2em] text-mist/60">
          {index + 1} / {images.length}
        </figcaption>
      </figure>
    </div>
  );
}
