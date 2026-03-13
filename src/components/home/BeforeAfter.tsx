"use client";
// ── BeforeAfter ──────────────────────────────────────────────────────────────
// Interactive before/after image comparison slider for the homepage.

import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const BEFORE_IMAGE = "/before-after/before.png";
const AFTER_IMAGE  = "/before-after/after.png";

const ITEMS = [
  {
    before: BEFORE_IMAGE,
    after:  AFTER_IMAGE,
    label:  "Interior Renovation",
    description: "From a bare, unfinished space to a beautifully completed interior with premium finishes.",
  },
];

export default function BeforeAfter() {
  return (
    <section className="section-padding relative overflow-hidden bg-off-white">
      {/* Decorative blobs */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-brand/10 blur-3xl"
        animate={{ x: [0, 14, 0], y: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-12 h-56 w-56 rounded-full bg-brand/10 blur-3xl"
        animate={{ x: [0, -14, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Our Work"
            title="Before & After Transformations"
            subtitle="See the difference our craftsmanship makes. Drag the slider to reveal the transformation."
            center
          />
        </motion.div>

        <div className="flex flex-col gap-12">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="mx-auto w-full max-w-4xl"
            >
              {/* Label */}
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px flex-1 bg-brand/20" />
                <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                  {item.label}
                </span>
                <span className="h-px flex-1 bg-brand/20" />
              </div>

              <SliderCard before={item.before} after={item.after} />

              <p className="mt-4 text-center text-sm text-slate-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Individual draggable slider ─────────────────────────────────────────── */
function SliderCard({ before, after }: { before: string; after: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const rawPos = useMotionValue(50);
  const pos    = useSpring(rawPos, { stiffness: 300, damping: 30 });

  // Reactive CSS values — no pos.get() snapshots
  const clipPath   = useTransform(pos, (v) => `inset(0 ${100 - v}% 0 0)`);
  const handleLeft = useTransform(pos, (v) => `${v}%`);

  // Intro hint animation
  useEffect(() => {
    const controls = animate(rawPos, [50, 28, 72, 50], {
      duration: 2.4,
      delay: 0.7,
      ease: "easeInOut",
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPercent = useCallback((clientX: number) => {
    if (!containerRef.current) return 50;
    const { left, width } = containerRef.current.getBoundingClientRect();
    return Math.min(100, Math.max(0, ((clientX - left) / width) * 100));
  }, []);

  // Mouse
  const onMouseMove = useCallback((e: MouseEvent) => {
    rawPos.set(getPercent(e.clientX));
  }, [getPercent, rawPos]);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  }, [onMouseMove]);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setHasInteracted(true);
    rawPos.set(getPercent(e.clientX));
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }, [getPercent, rawPos, onMouseMove, onMouseUp]);

  // Touch
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    rawPos.set(getPercent(e.touches[0].clientX));
  }, [getPercent, rawPos]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setHasInteracted(true);
    rawPos.set(getPercent(e.touches[0].clientX));
  }, [getPercent, rawPos]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full select-none overflow-hidden rounded-xl border border-slate-200 shadow-md"
      style={{ cursor: isDragging ? "col-resize" : "ew-resize" }}
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
      onTouchStart={onTouchStart}
    >
      {/* AFTER — base layer, always full width */}
      <div className="absolute inset-0">
        <Image
          src={after}
          alt="After"
          fill
          className="object-cover"
          sizes="(max-width: 896px) 100vw, 896px"
          draggable={false}
          priority
        />
        <span className="absolute bottom-3 right-3 z-10 rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow">
          After
        </span>
      </div>

      {/* BEFORE — clipped from the right via clipPath, no width distortion */}
      <motion.div className="absolute inset-0" style={{ clipPath }}>
        <Image
          src={before}
          alt="Before"
          fill
          className="object-cover"
          sizes="(max-width: 896px) 100vw, 896px"
          draggable={false}
          priority
        />
        <span className="absolute bottom-3 left-3 z-10 rounded-full bg-navy px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow">
          Before
        </span>
      </motion.div>

      {/* Divider handle — reactive left via useTransform */}
      <motion.div
        className="absolute inset-y-0 z-30 flex items-center justify-center"
        style={{ left: handleLeft, x: "-50%" }}
      >
        {/* Vertical line */}
        <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.4)]" />

        {/* Handle circle */}
        <div
          className={[
            "relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-transform duration-150",
            isDragging ? "scale-110" : "scale-100",
          ].join(" ")}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className="shrink-0">
            <path d="M7 1L1 8l6 7" stroke="#39b2be" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 1l6 7-6 7" stroke="#39b2be" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Hint tooltip — disappears after first interaction */}
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="absolute -bottom-9 whitespace-nowrap rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-sm"
          >
            Drag to compare
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
