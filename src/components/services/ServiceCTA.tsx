// ── ServiceCTA ────────────────────────────────────────────────────────────────
// Orange CTA strip used at the bottom of every service page.
"use client";
import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title?: string;
  subtitle?: string;
}

export default function ServiceCTA({
  title = "Ready to Start Your Project?",
  subtitle = "Contact us today for a free site inspection and transparent quotation.",
}: Props) {
  return (
    <section
      className="relative overflow-hidden py-14 sm:py-16"
      style={{
        background: "linear-gradient(135deg, #39b2be 0%, #278f99 100%)",
      }}
      aria-label="Call to action"
    >
      <motion.div
        aria-hidden="true"
        className="absolute -top-16 -left-14 h-44 w-44 rounded-full bg-white/20 blur-3xl"
        animate={{ x: [0, 8, 0], y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-16 right-0 h-48 w-48 rounded-full bg-navy/20 blur-3xl"
        animate={{ x: [0, -8, 0], y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">{title}</h2>
          <p className="mt-2 text-white/85 text-sm md:text-base">{subtitle}</p>
        </div>

        <div className="flex w-full md:w-auto flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-end shrink-0">
          <Link
            href="/contact"
            className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 px-7 py-3 rounded-lg font-bold text-[#39b2be] bg-white hover:bg-cyan-50 transition-all duration-300 text-sm shadow-lg hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(11,17,32,0.25)]"
          >
            Get a Free Quote
            <span className="h-1.5 w-1.5 rounded-full bg-brand transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href="https://wa.me/97455740434"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-7 py-3 rounded-lg font-bold text-white border-2 border-white/70 hover:border-white hover:bg-white/10 transition-all duration-300 text-sm hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(11,17,32,0.28)]"
          >
            <Phone size={15} />
            +974 55 740 434
          </a>
        </div>
      </div>
    </section>
  );
}
