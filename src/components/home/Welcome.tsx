import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/images";
import { LINKS } from "@/lib/site-data";

export function Welcome() {
  return (
    <section id="welcome" className="paper-grain relative overflow-hidden py-20 md:py-28 lg:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Type column */}
        <div className="lg:col-span-6 lg:pr-10">
          <Reveal>
            <p className="eyebrow eyebrow-line">Welcome to the Best Pre Primary School in Ghaziabad</p>
            <h2 className="display mt-6 text-5xl sm:text-6xl lg:text-7xl">
              Silverline
              <br />
              Prestige <span className="display-italic text-primary">School</span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="mt-10 grid gap-8 sm:grid-cols-[auto_1fr]">
            <div className="hidden sm:block">
              <p className="display text-6xl text-primary/90">’87</p>
              <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                4th Feb
                <br />
                Founded
              </p>
            </div>
            <div className="space-y-5 text-[1.02rem] leading-[1.75] text-foreground/85">
              <p className="text-lg font-medium leading-relaxed text-foreground">
                <strong>Silverline Prestige School</strong>, also known as{" "}
                <span className="text-primary">Silver Line School</span>, was established on 4th February 1987 with a
                vision to provide <em className="display-italic text-xl">“Education Beyond Tomorrow”</em>. It is one of the{" "}
                <strong>Best Primary Schools in Ghaziabad</strong>.
              </p>
              <p>
                The Founder, Dr Mala Kapoor grew up in the town of Ghaziabad and often wondered about why affluent
                families sent their children to Delhi for quality education.
              </p>
              <p>
                Under the guidance of her mother Mrs Santosh Oberoi (Retd. Headmistress DPS Ghaziabad), Dr Kapoor
                started Silver Line School with 16 students and 1 educator. And today, it ranks among the{" "}
                <strong>Top Primary Schools in Ghaziabad</strong>.
              </p>
            </div>
          </Reveal>

          {/* Milestone timeline */}
          <Reveal delay={200} className="mt-12">
            <ol className="relative grid grid-cols-3 gap-4 border-t border-border pt-6">
              {[
                ["1987", "First branch opens with 16 students & 1 educator"],
                ["1990", "Second primary branch established in Kavi Nagar"],
                ["2000", "Third branch established on Bulandshahr Road"],
              ].map(([y, t]) => (
                <li key={y} className="relative">
                  <span className="absolute -top-[1.6rem] left-0 h-2 w-2 rounded-full bg-primary ring-4 ring-background" />
                  <p className="font-display text-2xl font-semibold">{y}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t}</p>
                </li>
              ))}
            </ol>
            <a href={LINKS.history} className="btn btn-navy mt-10">
              Our History <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        {/* Image column */}
        <div className="relative lg:col-span-6">
          <Reveal variant="mask" className="frame-offset img-zoom img-tone relative ml-auto aspect-[4/5] w-full max-w-[34rem] lg:mt-8">
            <img src={IMG.building} alt="Silverline Prestige School campus building" className="h-full w-full object-cover" />
          </Reveal>
          <Reveal
            delay={400}
            className="absolute -left-2 bottom-10 max-w-[15rem] border border-border bg-card p-5 shadow-[0_30px_60px_-30px_rgba(20,30,60,0.35)] sm:left-0 lg:-left-6"
          >
            <p className="eyebrow">Our promise</p>
            <p className="display mt-2 text-2xl leading-tight">Education Beyond Tomorrow</p>
          </Reveal>
          <span className="display pointer-events-none absolute -right-6 -top-10 select-none text-[9rem] leading-none text-primary/[0.06] lg:text-[13rem]">
            1987
          </span>
        </div>
      </div>
    </section>
  );
}
