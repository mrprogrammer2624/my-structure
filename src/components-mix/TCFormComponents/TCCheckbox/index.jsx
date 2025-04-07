import { Checkbox } from "antd";
import clsx from "clsx";
import styles from "./TCCheckbox.module.css";

export const TCCheckbox = ({
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
      // checked={checked}
      {...(checked && checked)}
      {...rest}
    >
      {children}
    </Checkbox>
  );
};
