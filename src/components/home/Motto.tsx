import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/images";
import { LINKS } from "@/lib/site-data";

export function Motto() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <span className="brand-stripe block" />
      <div className="container-x grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-center lg:gap-6">
        {/* Photo collage */}
        <div className="relative lg:col-span-7">
          <Reveal variant="mask-x" className="img-zoom relative aspect-[4/3] w-[86%]">
            <img src={IMG.sportsDrill} alt="Pre-primary students during a sports day drill" className="h-full w-full object-cover" />
          </Reveal>
          <Reveal
            variant="mask"
            delay={250}
            className="img-zoom absolute -bottom-10 right-0 aspect-[5/4] w-[50%] border-[6px] border-navy sm:-bottom-14"
          >
            <img src={IMG.teacherKids} alt="Principal greeting young students in costume" className="h-full w-full object-cover" />
          </Reveal>
          <Reveal delay={450} className="absolute left-0 top-[-1.25rem] hidden bg-primary px-4 py-3 text-primary-foreground sm:block">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em]">Experiential learning</p>
            <p className="display text-2xl">since 1987</p>
          </Reveal>
        </div>

        {/* Statement */}
        <div className="pt-8 lg:col-span-5 lg:pl-6">
          <Reveal>
            <p className="eyebrow eyebrow-line text-gold">Our motto</p>
            <h2 className="display mt-6 text-4xl sm:text-5xl xl:text-6xl">
              <span className="display-italic text-gold">“Try To Attain Thy Heights”</span> at the Best Primary School in
              Ghaziabad
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-navy-foreground/75">
              Silverline has been a pioneer in innovative teaching & experiential learning pedagogies for the last 3
              decades. Therefore ranking as the Best Primary School in Ghaziabad, Best school for kids in Ghaziabad,
              Best junior school in Ghaziabad.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a href={LINKS.getStarted} className="btn btn-primary">
                Get Started Now <ArrowUpRight className="h-4 w-4" />
              </a>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/50">
                3 decades · 3 branches
              </span>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="h-10 sm:h-16" />
    </section>
  );
}
