import { Tag } from "antd"
import React from "react"
import styles from "./CHTag.module.css"
import clsx from "clsx"

export const CHTag = ({
  bordered,
  isPremium,
  variant,
  children,
  color,
  className,
}) => {
  return (
    <Tag
      bordered={bordered}
      className={clsx(
        {
          [styles.premium]: variant === "isPremium",
          [styles.primary]: variant === "primary",
        },
        styles.tag,
        className
      )}
      color={color}
    >
      {children}
    </Tag>
  )
}
