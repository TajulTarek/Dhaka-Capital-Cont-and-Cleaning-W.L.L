// ── Navigation Data ─────────────────────────────────────────────────────────
import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Carpentry & Joinery Works", href: "/carpentry-joinery-works" },
      { label: "Gypsum & Ceiling Works",    href: "/gypsum-ceiling-works" },
      { label: "Marble & Stone Works",      href: "/marble-stone-works" },
      { label: "Masonry & Civil Works",     href: "/masonry-civil-works" },
      { label: "MEP Works",                 href: "/mep-works" },
      { label: "Moving & Shifting",         href: "/moving-shifting" },
      { label: "Painting Works",            href: "/painting-works" },
      { label: "Tiling Works",              href: "/tiling-works" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
