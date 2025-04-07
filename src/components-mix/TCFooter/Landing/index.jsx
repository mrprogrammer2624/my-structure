import { Divider } from "antd";
import clsx from "clsx";
import { FooterLink, socialMedia } from "@/constants";
import { Logo } from "@/assets/images";
import { Container } from "../..";
import Link from "next/link";
import Image from "next/image";
import styles from "./TCFooter.module.css";

export const TCFooter = () => {
  return (
    <footer className={clsx(styles.footerWrapper, "bg-dark clr-shadow pb-5")}>
      <div>
        <Container>
          <div
            className={clsx(
              styles.logo,
              "d-flex align-items-center justify-content-center"
            )}
          >
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
        </Container>
      </div>
      <Divider className={clsx(styles.divider)} />
      <div className={styles.footerLinks}>
        <Container
          className={
            "d-flex justify-content-between align-items-center flex-wrap"
          }
        >
          <div className={clsx(styles.footerLink, "d-flex")}>
            {FooterLink?.map((content, index) => (
              <Link
                key={content?.link + index}
                href={content?.link}
                className={"p"}
              >
                {content?.content}
              </Link>
            ))}
          </div>
          <div
            className={clsx(
              styles.socialMedia,
              "d-flex align-items-center justify-content-center"
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
        </Container>
      </div>
      <Divider className={clsx(styles.divider)} />
      <div className={styles.copyRight}>
        <Container>
          <p className="text-center">Copyright &copy; 2025 by Trademark Club</p>
        </Container>
      </div>
    </footer>
  );
};
