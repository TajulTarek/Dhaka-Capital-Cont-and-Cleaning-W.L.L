import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/* ── Global / default SEO metadata ───────────────────────────────────── */
export const metadata: Metadata = {
  // আপনার বর্তমান লাইভ ডোমেইন
  metadataBase: new URL("https://www.dhakacapitalcontracting-wll.app"),
  title: {
    default:
      "Dhaka Capital Contracting WLL | Best Construction & Renovation in Qatar",
    template: "%s | Dhaka Capital Contracting WLL",
  },
  description:
    "Dhaka Capital Contracting WLL is a leading construction company in Qatar. We provide expert renovation, painting, tiling, and MEP services in Doha. কাতার ভিত্তিক কন্সট্রাকশন এবং রেনোভেশন সেবা পেতে আমাদের সাথে যোগাযোগ করুন।",
  keywords: [
    "Dhaka Capital Contracting",
    "Dhaka Capital Contracting WLL",
    "construction company in Qatar",
    "best renovation services Doha",
    "civil works Qatar",
    "MEP and painting services Qatar",
    "Dhaka Capital Doha",
  ],

  // গুগল সাইট কনসোল ভেরিফিকেশন কোড
  verification: {
    google: "q_szOE6W8HBuLX7sA3wpaz0rDZGMRbJwVZ_pZrWbgGI",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dhakacapitalcontracting-wll.app",
    siteName: "Dhaka Capital Contracting WLL",
    title:
      "Dhaka Capital Contracting WLL | Professional Construction Services in Qatar",
    description:
      "Looking for reliable construction and maintenance in Doha? Dhaka Capital Contracting WLL offers top-quality civil, MEP, and renovation works.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dhaka Capital Contracting WLL Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhaka Capital Contracting WLL",
    description: "Expert construction and renovation services in Doha, Qatar.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.dhakacapitalcontracting-wll.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
