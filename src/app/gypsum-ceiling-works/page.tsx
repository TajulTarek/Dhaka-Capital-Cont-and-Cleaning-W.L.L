import type { Metadata } from "next";
import ServicePage, { buildServiceMetadata } from "@/components/services/ServicePageTemplate";

const SLUG = "gypsum-ceiling-works";

export const metadata: Metadata = buildServiceMetadata(SLUG);

export default function GypsumPage() {
  return <ServicePage slug={SLUG} />;
}
