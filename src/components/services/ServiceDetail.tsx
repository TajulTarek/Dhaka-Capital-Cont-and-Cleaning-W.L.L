// ── ServiceDetail ─────────────────────────────────────────────────────────────
// Reusable component that renders the detailed content for any service page.
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import type { ServiceData } from "@/types";

interface Props {
  service: ServiceData;
}

function isRenderableImageSrc(src?: string): src is string {
  return Boolean(src && /^(\/|https?:\/\/)/.test(src));
}

export default function ServiceDetail({ service }: Props) {
  const introRef  = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const cardsRef  = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const craftRef  = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <>
      {/* ── Introduction ── */}
      <section className="section-padding bg-white relative overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute -top-14 -left-10 h-44 w-44 rounded-full bg-brand/15 blur-3xl"
          animate={{ x: [0, 10, 0], y: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-custom" ref={introRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                eyebrow="Overview"
                title={`High-Quality ${service.shortTitle} Solutions for Residential & Commercial Spaces.`}
              />
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {service.heroDescription}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {service.subServices.slice(0, 3).map((sub) => (
                  <span
                    key={sub.title}
                    className="inline-flex items-center rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-[11px] sm:text-xs font-semibold text-brand"
                  >
                    {sub.title}
                  </span>
                ))}
              </div>

              {service.photoSuggestions && service.photoSuggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                  className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <h3 className="text-sm font-bold text-navy">Recommended Photos To Add</h3>
                  <ul className="mt-2 space-y-1.5">
                    {service.photoSuggestions.map((item) => (
                      <li key={item} className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        - {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
              style={{ minHeight: "260px" }}
            >
              <motion.div
                initial={{ scale: 1.04 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                src={service.mainImage}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-linear-to-t from-navy/45 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/85 px-3 py-2 backdrop-blur-sm">
                <p className="text-xs sm:text-sm font-semibold text-navy">{service.shortTitle} Project Preview</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Sub-services grid ── */}
      {service.subServices.length > 0 && (
        <section className="section-padding relative overflow-hidden" style={{ backgroundColor: "#f8f7f5" }}>
          <motion.div
            aria-hidden="true"
            className="absolute -bottom-12 right-0 h-52 w-52 rounded-full bg-blue-200/30 blur-3xl"
            animate={{ x: [0, -10, 0], y: [0, 8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="container-custom" ref={cardsRef}>
            <SectionHeading
              eyebrow="What We Provide"
              title={`Our ${service.shortTitle} Services`}
              center
            />

            <div
              className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(25rem, 1fr))" }}
            >
              {service.subServices.map((sub, i) => {
                const imageSrc = isRenderableImageSrc(sub.image) ? sub.image : undefined;

                return (
                <motion.div
                  key={sub.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="group mx-auto w-4/5 overflow-hidden rounded-md border border-slate-200 bg-white"
                >
                  {imageSrc ? (
                    <div className="relative w-full overflow-hidden rounded-t-md" style={{ height: "14.3rem" }}>
                      <Image
                        src={imageSrc}
                        alt={sub.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-tr from-brand/10 via-transparent to-blue-300/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  ) : (
                    <div className="w-full rounded-t-md bg-linear-to-br from-slate-100 to-slate-200" style={{ height: "14.3rem" }} />
                  )}

                  <div className="border-t border-slate-100 bg-linear-to-b from-white to-slate-50/70 px-5 pb-4 pt-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand/80">
                      Featured Service
                    </span>
                    <h3 className="mt-1 text-lg font-bold leading-snug text-navy">
                      {sub.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-600">
                      {sub.description}
                    </p>
                    <div className="mt-3 h-1 w-12 rounded-full bg-brand/30 transition-all duration-300 group-hover:w-18 group-hover:bg-brand/45" />
                  </div>
                </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Crafting section ── */}
      <section className="section-padding bg-white relative overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute top-10 right-8 h-36 w-36 rounded-full bg-brand/10 blur-3xl"
          animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-custom max-w-4xl" ref={craftRef}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="Our Commitment"
              title={service.craftingTitle}
              center
            />
          </motion.div>
          <div className="mt-4 space-y-4 rounded-2xl border border-slate-100 bg-linear-to-br from-white to-slate-50 p-5 sm:p-8 shadow-sm">
            {service.craftingBody.split("\n\n").map((para, i) => (
              <p key={i} className="text-slate-600 text-sm md:text-base leading-relaxed text-center">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
