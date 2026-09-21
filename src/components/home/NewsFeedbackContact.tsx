import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/images";
import { BRANCHES, LINKS, SITE, TESTIMONIALS } from "@/lib/site-data";

/* ——— Latest news: results collage ——— */
function News() {
  return (
    <Reveal>
      <p className="eyebrow eyebrow-line">Latest SLPS News</p>
      <h2 className="display mt-5 text-4xl sm:text-5xl">Class XII Results 2024</h2>
      <div className="mt-8 grid grid-cols-2 gap-3">
        {IMG.results.map((r) => (
          <figure key={r.name} className="img-zoom relative aspect-[3/4] border border-border">
            <img src={r.src} alt={`${r.name}, ${r.stream}, ${r.score}`} className="h-full w-full object-cover" loading="lazy" />
          </figure>
        ))}
        {IMG.news.map((n) => (
          <figure key={n.src} className="img-zoom relative aspect-square">
            <img src={n.src} alt={n.alt} className="h-full w-full object-cover" loading="lazy" />
          </figure>
        ))}
      </div>
      <a href={LINKS.news} className="link-underline mt-6 inline-flex items-center gap-2 text-sm font-bold">
        All news <ArrowUpRight className="h-4 w-4" />
      </a>
    </Reveal>
  );
}

/* ——— Parents feedback: quiet carousel ——— */
function Feedback() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = TESTIMONIALS.length;

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % n), 6500);
    return () => window.clearInterval(t);
  }, [paused, n]);

  const t = TESTIMONIALS[i]!;

  return (
    <Reveal delay={120} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <p className="eyebrow eyebrow-line">Parents Feedback</p>
      <h2 className="display mt-5 text-4xl sm:text-5xl">What families say</h2>

      <div className="relative mt-10 border-l-2 border-primary pl-6 md:pl-8">
        <span className="display-italic absolute -left-1 -top-8 text-7xl text-primary/25">“</span>
        <p key={i} className="animate-fade-in font-display text-xl leading-relaxed text-foreground/90 sm:text-2xl">
          {t.quote}
        </p>
        <div className="mt-6 flex items-end justify-between gap-4">
          <div>
            <p className="font-bold">{t.name}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{t.role}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="mr-2 text-xs font-bold text-muted-foreground">
              {i + 1} / {n}
            </span>
            <button
              onClick={() => setI((i - 1 + n) % n)}
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center border border-border transition-colors hover:bg-navy hover:text-navy-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setI((i + 1) % n)}
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center border border-border transition-colors hover:bg-navy hover:text-navy-foreground"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ——— Contact ——— */
const field =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-hidden transition-colors";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div id="getstarted" className="grid lg:grid-cols-12">
      <div className="relative overflow-hidden bg-navy p-8 text-navy-foreground md:p-12 lg:col-span-5">
        <p className="eyebrow eyebrow-line text-gold">Get in Touch with Us</p>
        <h2 className="display mt-5 text-4xl sm:text-5xl">
          We’d love to <span className="display-italic text-gold">hear</span> from you
        </h2>
        <ul className="mt-10 space-y-5 text-sm">
          {BRANCHES.map((b) => (
            <li key={b.name} className="border-t border-navy-foreground/10 pt-4">
              <p className="font-semibold">{b.name}</p>
              <p className="mt-1 text-navy-foreground/65">{b.address}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {SITE.helpline.map((h) => (
            <a key={h.label} href={h.tel} className="inline-flex items-center gap-2 font-semibold hover:text-gold">
              <Phone className="h-3.5 w-3.5" /> {h.pretty}
            </a>
          ))}
        </div>
      </div>

      <form
        className="bg-card p-8 md:p-12 lg:col-span-7"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <input className={field} name="name" placeholder="Name" required />
          <input className={field} name="phone" type="tel" placeholder="Phone No." required />
          <input className={field} name="email" type="email" placeholder="Email" required />
          <select className={field} name="branch" defaultValue="" required>
            <option value="" disabled>
              Branch
            </option>
            {BRANCHES.map((b) => (
              <option key={b.name}>{b.name}</option>
            ))}
          </select>
          <textarea className={`${field} sm:col-span-2`} name="query" rows={4} placeholder="Query" />
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <button type="submit" className="btn btn-primary">
            Send Message <Send className="h-4 w-4" />
          </button>
          {sent && <p className="text-sm font-medium text-teal">Thank you — our admission team will reach out shortly.</p>}
        </div>
      </form>
    </div>
  );
}

export function NewsFeedbackContact() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <News />
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <Feedback />
          </div>
        </div>
        <div className="mt-20 border border-border md:mt-28">
          <Contact />
        </div>
      </div>
    </section>
  );
}
