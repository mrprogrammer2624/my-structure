import React from "react";
import styles from "./CHAvatar.module.css";
import clsx from "clsx";

export const CHAvatar = ({
  className,
  imgSrc,
  title,
  subTitle,
  imgClassName,
}) => {
  return (
    <div
      className={clsx(
        "d-flex align-items-center",
        className,
        styles.avatarCard
      )}
    >
      <div className={clsx(styles.imgWrapper, imgClassName)}>
        <img
          src={imgSrc}
          className={clsx(styles.img)}
          width="32px"
          height="32px"
          alt={title}
        />
      </div>
      <div className="d-flex flex-column">
        <h5 className={styles.title}>{title}</h5>
        {subTitle && <p className="p-sm fw-normal">{subTitle}</p>}
      </div>
    </div>
  );
};
