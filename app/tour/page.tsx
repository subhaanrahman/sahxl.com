// Wireframe: sahxl-website-spec/wireframes/05-tour-dates.svg
// Spec section: §10 Tour Dates

export const metadata = { title: "Tour · 506 Global" };

export default function TourPage() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-ink-0">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center 38%, rgba(255,77,46,0.22) 0%, rgba(10,10,11,0.9) 45%, #05050700 100%)"
          }}
        />
        <div
          aria-hidden
          className="ambient-drift-a absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 30% 60%, rgba(212,175,55,0.12) 0%, transparent 50%)"
          }}
        />
        <div className="relative z-10 px-6 text-center md:px-10 rise-child">
          <p className="font-mono text-caption uppercase tracking-[0.36em] text-bone-300">SAHXL · Live</p>
          <h1 className="poster-in mt-6 font-heading text-display-xl leading-none">COMING SOON</h1>
          <p className="mt-4 font-mono text-caption uppercase tracking-[0.4em] text-ember">506 Global · World Tour</p>
          <p className="mt-16 font-heading text-heading-lg text-bone-100">Dates land soon.</p>
          <p className="mt-3 max-w-prose506 mx-auto text-body-md text-bone-300">
            Request your city. Cities with the loudest waitlist go first.
          </p>
          <a
            href="#request"
            className="press-scale mt-10 inline-flex items-center gap-3 border border-ember px-10 py-4 font-mono text-caption font-semibold uppercase tracking-[0.26em] text-ember transition-colors duration-280 ease-sahxl-out hover:bg-ember hover:text-ink-0 hover:shadow-glow-ember"
          >
            <span>Request your city</span>
            <span aria-hidden>↗</span>
          </a>
        </div>
      </section>

      <section id="request" className="mx-auto max-w-content px-6 py-24 md:px-10">
        <div className="border-b border-hairline pb-6">
          <p className="font-mono text-caption uppercase tracking-[0.3em] text-bone-300">First leg</p>
          <h2 className="mt-3 font-heading text-display-md leading-none">AUSTRALIAN STOPS</h2>
        </div>

        <div className="mt-10 divide-y divide-hairline border-y border-hairline">
          {CITIES.map((c) => (
            <div
              key={c.name}
              className="grid grid-cols-[1fr_auto] items-center gap-6 py-6 md:grid-cols-[2fr_1fr_1fr_auto] md:gap-8"
            >
              <div className="font-heading text-heading-lg uppercase tracking-[0.04em]">{c.name}</div>
              <div className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-bone-400 md:block">Date · TBA</div>
              <div className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-bone-400 md:block">Venue · TBA</div>
              <button className="press-scale underline-cta justify-self-end font-mono text-caption font-semibold uppercase tracking-[0.24em] text-bone-100 hover:text-ember">
                Join waitlist
              </button>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center font-mono text-caption uppercase tracking-[0.24em] text-bone-400">
          Cities with the loudest waitlist get announced first.
        </p>
      </section>
    </>
  );
}

const CITIES = [
  { name: "Sydney, AU" },
  { name: "Melbourne" },
  { name: "Brisbane" },
  { name: "Perth" }
];
