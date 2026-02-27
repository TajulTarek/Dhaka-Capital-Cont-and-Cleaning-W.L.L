// ── Gallery ───────────────────────────────────────────────────────────────────
"use client";

import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { GALLERY_IMAGES } from "@/data/gallery";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Gallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const headingRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <>
      <section
        className="section-padding bg-white"
        aria-label="Project gallery"
        id="gallery"
      >
        <div className="container-custom">
          <div ref={headingRef}>
            <SectionHeading
              eyebrow="Our Gallery"
              title="Highlighting Our Workmanship"
              subtitle="Our gallery showcases completed projects by Laiba Contracting, highlighting our workmanship, attention to detail, and commitment to quality. Each project reflects our focus on reliable execution, durable results, and clean finishing across renovation, maintenance, and technical works."
              center
            />
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {GALLERY_IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxSrc(img.src)}
                className="relative group overflow-hidden rounded-xl block aspect-square focus:outline-none focus:ring-2 focus:ring-[#e8620a] focus:ring-offset-2"
                aria-label={`View: ${img.alt}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0b1120]/0 group-hover:bg-[#0b1120]/55 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={28}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                {/* Category badge */}
                <span
                  className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "#e8620a" }}
                >
                  {img.category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxSrc(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              onClick={() => setLightboxSrc(null)}
              aria-label="Close image"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={lightboxSrc}
              alt="Gallery image enlarged"
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
