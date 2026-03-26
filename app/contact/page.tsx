import type { Metadata } from "next";
import Link from "next/link";
import styles from "../content-page.module.css";

export const metadata: Metadata = {
  title: "문의",
  description: "사이트 운영 안내와 공통 정보 확인 방법을 안내합니다.",
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
        <Link href="/ads">광고 안내</Link>
        <Link href="/terms">이용약관</Link>
        <Link href="/privacy">개인정보 처리방침</Link>
        <Link href="/contact">문의</Link>
      </nav>

      <article className={styles.article}>
        <p className={styles.eyebrow}>Contact</p>
        <h1>문의 안내</h1>
        <p className={styles.lead}>
          현재 사이트는 별도 운영자 연락 수단이나 외부 저장소 주소를 공개하지 않습니다.
        </p>

        <section className={styles.section}>
          <h2>안내</h2>
          <p>
            사용 방법, 광고 안내, 개인정보 처리방침, 이용약관 등 공통 정보는 각
            페이지에서 확인할 수 있습니다.
          </p>
          <p>
            사이트 구성이나 운영 방침이 변경되면 관련 안내 문서가 함께 업데이트됩니다.
          </p>
        </section>
      </article>

      <footer className={styles.footer}>
        <p>연락 채널 없이도 필요한 운영 정보는 공통 문서에서 확인할 수 있습니다.</p>
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
