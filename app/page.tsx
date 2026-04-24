import Link from "next/link";
import { NoLimitMarquee } from "@/components/ui/NoLimitMarquee";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Wireframe: sahxl-website-spec/wireframes/01-homepage.svg
// Spec section: §6 Homepage in SAHXL-Website-Design-Spec.docx

export default function HomePage() {
  return (
    <>
      <HeroStub />
      <NoLimitMarquee />
      <FeaturedDropStub />
      <MusicTeaserStub />
    </>
  );
}

function HeroStub() {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-[90vh] items-end overflow-hidden bg-ink-0"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink-0 via-ink-1 to-ink-0"
      />
      <div
        aria-hidden
        className="ambient-drift-a pointer-events-none absolute -left-1/4 top-1/4 h-[60vmax] w-[60vmax] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, rgba(255,77,46,0.22) 0%, transparent 60%)" }}
      />
      <div
        aria-hidden
        className="ambient-drift-b pointer-events-none absolute -right-1/4 top-0 h-[50vmax] w-[50vmax] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 60%)" }}
      />
      <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-20 md:px-10 md:pb-24 rise-child">
        <p className="font-mono text-caption uppercase tracking-[0.32em] text-bone-300">
          SAHXL · Los Angeles
        </p>
        <h1 className="poster-in mt-6 font-heading text-display-xl leading-none">
          NO LIMIT
        </h1>
        <p className="mt-6 max-w-prose506 text-body-lg text-bone-200">
          New chapter. No ceiling. Drops every week.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <MagneticButton href="/shop" variant="primary">
            Shop the drop
          </MagneticButton>
          <MagneticButton href="/music" variant="ghost">
            Play the record
          </MagneticButton>
        </div>
      </div>
      <Hotspot x="35%" y="55%" label="Kiaeesha LS" href="/shop/kiaeesha-ls" />
      <Hotspot x="62%" y="70%" label="No Limit Bomber" href="/shop/no-limit-bomber" />
    </section>
  );
}

function Hotspot({ x, y, label, href }: { x: string; y: string; label: string; href: string }) {
  return (
    <Link
      href={href}
      style={{ left: x, top: y }}
      className="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
      aria-label={`Shop ${label}`}
    >
      <span className="relative flex h-4 w-4">
        <span className="absolute inset-0 animate-pulse-hotspot rounded-pill bg-ember" />
        <span className="relative m-auto h-2 w-2 rounded-pill bg-bone-100 ring-2 ring-ember" />
      </span>
      <span className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap border border-hairline-strong bg-ink-1/90 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-100 opacity-0 backdrop-blur-md transition-opacity duration-280 ease-sahxl-out group-hover:opacity-100 group-focus-visible:opacity-100">
        {label}
      </span>
    </Link>
  );
}

function FeaturedDropStub() {
  return (
    <ScrollReveal as="section" className="mx-auto max-w-content px-6 py-24 md:px-10">
      <div className="mb-10 flex items-end justify-between border-b border-hairline pb-4">
        <div>
          <p className="font-mono text-caption uppercase tracking-[0.28em] text-bone-300">This week</p>
          <h2 className="mt-3 font-heading text-display-md leading-none">THE DROP</h2>
        </div>
        <Link href="/shop" className="underline-cta font-mono text-caption uppercase tracking-[0.22em] text-bone-200 hover:text-bone-100">
          See everything
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <article key={i} className="press-scale group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-ink-2">
              <div className="absolute inset-0 bg-gradient-to-br from-ink-3 via-ink-2 to-ink-1 transition-transform duration-800 ease-sahxl-out group-hover:scale-[1.04]" />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-0/60 via-transparent to-transparent opacity-0 transition-opacity duration-280 ease-sahxl-out group-hover:opacity-100"
              />
            </div>
            <div className="mt-4 flex items-start justify-between">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-200">Style name</div>
              <div className="nums-tabular font-mono text-[11px] tracking-[0.08em] text-bone-100">$000.00</div>
            </div>
          </article>
        ))}
      </div>
    </ScrollReveal>
  );
}

function MusicTeaserStub() {
  return (
    <ScrollReveal
      as="section"
      className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 md:px-10"
    >
      <div>
        <p className="font-mono text-caption uppercase tracking-[0.28em] text-ember">New single</p>
        <h2 className="mt-4 font-heading text-display-lg leading-none">worst</h2>
        <p className="mt-6 max-w-prose506 text-body-md text-bone-300">
          Out now. Loud or skip — your vote shapes what comes next.
        </p>
        <div className="mt-10">
          <MagneticButton href="/music" variant="ghost">
            Play &amp; vote
          </MagneticButton>
        </div>
      </div>
      <div className="relative aspect-square overflow-hidden bg-ink-2">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-ink-3 via-ink-1 to-ink-0"
        />
        <div
          aria-hidden
          className="ambient-drift-a absolute inset-[-20%] opacity-50"
          style={{ background: "radial-gradient(circle, rgba(255,77,46,0.25) 0%, transparent 55%)" }}
        />
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-heading text-[18vw] leading-none text-bone-100/5 md:text-[9vw]">worst</span>
        </div>
      </div>
    </ScrollReveal>
  );
}
