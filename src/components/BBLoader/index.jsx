import { Icons } from "@constants";
import styles from "./BBLoader.module.css";
import clsx from "clsx";

export const BBLoader = ({ className }) => {
  return (
    <>
      <div className={clsx(styles.loaderWrapper, className)}>
        <div className={styles.loaderIcon}>{Icons.HourglassDuotone}</div>
      </div>
    </>
  );
};
