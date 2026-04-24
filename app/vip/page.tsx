// Wireframe: sahxl-website-spec/wireframes/06-vip-showroom.svg
// Spec section: §11 VIP / Exclusive Showroom

export const metadata = {
  title: "VIP Access",
  robots: { index: false, follow: false }
};

export default function VipPage() {
  const unlocked = false;

  return (
    <section
      className="relative min-h-[92vh] overflow-hidden bg-ink-0 px-6 py-24 md:px-10"
      aria-label="VIP Showroom"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(212,175,55,0.12) 0%, rgba(10,10,11,0) 55%)"
        }}
      />
      <div
        aria-hidden
        className="ambient-drift-a pointer-events-none absolute -left-1/4 top-1/3 h-[60vmax] w-[60vmax] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.22) 0%, transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-content">
        <div className="mb-12 text-center">
          <p className="font-mono text-caption uppercase tracking-[0.4em] text-gold">VIP · 506 Global</p>
          <h1 className="mt-4 font-heading text-display-md leading-none">THE VITRINE</h1>
        </div>
        <div
          className={`grid grid-cols-1 gap-6 transition-[filter,opacity] duration-800 ease-sahxl-out md:grid-cols-3 ${
            unlocked ? "" : "pointer-events-none select-none blur-md"
          }`}
        >
          {VITRINES.map((v) => (
            <Vitrine key={v.label} label={v.label} price={unlocked ? v.price : "—"} />
          ))}
        </div>
      </div>

      {!unlocked && <EmailGate />}
    </section>
  );
}

function Vitrine({ label, price }: { label: string; price: string }) {
  return (
    <article className="group relative aspect-[3/4] overflow-hidden border border-gold/40 bg-gradient-to-b from-ink-2 via-ink-1 to-ink-0">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent transition-opacity duration-800 ease-sahxl-out group-hover:opacity-70"
      />
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-mono text-caption uppercase tracking-[0.28em] text-gold/80">[ {label} ]</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink-0/80 to-transparent p-4 font-mono text-caption uppercase tracking-[0.22em]">
        <span className="text-bone-300">Exclusive</span>
        <span className="nums-tabular text-gold">{price}</span>
      </div>
    </article>
  );
}

function EmailGate() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink-0/70 px-4 backdrop-blur-md">
      <div className="rise-child w-full max-w-md border border-gold/50 bg-ink-1/95 p-10 text-center shadow-glow-gold backdrop-blur-md">
        <p className="font-mono text-caption uppercase tracking-[0.4em] text-gold">Exclusive access</p>
        <h2 className="poster-in mt-6 font-heading text-display-md leading-none">STEP INSIDE</h2>
        <p className="mt-5 text-body-sm text-bone-300">
          Drop your email. Unlock the vault.<br />
          First look at pieces before the public sees them.
        </p>
        <form className="mt-8 space-y-3">
          <input
            type="email"
            required
            placeholder="your@email.com"
            aria-label="Email address"
            className="w-full border border-hairline-strong bg-transparent px-4 py-3 text-body-md outline-none transition-colors duration-280 ease-sahxl-out focus:border-gold"
          />
          <button className="press-scale w-full bg-gold py-4 font-mono text-caption font-semibold uppercase tracking-[0.3em] text-ink-0 transition-colors duration-280 ease-sahxl-out hover:bg-gold-soft">
            Unlock
          </button>
        </form>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-400">No spam. Opt out anytime.</p>
      </div>
    </div>
  );
}

const VITRINES = [
  { label: "EXCLUSIVE DENIM JACKET", price: "$450 AUD" },
  { label: "EXCLUSIVE NO LIMIT HOODIE", price: "$260 AUD" },
  { label: 'EXCLUSIVE "MESS" LS TEE', price: "$220 AUD" }
];
