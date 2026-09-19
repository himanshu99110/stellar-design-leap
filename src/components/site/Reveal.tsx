import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  variant?: "fade" | "mask" | "mask-x";
};

/** Scroll-triggered entrance. Fires once, honours reduced-motion via CSS. */
export function Reveal({ children, className, as: Tag = "div", delay = 0, variant = "fade" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = variant === "mask" ? "reveal-mask" : variant === "mask-x" ? "reveal-mask-x" : "reveal";

  return (
    <Tag
      ref={ref}
      data-inview={inView}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn(base, className)}
    >
      {children}
    </Tag>
  );
}
