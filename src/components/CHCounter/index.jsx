import React from "react";
import styles from "./CHCounter.module.css";
import { Icons } from "../../constants";

export const CHCounter = ({ addBtnHandler, minusBtnHandler, count }) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <button
        onClick={minusBtnHandler}
        className="d-flex bg-transparent border-0 cursor-pointer"
        disabled={count == 0}
      >
        {Icons.MinusCircle}
      </button>
      <span className={styles.count}>{count <= 9 ? "0" + count : count}</span>
      <button
        onClick={addBtnHandler}
        className="d-flex bg-transparent border-0 cursor-pointer"
      >
        {Icons.AddCircle}
      </button>
    </div>
  );
};
