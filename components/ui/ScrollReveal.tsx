"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * IntersectionObserver-based reveal. Fades + rises once the section enters
 * the viewport. One-shot (disconnects after first reveal) — no "flash back"
 * on scroll-up. Respects prefers-reduced-motion globally via globals.css.
 */
type AllowedTag = "div" | "section" | "article" | "aside" | "header" | "footer";

export function ScrollReveal({
  children,
  className,
  delay = 0,
  as = "div",
  y = 20
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: AllowedTag;
  y?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: React.CSSProperties = {
    transform: shown ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`,
    opacity: shown ? 1 : 0,
    transition: `transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "transform, opacity"
  };

  const Tag = as as keyof React.JSX.IntrinsicElements;
  return (
    // @ts-expect-error - polymorphic ref
    <Tag ref={ref} className={cn(className)} style={style}>
      {children}
    </Tag>
  );
}
