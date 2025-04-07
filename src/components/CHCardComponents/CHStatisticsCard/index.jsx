  import clsx from "clsx";
import styles from "./CHStatistics.module.css";

export const CHStatisticsCard = ({
  icon,
  title,
  theme,
  children,
  className,
}) => {
  return (
    <div
      className={clsx(styles.cardWrapper, className, {
        [styles.themeGray]: theme === "gray",
      })}
    >
      <div className={styles.iconWrapper}>
        {<img src={icon} width="100%" height="100%" />}
      </div>

      <div className={styles.stats}>
        <h6 className="text-uppercase clr-gray-dark fw-normal">{title}</h6>
        <div className={styles.cardDataWrapper}>{children}</div>
      </div>
    </div>
  );
};
