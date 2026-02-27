// ── CoreValues ────────────────────────────────────────────────────────────────
"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, RefreshCcw, ShieldCheck, Clock, Star, HeartHandshake, Headphones } from "lucide-react";

const VALUES = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    body: "We deliver precise, durable workmanship with attention to detail on every project, big or small.",
  },
  {
    icon: RefreshCcw,
    title: "Complete Renovation",
    body: "From planning to finishing, we handle full renovation works tailored to your space and needs.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Maintenance",
    body: "Fast, dependable maintenance services to keep your property safe, functional, and well maintained.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    body: "We respect your time and complete projects as promised without compromising quality.",
  },
  {
    icon: Star,
    title: "5+ Years Of Experience",
    body: "Over 5 years of hands-on experience delivering reliable, quality contracting solutions.",
  },
  {
    icon: HeartHandshake,
    title: "Providing Awesome Service",
    body: "Skilled professionals dedicated to delivering quality in every single engagement.",
  },
  {
    icon: Headphones,
    title: "24/7 Our Support",
    body: "24/7 support providing fast response, reliable assistance, and dependable service whenever you need it.",
  },
];

export default function CoreValues() {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {VALUES.map((v, i) => {
        const Icon = v.icon;
        return (
          <div
            key={v.title}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-xl mb-4"
              style={{ backgroundColor: "#fff3ec" }}
            >
              <Icon size={24} style={{ color: "#e8620a" }} />
            </div>
            <h3 className="font-bold text-[#0b1120] text-base mb-2">{v.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{v.body}</p>
          </div>
        );
      })}
    </div>
  );
}
