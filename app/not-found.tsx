import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative mx-auto grid min-h-[70vh] max-w-content place-items-center overflow-hidden px-6 py-24 text-center md:px-10">
      <div
        aria-hidden
        className="ambient-drift-a pointer-events-none absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, rgba(255,77,46,0.22) 0%, transparent 60%)" }}
      />
      <div className="relative rise-child">
        <p className="font-mono text-caption uppercase tracking-[0.4em] text-ember">404 · No Limit</p>
        <h1 className="poster-in mt-5 font-heading text-display-xl leading-none">OFF THE TRACKLIST</h1>
        <p className="mt-6 text-body-md text-bone-300">
          This page didn&apos;t make the cut. Try the menu.
        </p>
        <Link
          href="/"
          className="press-scale mt-10 inline-block border border-bone-100 px-10 py-4 font-mono text-caption font-semibold uppercase tracking-[0.24em] transition-colors duration-280 ease-sahxl-out hover:bg-bone-100 hover:text-ink-0"
        >
          Home
        </Link>
      </div>
    </section>
  );
}
