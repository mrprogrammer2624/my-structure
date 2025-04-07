import { Tag } from "antd";
import clsx from "clsx";
import styles from "./TCTag.module.css";

export const TCTag = ({
  children,
  bordreedLess,
  className,
  color,
  variant = "default",
  ...rest
}) => {
  return (
    <Tag
      className={clsx(styles.Tag, className, "font-primary", {
        [styles.DefaultTag]: variant === "default",
        [clsx(styles.PrimaryTag, "font-secondary")]: variant === "primary",
      })}
      bordered={bordreedLess ? false : true}
      color={color}
      {...rest}
    >
      {children}
    </Tag>
  );
};
