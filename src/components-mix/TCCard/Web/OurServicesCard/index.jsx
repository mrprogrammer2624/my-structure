import clsx from "clsx";
import styles from "./OurServicesCard.module.css";

export const OurServicesCard = ({
  icon,
  title,
  description,
  className,
  data,
  ref,
}) => {
  return (
    <>
      <div
        ref={ref}
        className={clsx(styles.card, "text-center", className)}
      >
        <span className={styles.icon}>{icon}</span>
        <h5 className={clsx(styles.cardTitle, "fw-medium")}>{title}</h5>
        <p className={clsx(styles.description, "clr-shadow fw-normal")}>
          {description}
        </p>
      </div>
    </>
  );
};
