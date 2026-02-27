import type { Metadata } from "next";
import ServicePage, { buildServiceMetadata } from "@/components/services/ServicePageTemplate";

const SLUG = "tiling-works";

export const metadata: Metadata = buildServiceMetadata(SLUG);

export default function TilingPage() {
  return <ServicePage slug={SLUG} />;
}
