import Link from "next/link";
import { FOOTER_NAV } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-hairline bg-ink-0 px-6 pt-20 pb-10 md:px-10">
      <div
        aria-hidden
        className="ambient-drift-b pointer-events-none absolute -left-1/4 top-0 h-[50vmax] w-[50vmax] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, rgba(255,77,46,0.2) 0%, transparent 60%)" }}
      />
      <div className="relative mx-auto grid max-w-content grid-cols-2 gap-12 md:grid-cols-5">
        <div className="col-span-2 md:col-span-2">
          <div className="font-heading text-heading-lg uppercase tracking-[0.18em] text-bone-100">SAHXL</div>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.34em] text-ember">No Limit</p>
          <p className="mt-6 max-w-xs text-body-sm text-bone-300">
            506 Global. Music, merch, and every piece of the world being built in the dark.
          </p>

          <form className="mt-10 max-w-sm" aria-label="Newsletter">
            <label className="font-mono text-caption uppercase tracking-[0.24em] text-bone-300">
              Join the mailing list
            </label>
            <div className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 border border-hairline bg-transparent px-4 py-3 text-body-sm outline-none transition-colors duration-280 ease-sahxl-out focus:border-ember"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="press-scale bg-bone-100 px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-0 transition-colors duration-280 ease-sahxl-out hover:bg-ember hover:text-bone-100"
              >
                Join
              </button>
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-bone-400">
              First look. Drops before the public. No spam.
            </p>
          </form>
        </div>

        <FooterCol title="Shop" items={FOOTER_NAV.shop} />
        <FooterCol title="Music" items={FOOTER_NAV.music} />
        <FooterCol title="Tour" items={FOOTER_NAV.tour} />
      </div>

      <div className="relative mx-auto mt-20 flex max-w-content flex-col items-start justify-between gap-4 border-t border-hairline pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-bone-400 md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} SAHXL · 506 Global</span>
        <div className="flex gap-6">
          <Link href="/legal/terms" className="hover:text-bone-100">Terms</Link>
          <Link href="/legal/privacy" className="hover:text-bone-100">Privacy</Link>
          <Link href="/legal/returns" className="hover:text-bone-100">Returns</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ember">{title.toUpperCase()}</div>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="font-mono text-[12px] uppercase tracking-[0.18em] text-bone-100 transition-colors duration-280 ease-sahxl-out hover:text-ember"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
