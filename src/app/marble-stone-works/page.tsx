import type { Metadata } from "next";
import ServicePage, { buildServiceMetadata } from "@/components/services/ServicePageTemplate";

const SLUG = "marble-stone-works";

export const metadata: Metadata = buildServiceMetadata(SLUG);

export default function MarblePage() {
  return <ServicePage slug={SLUG} />;
}
