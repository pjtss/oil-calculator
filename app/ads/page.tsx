import type { Metadata } from "next";
import Link from "next/link";
import styles from "../content-page.module.css";

export const metadata: Metadata = {
  title: "광고 안내",
  description:
    "유류비 계산기 사이트의 광고 운영 원칙과 Google AdSense 적용 관련 안내입니다.",
  alternates: {
    canonical: "/ads",
  },
};

export default function AdsPage() {
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
        <p className={styles.eyebrow}>Advertising</p>
        <h1>광고 안내</h1>
        <p className={styles.lead}>
          본 사이트는 향후 Google AdSense를 포함한 광고 서비스를 사용할 수 있습니다.
          광고는 사이트 유지와 콘텐츠 확장을 위한 운영 재원으로 활용됩니다.
        </p>

        <section className={styles.section}>
          <h2>광고 운영 원칙</h2>
          <ul>
            <li>계산 기능 사용을 방해하는 과도한 광고 배치를 지양합니다.</li>
            <li>오해를 부르는 클릭 유도 문구나 위장형 광고 배치를 사용하지 않습니다.</li>
            <li>광고와 본문 콘텐츠를 구분할 수 있도록 표시합니다.</li>
            <li>Google Publisher Policies와 AdSense Program Policies를 준수합니다.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>개인화 광고 및 데이터 처리</h2>
          <p>
            Google은 광고 제공과 측정, 사기 방지, 사용자 경험 개선을 위해 쿠키 또는
            유사 기술을 사용할 수 있습니다. 관련 내용은 개인정보 처리방침에서도 함께
            안내합니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>ads.txt</h2>
          <p>
            Google 공식 안내에 따라 AdSense 게시 전에는 루트 도메인에 올바른
            `ads.txt` 파일을 배치하는 것이 좋습니다. 실제 publisher ID를 받은 뒤
            사이트 루트의 `ads.txt`를 최신 상태로 유지해야 합니다.
          </p>
        </section>
      </article>

      <footer className={styles.footer}>
        <p>광고 도입 이후에도 사용자 경험과 정책 준수를 함께 유지하는 것이 중요합니다.</p>
        <div className={styles.footerLinks}>
          <Link href="/">계산기</Link>
          <Link href="/guide">이용 가이드</Link>
          <Link href="/terms">이용약관</Link>
          <Link href="/privacy">개인정보 처리방침</Link>
          <Link href="/contact">문의</Link>
        </div>
      </footer>
    </main>
  );
}
