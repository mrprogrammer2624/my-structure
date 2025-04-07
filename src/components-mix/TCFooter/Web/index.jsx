"use client"
import { Divider } from "antd";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Container } from "../..";
import { WebFooterLinks, socialMedia } from "@/constants";
import { useUniqueId } from "@/hooks";
import { Logo } from "@/assets/images";
import styles from "./TCFooter.module.css";
import { useState } from "react";
// import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

export const TCFooter = () => {
  const Id = useUniqueId();
  const [expandedCategories, setExpandedCategories] = useState({});

  const getVisibleLinks = (footer) => {
    return expandedCategories[footer.category] ? footer.links : footer.links?.slice(0, 6);
  };

  const hasMoreLinks = (footer) => footer.links?.length > 6;

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <footer className={clsx(styles.footerWrapper, "bg-dark clr-shadow ")}>
      <Container>
        <div
          className={clsx(
            styles.footerTopWrapper,
            "d-grid flex-wrap align-items-center justify-content-between"
          )}
        >
          <div>
            <div className="d-flex flex-wrap align-items-center justify-content-start">
              <div
                className={clsx(
                  styles.logoWrapper,
                  "d-flex align-items-center justify-content-center"
                )}
              >
                <Image
                  width="100%"
                  height="100%"
                  src={Logo}
                  alt="logo"
                  className="img-inherit radius-inherit flex-shrink-0"
                />
              </div>
              <p className="clr-white h4">Trademark Club</p>
            </div>
            <p>
              Secure Your Brand, Protect Your Future – Trademark with Confidence!
            </p>
          </div>
          <div
            className={clsx(
              styles.socialMedia,
              "d-flex align-items-center justify-content-end"
            )}
          >
            {socialMedia?.map((content, index) => (
              <Link
                key={content?.key + index}
                href={content?.href}
                target="_blank"
                className={clsx(styles.socialMediaIcons, "clr-white")}
              >
                {content?.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className={clsx(styles.footerLinks, "d-flex flex-wrap align-items-start justify-content-between")}>
          {WebFooterLinks?.map((footer) => {
            const visibleLinks = getVisibleLinks(footer);
            const isExpanded = expandedCategories[footer.category];
            return (
              <div key={Id + footer.category}>
              <h6 className="clr-white p sm mb-md">{footer.category}</h6>
              <ul className="list-style-none">
                {visibleLinks?.map((link) => (
                <li key={Id + link.href}>
                  <Link className="p sm clr-shadow list-style-none" href={link.href}>
                  {link.text}
                  </Link>
                </li>
                ))}
                {hasMoreLinks(footer) && (
                <li>
                  <button
                  className={clsx(styles.showMore, "p sm clr-shadow border-0 bg-transparent d-flex align-items-center gap-2 cursor-pointer")}
                  onClick={() => toggleCategory(footer.category)}
                  >
                  {isExpanded ? (
                    <>
                    {/* Show less ... <IoIosArrowUp /> */}
                    </>
                  ) : (
                    <>
                    {/* ... more <IoIosArrowDown /> */}
                    </>
                  )}
                  </button>
                </li>
                )}
              </ul>
              </div>
            );
          })}
        </div>
      </Container>
      <Divider className={clsx(styles.footerLine, "m-0")} />
      <div className={clsx(styles.footerBottom, "text-center")}>
        <Container>
          <p>Copyright &copy; 2025 by Trademark Club</p>
        </Container>
      </div>
    </footer>
  );
};
