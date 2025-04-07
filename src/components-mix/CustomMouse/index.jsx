"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import styles from "./CustomMouse.module.css";

export const CustomMouse = () => {
  const cursorRef = useRef(null);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Register GSAP with MouseFollower
      MouseFollower.registerGSAP(gsap);

      // Create a new MouseFollower instance
      const cursor = new MouseFollower({
        el: null,
        container: document.body,
        className: styles.mouseCursor,
        innerClassName: styles.innerCursor,
        textClassName: styles.cursorText,
        ease: "expo.out",
      });

      // Define interactive elements
      const interactiveElements = document.querySelectorAll("button, a, [data-interactive]");

      // Add hover effects for interactive elements
      const handleElementHover = (event) => {
        cursor.setText(event.target.getAttribute("data-cursor-text") || "");
      };

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleElementHover);
        el.addEventListener("mouseleave", () => cursor.setText(""));
      });

      // Cleanup function
      return () => {
        cursor.destroy();
        document.body.style.cursor = "auto";
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleElementHover);
          el.removeEventListener("mouseleave", () => cursor.setText(""));
        });
      };
    }
  }, []);

  return <div ref={cursorRef} />;
};