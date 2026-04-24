// Standalone requests page — also reached via "Requests" pill in header.
// Spec section: §9.3 (same form lives inline on /music).

export const metadata = { title: "Make a Request" };

export default function RequestsPage() {
  return (
    <section className="relative overflow-hidden bg-ink-0">
      <div
        aria-hidden
        className="ambient-drift-a pointer-events-none absolute -left-1/4 top-0 h-[60vmax] w-[60vmax] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, rgba(255,77,46,0.22) 0%, transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-content px-6 py-24 md:px-10">
        <div className="rise-child max-w-3xl">
          <p className="font-mono text-caption uppercase tracking-[0.3em] text-ember">Open line</p>
          <h1 className="poster-in mt-5 font-heading text-display-lg leading-[0.9]">MAKE A REQUEST</h1>
          <p className="mt-6 max-w-prose506 text-body-md text-bone-300">
            Tell me what you want to hear next. A sound, a concept, a feeling — no rules.
            Your request shapes the next session.
          </p>
        </div>

        <form className="mt-16 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          <Field label="Name" />
          <Field label="Country" />
          <Field label="Email" type="email" />
          <Field label="City" />
          <div className="md:col-span-2">
            <label className="font-mono text-caption uppercase tracking-[0.24em] text-bone-300">Message</label>
            <textarea
              rows={5}
              placeholder="What do you want to hear..."
              className="mt-3 w-full resize-none border border-hairline bg-transparent p-4 text-body-md outline-none transition-colors duration-280 ease-sahxl-out focus:border-bone-100"
            />
          </div>
          <button className="press-scale md:col-span-2 group flex w-full items-center justify-between bg-bone-100 px-8 py-6 font-heading text-display-md text-ink-0 transition-colors duration-280 ease-sahxl-out hover:bg-ember hover:text-bone-100">
            <span>SEND IT</span>
            <span aria-hidden className="transition-transform duration-280 ease-sahxl-out group-hover:translate-x-2">↗</span>
          </button>
          <p className="md:col-span-2 mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-bone-400">
            Every message lands in the inbox. The loudest requests shape the next drop.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
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
