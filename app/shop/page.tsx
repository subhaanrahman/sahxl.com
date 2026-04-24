// Wireframe: sahxl-website-spec/wireframes/02-shop-collection.svg
// Spec section: §7 Shop Collection

export const metadata = { title: "Shop · 506 Global" };

export default function ShopPage() {
  return (
    <>
      <section className="relative mx-auto max-w-content overflow-hidden px-6 py-28 text-center md:px-10 md:py-32">
        <div
          aria-hidden
          className="ambient-drift-a pointer-events-none absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.22) 0%, transparent 60%)" }}
        />
        <div className="relative rise-child">
          <p className="font-mono text-caption uppercase tracking-[0.4em] text-gold">506 · Global</p>
          <div className="mt-4 font-serif506 italic text-display-md text-gold">506 Global</div>
          <h1 className="poster-in mt-2 font-heading text-display-xl leading-none">THE DROP</h1>
          <p className="mx-auto mt-6 max-w-prose506 text-body-md text-bone-300">
            Limited runs. Limited windows. Ships worldwide.
          </p>
        </div>
      </section>

      <section aria-label="Filters" className="sticky top-20 z-40 border-y border-hairline bg-ink-1/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
          <div className="flex gap-2 overflow-x-auto scroll-rail font-mono text-[11px] uppercase tracking-[0.22em] text-bone-300">
            <FilterChip active>All</FilterChip>
            <FilterChip>Tops</FilterChip>
            <FilterChip>Outerwear</FilterChip>
            <FilterChip>Accessories</FilterChip>
          </div>
          <button className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-bone-300 hover:text-bone-100">
            Sort <span aria-hidden>▾</span>
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-16 md:px-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <article key={i} className="press-scale group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-ink-2">
                <div className="absolute inset-0 bg-gradient-to-br from-ink-3 via-ink-2 to-ink-1 transition-transform duration-800 ease-sahxl-out group-hover:scale-[1.05]" />
                {i === 0 && <Badge tone="ember">33% OFF</Badge>}
                {i === 2 && <Badge tone="gold">Best seller</Badge>}
              </div>
              <div className="mt-4 flex items-start justify-between gap-2">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-200">Style name</div>
                <div className="nums-tabular font-mono text-[11px] tracking-[0.08em] text-bone-100">$000.00</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function FilterChip({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button
      className={`press-scale whitespace-nowrap border px-4 py-2 transition-colors duration-280 ease-sahxl-out ${
        active
          ? "border-gold bg-gold/10 text-gold"
          : "border-hairline text-bone-300 hover:border-bone-300 hover:text-bone-100"
      }`}
    >
      {children}
    </button>
  );
}

function Badge({ children, tone }: { children: React.ReactNode; tone: "ember" | "gold" }) {
  return (
    <span
      className={`absolute left-3 top-3 z-10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] ${
        tone === "ember" ? "bg-ember text-bone-100 shadow-glow-ember" : "bg-gold text-ink-0 shadow-glow-gold"
      }`}
    >
      {children}
    </span>
  );
}
