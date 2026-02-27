import type { Metadata } from "next";
import ServicePage, { buildServiceMetadata } from "@/components/services/ServicePageTemplate";

const SLUG = "carpentry-joinery-works";

export const metadata: Metadata = buildServiceMetadata(SLUG);

export default function CarpentryPage() {
  return <ServicePage slug={SLUG} />;
}
