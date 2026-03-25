import type { Metadata } from "next";
import Link from "next/link";
import styles from "../content-page.module.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "문의",
  description: "유류비 계산기 사이트 문의 및 피드백 접수 안내입니다.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="주요 메뉴">
        <Link href="/">계산기</Link>
        <Link href="/guide">이용 가이드</Link>
        <Link href="/about">서비스 소개</Link>
        <Link href="/privacy">개인정보 처리방침</Link>
        <Link href="/contact">문의</Link>
      </nav>

      <article className={styles.article}>
        <p className={styles.eyebrow}>Contact</p>
        <h1>문의 및 피드백</h1>
        <p className={styles.lead}>
          계산 로직 오류, 기능 개선 요청, 제휴 문의 등은 아래 GitHub 저장소 이슈를
          통해 전달할 수 있습니다.
        </p>

        <section className={styles.section}>
          <h2>문의 채널</h2>
          <p>
            저장소:{" "}
            <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer">
              {siteConfig.githubUrl}
            </a>
          </p>
          <p>
            이슈 등록:{" "}
            <a
              href={`${siteConfig.githubUrl}/issues`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.githubUrl}/issues
            </a>
          </p>
        </section>
      </article>

      <footer className={styles.footer}>
        <p>검색 품질과 광고 심사 측면에서도 실제 문의 채널을 제공하는 것이 유리합니다.</p>
        <div className={styles.footerLinks}>
          <Link href="/">계산기</Link>
          <Link href="/guide">이용 가이드</Link>
          <Link href="/about">서비스 소개</Link>
          <Link href="/privacy">개인정보 처리방침</Link>
        </div>
      </footer>
    </main>
  );
}
