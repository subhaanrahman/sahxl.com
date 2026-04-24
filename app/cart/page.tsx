// Cart page — handoff to Shopify checkout lives at shop.sahxl.com.
// Spec section: §14 Tech Architecture.

import Link from "next/link";

export const metadata = { title: "Bag" };

export default function CartPage() {
  return (
    <section className="relative overflow-hidden bg-ink-0" data-surface="shop">
      <div
        aria-hidden
        className="ambient-drift-b pointer-events-none absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.12) 0%, transparent 55%)" }}
      />
      <div className="relative mx-auto max-w-2xl px-6 py-24 md:px-10">
        <div className="rise-child">
          <p className="font-mono text-caption uppercase tracking-[0.3em] text-bone-300">Your bag</p>
          <h1 className="poster-in mt-4 font-heading text-display-md leading-none">EMPTY</h1>
          <p className="mt-6 max-w-prose506 text-body-md text-bone-300">
            Nothing in the bag yet. The drop is live — pick something that won't restock.
          </p>
          <Link
            href="/shop"
            className="press-scale mt-10 inline-flex items-center gap-3 border border-bone-100 px-10 py-4 font-mono text-caption font-semibold uppercase tracking-[0.26em] text-bone-100 transition-colors duration-280 ease-sahxl-out hover:bg-bone-100 hover:text-ink-0"
          >
            <span>Start the drop</span>
            <span aria-hidden>↗</span>
          </Link>
          <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.28em] text-bone-400">
            Checkout runs on shop.sahxl.com · Secure · Shop Pay · PayPal
          </p>
        </div>
      </div>
    </section>
  );
}
