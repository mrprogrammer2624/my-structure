import { Input } from "antd";
import clsx from "clsx";
import styles from "./BBInput.module.css";

export const BBInput = ({
  id,
  size,
  type = "text",
  label,
  value,
  suffix,
  prefix,
  onChange,
  disabled,
  isInvalid,
  className,
  allowClear = true,
  placeholder,
  errorMessage,
  parentClassName,
  labelClassName,
  rootClassName,
  ...rest
}) => {
  const finalClassName = {
    input: clsx(styles.input, className),
    prefix: styles.inputPrefix,
    suffix: styles.inputSuffix,
  };

  return (
    <div className={clsx(parentClassName)}>
      {label && (
        <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
          {label}
        </label>
      )}
      <Input
        id={id}
        type={type}
        size={size}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(
          styles.inputWrap,
          {
            [styles.small]: size === "small",
          },
          rootClassName
        )}
        classNames={finalClassName}
        status={isInvalid && "error"}
        prefix={prefix}
        suffix={suffix}
        allowClear={allowClear}
        {...rest}
      />
      {errorMessage && (
        <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
      )}
    </div>
  );
};

export const BBPasswordInput = ({
  id,
  size,
  label,
  value,
  suffix,
  prefix,
  onChange,
  disabled,
  isInvalid,
  className,
  placeholder,
  errorMessage,
  parentClassName,
  labelClassName,
  rootClassName,
  ...rest
}) => {
  const finalClassName = {
    input: clsx(styles.input, className),
  };
  return (
    <div className={clsx(parentClassName)}>
      {label && (
        <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
          {label}
        </label>
      )}
      <Input.Password
        className={clsx(styles.inputWrap, rootClassName)}
        id={id}
        size={size}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        classNames={finalClassName}
        status={isInvalid && "error"}
        prefix={prefix}
        suffix={suffix}
        {...rest}
      />
      {errorMessage && (
        <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
      )}
    </div>
  );
};
