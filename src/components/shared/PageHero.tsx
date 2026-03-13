"use client";
// ── PageHero ────────────────────────────────────────────────────────────────
// Reusable hero banner for inner pages (About, Services, Contact, etc.)

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="relative overflow-hidden" style={{ ...bgStyle, minHeight: "250px" }}>
      <motion.div
        aria-hidden="true"
        className="absolute -top-24 -left-12 h-56 w-56 rounded-full bg-brand/20 blur-3xl"
        animate={{ x: [0, 12, 0], y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-28 right-2 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl"
        animate={{ x: [0, -12, 0], y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(11,17,32,0.48), rgba(15,30,48,0.38))" }} />

      {/* Content */}
      <div className="relative container-custom py-16 sm:py-20 flex flex-col items-center text-center">
        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-12 h-1 rounded-full mb-5"
          style={{ backgroundColor: "#39b2be" }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight text-shadow"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}

        {ctaLabel && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <Link
            href={ctaHref}
              className="group mt-6 inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-md font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(57,178,190,0.45)]"
              style={{ backgroundColor: "#39b2be" }}
              aria-label={ctaLabel}
            >
              {ctaLabel}
              <span className="h-1.5 w-1.5 rounded-full bg-white/90 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}

        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            aria-label="Breadcrumb"
            className="mt-6 flex items-center gap-1.5 flex-wrap justify-center rounded-full bg-black/20 px-4 py-2 backdrop-blur-sm"
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
                  <span className="text-sm font-medium" style={{ color: "#39b2be" }}>
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}
      </div>
    </section>
  );
}
