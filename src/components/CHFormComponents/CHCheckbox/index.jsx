import { Checkbox } from "antd";
import clsx from "clsx";
import styles from "./CHCheckbox.module.css";

export const CHCheckbox = ({
  value,
  onChange,
  disabled,
  className,
  children,
  checked,
  variant,
  size = "medium",
  ...rest
}) => {
  return (
    <Checkbox
      value={value}
      onChange={onChange}
      className={clsx(
        styles.cbWrap,
        clsx({
          [styles.disabled]: disabled,
          [styles.Add]: variant === "Add",
          [styles.small]: size === "small",
          [styles.medium]: size === "medium",
          [styles.large]: size === "large",
        }),
        className
      )}
      disabled={disabled}
      checked={checked}
      // {...(checked && checked)}
      {...rest}
    >
      {children}
    </Checkbox>
  );
};
