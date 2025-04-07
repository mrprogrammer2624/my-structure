import { ColorPicker } from "antd"
import { CHInput } from "../CHInput"
import styles from "./CHColorPicker.module.css"

const rgbaRegex = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+(\.\d+)?)\)$/
const hslRegex = /^hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)$/
const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/

export const CHColorPicker = ({
  value,
  label,
  onChange,
  placeholder,
  onColorChange,
  ...rest
}) => {
  return (
    <CHInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      label={label}
      suffix={
        <ColorPicker
          defaultFormat="hex"
          value={value}
          onChange={onColorChange}
          className={styles.colorPicker}
        />
      }
      {...rest}
    />
  )
}
