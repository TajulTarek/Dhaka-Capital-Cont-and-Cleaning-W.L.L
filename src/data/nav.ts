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
      { label: "Electrical & Plumbing",     href: "/mep-works" },
      { label: "Moving & Shifting",         href: "/moving-shifting" },
      { label: "Painting Works",            href: "/painting-works" },
      { label: "Tiling Works",              href: "/tiling-works" },
      { label: "Building Construction",     href: "/building-construction" },
      { label: "Manpower Supply",           href: "/manpower-supply" },
      { label: "Maintenance Works",         href: "/maintenance-works" },
      { label: "Cleaning Services",         href: "/cleaning-services" },
      { label: "A/C & Refrigerator Repairing", href: "/ac-refrigerator-repairing" },
      { label: "Hajor Works",               href: "/hajor-works" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
