import type { Metadata } from "next";
import Link from "next/link";
import styles from "../content-page.module.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "문의",
  description: "사이트 운영 안내와 공통 정보 확인 방법을 안내합니다.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const hasContactEmail = Boolean(siteConfig.contactEmail);

  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="주요 메뉴">
        <Link href="/">계산기</Link>
        <Link href="/guide">이용 가이드</Link>
        <Link href="/about">서비스 소개</Link>
        <Link href="/ads">광고 안내</Link>
        <Link href="/terms">이용약관</Link>
        <Link href="/privacy">개인정보 처리방침</Link>
        <Link href="/contact">문의</Link>
      </nav>

      <article className={styles.article}>
        <p className={styles.eyebrow}>Contact</p>
        <h1>문의 안내</h1>
        <p className={styles.lead}>
          사이트 이용 중 오류 제보, 정책 문의, 광고 관련 확인이 필요하면 아래 안내를
          참고해 주세요.
        </p>

        <section className={styles.section}>
          <h2>연락 방법</h2>
          {hasContactEmail ? (
            <>
              <p>
                이메일:{" "}
                <a href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>
              </p>
              <p>
                운영자 표기명: {siteConfig.contactName}
              </p>
            </>
          ) : (
            <>
              <p>
                현재 공개된 직접 문의 이메일은 설정되어 있지 않습니다.
              </p>
              <p>
                실제 문의 채널을 운영할 경우 `NEXT_PUBLIC_CONTACT_EMAIL` 환경변수를
                설정하면 이 페이지에 즉시 반영됩니다.
              </p>
            </>
          )}
        </section>

        <section className={styles.section}>
          <h2>문의 전에 확인하면 좋은 페이지</h2>
          <ul>
            <li>계산 방법과 공식 설명: 이용 가이드</li>
            <li>광고 운영 원칙: 광고 안내</li>
            <li>데이터 처리 기준: 개인정보 처리방침</li>
            <li>서비스 성격과 면책 범위: 이용약관</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>응답 범위</h2>
          <p>
            유류비 계산 로직 오류, 페이지 오탈자, 정책 문서 정정, 광고 배치 관련
            문의를 우선 대상으로 합니다.
          </p>
        </section>
      </article>

      <footer className={styles.footer}>
        <p>문의 채널과 정책 문서를 분리해 사용자와 심사자가 정보를 쉽게 확인할 수 있게 구성했습니다.</p>
        <div className={styles.footerLinks}>
          <Link href="/">계산기</Link>
          <Link href="/guide">이용 가이드</Link>
          <Link href="/about">서비스 소개</Link>
          <Link href="/ads">광고 안내</Link>
          <Link href="/terms">이용약관</Link>
          <Link href="/privacy">개인정보 처리방침</Link>
        </div>
      </footer>
    </main>
  );
}
