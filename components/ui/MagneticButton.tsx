"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Magnetic button — cursor pulls the element up to `strength` px toward it
 * within bounds. Reverts on mouseleave. Respects prefers-reduced-motion via
 * the global CSS rule (transitions collapse to 0.01ms).
 */
export function MagneticButton({
  href,
  children,
  className,
  strength = 16,
  variant = "primary",
  ariaLabel
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  strength?: number;
  variant?: "primary" | "ghost" | "ember";
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = ((e.clientX - cx) / rect.width) * strength * 2;
    const dy = ((e.clientY - cy) / rect.height) * strength * 2;
    setOffset({ x: Math.max(-strength, Math.min(strength, dx)), y: Math.max(-strength, Math.min(strength, dy)) });
  }

  function onLeave() {
    setOffset({ x: 0, y: 0 });
  }

  const base =
    "group press-scale relative inline-flex items-center gap-3 px-8 py-4 font-mono text-caption font-semibold uppercase tracking-[0.22em] transition-colors duration-280 ease-sahxl-out";

  const variants = {
    primary: "bg-bone-100 text-ink-0 hover:bg-ember hover:text-bone-100 hover:shadow-glow-ember",
    ember: "bg-ember text-ink-0 hover:bg-ember-soft hover:shadow-glow-ember",
    ghost: "border border-hairline-strong text-bone-100 hover:border-bone-100 hover:bg-bone-100 hover:text-ink-0"
  } as const;

  return (
    <Link
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: "transform 280ms cubic-bezier(0.16, 1, 0.3, 1), background-color 280ms, color 280ms, box-shadow 280ms"
      }}
      className={cn(base, variants[variant], className)}
    >
      <span
        className="inline-block transition-transform duration-280 ease-sahxl-out"
        style={{ transform: `translate3d(${offset.x * 0.4}px, ${offset.y * 0.4}px, 0)` }}
      >
        {children}
      </span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-280 ease-sahxl-out group-hover:translate-x-1"
      >
        ↗
      </span>
    </Link>
  );
}
