// ── PageHero ────────────────────────────────────────────────────────────────
// Reusable hero banner for inner pages (About, Services, Contact, etc.)

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs = [],
  backgroundImage,
  ctaLabel,
  ctaHref,
}: Props) {
  const bgStyle: React.CSSProperties = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
    : { background: "linear-gradient(135deg, #0b1120 0%, #152840 60%, #1e3a5f 100%)" };

  return (
    <section className="relative" style={{ ...bgStyle, minHeight: "260px" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(11,17,32,0.72)" }} />

      {/* Content */}
      <div className="relative container-custom py-20 flex flex-col items-center text-center">
        {/* Decorative line */}
        <div
          className="w-12 h-1 rounded-full mb-5"
          style={{ backgroundColor: "#e8620a" }}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight text-shadow">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-slate-300 text-base md:text-lg max-w-2xl">
            {subtitle}
          </p>
        )}

        {ctaLabel && ctaHref && (
          <Link
            href={ctaHref}
            className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-md font-semibold text-white text-sm transition-all"
            style={{ backgroundColor: "#e8620a" }}
            aria-label={ctaLabel}
          >
            {ctaLabel}
          </Link>
        )}

        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mt-6 flex items-center gap-1 flex-wrap justify-center"
          >
            <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb) => (
              <React.Fragment key={crumb.label}>
                <ChevronRight size={14} className="text-slate-600" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-sm font-medium" style={{ color: "#e8620a" }}>
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
