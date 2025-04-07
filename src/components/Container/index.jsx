import clsx from "clsx";
import styles from "./container.module.css";

export const Container = ({ children, className }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
