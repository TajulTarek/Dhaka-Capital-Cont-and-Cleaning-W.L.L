// ── ServiceDetail ─────────────────────────────────────────────────────────────
// Reusable component that renders the detailed content for any service page.
"use client";

import React from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import type { ServiceData } from "@/types";

interface Props {
  service: ServiceData;
}

export default function ServiceDetail({ service }: Props) {
  const introRef  = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const cardsRef  = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const craftRef  = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <>
      {/* ── Introduction ── */}
      <section className="section-padding bg-white">
        <div className="container-custom" ref={introRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Overview"
                title={`High-Quality ${service.shortTitle} Solutions for Residential & Commercial Spaces.`}
              />
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {service.heroDescription}
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ minHeight: "340px" }}>
              <Image
                src={service.mainImage}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Sub-services grid ── */}
      {service.subServices.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: "#f8f7f5" }}>
          <div className="container-custom" ref={cardsRef}>
            <SectionHeading
              eyebrow="What We Provide"
              title={`Our ${service.shortTitle} Services`}
              center
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {service.subServices.map((sub, i) => (
                <div
                  key={sub.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {sub.image && (
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={sub.image}
                        alt={sub.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "#e8620a" }}
                    >
                      {sub.subtitle}
                    </span>
                    <h3 className="mt-1 font-bold text-[#0b1120] text-base leading-snug">
                      {sub.title}
                    </h3>
                    <p className="mt-2 text-slate-500 text-sm leading-relaxed">
                      {sub.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Crafting section ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl" ref={craftRef}>
          <SectionHeading
            eyebrow="Our Commitment"
            title={service.craftingTitle}
            center
          />
          <div className="mt-4 space-y-4">
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
