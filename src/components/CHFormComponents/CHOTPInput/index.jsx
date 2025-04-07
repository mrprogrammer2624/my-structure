import clsx from "clsx"
import OTPInput from "react-otp-input"
import { CHInput } from "../CHInput"
import styles from "./CHOTPInput.module.css"

export const CHOTPInput = ({
  id,
  label,
  name,
  value,
  setValue,
  count = 6,
  separator = "",
  errorMessage,
  timer,
  timerActive,
  formatTime,
  parentClassName,
  handleResendCode,
  ...rest
}) => {
  return (
    <div className={clsx(parentClassName)}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <OTPInput
        id={id}
        name={name}
        value={value}
        onChange={setValue}
        numInputs={count}
        renderSeparator={separator}
        renderInput={(props) => <CHInput {...props} allowClear={false} />}
        inputStyle={styles.otpInput}
        inputType={"number"}
        containerStyle={styles.otpWrapper}
        {...rest}
      />
      {errorMessage && <div className="clr-error p-sm">{errorMessage}</div>}
      <div className="d-flex justify-content-between align-items-center">
        {timerActive ? (
          <div className="clr-error fw-medium ms-auto">{formatTime(timer)}</div>
        ) : (
          <button
            className="link link-primary text-uppercase ms-auto"
            onClick={handleResendCode}
          >
            Resend OTP
          </button>
        )}
        {/* <button className="link link-primary text-uppercase">Resend OTP</button>
        <div className="clr-error fw-medium">00:16</div> */}
      </div>
    </div>
  )
}
