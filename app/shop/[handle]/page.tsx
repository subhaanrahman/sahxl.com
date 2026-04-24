// Wireframe: sahxl-website-spec/wireframes/03-product-detail.svg
// Spec section: §8 Product Detail

import { notFound } from "next/navigation";

// Required for `output: "export"` — pre-renders each product handle at build time.
// When MOCK_PRODUCTS is replaced with Shopify, this should fetch real handles.
export function generateStaticParams() {
  return Object.keys(MOCK_PRODUCTS).map((handle) => ({ handle }));
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  return { title: handle.replace(/-/g, " ") };
}

export default async function ProductPage({
  params
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;

  const product = MOCK_PRODUCTS[handle];
  if (!product) notFound();

  return (
    <>
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-ink-0">
        <div
          aria-hidden
          className="ambient-drift-a pointer-events-none absolute -left-1/4 top-0 h-[70vmax] w-[70vmax] rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 60%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <span className="font-heading leading-none tracking-[0.02em] text-bone-100 opacity-[0.06] text-[22vw]">
            NO LIMIT
          </span>
        </div>
        <div className="relative z-10 aspect-square w-[min(72vw,520px)] bg-gradient-to-br from-ink-3 via-ink-2 to-ink-1 shadow-glow-ember" aria-label="Product image placeholder" />
      </section>

      <section className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:gap-16 md:px-10">
        <div className="rise-child">
          <nav aria-label="Breadcrumb" className="mb-8 font-mono text-caption uppercase tracking-[0.22em] text-bone-400">
            Catalog <span aria-hidden>/</span> {product.category} <span aria-hidden>/</span> {product.title}
          </nav>
          <h1 className="font-heading text-display-lg leading-[0.9]">{product.title}</h1>
          <p className="mt-4 font-mono text-caption uppercase tracking-[0.24em] text-ember">
            {product.subtitle}
          </p>
          <p className="mt-8 max-w-prose506 text-body-md text-bone-200">
            {product.description}
          </p>
          <div className="mt-10 space-y-3 border-t border-hairline pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-bone-300">
            <div className="flex justify-between"><span>Fit</span><span className="text-bone-100">Relaxed drop-shoulder</span></div>
            <div className="flex justify-between"><span>Weight</span><span className="text-bone-100">270 GSM heavyweight cotton</span></div>
            <div className="flex justify-between"><span>Ships</span><span className="text-bone-100">Worldwide · 3–7 days</span></div>
          </div>
        </div>

        <aside className="rise-child lg:sticky lg:top-28 lg:self-start">
          <div className="font-heading text-display-md leading-none nums-tabular">{product.price}</div>
          <div className="mt-10">
            <div className="font-mono text-caption uppercase tracking-[0.24em] text-bone-300">Size</div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  className="press-scale border border-hairline-strong py-3 font-mono text-body-sm tracking-[0.1em] transition-colors duration-280 ease-sahxl-out hover:border-bone-100 hover:bg-bone-100 hover:text-ink-0"
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-400">Model is 1.82m, wearing size M</p>
          </div>

          <button className="press-scale mt-10 w-full bg-bone-100 py-4 font-mono text-caption font-semibold uppercase tracking-[0.22em] text-ink-0 transition-colors duration-280 ease-sahxl-out hover:bg-ember hover:text-bone-100 hover:shadow-glow-ember">
            Add to cart
          </button>
          <button className="press-scale mt-3 w-full bg-[#FFC439] py-4 font-mono text-caption font-semibold uppercase tracking-[0.2em] text-ink-0 transition duration-280 ease-sahxl-out hover:brightness-95">
            Add to cart with PayPal
          </button>
          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-bone-400">
            Free returns within 14 days
          </p>
        </aside>
      </section>
    </>
  );
}

const MOCK_PRODUCTS: Record<string, {
  title: string;
  subtitle: string;
  category: string;
  price: string;
  description: string;
}> = {
  "kiaeesha-ls": {
    title: "KIAEESHA LS",
    subtitle: "Vintage tee · Kiaeesha cut · No Limit edition",
    category: "Outerwear",
    price: "$395.99 AUD",
    description:
      "Washed, vintage-faded long sleeve with a fragmented collage of feminine portraits. 270 GSM heavyweight cotton, drop-shoulder relaxed fit, muted tonal wash. Made to look lived in the day you get it."
  },
  "no-limit-bomber": {
    title: "NO LIMIT BOMBER",
    subtitle: "Premium outerwear · 506 Global",
    category: "Outerwear",
    price: "$220.00 AUD",
    description:
      "Matte-black bomber. Tonal 506 Global embroidery at the chest. No loud logos — if you know, you know. Lined, weighted cuffs, midnight-ready."
  }
};
