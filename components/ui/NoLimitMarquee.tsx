"use client";

import { useState } from "react";

/**
 * Infinite horizontal ticker. CSS-only animation (tailwind keyframe `marquee`)
 * — duplicates children so the loop is seamless. Pause on hover.
 *
 * Used as a cinematic band between hero and featured drop on /.
 */
export function NoLimitMarquee({
  words = ["NO LIMIT", "506 GLOBAL", "SAHXL"],
  accent = "ember",
  speed = 40
}: {
  words?: string[];
  accent?: "ember" | "gold";
  speed?: number;
}) {
  const [paused, setPaused] = useState(false);
  const accentClass = accent === "gold" ? "text-gold" : "text-ember";

  return (
    <section
      aria-label="Marquee"
      className="relative overflow-hidden border-y border-hairline bg-ink-0 py-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-0 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-0 to-transparent"
      />
      <div
        className="flex w-max items-center gap-12 whitespace-nowrap animate-marquee"
        style={{ animationDuration: `${speed}s`, animationPlayState: paused ? "paused" : "running" }}
      >
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-heading text-[clamp(56px,14vw,180px)] uppercase leading-none tracking-[-0.01em] text-bone-100">
              {word}
            </span>
            <Diamond className={`${accentClass} h-4 w-4 shrink-0`} />
          </span>
        ))}
      </div>
    </section>
  );
}

function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12 2 L22 12 L12 22 L2 12 Z" />
    </svg>
  );
}
