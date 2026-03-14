import type { Metadata } from "next";
import ServicePage, { buildServiceMetadata } from "@/components/services/ServicePageTemplate";

const SLUG = "hajor-works";

export const metadata: Metadata = buildServiceMetadata(SLUG);

export default function HajorWorksPage() {
  return <ServicePage slug={SLUG} />;
}
