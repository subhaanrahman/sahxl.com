// Spec section: §5 Persistent UI — "Sahxl Story" is the about/bio page.
// No wireframe yet. Cinematic bio + press contact.

export const metadata = { title: "Sahxl Story" };

export default function StoryPage() {
  return (
    <article className="relative overflow-hidden bg-ink-0">
      <div
        aria-hidden
        className="ambient-drift-b pointer-events-none absolute -right-1/4 top-40 h-[60vmax] w-[60vmax] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, rgba(255,77,46,0.22) 0%, transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-content px-6 py-24 md:px-10">
        <div className="rise-child">
          <p className="font-mono text-caption uppercase tracking-[0.36em] text-bone-300">The story</p>
          <h1 className="poster-in mt-5 font-heading text-display-xl leading-[0.88]">NO LIMIT</h1>
          <p className="mt-6 max-w-prose506 font-mono text-caption uppercase tracking-[0.28em] text-ember">
            SAHXL · 506 Global · Los Angeles
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div className="relative aspect-[3/4] overflow-hidden bg-ink-2" aria-label="SAHXL portrait placeholder">
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-ink-3 via-ink-2 to-ink-0"
            />
            <div
              aria-hidden
              className="ambient-drift-a absolute inset-[-20%] opacity-40"
              style={{ background: "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 55%)" }}
            />
            <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.28em] text-bone-300">
              Portrait · Los Angeles
            </div>
          </div>

          <div className="max-w-prose506 space-y-8 text-body-lg text-bone-200">
            <p>
              SAHXL came up between cities — a voice shaped by late drives, louder rooms, and the kind of nights
              that don't end clean. Born from 506 Global. Based in Los Angeles.
            </p>
            <p>
              The sound is heavy but honest. Rap records that breathe like ballads. R&amp;B cuts with teeth.
              Production that sits under the voice, never in front of it.
            </p>

            <blockquote className="relative border-l border-gold/60 py-4 pl-8">
              <span
                aria-hidden
                className="absolute -left-2 top-0 font-serif506 text-[64px] leading-none text-gold/30"
              >
                &ldquo;
              </span>
              <p className="font-serif506 text-[22px] italic leading-snug text-bone-100">
                No limit means no ceiling on the work. No limit on who gets to hear it. No limit on how
                far it travels.
              </p>
              <footer className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-bone-400">
                — SAHXL
              </footer>
            </blockquote>

            <p>
              What's next is already being cut. Drops land through the vault first — the rest of the
              world catches up later.
            </p>

            <div id="contact" className="border-t border-hairline pt-8">
              <h2 className="font-heading text-heading-md uppercase tracking-[0.1em]">Contact · Press</h2>
              <div className="mt-6 space-y-3 font-mono text-[12px] uppercase tracking-[0.22em]">
                <div className="flex justify-between border-b border-hairline pb-3">
                  <span className="text-bone-400">Management</span>
                  <a className="text-bone-100 underline-cta hover:text-ember" href="mailto:management@sahxl.com">
                    management@sahxl.com
                  </a>
                </div>
                <div className="flex justify-between border-b border-hairline pb-3">
                  <span className="text-bone-400">Press</span>
                  <a className="text-bone-100 underline-cta hover:text-ember" href="mailto:press@sahxl.com">
                    press@sahxl.com
                  </a>
                </div>
                <div className="flex justify-between border-b border-hairline pb-3">
                  <span className="text-bone-400">Bookings</span>
                  <a className="text-bone-100 underline-cta hover:text-ember" href="mailto:bookings@sahxl.com">
                    bookings@sahxl.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
