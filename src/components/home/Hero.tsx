import { ArrowDown, ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/site/Logo";
import { SITE } from "@/lib/site-data";

/**
 * Hero: the existing hero video (autoplay, muted, loop) is kept exactly as-is
 * as the full-bleed medium. Everything around it is new.
 */
export function Hero() {
  const src = `https://www.youtube.com/embed/${SITE.heroVideoId}?autoplay=1&mute=1&loop=1&playlist=${SITE.heroVideoId}&controls=0&rel=0&modestbranding=1&playsinline=1&showinfo=0`;

  return (
    <section className="relative">
      <div className="relative h-[calc(100svh-6.5rem)] min-h-[34rem] w-full overflow-hidden bg-navy-deep">
        <iframe
          className="video-cover"
          src={src}
          title="Silverline Prestige School Ghaziabad - Creating Global Citizens since 1987"
          allow="autoplay; encrypted-media; picture-in-picture"
          loading="eager"
        />
        {/* Editorial vignette — keeps the video legible under type */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,oklch(0.2_0.05_262/0.9)_0%,oklch(0.2_0.05_262/0.35)_38%,transparent_65%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.2_0.05_262/0.45),transparent_55%)]" />

        {/* Crest — kept top-right as in the original banner */}
        <div className="absolute right-5 top-5 animate-float md:right-10 md:top-8">
          <LogoMark size={88} className="drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)] md:hidden" />
          <LogoMark size={128} className="hidden drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)] md:block" />
        </div>

        {/* Copy */}
        <div className="container-x absolute inset-x-0 bottom-0 pb-10 md:pb-16">
          <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="eyebrow eyebrow-line text-gold">Silverline Prestige School · Ghaziabad</p>
              <h1 className="display mt-5 max-w-[14ch] text-[2.9rem] text-navy-foreground sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
                Creating <span className="display-italic text-gold">Global Citizens</span> since 1987
              </h1>
            </div>
            <div className="flex flex-col gap-5 lg:items-end lg:pb-2">
              <p className="max-w-sm text-sm leading-relaxed text-navy-foreground/80 md:text-base lg:text-right">
                Playgroup to Class VIII. Three branches. Three decades of “Education Beyond Tomorrow”.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={SITE.admissionHref} className="btn btn-primary">
                  {SITE.admissionLabel} <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="#welcome" className="btn btn-outline-light">
                  Explore the school <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights ribbon */}
      <div className="border-b border-border bg-background">
        <div className="container-x grid grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            ["1987", "Established"],
            ["3", "Branches in Ghaziabad"],
            ["10K+", "Students Empowered"],
            ["100%", "Google Certified Teachers"],
          ].map(([n, l], i) => (
            <div key={l} className={`flex items-baseline gap-3 py-5 md:py-6 ${i % 2 ? "pl-5" : "pr-5"} md:px-6 md:first:pl-0`}>
              <span className="display text-3xl text-primary md:text-4xl">{n}</span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
