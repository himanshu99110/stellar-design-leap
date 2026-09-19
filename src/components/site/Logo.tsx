import { cn } from "@/lib/utils";

/** SLPS diamond crest: red star, monogram, motto ribbon. Scales with `size`. */
export function LogoMark({ className, size = 56 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <path d="M50 3 97 50 50 97 3 50Z" className="fill-card" stroke="var(--navy)" strokeWidth="2.5" />
      <path d="M50 12 88 50 50 88 12 50Z" fill="none" stroke="var(--primary)" strokeWidth="1.2" />
      <path
        d="M50 22l3.6 8.4 9.1.8-6.9 6 2.1 8.9L50 41.4l-7.9 4.7 2.1-8.9-6.9-6 9.1-.8Z"
        fill="var(--primary)"
      />
      <text
        x="50"
        y="65"
        textAnchor="middle"
        fontFamily="Manrope, sans-serif"
        fontWeight="800"
        fontSize="19"
        letterSpacing="0.5"
        fill="var(--primary)"
      >
        SLPS
      </text>
      <path d="M26 73h48" stroke="var(--navy)" strokeWidth="1" />
    </svg>
  );
}

export function LogoLockup({
  className,
  light = false,
  compact = false,
}: {
  className?: string;
  light?: boolean;
  compact?: boolean;
}) {
  return (
    <a href="/" className={cn("group flex items-center gap-3", className)} aria-label="Silverline Prestige School home">
      <LogoMark size={compact ? 44 : 56} className="transition-transform duration-500 group-hover:rotate-[8deg]" />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-tight sm:text-[1.35rem]",
            light ? "text-navy-foreground" : "text-foreground",
          )}
        >
          Silverline Prestige School
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-bold uppercase tracking-[0.24em]",
            light ? "text-ink-soft" : "text-muted-foreground",
          )}
        >
          Ghaziabad · Est. 1987
        </span>
      </span>
    </a>
  );
}
