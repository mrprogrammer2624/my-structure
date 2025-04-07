"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { LandingHeader } from "@/constants";
import { Logo } from "@/assets/images";
import { Container, TCButton } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./WebHeader.module.css";

export const TCHeader = () => {
  const pathname = usePathname();
  const headerRef = useRef(null);

  const [navBarOpen, setNavBarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 10) {
        header.classList.add(styles.scrolled);
      } else {
        header.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Click handler for the hamburger button
  const toggleNavBar = () => {
    setNavBarOpen((prevState) => {
      const newState = !prevState;
      if (newState) {
        headerRef.current.classList.add(styles.navBarOpen);
        document.body.style.overflow = "hidden";
      } else {
        headerRef.current.classList.remove(styles.navBarOpen);
        document.body.style.overflow = "";
      }
      return newState;
    });
  };

  return (
    <header
      ref={headerRef}
      className={clsx(
        styles.header,
        "w-100 d-flex align-items-center position-fixed top-0"
      )}
    >
      <Container>
        <div className={clsx(styles.offcanvasBackdrop)}></div>
        <div
          className={clsx(styles.headerContainer, "d-grid position-relative")}
        >
          <div
            className={clsx("d-flex align-items-center justify-content-start")}
          >
            <div
              className={clsx(
                styles.logoWrapper,
                "align-self-center flex-shrink-0"
              )}
            >
              <Image
                width="100%"
                height="100%"
                src={Logo}
                alt="logo"
                className=""
              />
            </div>
            <p className={clsx(styles.logoText, "flex-shrink-0 clr-white")}>
              Trademark Club
            </p>
          </div>
          <ul
            className={clsx(
              styles.navListLinkWrapper,
              "d-flex align-items-center list-style-none"
            )}
          >
            {LandingHeader?.map((item, index) => (
              <li key={index + item?.key} className="nav-item">
                <Link
                  onClick={toggleNavBar}
                  href={item?.herf}
                  className={clsx(
                    styles.navListLink,
                    pathname === item?.key ? styles.active : ""
                  )}
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center justify-content-end header-right-side gap-5">
            <TCButton variant={"default"}>Sign in</TCButton>
            <TCButton variant={"primary"}>Sign up</TCButton>

            <TCButton
              variant={"primary"}
              className={clsx(styles.hamburger, "d-lg-none z-3")}
              onClick={toggleNavBar}
            >
              <svg
                className="w-100 h-100"
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
              >
                <path
                  className={styles.line}
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                ></path>
                <path className={styles.line} d="M 20,50 H 80"></path>
                <path
                  className={styles.line}
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                ></path>
              </svg>
            </TCButton>
          </div>
        </div>
      </Container>
    </header>
  );
};
