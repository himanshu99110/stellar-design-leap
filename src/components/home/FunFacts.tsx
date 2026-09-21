import { ArrowUpRight } from "lucide-react";
import { CountUp } from "@/components/site/CountUp";
import { Reveal } from "@/components/site/Reveal";
import { LINKS } from "@/lib/site-data";

const FACTS = [
  { to: 30, suffix: "+", label: "Years of Experience", body: "Silverline has been a pioneer in innovative teaching practices for the last 3 decades." },
  { to: 10, suffix: "K+", label: "Students Empowered", body: "Silverline Prestige School has empowered more than 10,000 students." },
  { to: 100, suffix: "+", label: "Educators Empowered", body: "Our Educators come from diverse backgrounds and each of them contribute to our vibrant culture and environment in their distinct manner." },
  { to: 25, suffix: "+", label: "Co-scholastic Programs", body: "SLPS prides itself in providing a conducive environment for a child to prosper into a confident and independent individual." },
];

export function FunFacts() {
  return (
    <section className="border-t border-border bg-paper-deep py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow eyebrow-line">By the numbers</p>
          <h2 className="display mt-5 text-4xl sm:text-5xl">
            Fun Facts About Our School And <span className="display-italic text-primary">Culture</span>
          </h2>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-muted-foreground">
            Since 1987, various programs have been initiated by the school to aid in 360-degree development.
          </p>
          <a href={LINKS.getStarted} className="btn btn-primary mt-8">
            Get Started Now <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:col-span-8">
          {FACTS.map((f, i) => (
            <Reveal
              key={f.label}
              delay={i * 100}
              className={[
                "group relative border-border py-8 sm:px-8 sm:py-10",
                "border-t sm:border-t-0",
                i % 2 === 1 ? "sm:border-l" : "",
                i >= 2 ? "sm:border-t" : "",
              ].join(" ")}
            >
              <CountUp to={f.to} suffix={f.suffix} className="display block text-[4.5rem] leading-none text-primary md:text-[5.5rem]" />
              <p className="mt-4 font-display text-xl font-semibold">{f.label}</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              <span className="absolute right-4 top-8 text-xs font-bold text-muted-foreground/50 sm:right-6 sm:top-10">
                0{i + 1}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
