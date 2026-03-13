// ── PrimaryServices ──────────────────────────────────────────────────────────
"use client";

import React from "react";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { SERVICES } from "@/data/services";

export default function PrimaryServices() {
  const headingRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="section-padding bg-white" id="services" aria-label="Primary services">
      <div className="container-custom">
        <div ref={headingRef}>
          <SectionHeading
            eyebrow="Primary Services"
            title="What We Offer"
            subtitle="We offer a complete range of contracting, renovation, and maintenance services designed to meet residential, commercial, and industrial needs."
            center
          />
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4"
        >
          {SERVICES.map((service, i) => (
            <div
              key={service.slug}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Link
                href={`/${service.slug}`}
                className="group block relative overflow-hidden rounded-xl shadow-md"
                style={{ height: "340px" }}
              >
                {/* Background photo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(11,17,32,0.35) 0%, rgba(11,17,32,0.60) 50%, rgba(11,17,32,0.88) 100%)",
                  }}
                />

                {/* Card content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="font-extrabold text-lg leading-tight mb-3">
                    {service.title}
                  </h3>

                  {/* Sub-service bullets */}
                  <ul className="mb-5 space-y-1.5">
                    {service.subServices.slice(0, 2).map((sub) => (
                      <li
                        key={sub.title}
                        className="flex items-start gap-2 text-sm text-slate-200"
                      >
                        <span
                          className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#39b2be" }}
                          aria-hidden="true"
                        />
                        {sub.title}
                      </li>
                    ))}
                  </ul>

                  {/* LEARN MORE button */}
                  <span
                    className="inline-block self-start border border-white/80 text-white text-[11px] font-bold uppercase tracking-widest py-2 px-5 transition-all duration-300 group-hover:bg-white group-hover:text-[#0b1120] underline underline-offset-2"
                  >
                    LEARN MORE
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
