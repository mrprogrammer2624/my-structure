import { clsx } from "clsx";
import { Icons } from "../../../constants";
import styles from "./CHButton.module.css";

export const CHButton = ({
  id,
  type,
  name,
  onClick,
  className,
  disabled,
  children,
  icon,
  shape,
  width,
  height,
  loading,
  variant = "primary",
  size = "large",
  ...rest
}) => {
  const finalClassName = clsx(
    styles.button,
    {
      [styles.primary]: variant === "primary",
      [styles.secondary]: variant === "secondary",
      [styles.primaryOutlined]: variant === "primary-outlined",
      [styles.secondaryOutlined]: variant === "secondary-outlined",
      [styles.danger]: variant === "danger",
      [styles.small]: size === "small",
      [styles.medium]: size === "medium",
      [styles.large]: size === "large",
      [styles.disabled]: disabled === true,
      [styles.shape]: shape,
      [styles.shapeCircle]: shape === "circle",
      [styles.shapeRoundedSquare]: shape === "rounded-square",
      [styles.hasDimensions]: width && height,
    },
    className
  );

  return (
    <button
      id={id}
      type={type === "submit" ? "submit" : "button"}
      name={name}
      onClick={onClick}
      className={finalClassName}
      disabled={disabled}
      {...rest}
    >
      {loading && (
        <i className={styles.loadingIcon}>{Icons.HourglassDuotone}</i>
      )}{" "}
      {icon && <i className={styles.icon}>{icon}</i>} {children}
    </button>
  );
};
