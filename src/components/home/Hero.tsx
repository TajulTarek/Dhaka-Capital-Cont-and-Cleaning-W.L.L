// ── Hero ─────────────────────────────────────────────────────────────────────
"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Wrench } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const TYPING_SERVICES = [
  "Carpentry",
  "Painting Works",
  "Civil Works",
  "MEP Works",
  "Interior Works",
  "Renovation",
];

const QUICK_SERVICES = ["Carpentry", "Civil Works", "Painting", "MEP", "Tiling", "Marble"];

const TRUST_POINTS = [
  "10+ Years Experience",
  "150+ Projects Completed",
  "Professional Team",
  "24/7 Support",
];

const HERO_BG_IMAGE = "/hero-illustration.png";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [serviceIdx, setServiceIdx] = React.useState(0);
  const [typedText, setTypedText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentWord = TYPING_SERVICES[serviceIdx];

    const tick = window.setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentWord.slice(0, typedText.length + 1);
          setTypedText(nextText);

          if (nextText === currentWord) {
            window.setTimeout(() => setIsDeleting(true), 900);
          }
        } else {
          const nextText = currentWord.slice(0, Math.max(typedText.length - 1, 0));
          setTypedText(nextText);

          if (nextText.length === 0) {
            setIsDeleting(false);
            setServiceIdx((prev) => (prev + 1) % TYPING_SERVICES.length);
          }
        }
      },
      isDeleting ? 45 : 95
    );

    return () => window.clearTimeout(tick);
  }, [typedText, isDeleting, serviceIdx]);

  return (
    <section
      className="relative overflow-hidden bg-cover bg-position-[78%_center] sm:bg-position-[72%_center] lg:bg-center"
      aria-label="Hero section"
      style={{
        backgroundImage: `url('${HERO_BG_IMAGE}')`,
      }}
    >
      {!shouldReduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            className="absolute -top-12 -left-8 h-40 w-40 rounded-full bg-blue-400/20 blur-2xl sm:h-52 sm:w-52"
            animate={{ x: [0, 10, 0], y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute top-20 -right-10 h-44 w-44 rounded-full bg-brand/20 blur-2xl sm:h-56 sm:w-56"
            animate={{ x: [0, -12, 0], y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="container-custom relative z-10 pt-6 md:pt-8 lg:pt-10 pb-10 md:pb-14">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand"
            >
              <Wrench size={14} className="text-brand" />
              Trusted Construction Services in Doha, Qatar
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}
            >
              Quality Construction
              <br />
              You Can Trust
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="mt-3 min-h-[2.2rem] text-base font-bold text-white/90 sm:mt-4 sm:min-h-10 sm:text-xl"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.42)" }}
            >
              Quality Construction for{" "}
              <span className="text-orange-400">{typedText}</span>
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-orange-400 align-middle" />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.26 }}
              className="mt-4 text-sm sm:text-base text-white/90 max-w-xl leading-relaxed"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
            >
              Reliable contracting, renovation, and maintenance services for residential,
              commercial, and industrial projects.
            </motion.p>

            <ul className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-3 sm:gap-x-4 gap-y-2 max-w-xl">
              {QUICK_SERVICES.map((service, idx) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32, delay: 0.28 + idx * 0.05 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/90"
                >
                  <CheckCircle2 size={15} className="text-brand" />
                  {service}
                </motion.li>
              ))}
            </ul>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.48 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/contact"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand/85 hover:shadow-lg"
                >
                  Get Free Quote
                  <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.54 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/services"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-lg border border-brand/30 bg-white px-6 py-3 text-sm font-bold text-brand transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:bg-brand/10"
                >
                  View Services
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.6 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <a
                  href="tel:+97455740434"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 sm:px-6 py-3 text-xs sm:text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-brand/10"
                >
                  <Phone size={16} className="text-brand" />
                  Call Us +974 55 740 434
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mt-8 sm:mt-10 md:mt-12 rounded-2xl border border-blue-100 bg-white/90 backdrop-blur-sm px-5 sm:px-6 py-4 sm:py-5 shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {TRUST_POINTS.map((point, idx) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: 0.68 + idx * 0.06 }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700"
              >
                <CheckCircle2 size={16} className="text-brand" />
                {point}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
