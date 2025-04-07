import clsx from "clsx";
import { Container } from "@/components";
import styles from "./HeroWrapper.module.css";

export const HeroWrapper = ({ children, rootClassName, bg }) => {
  return (
    <section
      className={clsx(
        styles.HeroWrapper,
        "position-relative",
        rootClassName,
        bg && styles.heroBg
      )}
    >
      <Container>{children}</Container>
    </section>
  );
};
