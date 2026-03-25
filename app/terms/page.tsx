import type { Metadata } from "next";
import Link from "next/link";
import styles from "../content-page.module.css";

export const metadata: Metadata = {
  title: "이용약관",
  description: "유류비 계산기 사이트 이용약관입니다.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
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
        <p className={styles.eyebrow}>Terms</p>
        <h1>이용약관</h1>
        <p className={styles.lead}>
          본 사이트는 일반적인 비용 예측을 돕기 위한 계산 도구를 제공합니다.
          실제 주유비, 통행료, 차량 운영 비용은 실제 주행 환경과 시점에 따라 달라질 수 있습니다.
        </p>

        <section className={styles.section}>
          <h2>서비스 성격</h2>
          <p>
            사이트에서 제공하는 계산 결과는 참고용입니다. 사용자는 실제 의사결정 전에
            최신 유가, 도로 요금, 차량 상태를 별도로 확인해야 합니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>면책</h2>
          <p>
            운영자는 계산 결과 사용으로 발생한 직접적 또는 간접적 손해에 대해 법령상
            허용되는 범위 내에서 책임을 제한할 수 있습니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>약관 변경</h2>
          <p>
            서비스 구조, 광고 도입, 정책 변경 등에 따라 본 약관은 수정될 수 있으며,
            중요한 변경 사항은 사이트 내 문서 페이지를 통해 안내합니다.
          </p>
        </section>
      </article>

      <footer className={styles.footer}>
        <p>정책·광고·문의 페이지를 함께 제공해 사이트 신뢰 신호를 보강합니다.</p>
        <div className={styles.footerLinks}>
          <Link href="/">계산기</Link>
          <Link href="/guide">이용 가이드</Link>
          <Link href="/ads">광고 안내</Link>
          <Link href="/privacy">개인정보 처리방침</Link>
          <Link href="/contact">문의</Link>
        </div>
      </footer>
    </main>
  );
}
