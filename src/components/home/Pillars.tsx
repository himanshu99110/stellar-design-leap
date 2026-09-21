import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { LINKS } from "@/lib/site-data";

const PILLARS = [
  {
    n: "01",
    title: "Academia",
    href: LINKS.academia,
    body: "Our curriculum has been developed by extensive research and experience that skillfully integrates different subjects along with focusing on the enhancement of skills like Creative Thinking, Problem Solving, Critical Thinking, etc.",
  },
  {
    n: "02",
    title: "Co-Scholastics",
    href: LINKS.coScholastics,
    body: "Character Building starts at an early age. A child’s environment and the behaviour of others around him influence his personality. SLPS prides itself in providing a conducive environment for a child to prosper into a confident and responsible individual.",
  },
  {
    n: "03",
    title: "The SLPS Way",
    href: LINKS.slpsWay,
    body: "At Silverline, we have always believed in providing enriching experiences beyond academics which results in holistic development of a child. Since 1987, various programs have been initiated by the school to aid in 360 degree development.",
  },
];

export function Pillars() {
  return (
    <section className="border-y border-border bg-paper-deep py-20 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow eyebrow-line">What we stand for</p>
          <h2 className="display mt-5 text-5xl sm:text-6xl">
            Education <span className="display-italic text-primary">Beyond</span> Tomorrow
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 120}
              as="a"
              className="group relative flex min-h-[26rem] flex-col justify-between bg-background p-8 transition-colors duration-500 hover:bg-navy hover:text-navy-foreground md:p-10"
              // @ts-expect-error – Reveal forwards native anchor props via `as`
              href={p.href}
            >
              <span className="display text-[7rem] leading-[0.8] text-primary transition-colors duration-500 group-hover:text-gold md:text-[9rem]">
                {p.n}
              </span>
              <div>
                <h3 className="font-display text-3xl font-semibold">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-navy-foreground/75">
                  {p.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]">
                  Explore <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
