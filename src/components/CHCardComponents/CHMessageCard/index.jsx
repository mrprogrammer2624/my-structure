import React from "react";
import styles from "./CHMessageCard.module.css";
import { CHClsx } from "../../../utils";
import { Icons } from "../../../constants";
import { Button } from "antd";

export const CHMessageCard = ({
  className,
  iconClassName,
  title,
  description,
  icon,
  onClick,
  modePreview,
  onClose,
}) => {
  return (
    <>
      <div className={CHClsx(styles.messageCard, className)} onClick={onClick}>
        {modePreview && (
          <Button
            className={styles.messageCardClose}
            size="small"
            type="text"
            icon={Icons.CloseCircleFilled}
            onClick={onClose}
          />
        )}

        <div className={CHClsx(styles.iconWrapper, iconClassName)}>{icon}</div>
        <div className="">
          <h5 className="fw-medium mb-2">{title}</h5>
          <p className="p-sm">{description}</p>
        </div>
      </div>
    </>
  );
};
