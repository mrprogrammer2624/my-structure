import React from "react";
import { CHProgress } from "../CHFormComponents/CHProgress";
import styles from "./CHProfileProgress.module.css";
import { CHClsx } from "../../utils";

export const CHProfileProgress = ({ className }) => {
  return (
    <div className={CHClsx(styles.progressWrapper, className)}>
      <p className="clr-black fw-semibold">60%</p>
      <CHProgress strokeColor="var(--clr-success)" percent={60} height="12px" />
      <h6 className="clr-gray-dark fw-medium">COMPLETE PROFILE</h6>
    </div>
  );
};
