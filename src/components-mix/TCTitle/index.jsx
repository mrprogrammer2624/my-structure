import clsx from "clsx";
import styles from "./TCTitle.module.css";

export const TCTitle = ({
  subContent,
  label,
  title,
  highlightTitle,
  left,
  smallTitle,
  white,
  space,
  tag,
  className,
  smallSize,
}) => {
  return (
    <div
      className={clsx(
        styles.titleContainer,
        className,
        "d-flex flex-column",
        left
          ? "align-items-start justify-content-start text-left"
          : "align-items-center justify-content-center mx-auto text-center",
        space ? "mb-0" : styles.titleContainerSpace,
        {
          [styles.mainTitle]: smallSize,
        }
      )}
    >
      <div
        className={clsx(
          styles.title,
          "d-flex flex-column",
          left
            ? "align-items-start justify-content-start text-left"
            : "align-items-center justify-content-center mx-auto text-center"
        )}
      >
        {label && (
          <span
            className={clsx(
              tag
                ? [styles.labelTag, "clr-golden text-uppercase p sm"]
                : "clr-golden d-block fw-semibold text-capitalize p xl"
            )}
          >
            {label}
          </span>
        )}
        <h2
          className={clsx("fw-normal", white ? "clr-white" : "clr-stallion", {
            ["h4"]: smallTitle,
          })}
        >
          {title}
          <span className={clsx("fw-semibold")}>{highlightTitle}</span>
        </h2>
      </div>
      {subContent && <p className="clr-shadow fw-normal">{subContent}</p>}
    </div>
  );
};
