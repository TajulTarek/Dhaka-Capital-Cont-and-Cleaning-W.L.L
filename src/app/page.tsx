//  Home Page
import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import PrimaryServices from "@/components/home/PrimaryServices";
import WhereWeWork from "@/components/home/WhereWeWork";
import StatsCounter from "@/components/home/StatsCounter";
import BeforeAfter from "@/components/home/BeforeAfter";
import WorkingProcess from "@/components/home/WorkingProcess";
import FAQ from "@/components/home/FAQ";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  // কিউওয়ার্ড সমৃদ্ধ টাইটেল যা র‍্যাঙ্কিংয়ে সাহায্য করবে
  title:
    "Dhaka Capital Contracting WLL | Top Construction & Cleaning Services in Qatar",
  description:
    "Dhaka Capital Contracting WLL delivers high-quality construction, renovation, and cleaning services in Doha, Qatar. We specialize in residential and commercial projects with expert craftsmanship.",

  // আপনার বর্তমান লাইভ ইউআরএল অনুযায়ী ক্যানোনিকাল লিঙ্ক
  alternates: {
    canonical: "https://www.dhakacapitalcontracting-wll.app",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PrimaryServices />
      <WhereWeWork />
      <StatsCounter />
      <BeforeAfter />
      <WorkingProcess />
      <FAQ />
      <Gallery />
    </>
  );
}
