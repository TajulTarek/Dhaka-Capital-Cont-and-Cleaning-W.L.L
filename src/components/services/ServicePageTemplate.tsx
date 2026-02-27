// ── Shared service page builder ───────────────────────────────────────────────
// Called by each individual service page.tsx to avoid code duplication.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import ServiceDetail from "@/components/services/ServiceDetail";
import ServiceCTA from "@/components/services/ServiceCTA";
import WorkingProcess from "@/components/home/WorkingProcess";
import { getServiceBySlug } from "@/data/services";

interface Props {
  slug: string;
}

export function buildServiceMetadata(slug: string): Metadata {
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Laiba Contracting W.L.L`,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} | Laiba Contracting W.L.L`,
      description: service.metaDescription,
      images: [{ url: service.heroImage, width: 1600, height: 900, alt: service.title }],
    },
    alternates: { canonical: `https://laibacontracting-wll.com/${slug}` },
  };
}

export default function ServicePage({ slug }: Props) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        title={service.title.toUpperCase()}
        subtitle={service.tagline}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.shortTitle }]}
        ctaLabel="CONTACT US"
        ctaHref="/contact"
        backgroundImage={service.heroImage}
      />

      <ServiceDetail service={service} />
      <WorkingProcess />
      <ServiceCTA />
    </>
  );
}
