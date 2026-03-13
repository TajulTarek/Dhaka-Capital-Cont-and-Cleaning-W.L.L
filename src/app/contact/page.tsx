// ── Contact Page ──────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Laiba Contracting W.L.L",
  description:
    "Get in touch with Laiba Contracting in Doha, Qatar. Call, WhatsApp, or use the contact form for quotes, project enquiries, and support.",
  alternates: { canonical: "https://laibacontracting-wll.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We are here to assist you with any inquiries or services you need. Reach out via phone, WhatsApp, or our contact form."
        breadcrumbs={[{ label: "Contact" }]}
        backgroundImage="/contact/contact-hero.png"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Contact info cards */}
          <ContactInfo />

          {/* Form */}
          <div className="mt-12 max-w-2xl mx-auto">
            <ContactForm />
          </div>

          {/* Map embed placeholder */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-md border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.0835764098737!2d51.5289!3d25.2854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzA3LjQiTiA1McKwMzEnNDQuMCJF!5e0!3m2!1sen!2sqt!4v1234567890"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Laiba Contracting location – Industrial area Doha, Qatar"
            />
          </div>
        </div>
      </section>
    </>
  );
}
