import type { Metadata } from "next";
import Link from "next/link";
import styles from "../content-page.module.css";

export const metadata: Metadata = {
  title: "서비스 소개",
  description: "유류비 계산기 서비스의 목적, 제공 기능, 운영 방향을 소개합니다.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
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
        <p className={styles.eyebrow}>About</p>
        <h1>서비스 소개</h1>
        <p className={styles.lead}>
          유류비 계산기는 운전자가 이동 비용을 빠르게 예측할 수 있도록 만든 무료
          웹앱입니다. 복잡한 회원가입 없이 거리, 연비, 유가만으로 즉시 결과를
          확인할 수 있도록 설계했습니다.
        </p>

        <section className={styles.section}>
          <h2>주요 기능</h2>
          <ul>
            <li>거리, 연비, 유가 입력 기반 유류비 계산</li>
            <li>통행료 및 기타 비용 포함 총 이동 비용 계산</li>
            <li>탑승 인원 기준 1인당 비용 계산</li>
            <li>모바일과 데스크톱 모두 대응하는 반응형 화면</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>운영 방향</h2>
          <p>
            검색 사용자가 바로 계산에 도달할 수 있도록 핵심 기능을 첫 화면에 배치하고,
            부가 설명 문서와 정책 페이지를 함께 제공해 정보성 사이트로서의 완성도를
            높이는 방향으로 운영합니다.
          </p>
        </section>
      </article>

      <footer className={styles.footer}>
        <p>계산 기능과 함께 사이트 신뢰도를 높이는 기본 정보 페이지를 제공합니다.</p>
        <div className={styles.footerLinks}>
          <Link href="/">계산기</Link>
          <Link href="/guide">이용 가이드</Link>
          <Link href="/ads">광고 안내</Link>
          <Link href="/terms">이용약관</Link>
          <Link href="/privacy">개인정보 처리방침</Link>
          <Link href="/contact">문의</Link>
        </div>
      </footer>
    </main>
  );
}
