"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./page.module.css";

const defaultValues = {
  distance: "120",
  efficiency: "12",
  fuelPrice: "1650",
  extraCost: "0",
  passengers: "1",
};

const numberFormat = new Intl.NumberFormat("ko-KR");

function parsePositiveNumber(value: string, fallback = 0) {
  const parsed = Number.parseFloat(value);

  if (!Number.isFinite(parsed) || parsed < 0) {
    return fallback;
  }

  return parsed;
}

function formatCurrency(value: number) {
  return `${numberFormat.format(Math.round(value))}원`;
}

export default function HomePage() {
  const [form, setForm] = useState(defaultValues);

  const result = useMemo(() => {
    const distance = parsePositiveNumber(form.distance);
    const efficiency = Math.max(parsePositiveNumber(form.efficiency, 1), 0.1);
    const fuelPrice = parsePositiveNumber(form.fuelPrice);
    const extraCost = parsePositiveNumber(form.extraCost);
    const passengers = Math.max(
      1,
      Math.floor(parsePositiveNumber(form.passengers, 1)),
    );

    const fuelUsed = distance / efficiency;
    const fuelCost = fuelUsed * fuelPrice;
    const totalCost = fuelCost + extraCost;
    const costPerPerson = totalCost / passengers;

    return {
      distance,
      fuelUsed,
      fuelCost,
      totalCost,
      costPerPerson,
      passengers,
    };
  }, [form]);

  return (
    <main className={styles.page}>
      <nav className={styles.topNav} aria-label="주요 메뉴">
        <Link href="/">계산기</Link>
        <Link href="/guide">이용 가이드</Link>
        <Link href="/about">서비스 소개</Link>
        <Link href="/ads">광고 안내</Link>
        <Link href="/terms">이용약관</Link>
        <Link href="/privacy">개인정보 처리방침</Link>
        <Link href="/contact">문의</Link>
      </nav>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Fuel Cost Estimator</p>
        <h1>유류비 계산기</h1>
        <p className={styles.heroCopy}>
          이동 거리, 차량 연비, 리터당 유가를 입력하면 예상 유류비와 총 이동
          비용, 1인당 분담 비용을 바로 확인할 수 있습니다. 여행 경비, 출퇴근
          비용, 카풀 정산처럼 실제 운전 상황에 맞춘 빠른 계산에 초점을 맞췄습니다.
        </p>
      </section>

      <section className={styles.shell}>
        <section className={styles.formPanel}>
          <h2 className={styles.panelTitle}>필수 입력값</h2>

          <div className={styles.fieldGrid}>
            <label className={styles.field}>
              <span>총 이동 거리 (km)</span>
              <input
                type="number"
                min="0"
                step="0.1"
                value={form.distance}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    distance: event.target.value,
                  }))
                }
              />
            </label>

            <label className={styles.field}>
              <span>차량 연비 (km/L)</span>
              <input
                type="number"
                min="0.1"
                step="0.1"
                value={form.efficiency}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    efficiency: event.target.value,
                  }))
                }
              />
            </label>

            <label className={styles.field}>
              <span>리터당 유가 (원)</span>
              <input
                type="number"
                min="0"
                step="1"
                value={form.fuelPrice}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    fuelPrice: event.target.value,
                  }))
                }
              />
            </label>

            <label className={styles.field}>
              <span>통행료 및 기타 비용 (원)</span>
              <input
                type="number"
                min="0"
                step="1"
                value={form.extraCost}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    extraCost: event.target.value,
                  }))
                }
              />
            </label>

            <label className={styles.field}>
              <span>탑승 인원 (명)</span>
              <input
                type="number"
                min="1"
                step="1"
                value={form.passengers}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    passengers: event.target.value,
                  }))
                }
              />
            </label>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.secondaryButton}
              type="button"
              onClick={() => setForm(defaultValues)}
            >
              기본값으로 초기화
            </button>
          </div>

          <p className={styles.autoCalcNote}>
            입력값을 바꾸면 결과가 자동으로 다시 계산됩니다.
          </p>

          <div className={styles.copyBlock}>
            <h3>계산식</h3>
            <p>예상 사용 연료 = 총 이동 거리 ÷ 차량 연비</p>
            <p>유류비 = 예상 사용 연료 × 리터당 유가</p>
            <p>총 이동 비용 = 유류비 + 통행료 및 기타 비용</p>
            <p>1인당 비용 = 총 이동 비용 ÷ 탑승 인원</p>
          </div>
        </section>

        <section className={styles.resultPanel} aria-live="polite">
          <div className={styles.resultHeader}>
            <h2>계산 결과</h2>
            <p>입력값을 수정하면 결과가 즉시 다시 계산됩니다.</p>
          </div>

          <div className={styles.resultGrid}>
            <article className={`${styles.resultItem} ${styles.accent}`}>
              <span>예상 사용 연료</span>
              <strong>{result.fuelUsed.toFixed(2)} L</strong>
            </article>

            <article className={styles.resultItem}>
              <span>유류비</span>
              <strong>{formatCurrency(result.fuelCost)}</strong>
            </article>

            <article className={styles.resultItem}>
              <span>총 이동 비용</span>
              <strong>{formatCurrency(result.totalCost)}</strong>
            </article>

            <article className={styles.resultItem}>
              <span>1인당 비용</span>
              <strong>{formatCurrency(result.costPerPerson)}</strong>
            </article>
          </div>

          <p className={styles.summary}>
            {numberFormat.format(result.distance)}km 이동 시 예상 유류비는{" "}
            {formatCurrency(result.fuelCost)}이며, 총 {result.passengers}명이
            나누면 1인당 {formatCurrency(result.costPerPerson)}입니다.
          </p>
        </section>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoCard}>
          <h2>유류비 계산기를 언제 쓰면 좋은가요?</h2>
          <p>
            장거리 여행, 출퇴근 경로 비교, 렌터카 예상 비용 확인, 카풀 정산처럼
            실제 비용을 미리 가늠해야 할 때 유용합니다. 유가가 자주 바뀌는 상황에서는
            리터당 유가만 바꿔 입력해도 바로 비용 차이를 비교할 수 있습니다.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h2>정확도를 높이는 팁</h2>
          <ul className={styles.list}>
            <li>공인 연비 대신 실제 주행 평균 연비를 넣으면 결과가 더 현실적입니다.</li>
            <li>왕복 이동이면 총 이동 거리를 왕복 기준으로 입력하는 것이 좋습니다.</li>
            <li>통행료, 주차료, 차량 공유 비용은 기타 비용에 함께 포함해 계산할 수 있습니다.</li>
          </ul>
        </div>

        <div className={styles.infoCard}>
          <h2>검색 사용자를 위한 빠른 답변</h2>
          <p>
            유류비 계산은 보통 거리, 연비, 유가 세 값만 있어도 기본 금액을 계산할
            수 있습니다. 여기에 통행료와 탑승 인원을 추가하면 총 이동 비용과
            1인당 분담 금액까지 바로 산출됩니다.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h2>이 계산기가 특히 유용한 상황</h2>
          <ul className={styles.list}>
            <li>주말 여행 전에 차량별 예상 기름값을 비교할 때</li>
            <li>출퇴근 경로 변경 전 월간 교통비를 가늠할 때</li>
            <li>카풀이나 렌터카 동승 비용을 공정하게 나눌 때</li>
          </ul>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>자주 묻는 질문</h2>

        <article className={styles.faqItem}>
          <h3>왕복 비용도 계산할 수 있나요?</h3>
          <p>
            가능합니다. 출발지에서 목적지까지의 편도 거리가 아니라 왕복 총 이동
            거리를 입력하면 왕복 기준 비용이 계산됩니다.
          </p>
        </article>

        <article className={styles.faqItem}>
          <h3>통행료 없이 순수 기름값만 보고 싶습니다.</h3>
          <p>
            통행료 및 기타 비용을 0으로 두면 순수 유류비만 계산할 수 있습니다.
          </p>
        </article>

        <article className={styles.faqItem}>
          <h3>카풀 정산에도 사용할 수 있나요?</h3>
          <p>
            가능합니다. 총 이동 비용을 탑승 인원으로 나눠 1인당 비용을 즉시 확인할
            수 있습니다.
          </p>
        </article>
      </section>

      <footer className={styles.footer}>
        <p>
          검색 최적화를 위해 계산 기능뿐 아니라 가이드, 정책, 문의 페이지를 함께
          제공합니다.
        </p>
        <div className={styles.footerLinks}>
          <Link href="/guide">이용 가이드</Link>
          <Link href="/about">서비스 소개</Link>
          <Link href="/ads">광고 안내</Link>
          <Link href="/terms">이용약관</Link>
          <Link href="/privacy">개인정보 처리방침</Link>
          <Link href="/contact">문의</Link>
        </div>
      </footer>
    </main>
  );
}
