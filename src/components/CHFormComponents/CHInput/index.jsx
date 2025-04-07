import { Input, InputNumber } from "antd";
import { clsx } from "clsx";
import { forwardRef } from "react";
import { Icons } from "../../../constants";
import styles from "./CHInput.module.css";
import { runes } from "runes2";
const { TextArea } = Input;

export const CHInput = forwardRef(
  (
    {
      id,
      size = "large",
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
      suffixClassName,
      prefixClassName,
      ...rest
    },
    ref
  ) => {
    const finalClassName = {
      affixWrapper: clsx(
        styles.inputWrap,
        {
          [styles.small]: size === "small",
        },
        rootClassName
      ),
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
          classNames={finalClassName}
          status={isInvalid && "error"}
          prefix={prefix}
          suffix={suffix}
          ref={ref}
          allowClear={
            allowClear && {
              clearIcon: (
                <span className="clr-black d-flex"> {Icons.CloseCircle} </span>
              ),
            }
          }
          count={{
            show: false,
            max: 255,
            exceedFormatter: (txt, { max }) =>
              runes(txt).slice(0, max).join(""),
          }}
          {...rest}
        />
        {errorMessage && (
          <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
        )}
      </div>
    );
  }
);

export const CHPasswordInput = ({
  id,
  size = "large",
  allowClear = true,
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
  suffixClassName,
  prefixClassName,
  isPasteDisable = false,
  ...rest
}) => {
  const finalClassName = {
    affixWrapper: clsx(styles.inputWrap, rootClassName),
    input: clsx(styles.input, className),
  };

  if (isPasteDisable) {
    const onPaste = (e) => {
      e.preventDefault();
      return false;
    };
    rest.onPaste = onPaste;
  }
  return (
    <div className={clsx(parentClassName)}>
      {label && (
        <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
          {label}
        </label>
      )}
      <Input.Password
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
        iconRender={(visible) => (
          <div>
            <div className={styles.passwordIcon}>
              {visible ? Icons.EyeOpen : Icons.EyeClosed}
            </div>
          </div>
        )}
        allowClear={{
          clearIcon: (
            <span className="clr-black d-flex"> {Icons.CloseCircle} </span>
          ),
        }}
        {...rest}
      />
      {errorMessage && (
        <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
      )}
    </div>
  );
};

export const CHNumberInput = ({
  id,
  min,
  max,
  size = "large",
  label,
  value,
  suffix,
  prefix,
  parser,
  disabled,
  onChange,
  formatter,
  isInvalid,
  className,
  allowClear,
  placeholder,
  errorMessage,
  defaultValue,
  parentClassName,
  ...rest
}) => {
  return (
    <div className={clsx(styles.parentClassName, parentClassName)}>
      {label && (
        <label htmlFor={id} className={clsx(styles.label)}>
          {label}
        </label>
      )}
      <InputNumber
        id={id}
        size={size}
        value={value}
        type="number"
        defaultValue={defaultValue}
        prefix={prefix}
        suffix={suffix}
        parser={parser}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.numberInputWrap}
        formatter={formatter}
        status={isInvalid && "error"}
        // allowClear={
        //   allowClear && {
        //     clearIcon: <span className="clr-black"> {Icons.CloseCircle} </span>,
        //   }
        // }
        {...rest}
      />
      {errorMessage && (
        <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
      )}
    </div>
  );
};

export const CHTextArea = ({
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
