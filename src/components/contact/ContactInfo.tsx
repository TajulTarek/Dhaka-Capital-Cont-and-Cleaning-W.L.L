// ── ContactInfo ───────────────────────────────────────────────────────────────
import React from "react";
import { MapPin, Phone, MessageSquare, Mail } from "lucide-react";

const INFO_ITEMS = [
  {
    icon: MapPin,
    title: "LOCATION",
    lines: ["Industrial area Doha – Qatar"],
    href: "https://maps.google.com/?q=Industrial+area+Doha+Qatar",
    linkLabel: "View on map",
  },
  {
    icon: Phone,
    title: "CALL",
    lines: ["Muhammad Shamim Ahmed", "+974 55 740 434"],
    href: "tel:+97455740434",
    linkLabel: "Call now",
  },
  {
    icon: MessageSquare,
    title: "WHATSAPP",
    lines: ["+974 55 740 434"],
    href: "https://wa.me/97455740434",
    linkLabel: "Message on WhatsApp",
  },
  {
    icon: Mail,
    title: "EMAIL",
    lines: ["dhkcptl@gmail.com"],
    href: "mailto:dhkcptl@gmail.com",
    linkLabel: "Send email",
  },
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {INFO_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.title}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm border border-slate-100 card-hover transition-all"
          >
            <div
              className="w-14 h-14 flex items-center justify-center rounded-full mb-4 transition-colors duration-300"
              style={{ backgroundColor: "#eaf8fa" }}
            >
              <Icon size={26} style={{ color: "#39b2be" }} />
            </div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#39b2be" }}
            >
              {item.title}
            </h3>
            {item.lines.map((line) => (
              <p key={line} className="font-semibold text-[#0b1120] text-base">
                {line}
              </p>
            ))}
            <span className="mt-3 text-xs text-slate-400 group-hover:text-[#39b2be] transition-colors">
              {item.linkLabel} →
            </span>
          </a>
        );
      })}
    </div>
  );
}
