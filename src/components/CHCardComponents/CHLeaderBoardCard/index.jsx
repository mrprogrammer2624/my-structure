import React from "react";
import styles from "./CHLeaderBoardCard.module.css";
import clsx from "clsx";

export const CHLeaderBoardCard = ({
  position = 1,
  img,
  name,
  score,
  className,
}) => {
  return (
    <div
      className={clsx(
        styles.boardCard,
        className,
        { [styles.first]: position === 1 },
        { [styles.second]: position === 2 },
        { [styles.third]: position === 3 }
      )}
    >
      <div className={clsx(styles.boardPosition, "clr-white fw-medium")}>
        {position === 1 ? "#1" : position === 2 ? "#2" : "#3"}
      </div>
      <div className={styles.boardCardImg}>
        <img src={img} alt={name} />
      </div>
      <div
        className={clsx(styles.boardContent, "text-sm-center bg-white lh-1")}
      >
        <h4 className="clr-black fw-medium mb-2">{name}</h4>
        <h5 className="p-lg fw-normal">Score: {score}</h5>
      </div>
    </div>
  );
};
