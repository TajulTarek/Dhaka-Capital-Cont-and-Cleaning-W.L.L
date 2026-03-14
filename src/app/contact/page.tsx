// ── Contact Page ──────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Dhaka Capital Contracting WLL - Get a Quote in Qatar",
  description:
    "Get in touch with Dhaka Capital Contracting WLL in Doha, Qatar. Call, WhatsApp, or use the contact form for project inquiries and quotes.",
  alternates: {
    canonical: "https://www.dhakacapitalcontracting-wll.app/contact",
  },
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115431.11709440628!2d51.4429944030616!3d25.296614488279447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4d1!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sbd!4v1715456789012!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
