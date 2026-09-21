import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV, SITE, type NavItem } from "@/lib/site-data";
import { LogoLockup, LogoMark } from "./Logo";

/* ——————————————————— Top ticker ——————————————————— */
function Ticker() {
  const items = [...SITE.ticker, ...SITE.ticker];
  return (
    <div className="bg-navy-deep text-navy-foreground">
      <div className="container-x flex h-10 items-center gap-4 text-xs">
        <span className="hidden shrink-0 items-center gap-2 font-bold uppercase tracking-[0.2em] text-gold sm:inline-flex">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          Latest Updates
        </span>
        <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
          <div className="marquee-track gap-10">
            {items.map((t, i) => (
              <span key={i} className="flex shrink-0 items-center gap-10 whitespace-nowrap font-medium text-navy-foreground/85">
                {t}
                <span className="h-1 w-1 rounded-full bg-primary" />
              </span>
            ))}
          </div>
        </div>
        <a
          href={SITE.helpline[0]!.tel}
          className="hidden shrink-0 items-center gap-2 font-semibold text-navy-foreground/90 transition-colors hover:text-gold md:inline-flex"
        >
          <Phone className="h-3.5 w-3.5" />
          Admission Helpline {SITE.helpline[0]!.pretty}
          <span className="text-navy-foreground/40">·</span>
          {SITE.helpline[1]!.pretty}
        </a>
      </div>
    </div>
  );
}

/* ——————————————————— Desktop dropdown ——————————————————— */
function Dropdown({ item, open }: { item: NavItem; open: boolean }) {
  if (!item.groups) return null;
  const mega = item.groups.length > 1 || item.featured;

  return (
    <div
      className={cn(
        "absolute top-full pt-3 transition-all duration-300 ease-out",
        mega ? "left-1/2 -translate-x-1/2" : "left-0",
        open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden border border-border bg-card shadow-[0_24px_60px_-24px_rgba(20,30,60,0.35)]",
          mega ? "grid" : "min-w-[15rem]",
        )}
        style={
          mega
            ? {
                gridTemplateColumns: `repeat(${item.groups.length}, minmax(13rem, auto))${item.featured ? " 17rem" : ""}`,
              }
            : undefined
        }
      >
        <span className="brand-stripe absolute inset-x-0 top-0" />
        {item.groups.map((g, gi) => (
          <div key={gi} className={cn("p-6 pt-7", gi > 0 && "border-l border-border")}>
            {g.title && <p className="eyebrow mb-4">{g.title}</p>}
            <ul className="space-y-1">
              {g.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group/l -mx-2 flex items-start justify-between gap-4 rounded-sm px-2 py-1.5 transition-colors hover:bg-secondary"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-foreground">{l.label}</span>
                      {l.note && <span className="block text-xs text-muted-foreground">{l.note}</span>}
                    </span>
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover/l:translate-x-0.5 group-hover/l:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {item.featured && (
          <a
            href={item.featured.href}
            className="group/f relative flex flex-col justify-between bg-navy p-6 pt-7 text-navy-foreground"
          >
            <div>
              <p className="eyebrow text-gold">{item.featured.eyebrow}</p>
              <p className="display mt-3 text-3xl">{item.featured.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">{item.featured.body}</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">
              {item.featured.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/f:-translate-y-0.5 group-hover/f:translate-x-0.5" />
            </span>
            <LogoMark size={120} className="absolute -bottom-8 -right-8 opacity-[0.08]" />
          </a>
        )}
      </div>
    </div>
  );
}

/* ——————————————————— Mobile drawer ——————————————————— */
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>("Admissions");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-navy-deep/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <aside
        className={cn(
          "absolute inset-y-0 right-0 flex w-[min(26rem,100%)] flex-col bg-background transition-transform duration-500 [transition-timing-function:cubic-bezier(0.2,0.8,0.2,1)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <LogoLockup compact />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:bg-secondary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-2">
          {NAV.map((item, idx) => {
            const isOpen = expanded === item.label;
            return (
              <div key={item.label} className="border-b border-border">
                {item.href ? (
                  <a href={item.href} className="flex items-center justify-between py-4">
                    <span className="display text-2xl">{item.label}</span>
                    <span className="text-xs font-bold text-muted-foreground">0{idx + 1}</span>
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                      className="flex w-full items-center justify-between py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="display text-2xl">{item.label}</span>
                      <span className="flex items-center gap-3">
                        <span className="text-xs font-bold text-muted-foreground">0{idx + 1}</span>
                        <ChevronDown
                          className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180 text-primary")}
                        />
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-400 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-5 pb-5 pl-1">
                          {item.groups?.map((g, gi) => (
                            <div key={gi}>
                              {g.title && <p className="eyebrow mb-2 text-[0.62rem]">{g.title}</p>}
                              <ul className="space-y-2.5">
                                {g.links.map((l) => (
                                  <li key={l.label}>
                                    <a href={l.href} className="text-[0.95rem] font-medium text-foreground/85">
                                      {l.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </nav>

        <div className="space-y-3 border-t border-border bg-paper-deep p-5">
          <a href={SITE.admissionHref} className="btn btn-primary w-full">
            {SITE.admissionLabel} <ArrowUpRight className="h-4 w-4" />
          </a>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Admission Helpline</span>
            <span className="flex gap-3 font-semibold text-foreground">
              {SITE.helpline.map((h) => (
                <a key={h.label} href={h.tel}>
                  {h.label}
                </a>
              ))}
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
}

/* ——————————————————— Navbar ——————————————————— */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 400 && y > lastY.current && !openItem);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [openItem]);

  const enter = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenItem(label);
  };
  const leave = () => {
    closeTimer.current = window.setTimeout(() => setOpenItem(null), 120);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.2,0.8,0.2,1)]",
          hidden ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div className={cn("overflow-hidden transition-[max-height] duration-500", scrolled ? "max-h-0" : "max-h-10")}>
          <Ticker />
        </div>

        <div
          className={cn(
            "border-b transition-all duration-500",
            scrolled
              ? "border-border bg-background/85 shadow-[0_8px_30px_-16px_rgba(20,30,60,0.25)] backdrop-blur-xl"
              : "border-transparent bg-background",
          )}
        >
          <div className="container-x relative flex items-center justify-between gap-6">
            <LogoLockup compact={scrolled} className="py-3 transition-all duration-500" />

            <nav
              className={cn("hidden h-full items-stretch self-stretch xl:flex", scrolled ? "min-h-[4.25rem]" : "min-h-[5.25rem]")}
              onMouseLeave={leave}
            >
              {NAV.map((item) => {
                const isOpen = openItem === item.label;
                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="nav-link"
                      data-active={item.href === "/"}
                    >
                      {item.label}
                    </a>
                  );
                }
                return (
                  <div key={item.label} className="relative flex items-stretch" onMouseEnter={() => enter(item.label)}>
                    <button
                      className="nav-link"
                      data-open={isOpen}
                      aria-expanded={isOpen}
                      onClick={() => setOpenItem(isOpen ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", isOpen && "rotate-180")} />
                    </button>
                    <Dropdown item={item} open={isOpen} />
                  </div>
                );
              })}
            </nav>

            <div className="flex shrink-0 items-center gap-3">
              <a href={SITE.admissionHref} className="btn btn-primary btn-sm hidden md:inline-flex xl:hidden 2xl:inline-flex">
                <span className="hidden min-[1700px]:inline">{SITE.admissionLabel}</span>
                <span className="min-[1700px]:hidden">Apply</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:bg-secondary xl:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
