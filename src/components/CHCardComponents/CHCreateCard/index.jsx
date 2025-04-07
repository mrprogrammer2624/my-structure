import React from "react";
import clsx from "clsx";
import { Icons } from "../../../constants";
import styles from "./CHCreateCard.module.css";

export const CHCreateCard = ({ icon, title, description, onClick, tag }) => {
  return (
    <button className={styles.card} onClick={onClick}>
      {icon && <div className={clsx(styles.iconWrapper)}>{icon}</div>}
      <div className={styles.arrowIcon}>{Icons.ArrowRight}</div>
      {tag && <span className={styles.tag}>{tag}</span>}
      <h3 className="fw-medium mb-2 clr-black">{title}</h3>
      <p className="p-lg">{description}</p>
    </button>
  );
};
