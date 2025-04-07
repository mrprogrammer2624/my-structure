import { Select } from "antd";
import { Icons } from "../../../constants";
import clsx from "clsx";
import styles from "./BBSelect.module.css";

export const BBSelect = ({
  id,
  size,
  label,
  value,
  placeholder,
  options,
  onChange,
  disabled,
  isInvalid,
  allowClear = true,
  errorMessage,
  rootClassName,
  parentClassName,
  labelClassName,
  mode,
  key = "select",
  ...rest
}) => {
  const finalClassName = clsx(
    styles.select,
    {
      [styles.small]: size === "small",
      [styles.tags]: mode === "multiple",
    },
    rootClassName
  );

  return (
    <div
      className={clsx(styles.parent, {
        [parentClassName]: parentClassName,
      })}
      key={key}
    >
      {label && (
        <label
          htmlFor={id}
          className={clsx(styles.label, {
            [labelClassName]: labelClassName,
          })}
        >
          {label}
        </label>
      )}
      <Select
        options={options}
        value={value}
        onChange={onChange}
        status={isInvalid && "error"}
        className={finalClassName}
        placeholder={placeholder ? placeholder : '"Select a value"'}
        mode={mode}
        allowClear={
          allowClear && {
            clearIcon: (
              <div className={styles.clearIcon}> {Icons.CloseCircle} </div>
            ),
          }
        }
        popupClassName={styles.selectPopup}
        suffixIcon={<span className="clr-black">{Icons.AltArrowDown}</span>}
        disabled={disabled}
        {...rest}
      />
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};
