import { Button } from "antd";
import clsx from "clsx";
import styles from "./TCButton.module.css";

export const TCButton = ({
  size,
  type,
  icon,
  className,
  children,
  onClick,
  variant,
  shape,
  iconEnd,
  ...rest
}) => {
  return (
    <Button
      shape={shape}
      size={size}
      icon={icon}
      htmlType={type}
      type={variant}
      iconPosition={iconEnd ? "end" : "start"}
      onClick={onClick}
      className={clsx(styles.Button, className)}
      {...rest}
    >
      {children}
    </Button>
  );
};
