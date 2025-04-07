"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5, // duration of the smooth scroll (in seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
      smooth: true, // enable smooth scrolling
      direction: "vertical", // scroll direction (vertical or horizontal)
      gestureDirection: "vertical", // gesture direction (vertical or horizontal)
      smoothTouch: true, // enable smooth scrolling for touch devices
      touchMultiplier: 2, // touch multiplier
      infinite: false, // enable infinite scrolling
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function to remove the event listener
    return () => {
      lenis.destroy();
    };
  }, []);
  return <div>{children}</div>;
};
