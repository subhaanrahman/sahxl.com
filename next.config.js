/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Shopify CDN — uncomment once Shopify store is live
      // { protocol: "https", hostname: "cdn.shopify.com" },
      // Vercel Blob / user-uploaded assets
      // { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "images.unsplash.com" } // placeholders only — remove before launch
    ]
  },
  experimental: {
    // React 19 + Next 15 — keep server actions on by default
    serverActions: { bodySizeLimit: "2mb" }
  }
};

module.exports = nextConfig;
