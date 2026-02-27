// ── WhatsAppButton ──────────────────────────────────────────────────────────
// Fixed floating WhatsApp button visible on all pages.
"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "97466895375";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Small tooltip bubble */}
      {tooltip && (
        <div className="bg-white rounded-xl shadow-xl p-4 max-w-[200px] border border-slate-100 animate-fade-in">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-slate-700">Chat with us</span>
            <button
              onClick={() => setTooltip(false)}
              aria-label="Close"
              className="text-slate-400 hover:text-slate-600 ml-2"
            >
              <X size={12} />
            </button>
          </div>
          <p className="text-xs text-slate-500">Hi! How can we help you today? 👋</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-center text-xs font-semibold text-white rounded-md py-1.5 px-3 transition-colors"
            style={{ backgroundColor: "#25D366" }}
          >
            Start Chat
          </a>
        </div>
      )}

      {/* Main button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        className="w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle size={28} color="#ffffff" fill="#ffffff" />
      </a>
    </div>
  );
}
