import { DatePicker } from "antd";
import clsx from "clsx";
import { Icons } from "../../../constants";
import styles from "./CHDatePicker.module.css";

export const CHDatePicker = ({
  id,
  value,
  label,
  format,
  onChange,
  isInvalid,
  placeholder,
  errorMessage,
  suffix = false,
  allowClear = true,
  parentClassName,
  ...rest
}) => {
  return (
    <div className={clsx(styles.datepickerWrap, parentClassName)}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <DatePicker
        id={id}
        value={value}
        format={format}
        onChange={onChange}
        allowClear={{
          clearIcon: (
            <span className="clr-black d-flex"> {Icons.CloseCircle} </span>
          ),
        }}
        placeholder={placeholder}
        className={styles.datepicker}
        status={isInvalid && "error"}
        suffixIcon={
          suffix ? (
            <>{suffix}</>
          ) : (
            <div className={styles.suffixIcon}>{Icons.CalendarOutline}</div>
          )
        }
        {...rest}
      />
      {errorMessage && (
        <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
      )}
    </div>
  );
};
