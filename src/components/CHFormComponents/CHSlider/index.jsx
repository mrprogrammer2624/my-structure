import { Slider } from "antd"
import React from "react"
import styles from "./CHSlider.module.css"
import { Icons } from "../../../constants"
import clsx from "clsx"

export const CHSlider = ({
  min,
  max,
  value,
  tooltipOpen,
  defaultValue,
  className,
  onChange,
}) => {
  return (
    <>
      <Slider
        className={clsx(styles.rangeSlider, className)}
        defaultValue={defaultValue}
        max={max}
        value={value}
        min={min}
        onChange={onChange}
        tooltip={{
          color: "#F2F5FF",
          open: tooltipOpen,
          formatter: (value) => {
            return (
              <div>
                <h6 className="text-center clr-primary fw-semibold">
                  <span>$</span> {value}
                </h6>
                <p className="d-flex align-items-center clr-black">
                  <span className={clsx(styles.InfoCircle)}>
                    {Icons.InfoCircle}
                  </span>
                  500 Premium messages
                </p>
              </div>
            )
          },
        }}
      />
      <div className="d-flex justify-content-between">
        <h6>${min}</h6>
        <h6>${max}</h6>
      </div>
    </>
  )
}
