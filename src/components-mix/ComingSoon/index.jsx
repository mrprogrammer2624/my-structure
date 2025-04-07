"use client";
import { useState, useEffect } from "react";
import { TCInput } from "../TCFormComponents";
import { TCButton } from "..";
import styles from "./ComingSoon.module.css";

export const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState({
    days: 150,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-03-3T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const m = Math.floor((difference / 1000 / 60) % 60);
      const s = Math.floor((difference / 1000) % 60);

      setCountdown({ days: d, hours: h, minutes: m, seconds: s });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <div className={styles.comingSoonContainer}>
      <div className={styles.comingSoonContent}>
        <h1 className={styles.title}>Coming Soon</h1>
        <p className={styles.subtitle}>
          We're working hard to bring you something amazing. Stay tuned!
        </p>

        <div className={styles.countdown}>
          {Object.entries(countdown)?.map(([unit, value, index]) => (
            <div key={unit + index} className={styles.countdownUnit}>
              <div className={styles.countdownValue}>{value}</div>
              <div className={styles.countdownLabel}>{unit}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className={styles.subscribeForm}>
          <TCInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.emailInput}
          />
          <TCButton type="submit" variant="primary">
            Notify Me
          </TCButton>
        </form>
      </div>
    </div>
  );
};
