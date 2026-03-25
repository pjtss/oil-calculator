"use client";

import { FormEvent, useMemo, useState } from "react";
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

export default function Home() {
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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Fuel Cost Estimator</p>
        <h1>유류비 계산기</h1>
        <p className={styles.heroCopy}>
          이동 거리, 차량 연비, 리터당 유가를 입력하면 예상 유류비와 총 이동
          비용, 1인당 분담 비용을 바로 확인할 수 있습니다.
        </p>
      </section>

      <section className={styles.shell}>
        <form className={styles.form} onSubmit={handleSubmit}>
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
              <span>통행료/기타 비용 (원)</span>
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
            <button className={styles.primaryButton} type="submit">
              계산하기
            </button>
            <button
              className={styles.secondaryButton}
              type="button"
              onClick={() => setForm(defaultValues)}
            >
              초기화
            </button>
          </div>
        </form>

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
    </main>
  );
}
