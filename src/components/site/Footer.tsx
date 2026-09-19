import { ArrowUpRight, Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import { BRANCHES, FOOTER_LINKS, LINKS, SITE } from "@/lib/site-data";
import { LogoMark } from "./Logo";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-navy-foreground">
      <span className="brand-stripe block" />

      {/* Closing CTA band */}
      <div className="container-x">
        <Reveal className="grid gap-10 border-b border-navy-foreground/10 py-16 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-gold">Admissions open · 2027-28</p>
            <h2 className="display mt-5 text-[2.75rem] text-navy-foreground sm:text-6xl lg:text-7xl">
              Give your child a
              <br />
              <span className="display-italic text-gold">shining start.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 lg:items-end">
            <p className="max-w-md text-base leading-relaxed text-navy-foreground/70 lg:text-right">
              Playgroup to Class VIII across three branches in Ghaziabad. Speak to our admission team or begin your
              application online.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={SITE.admissionHref} className="btn btn-primary">
                {SITE.admissionLabel} <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={SITE.helpline[0]!.tel} className="btn btn-outline-light">
                <Phone className="h-4 w-4" /> {SITE.helpline[0]!.pretty}
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Link grid */}
      <div className="container-x grid gap-12 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr_1.3fr]">
        <div>
          <div className="flex items-center gap-4">
            <LogoMark size={64} />
            <div>
              <p className="font-display text-2xl font-semibold leading-none">Silverline Prestige School</p>
              <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-ink-soft">{SITE.motto}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-foreground/65">
            Established on 4th February 1987 with a vision of “Education Beyond Tomorrow”. A pioneer in innovative
            teaching and experiential learning for three decades, ranked among the top primary schools in Ghaziabad.
          </p>
          <div className="mt-7 flex gap-2">
            {[
              { href: SITE.social.instagram, Icon: Instagram, label: "Instagram" },
              { href: SITE.social.facebook, Icon: Facebook, label: "Facebook" },
              { href: SITE.social.youtube, Icon: Youtube, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center border border-navy-foreground/15 transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-gold">Quick links</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="link-underline text-sm font-medium text-navy-foreground/80 hover:text-navy-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Branches</p>
          <ul className="mt-5 divide-y divide-navy-foreground/10">
            {BRANCHES.map((b, i) => (
              <li key={b.name} className="flex gap-4 py-4 first:pt-0">
                <span className="font-display text-2xl text-navy-foreground/30">0{i + 1}</span>
                <div className="min-w-0">
                  <p className="font-semibold">{b.name}</p>
                  <p className="mt-1 flex items-start gap-2 text-sm text-navy-foreground/65">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {b.address}
                  </p>
                  {b.code && (
                    <p className="mt-1 text-xs text-navy-foreground/55">
                      School Code <span className="font-bold text-navy-foreground/80">{b.code}</span>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {SITE.helpline.map((h) => (
              <a key={h.label} href={h.tel} className="inline-flex items-center gap-2 font-semibold hover:text-gold">
                <Phone className="h-3.5 w-3.5" /> {h.pretty}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-navy-foreground/10">
        <div className="container-x flex flex-col gap-5 py-6 text-xs text-navy-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>
            The Silverline Prestige School, © {new Date().getFullYear()}. Designed by{" "}
            <a href={LINKS.designer} className="font-semibold text-rose hover:underline">
              Little Abs Marketing
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold text-navy-foreground/80">Download the School App Now.</span>
            <a href={LINKS.playstore} className="btn btn-outline-light btn-sm h-9 gap-2 px-3 text-xs">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M3 2.5v19l10-9.5L3 2.5Zm12 8 3.4-2-11-6.3L15 10.5Zm0 3L7.4 21.8l11-6.3-3.4-2Zm1.7-1 3.8-2.2c.7-.4.7-1.2 0-1.6L16.7 8.5 13.8 12l2.9 3.5Z" />
              </svg>
              Google Play
            </a>
            <a href={LINKS.appstore} className="btn btn-outline-light btn-sm h-9 gap-2 px-3 text-xs">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M16.4 12.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.6 1.3 10.1.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8s2 .8 3.3.8c1.4 0 2.3-1.2 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.9-1.1-2.9-3.9ZM14 5c.7-.8 1.1-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4Z" />
              </svg>
              App Store
            </a>
          </div>
        </div>
      </div>

      <span className="display pointer-events-none absolute -bottom-10 right-0 select-none text-[22vw] leading-none text-navy-foreground/[0.025]">
        SLPS
      </span>
    </footer>
  );
}
