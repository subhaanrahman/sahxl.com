// Wireframe: sahxl-website-spec/wireframes/04-new-music.svg
// Spec section: §9 New Music

export const metadata = { title: "Music · Archive + Requests" };

export default function MusicPage() {
  return (
    <>
      <section className="mx-auto grid max-w-content grid-cols-1 gap-0 px-6 py-16 md:grid-cols-2 md:px-10">
        <div className="relative overflow-hidden bg-paper p-8 text-paper-ink md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0,0,0,0.7) 1px, transparent 1px)",
              backgroundSize: "3px 3px"
            }}
          />
          <div className="relative rise-child">
            <p className="font-mono text-caption uppercase tracking-[0.28em] text-paper-ink/70">
              Your vote shapes what drops next
            </p>
            <h1 className="poster-in mt-5 font-heading text-display-lg leading-[0.88]">
              SAHXL<br />ARCHIVE
            </h1>

            <ol className="mt-10 space-y-3">
              {TRACKS.map((t, i) => (
                <li
                  key={t.title}
                  className="group flex items-center gap-4 border border-paper-ink/80 p-3 transition-colors duration-280 ease-sahxl-out hover:bg-paper-ink hover:text-paper"
                >
                  <button
                    aria-label={t.playing ? `Pause ${t.title}` : `Play ${t.title}`}
                    className="press-scale grid h-10 w-10 place-items-center border border-paper-ink/80 font-mono text-[13px] group-hover:border-paper"
                  >
                    <span aria-hidden>{t.playing ? "❚❚" : "▶"}</span>
                  </button>
                  <div className="h-12 w-12 bg-paper-ink/90 group-hover:bg-paper/15" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-heading text-heading-sm uppercase tracking-[0.04em]">{t.title}</div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">SAHXL · 2025</div>
                  </div>
                  <VoteButtons />
                </li>
              ))}
            </ol>

            <div className="mt-10 flex items-center justify-between border-t border-paper-ink/30 pt-4 font-mono text-[11px] uppercase tracking-[0.22em]">
              <span>{TRACKS.length} songs · 40 min</span>
              <span>by SAHXL</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[60vh] overflow-hidden bg-ink-2" aria-label="SAHXL portrait placeholder">
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-ink-0 via-ink-1 to-ink-2"
          />
          <div
            aria-hidden
            className="ambient-drift-b absolute inset-[-20%] opacity-30"
            style={{ background: "radial-gradient(circle, rgba(255,77,46,0.25) 0%, transparent 55%)" }}
          />
          <div className="absolute bottom-8 left-8 font-mono text-caption uppercase tracking-[0.28em] text-bone-300">
            Portrait · Los Angeles · 2026
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-24 md:px-10">
        <p className="font-mono text-caption uppercase tracking-[0.28em] text-ember">Open line</p>
        <h2 className="mt-4 font-heading text-display-lg leading-none">MAKE A REQUEST</h2>
        <p className="mt-5 max-w-prose506 text-body-md text-bone-300">
          Tell me what you want to hear next. A sound, a concept, a feeling — no rules. Your request shapes the next session.
        </p>

        <form className="mt-12 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          <FormField label="Name" />
          <FormField label="Country" />
          <FormField label="Email" type="email" />
          <FormField label="City" />
          <div className="md:col-span-2">
            <label className="font-mono text-caption uppercase tracking-[0.24em] text-bone-300">Message</label>
            <textarea
              rows={4}
              className="mt-3 w-full resize-none border border-hairline bg-transparent p-3 text-body-md outline-none transition-colors duration-280 ease-sahxl-out focus:border-bone-100"
            />
          </div>
          <button className="press-scale md:col-span-2 group flex w-full items-center justify-between bg-bone-100 px-8 py-6 font-heading text-display-md text-ink-0 transition-colors duration-280 ease-sahxl-out hover:bg-ember hover:text-bone-100">
            <span>SEND IT</span>
            <span aria-hidden className="transition-transform duration-280 ease-sahxl-out group-hover:translate-x-2">↗</span>
          </button>
        </form>
      </section>
    </>
  );
}

function VoteButtons() {
  return (
    <div className="flex gap-2">
      <button
        aria-label="Save — this hit"
        className="press-scale grid h-10 w-10 place-items-center border-2 border-paper-ink/80 text-[15px] transition-colors duration-280 ease-sahxl-out hover:bg-paper-ink hover:text-paper"
      >
        <span aria-hidden>♥</span>
      </button>
      <button
        aria-label="Skip — not for me"
        className="press-scale grid h-10 w-10 place-items-center border-2 border-paper-ink/80 text-[15px] transition-colors duration-280 ease-sahxl-out hover:bg-ember hover:text-bone-100 hover:border-ember"
      >
        <span aria-hidden>✕</span>
      </button>
    </div>
  );
}

function FormField({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <span className="font-mono text-caption uppercase tracking-[0.24em] text-bone-300">{label}</span>
      <input
        type={type}
        className="mt-3 w-full border-b border-hairline bg-transparent py-3 text-body-md outline-none transition-colors duration-280 ease-sahxl-out focus:border-bone-100"
      />
    </label>
  );
}

const TRACKS = [
  { title: "worst — single", playing: true },
  { title: "ANTIDOTE — single" },
  { title: "AGAIN — single" },
  { title: "LOVE AGAIN — single" }
];
