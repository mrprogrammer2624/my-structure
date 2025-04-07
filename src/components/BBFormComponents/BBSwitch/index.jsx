import { Switch } from "antd"
import styles from "./BBSwitch.module.css"
import clsx from "clsx"

export const BBSwitch = ({
  wrapperClassName,
  checked,
  className,
  onChange,
  onClick,
  labelClassName,
  disabled,
  label,
  loading,
  value,
  ...rest
}) => {
  return (
    <div className={clsx(styles.switch, wrapperClassName)}>
      <Switch
        checked={checked}
        value={value}
        loading={loading}
        disabled={disabled}
        className={className}
        onChange={onChange}
        onClick={onClick}
        {...rest}
      />
      <span className={clsx(labelClassName, "p-lg")}>{label}</span>
    </div>
  )
}