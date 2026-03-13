// ── MissionVision ─────────────────────────────────────────────────────────────
"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Mission */}
      <div
        className="rounded-2xl p-8 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b1120, #152840)" }}
      >
        <div
          className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-10"
          style={{ backgroundColor: "#39b2be" }}
          aria-hidden="true"
        />
        <div
          className="w-12 h-12 flex items-center justify-center rounded-xl mb-5"
          style={{ backgroundColor: "rgba(57,178,190,0.2)" }}
        >
          <Target size={22} style={{ color: "#39b2be" }} />
        </div>
        <h3 className="font-bold text-xl mb-3">Our Mission</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          To deliver reliable contracting, renovation, and maintenance services through
          quality workmanship, honest pricing, and timely execution while meeting
          client expectations.
        </p>
      </div>

      {/* Vision */}
      <div
        className="rounded-2xl p-8 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #278f99, #39b2be)" }}
      >
        <div
          className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-10 bg-white"
          aria-hidden="true"
        />
        <div
          className="w-12 h-12 flex items-center justify-center rounded-xl mb-5"
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
        >
          <Eye size={22} color="white" />
        </div>
        <h3 className="font-bold text-xl mb-3">Our Vision</h3>
        <p className="text-white/85 text-sm leading-relaxed">
          To become a trusted contracting partner known for consistency, durability, and
          customer-focused service across residential, commercial, and industrial projects.
        </p>
      </div>
    </div>
  );
}
