// ── WhereWeWork ──────────────────────────────────────────────────────────────
"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const WORK_AREAS = [
  {
    label: "Residential",
    caption: "HDB flats, condominiums, and landed properties",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop",
  },
  {
    label: "Commercial",
    caption: "Offices, shops, warehouses, and industrial facilities",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
  },
  {
    label: "Industrial",
    caption: "New constructions and renovation projects",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
  },
];

export default function WhereWeWork() {
  const headingRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "#f8f7f5" }}
      aria-label="Where we work"
      id="where-we-work"
    >
      <div className="container-custom">
        <div ref={headingRef}>
          <SectionHeading
            eyebrow="Where We Work"
            title="Serving Every Project Type"
            subtitle="Dhaka Capital Contracting and Cleaning W.L.L provides services for residential, commercial, and industrial properties. We work in homes, offices, shops, and large facilities, delivering reliable workmanship and consistent quality wherever our clients need us."
            center
          />
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {WORK_AREAS.map((area) => (
            <div
              key={area.label}
              className="relative group overflow-hidden rounded-2xl shadow-md"
              style={{ minHeight: "320px" }}
            >
              {/* Background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={area.image}
                alt={area.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/85 via-[#0b1120]/30 to-transparent" />

              {/* Label badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider"
                  style={{ backgroundColor: "#39b2be" }}
                >
                  {area.label}
                </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-lg leading-tight">{area.caption}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
