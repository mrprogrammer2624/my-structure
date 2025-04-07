import { Button } from "antd";
import styles from "./BBButton.module.css";
import clsx from "clsx";

export const BBButton = ({
  size,
  type,
  icon,
  className,
  children,
  onClick,
  variant,
  shape,
  isTableBtn,
  isEditBtn,
  isDangerBtn,
  isSuccessBtn,
  isSecondaryBtn,
  iconPosition,
  ...rest
}) => {
  return (
    <Button
      shape={shape}
      size={size}
      icon={icon}
      htmlType={type}
      type={variant}
      iconposition={iconPosition}
      onClick={onClick}
      className={clsx(styles.Button, className, {
        [styles.ButtonTable]: isTableBtn,
        [styles.EditButtonTable]: isEditBtn,
        [styles.DangerButtonTable]: isDangerBtn,
        [styles.SuccessButtonTable]: isSuccessBtn,
        [styles.Secondary]: isSecondaryBtn,
      })}
      {...rest}
    >
      {children}
    </Button>
  );
};
