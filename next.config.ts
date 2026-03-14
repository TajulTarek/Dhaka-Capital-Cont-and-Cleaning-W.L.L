import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.dhakacapitalcontracting-wll.app",
      },
      // যদি ভবিষ্যতে আরও ডোমেইন লাগে এখানে যোগ করতে পারেন
    ],
  },
  // এসইও এবং পারফরম্যান্সের জন্য ট্রেইলিং স্ল্যাশ সেটিংস
  trailingSlash: true,
};

export default nextConfig;
