// Wireframe: bottom of sahxl-website-spec/wireframes/04-new-music.svg
// Spec section: §9.4 Unreleased Tapes

export const metadata = { title: "Unreleased Tapes" };

export default function UnreleasedPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-24 md:px-10">
      <p className="font-mono text-caption uppercase tracking-[0.3em] text-ember">The vault</p>
      <h1 className="mt-4 font-heading text-display-lg leading-none">UNRELEASED TAPES</h1>
      <p className="mt-5 max-w-prose506 text-body-md text-bone-300">
        Written + produced by SAHXL. Original composition. Masters in distribution. Drop your email to unlock the vault.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {TAPES.map((tape, i) => (
          <article
            key={tape.title}
            className="film-grain group relative aspect-[4/3] overflow-hidden border border-hairline bg-ink-2"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-ink-3 via-ink-2 to-ink-0 transition-transform duration-800 ease-sahxl-out group-hover:scale-[1.05]"
            />
            {i === 0 && (
              <div
                aria-hidden
                className="ambient-drift-a absolute inset-[-20%] opacity-40"
                style={{ background: "radial-gradient(circle, rgba(255,77,46,0.3) 0%, transparent 55%)" }}
              />
            )}

            <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.24em] text-bone-300">
              Tape 0{i + 1}
            </div>

            <div className="absolute inset-0 grid place-items-center">
              <button
                aria-label={i === 0 ? `Play ${tape.title}` : "Unlock with email"}
                className={`press-scale grid h-16 w-16 place-items-center rounded-pill transition-all duration-280 ease-sahxl-out ${
                  i === 0
                    ? "bg-ember text-bone-100 shadow-glow-ember hover:scale-110"
                    : "border border-bone-100 bg-ink-1/40 text-bone-100 backdrop-blur-md group-hover:border-ember group-hover:text-ember"
                }`}
              >
                <span aria-hidden className="text-[18px] leading-none">{i === 0 ? "▶" : "🔒"}</span>
              </button>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink-0/80 to-transparent p-4">
              <div>
                <div className="font-heading text-heading-sm uppercase tracking-[0.04em] text-bone-100">{tape.title}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-300">
                  {i === 0 ? "Unlocked · Preview" : "Locked · Enter email to unlock"}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const TAPES = [
  { title: "Lost Tapes — Baneful '23" },
  { title: "Studio Session 04" },
  { title: "Studio Session 07" }
];
