import { TimePicker } from "antd"
import clsx from "clsx"
import { Icons } from "../../../constants"
import styles from "../CHInput/CHInput.module.css"

export const CHTImeRangePicker = ({ allowClear = true, ...rest }) => {
  return (
    <TimePicker.RangePicker
      allowClear={
        allowClear && {
          clearIcon: (
            <span className="clr-black d-flex"> {Icons.CloseCircle} </span>
          ),
        }
      }
      suffixIcon={Icons.ClockCircle}
      className={clsx(styles.inputWrap, styles.timeRangePicker)}
      {...rest}
    />
  )
}
