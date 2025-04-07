import { message, Upload } from "antd";
import clsx from "clsx";
import { TCButton } from "@/components";
import styles from "./TCUploader.module.css";

export const TCUploader = ({
  id,
  label,
  labelClassName,
  accept,
  onChange,
  errorMessage,
  parentClassName,
  title,
  subtitle,
  button,
  buttonIcon,
  icon,
  multiple = false,
  maxCount = 1,
  onRemove,
  ...rest
}) => {
  const handleChange = ({ fileList }) => {
    if (onChange) {
      onChange(fileList);
      message.success(`file add successfully.`);
    }
  };

  const handleRemove = (file) => {
    if (onRemove) {
      onRemove(file);
    }
    message.success(`${file.name} file removed successfully.`);
  };

  return (
    <div className={clsx(parentClassName, styles.uploaderWrap)}>
      {label && <div className={styles.label}>{label}</div>}
      <label htmlFor={id}>
        <Upload
          id={id}
          className={clsx(styles.uploader, labelClassName)}
          accept={accept}
          multiple={multiple}
          maxCount={maxCount}
          showUploadList={false}
          listType="picture"
          onChange={handleChange}
          onRemove={handleRemove}
          {...rest}
        >
          <div className={styles.uploaderContent}>
            {icon && <div className={styles.uploaderIcon}>{icon}</div>}
            {title && <h3 className="b-1 fw-normal clr-black">{title}</h3>}
            {subtitle && <p className="h6 clr-gray">{subtitle}</p>}
            {button && (
              <TCButton variant={"primary"} icon={buttonIcon}>
                {button}
              </TCButton>
            )}
          </div>
        </Upload>
      </label>

      {errorMessage && (
        <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
      )}
    </div>
  );
};
