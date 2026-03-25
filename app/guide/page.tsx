import type { Metadata } from "next";
import Link from "next/link";
import styles from "../content-page.module.css";
import { getAbsoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "유류비 계산 방법 가이드",
  description:
    "거리, 연비, 유가를 기준으로 유류비를 계산하는 공식과 실제 활용 팁을 정리한 가이드",
  alternates: {
    canonical: "/guide",
  },
};

export default function GuidePage() {
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
        <p className={styles.eyebrow}>Guide</p>
        <h1>유류비 계산 방법 가이드</h1>
        <p className={styles.lead}>
          유류비는 총 이동 거리, 차량 연비, 리터당 유가 세 값만 알면 기본 계산이
          가능합니다. 여기에 통행료와 탑승 인원을 더하면 실제 지출과 정산 금액까지
          함께 계산할 수 있습니다.
        </p>

        <section className={styles.section}>
          <h2>기본 계산 공식</h2>
          <p>예상 사용 연료 = 총 이동 거리 ÷ 차량 연비</p>
          <p>유류비 = 예상 사용 연료 × 리터당 유가</p>
          <p>총 이동 비용 = 유류비 + 통행료 및 기타 비용</p>
          <p>1인당 비용 = 총 이동 비용 ÷ 탑승 인원</p>
        </section>

        <section className={styles.section}>
          <h2>실제 사용 예시</h2>
          <p>
            왕복 180km를 이동하고 차량 연비가 13km/L, 리터당 유가가 1,700원이라면
            예상 사용 연료는 약 13.85L입니다. 유류비는 약 23,538원이며, 여기에
            통행료 10,000원을 더하면 총 이동 비용은 약 33,538원입니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>정확도를 높이는 방법</h2>
          <ul>
            <li>실제 운전 습관이 반영된 평균 연비를 입력합니다.</li>
            <li>고속도로와 시내 주행 비율이 다르면 연비를 보수적으로 잡습니다.</li>
            <li>왕복 이동은 총 이동 거리를 왕복 기준으로 입력합니다.</li>
            <li>주차료, 통행료, 차량 대여료는 기타 비용에 함께 반영합니다.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>검색 엔진용 페이지 신호</h2>
          <p>
            이 사이트는 계산 기능 외에도 가이드, 정책, 문의 페이지를 함께 제공해
            검색 엔진이 사이트 목적과 신뢰도를 더 쉽게 이해하도록 구성했습니다.
            사이트맵은 {getAbsoluteUrl("/sitemap.xml")} 에서 제공됩니다.
          </p>
        </section>
      </article>

      <footer className={styles.footer}>
        <p>추가 설명이 필요한 사용자를 위해 계산기와 별도로 문서형 페이지를 제공합니다.</p>
        <div className={styles.footerLinks}>
          <Link href="/">계산기로 돌아가기</Link>
          <Link href="/about">서비스 소개</Link>
          <Link href="/privacy">개인정보 처리방침</Link>
          <Link href="/contact">문의</Link>
        </div>
      </footer>
    </main>
  );
}
