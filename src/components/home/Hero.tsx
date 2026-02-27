// ── Hero ─────────────────────────────────────────────────────────────────────
"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, FileText, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&auto=format&fit=crop&q=80";

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        fetchPriority="high"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,17,32,0.75) 0%, rgba(11,17,32,0.55) 50%, rgba(11,17,32,0.80) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative container-custom text-center py-24 md:py-32">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: "rgba(232,98,10,0.22)", color: "#ff8c42", border: "1px solid rgba(232,98,10,0.4)" }}
          >
            Dhaka Capital Cont and Cleaning W.L.L — Doha, Qatar
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight text-shadow max-w-4xl mx-auto"
        >
          QUALITY CRAFTSMANSHIP
          <br />
          <span style={{ color: "#e8620a" }}>YOU CAN TRUST</span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-5 text-lg md:text-xl font-semibold text-slate-200 max-w-2xl mx-auto"
        >
          Reliable Contracting, Renovation, and Maintenance Services
        </motion.h2>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-4 text-base text-slate-300 max-w-xl mx-auto leading-relaxed"
        >
          Dhaka Capital delivers dependable workmanship for residential, commercial,
          and industrial projects. From small repairs to full builds, we get it done right.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/97455740434"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white text-sm shadow-lg transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
            style={{ backgroundColor: "#e8620a" }}
          >
            <MessageCircle size={17} />
            +974 55 740 434
          </a>

          <a
            href="tel:+97466895375"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white text-sm border-2 border-white/60 hover:border-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
          >
            <Phone size={17} />
            +974 66 895 375
          </a>

          <a
            href="https://laibacontracting-wll.com/wp-content/uploads/2025/12/Laibacontracting-wll.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white text-sm border-2 border-white/60 hover:border-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
          >
            <FileText size={17} />
            Company Profile
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave / fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #ffffff 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
