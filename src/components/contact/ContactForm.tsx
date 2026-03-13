// ── ContactForm ───────────────────────────────────────────────────────────────
"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import type { ContactFormData } from "@/types";

const INITIAL: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
    }
  };

  /* Field helper */
  const inputCls =
    "w-full text-sm px-4 py-3 rounded-lg border border-slate-200 bg-[#f8f7f5] focus:outline-none focus:ring-2 focus:ring-[#39b2be] focus:border-transparent text-[#0b1120] placeholder:text-slate-400 transition-shadow";

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
      <h2 className="text-xl font-bold text-[#0b1120] mb-1">Send Us a Message</h2>
      <p className="text-slate-500 text-sm mb-6">
        Fill in the form below and our team will get back to you within 24 hours.
      </p>

      {/* Success */}
      {status === "success" && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-100 mb-6">
          <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-800 text-sm">Message sent!</p>
            <p className="text-green-600 text-xs mt-0.5">
              Thank you for reaching out. We will get back to you shortly.
            </p>
          </div>
        </div>
      )}

      {/* Error */}
      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100 mb-6">
          <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-700 text-sm">Failed to send</p>
            <p className="text-red-500 text-xs mt-0.5">{errorMsg}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-slate-600 mb-1.5">
              Full Name <span className="text-[#39b2be]">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-600 mb-1.5">
              Email Address <span className="text-[#39b2be]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="dhkcptl@gmail.com"
              className={inputCls}
            />
          </div>
        </div>

        {/* Phone & Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-slate-600 mb-1.5">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+974 XXXX XXXX"
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-xs font-semibold text-slate-600 mb-1.5">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={inputCls}
            >
              <option value="">Select a subject…</option>
              <option>Carpentry & Joinery Works</option>
              <option>Gypsum & Ceiling Works</option>
              <option>Marble & Stone Works</option>
              <option>Masonry & Civil Works</option>
              <option>MEP Works</option>
              <option>Moving & Shifting</option>
              <option>Painting Works</option>
              <option>Tiling Works</option>
              <option>General Enquiry</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-slate-600 mb-1.5">
            Message <span className="text-[#39b2be]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project…"
            className={`${inputCls} resize-none`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#39b2be" }}
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
