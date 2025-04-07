import clsx from "clsx";
import styles from "./processCard.module.css";

export const ProcessCard = ({ step, title, description }) => {
  return (
    <div
      className={clsx(
        styles.card,
        "bg-white text-center d-flex align-items-center justify-content-start flex-column position-relative overflow-hidden"
      )}
    >
      <span className="h2 clr-golden -letter-normal">{step}</span>
      <h5 className="clr-dark fw-normal">{title}</h5>
      <p className="-letter-normal clr-shadow">{description}</p>
    </div>
  );
};
