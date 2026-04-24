// Wraps every /shop/** route in the "506 Global" surface.
// The header reads this pathname to swap the wordmark; this wrapper is for
// future surface tweaks (warmer blacks, gold accents) that live in CSS.
export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <div data-surface="shop">{children}</div>;
}
