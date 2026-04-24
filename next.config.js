/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages.
  // When Shopify / server actions come online, switch to `@cloudflare/next-on-pages`
  // (or move to Vercel) — static export has no server runtime.
  output: "export",
  reactStrictMode: true,
  images: {
    // Static export cannot run Next's image optimizer — all <Image> sources
    // must be served as-is. Safe at this stage (placeholders only).
    unoptimized: true,
    remotePatterns: [
      // Shopify CDN — uncomment once Shopify store is live
      // { protocol: "https", hostname: "cdn.shopify.com" },
      { protocol: "https", hostname: "images.unsplash.com" } // placeholders only — remove before launch
    ]
  }
};

module.exports = nextConfig;
