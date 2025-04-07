import { Progress } from "antd"
import React from "react"

export const CHProgress = ({
  type = "line",
  percent = 20,
  strokeColor,
  ...rest
}) => {
  return (
    <Progress
      percent={percent}
      type={type}
      strokeColor={strokeColor}
      showInfo={false}
      {...rest}
    />
  )
}
