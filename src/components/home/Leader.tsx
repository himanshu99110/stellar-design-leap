import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/images";
import { LINKS } from "@/lib/site-data";

export function Leader() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Portrait with editorial caption */}
        <div className="relative lg:col-span-5">
          <Reveal variant="mask" className="img-zoom img-tone relative aspect-[4/5]">
            <img src={IMG.drMala} alt="Dr Mala Kapoor, Founder and Principal of SLPS" className="h-full w-full object-cover object-top" />
          </Reveal>
          <Reveal delay={300} className="absolute -bottom-6 -right-3 bg-navy px-6 py-5 text-navy-foreground sm:right-8">
            <p className="eyebrow text-gold">Travelled to</p>
            <p className="display text-4xl">60+ countries</p>
            <p className="mt-1 text-xs text-navy-foreground/70">incl. an expedition to Antarctica</p>
          </Reveal>
        </div>

        {/* Words */}
        <div className="lg:col-span-7 lg:pl-8">
          <Reveal>
            <p className="eyebrow eyebrow-line">Our Leader at Silverline Prestige School</p>
            <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">Dr Mala Kapoor</h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Founder & Principal</p>
          </Reveal>

          <Reveal delay={150}>
            <blockquote className="relative mt-10 border-l-2 border-primary pl-6 md:pl-8">
              <p className="display-italic text-3xl leading-tight text-foreground sm:text-4xl">
                “Whatever we learn with pleasure, we learn faster and forever”
              </p>
              <footer className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">— Dr Mala Kapoor</footer>
            </blockquote>
          </Reveal>

          <Reveal delay={250} className="mt-10 grid gap-6 text-[0.98rem] leading-[1.75] text-foreground/85 md:grid-cols-2">
            <p>
              <span className="text-primary">Dr Mala Kapoor</span>, Founder and Principal of SLPS can only be described as
              a ‘sui generis’ personality notable for her numerous achievements. A leading light in the field of
              education her contributions have been far-reaching in bringing upon an invigorating academic change.
            </p>
            <p>
              A globetrotter with the aim to imbibe invaluable lessons through exploring, Dr Kapoor has travelled to more
              than 60 countries and is the only educationalist to have gone on an expedition to Antarctica.
            </p>
          </Reveal>

          <Reveal delay={350} className="mt-10">
            <a href={LINKS.founder} className="btn btn-outline">
              Founder’s Message <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
