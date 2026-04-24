"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV, VIP_NAV_SWAP } from "@/lib/nav";
import { cn } from "@/lib/cn";
import { LaClock } from "./LaClock";

/**
 * Site header — matches wireframes 01–06 in sahxl-website-spec/wireframes/.
 *
 * Behavior per route:
 *   - /shop/**                  → wordmark swaps to italic "506 Global" (Cinzel serif)
 *   - /shop/[handle] (PDP)      → 4th nav slot becomes "VIP Access" (w/f 03)
 *   - everything else (SAHXL)   → stacked SAHXL / NO LIMIT lockup
 */
export function SiteHeader() {
  const pathname = usePathname() || "/";
  const isShop = pathname.startsWith("/shop");
  const isPDP = /^\/shop\/[^/]+$/.test(pathname);
  const nav = isPDP
    ? [...PRIMARY_NAV.slice(0, 3), VIP_NAV_SWAP]
    : PRIMARY_NAV;

  return (
    <header
      className="sticky top-0 z-50 border-b border-hairline bg-ink-0/80 backdrop-blur-md"
      data-surface={isShop ? "shop" : undefined}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-content items-center gap-8 px-6 md:px-10"
      >
        {/* Wordmark */}
        <Link href="/" className="group flex flex-col">
          {isShop ? (
            <span className="font-serif506 italic text-[26px] font-semibold leading-none tracking-tight text-gold transition-colors duration-280 ease-sahxl-out group-hover:text-gold-soft">
              506 Global
            </span>
          ) : (
            <>
              <span className="font-heading text-[22px] leading-none tracking-[0.18em] text-bone-100">
                SAHXL
              </span>
              <span className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.34em] text-ember">
                No Limit
              </span>
            </>
          )}
        </Link>

        {/* LA + live clock */}
        <div className="hidden flex-col leading-tight md:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-100">Los Angeles</span>
          <LaClock className="font-mono text-[10px] tracking-[0.1em] text-bone-400" />
        </div>

        {/* Primary nav */}
        <ul className="ml-6 hidden gap-7 md:flex" role="list">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative font-mono text-[12px] uppercase tracking-[0.2em] transition-colors duration-280 ease-sahxl-out",
                    active
                      ? "text-bone-100 after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:bg-ember"
                      : "text-bone-300 hover:text-bone-100"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {item.count != null && (
                    <span className="ml-1.5 font-mono text-[10px] text-bone-400">
                      {item.count}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right cluster: Requests pill + Bag */}
        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/requests"
            className="press-scale hidden rounded-pill border border-hairline-strong px-5 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-bone-100 transition-colors duration-280 ease-sahxl-out hover:border-ember hover:text-ember sm:inline-block"
          >
            Requests
          </Link>
          <BagButton />
        </div>
      </nav>
    </header>
  );
}

function BagButton() {
  // TODO: wire to cart store once Shopify Storefront client is in.
  const count = 0;
  const subtotal = "$0.00";
  return (
    <Link
      href="/cart"
      className="press-scale inline-flex items-center gap-2 bg-bone-100 px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-0 transition-colors duration-280 ease-sahxl-out hover:bg-ember hover:text-bone-100"
      aria-label={`Open bag, ${count} items, subtotal ${subtotal}`}
    >
      <span>Bag</span>
      <span aria-hidden className="text-bone-400">·</span>
      <span className="nums-tabular">{subtotal}</span>
    </Link>
  );
}
