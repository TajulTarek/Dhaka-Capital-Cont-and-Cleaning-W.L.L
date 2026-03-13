// ── FAQ ───────────────────────────────────────────────────────────────────────
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { FAQS } from "@/data/faqs";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const headingRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const listRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "#f8f7f5" }}
      aria-label="Frequently asked questions"
      id="faq"
    >
      <div className="container-custom">
        <div ref={headingRef}>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Find quick answers to the most common questions about our services and processes."
            center
          />
        </div>

        <div ref={listRef} className="max-w-3xl mx-auto mt-4 flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-[#0b1120] hover:text-[#39b2be] transition-colors text-sm md:text-base"
                aria-expanded={openIdx === i}
                aria-controls={`faq-body-${i}`}
                id={`faq-btn-${i}`}
              >
                <span>{faq.question}</span>
                <span
                  className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-white transition-colors"
                  style={{ backgroundColor: openIdx === i ? "#39b2be" : "#0b1120" }}
                  aria-hidden="true"
                >
                  {openIdx === i ? <Minus size={13} /> : <Plus size={13} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    id={`faq-body-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
