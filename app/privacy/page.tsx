import type { Metadata } from "next";
import Link from "next/link";
import styles from "../content-page.module.css";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description: "유류비 계산기 사이트의 개인정보 처리방침과 기본 데이터 처리 원칙입니다.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
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
        <p className={styles.eyebrow}>Privacy</p>
        <h1>개인정보 처리방침</h1>
        <p className={styles.lead}>
          본 사이트는 기본 계산 기능을 제공하기 위해 회원가입이나 로그인 기능을
          운영하지 않으며, 계산 입력값은 별도의 서버 데이터베이스에 저장하지 않습니다.
        </p>

        <section className={styles.section}>
          <h2>수집하는 정보</h2>
          <p>
            현재 사이트는 사용자가 직접 입력한 거리, 연비, 유가, 통행료, 탑승 인원
            값을 브라우저 내에서 계산에만 사용합니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>광고 및 분석 도구</h2>
          <p>
            향후 Google AdSense 또는 웹 분석 도구가 적용될 경우, 관련 서비스 정책에
            따라 쿠키, 광고 식별자, 접속 로그 일부가 처리될 수 있습니다. Google은
            광고 제공과 측정, 사기 방지, 서비스 개선 목적으로 데이터를 사용할 수
            있습니다. 해당 기능을 실제 적용하는 시점에 본 페이지를 최신 상태로
            업데이트해야 합니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>제3자 서비스</h2>
          <p>
            사이트 운영자는 Google AdSense, Google Search Console, Netlify 등 외부
            서비스를 사용할 수 있습니다. 각 서비스의 데이터 처리 방식은 해당
            사업자의 정책을 따릅니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>정책 변경</h2>
          <p>
            사이트 운영 방식이나 외부 도구 도입에 따라 개인정보 처리방침은 변경될 수
            있으며, 중요한 변경이 있는 경우 이 페이지를 통해 안내합니다.
          </p>
        </section>
      </article>

      <footer className={styles.footer}>
        <p>광고 도입 전후로 정책 페이지를 최신 상태로 유지하는 것이 중요합니다.</p>
        <div className={styles.footerLinks}>
          <Link href="/">계산기</Link>
          <Link href="/guide">이용 가이드</Link>
          <Link href="/about">서비스 소개</Link>
          <Link href="/ads">광고 안내</Link>
          <Link href="/terms">이용약관</Link>
          <Link href="/contact">문의</Link>
        </div>
      </footer>
    </main>
  );
}
