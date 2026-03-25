import type { Metadata } from "next";
import HomePage from "./home-page";
import { getAbsoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "유류비 계산기 | 거리·연비·유가로 기름값 계산",
  description:
    "거리, 연비, 리터당 유가, 통행료를 입력해 예상 유류비와 총 이동 비용, 1인당 비용을 계산하는 무료 유류비 계산기",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "유류비 계산기 | 거리·연비·유가로 기름값 계산",
    description: siteConfig.description,
    url: getAbsoluteUrl("/"),
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "유류비 계산기",
    description: siteConfig.description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: getAbsoluteUrl("/"),
      inLanguage: "ko-KR",
    },
    {
      "@type": "WebApplication",
      name: siteConfig.name,
      url: getAbsoluteUrl("/"),
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      inLanguage: "ko-KR",
      description: siteConfig.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "KRW",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "홈",
          item: getAbsoluteUrl("/"),
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomePage />
    </>
  );
}
