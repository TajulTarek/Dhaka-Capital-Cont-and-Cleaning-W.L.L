// ── ServiceCard ─────────────────────────────────────────────────────────────
import React from "react";
import Link from "next/link";
import {
  Hammer,
  LayoutGrid,
  Gem,
  Building2,
  Zap,
  Truck,
  Paintbrush,
  Grid3X3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Map icon name strings (stored in services.ts) to actual Lucide components */
const ICON_MAP: Record<string, LucideIcon> = {
  Hammer,
  LayoutGrid,
  Gem,
  Building2,
  Zap,
  Truck,
  Paintbrush,
  Grid3X3,
};

interface Props {
  slug: string;
  title: string;
  tagline: string;
  icon?: string;
  image?: string;
  variant?: "icon" | "image"; // icon = dark card, image = photo card
}

export default function ServiceCard({
  slug,
  title,
  tagline,
  icon = "Hammer",
  image,
  variant = "icon",
}: Props) {
  const Icon = ICON_MAP[icon] ?? Hammer;

  if (variant === "image" && image) {
    return (
      <Link
        href={`/${slug}`}
        className="group block relative overflow-hidden rounded-xl shadow-md card-hover"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/85 via-[#0b1120]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <h3 className="font-bold text-lg leading-tight">{title}</h3>
          <p className="text-sm text-slate-300 mt-1 line-clamp-2">{tagline}</p>
          <span
            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider"
            style={{ color: "#39b2be" }}
          >
            Read More →
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/${slug}`}
      className="group block bg-white rounded-xl shadow-sm border border-slate-100 p-6 card-hover text-center"
    >
      <div
        className="w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4 transition-colors duration-300"
        style={{ backgroundColor: "#eaf8fa" }}
      >
        <Icon
          size={28}
          style={{ color: "#39b2be" }}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="font-bold text-[#0b1120] text-base leading-snug mb-2">
        {title}
      </h3>
      <p className="text-slate-500 text-sm line-clamp-3">{tagline}</p>
      <span
        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider"
        style={{ color: "#39b2be" }}
      >
        Learn More →
      </span>
    </Link>
  );
}
