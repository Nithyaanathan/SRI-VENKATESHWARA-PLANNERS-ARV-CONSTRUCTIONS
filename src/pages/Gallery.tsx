import { useState } from "react";
import { PageMeta } from "../lib/meta";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/PageHero";
import { Lightbox } from "../components/Lightbox";
import { galleryFilters, galleryImages, type GalleryCategory } from "../data/gallery";

export default function Gallery() {
  PageMeta("Gallery", "A visual gallery of our projects, construction work and completed buildings.");

  const [active, setActive] = useState<GalleryCategory | "all">("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const images = active === "all" ? galleryImages : galleryImages.filter((g) => g.category === active);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Work, In <em className="italic text-gold-400">Detail.</em>
          </>
        }
        intro="Projects, construction progress and completed buildings — showcasing our work across planning, construction and joint venture developments."
        image="/assets/img/plan-9.jpg"
      />

      <section className="hairline-t bg-ink-900 py-14 lg:py-20" aria-label="Gallery grid">
        <div className="container-x">
          {/* Filters */}
          <Reveal variant="fade" className="flex flex-wrap gap-2.5">
            {galleryFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                aria-pressed={active === f.id}
                className={`border px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] transition-all duration-300 ${
                  active === f.id
                    ? "border-gold-500 bg-gold-500 text-ink-950"
                    : "border-gold-600/25 text-mist/70 hover:border-gold-600/60 hover:text-gold-300"
                }`}
              >
                {f.label}
              </button>
            ))}
          </Reveal>

          {/* Masonry-style grid */}
          <div key={active} className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {images.map((g, i) => (
              <Reveal key={g.src} variant="fade" delay={(i % 3) * 80}>
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  className={`img-zoom-wrap group relative block w-full overflow-hidden focus-visible:outline-none ${g.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                  aria-label={`Open image: ${g.alt}`}
                >
                  <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
                  <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span
                    aria-hidden
                    className="absolute bottom-4 left-4 translate-y-2 border border-gold-500/60 bg-ink-950/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-gold-300 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    View
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <Lightbox
          images={images.map((g) => g.src)}
          index={lightbox}
          alt={images[lightbox]?.alt}
          onClose={() => setLightbox(null)}
          onNavigate={setLightbox}
        />
      )}
    </>
  );
}
