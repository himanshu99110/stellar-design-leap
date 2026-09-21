import { ArrowRight } from "lucide-react";
import { IMG } from "@/lib/images";
import { LINKS } from "@/lib/site-data";

/** Two counter-scrolling photo rails — life at SLPS, no grid of rounded boxes. */
export function GalleryMarquee() {
  const rowA = IMG.gallery.slice(0, 5);
  const rowB = IMG.gallery.slice(5);

  const Rail = ({ items, reverse }: { items: typeof rowA; reverse?: boolean }) => {
    const doubled = [...items, ...items];
    return (
      <div className="overflow-hidden">
        <div className={`marquee-track gap-3 md:gap-4 ${reverse ? "[animation-direction:reverse]" : ""}`}>
          {doubled.map((g, i) => (
            <figure
              key={i}
              className="img-zoom relative h-44 w-56 shrink-0 md:h-64 md:w-80"
              style={{ transform: i % 2 ? "translateY(10px)" : undefined }}
            >
              <img src={g.src} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="overflow-hidden py-20 md:py-28">
      <div className="container-x mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow eyebrow-line">SLPS Gallery</p>
          <h2 className="display mt-5 text-4xl sm:text-5xl">
            Life at <span className="display-italic text-primary">Silverline</span>
          </h2>
        </div>
        <a href={LINKS.gallery} className="group inline-flex items-center gap-3 text-sm font-bold">
          View the full gallery
          <span className="grid h-11 w-11 place-items-center bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
            <ArrowRight className="h-4 w-4" />
          </span>
        </a>
      </div>
      <div className="space-y-3 md:space-y-4">
        <Rail items={rowA} />
        <Rail items={rowB} reverse />
      </div>
    </section>
  );
}
