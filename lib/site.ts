const DEFAULT_SITE_URL = "https://oil-calculator.netlify.app";

function normalizeSiteUrl(value?: string) {
  if (!value) {
    return DEFAULT_SITE_URL;
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value.replace(/\/$/, "");
  }

  return `https://${value.replace(/\/$/, "")}`;
}

export function getSiteUrl() {
  return normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.URL ||
      process.env.DEPLOY_PRIME_URL,
  );
}

export function getAbsoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}

export const siteConfig = {
  name: "유류비 계산기",
  shortName: "유류비 계산기",
  description:
    "거리, 연비, 유가, 통행료를 입력해 총 유류비와 1인당 비용을 계산하는 무료 웹앱",
  keywords: [
    "유류비 계산기",
    "기름값 계산기",
    "주유비 계산기",
    "자동차 유류비 계산",
    "차량 유지비 계산기",
    "연비 계산기",
    "통행료 계산",
    "여행 경비 계산기",
  ],
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  contactName:
    process.env.NEXT_PUBLIC_CONTACT_NAME || "유류비 계산기 운영팀",
};
