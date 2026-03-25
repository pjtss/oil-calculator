import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "유류비 계산기",
  description: "거리, 연비, 유가를 입력해 총 유류비와 1인당 비용을 계산하는 웹앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
