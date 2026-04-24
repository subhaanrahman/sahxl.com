"use client";

import { useEffect, useState } from "react";

/**
 * Live LA clock in the header (wireframes show HH:MM:SS monospace).
 * Renders only on client to avoid SSR hydration mismatch on time.
 */
export function LaClock({ className }: { className?: string }) {
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const t = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }).format(new Date());
      setNow(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <time suppressHydrationWarning className={className}>{now || "--:--:--"}</time>;
}
