import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  variant?: "fade" | "mask" | "mask-x";
} & Record<string, unknown>;

/** Scroll-triggered entrance. Fires once, honours reduced-motion via CSS. */
export function Reveal({ children, className, as: Tag = "div", delay = 0, variant = "fade", ...rest }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  // Fully clipped elements report zero intersection, so observe an unclipped
  // wrapper and clip an inner layer instead.
  if (variant !== "fade") {
    return (
      <Tag {...rest} ref={ref} className={className}>
        <div
          data-inview={inView}
          style={style}
          className={cn("h-full w-full", variant === "mask" ? "reveal-mask" : "reveal-mask-x")}
        >
          {children}
        </div>
      </Tag>
    );
  }

  return (
    <Tag {...rest} ref={ref} data-inview={inView} style={style} className={cn("reveal", className)}>
      {children}
    </Tag>
  );
}
