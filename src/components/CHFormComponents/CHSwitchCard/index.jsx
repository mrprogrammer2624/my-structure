import { Switch } from "antd";
import clsx from "clsx";
import styles from "./CHSwitchCard.module.css";

export const CHSwitchCard = ({
  title,
  description,
  fullWidth,
  switchLess,
  parentClassName,
  bordered,
  ...rest
}) => {
  return (
    <div
      className={clsx(parentClassName, bordered && styles.switchCardBordered)}
    >
      <div className="d-flex align-items-center justify-content-between">
        <h6 className="clr-black">{title}</h6>
        {!switchLess && <Switch {...rest} />}
      </div>
    </div>
  );
};
