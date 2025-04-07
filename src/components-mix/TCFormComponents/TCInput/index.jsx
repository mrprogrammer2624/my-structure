import { Input } from "antd";
import clsx from "clsx";
import { Icons } from "@/constants";
import styles from "./TCInput.module.css";

export const TCInput = ({
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
            [styles.prefix]: prefix,
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

export const TCPasswordInput = ({
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

const { TextArea } = Input;
export const TCTextArea = ({
  id,
  label,
  value,
  suffix,
  prefix,
  autoSize,
  onChange,
  disabled,
  isInvalid,
  className,
  allowClear = true,
  placeholder,
  errorMessage,
  parentClassName,
  labelClassName,
  rows,
  ...rest
}) => {
  return (
    <div className={clsx(parentClassName)}>
      {label && (
        <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
          {label}
        </label>
      )}
      <TextArea
        placeholder={placeholder}
        id={id}
        rows={rows}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={clsx(styles.input, styles.textArea, className)}
        status={isInvalid && "error"}
        prefix={prefix}
        suffix={suffix}
        autoSize={autoSize}
        minLength={5}
        allowClear={
          allowClear && {
            clearIcon: (
              <span className="clr-black d-flex"> {Icons.CloseCircle} </span>
            ),
          }
        }
        {...rest}
      />
      {errorMessage && (
        <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
      )}
    </div>
  );
};
