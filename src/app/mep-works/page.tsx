import type { Metadata } from "next";
import ServicePage, { buildServiceMetadata } from "@/components/services/ServicePageTemplate";

const SLUG = "mep-works";

export const metadata: Metadata = buildServiceMetadata(SLUG);

export default function MepPage() {
  return <ServicePage slug={SLUG} />;
}
