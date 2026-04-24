/**
 * Global nav model.
 * See sahxl-website-spec/site-map.md for the full tree.
 *
 * Note: the wireframes show different 4th nav items on different pages
 * ("Sahxl Story" on music/tour; "VIP Access" on product detail).
 * We expose both and let the nav component choose the fourth slot based on route.
 */

export type NavItem = {
  label: string;
  href: string;
  /** Shown as small gray (n) next to label once counts wire up */
  count?: number;
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Shop Merch", href: "/shop" },
  { label: "New Music", href: "/music" },
  { label: "Tour Dates", href: "/tour" },
  { label: "Sahxl Story", href: "/story" }
];

export const VIP_NAV_SWAP: NavItem = { label: "VIP Access", href: "/vip" };

export const FOOTER_NAV = {
  shop: [
    { label: "All Merch", href: "/shop" },
    { label: "New Arrivals", href: "/shop/new" },
    { label: "Exclusive (VIP)", href: "/vip" }
  ],
  music: [
    { label: "Archive", href: "/music" },
    { label: "Unreleased Tapes", href: "/music/unreleased" },
    { label: "Make a Request", href: "/requests" }
  ],
  tour: [
    { label: "Dates", href: "/tour" },
    { label: "Request Your City", href: "/tour#request" }
  ],
  about: [
    { label: "Sahxl Story", href: "/story" },
    { label: "Contact / Press", href: "/story#contact" }
  ]
};
