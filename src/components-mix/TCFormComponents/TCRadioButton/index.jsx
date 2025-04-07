import clsx from "clsx";
import { Radio } from "antd";
import styles from "./TCRadioButton.module.css";

export const TCRadioButton = ({
  id,
  name,
  label,
  errorMessage,
  className,
  parentClassName,
  options,
  onChange,
  value,
  ...rest
}) => {
  return (
    <div className={clsx(parentClassName)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <Radio.Group
        options={options}
        onChange={onChange}
        value={value}
        className={clsx(styles.radioButton, className)}
        optionType="button"
        buttonStyle="solid"
        type="radio"
        id={id}
        name={name}
        {...rest}
      />
      {errorMessage && (
        <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
      )}
    </div>
  );
};
