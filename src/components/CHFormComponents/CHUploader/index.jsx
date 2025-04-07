import { Button } from "antd";
import clsx from "clsx";
import { Icons } from "../../../constants";
import styles from "./CHUploader.module.css";

export const CHUploader = ({
  id,
  label,
  labelClassName,
  accept,
  onChange,
  onRemoveClick,
  previewSrc,
  previewName,
  errorMessage,
  multiple,
  parentClassName,
  title,
  subtitle,
  uploadFileTemplateLink = "https://www.stats.govt.nz/assets/Uploads/Annual-enterprise-survey/Annual-enterprise-survey-2021-financial-year-provisional/Download-data/annual-enterprise-survey-2021-financial-year-provisional-csv.csv",
  icon,
  ...rest
}) => {
  const handleImageRemove = (e) => {
    onRemoveClick && onRemoveClick(e);
  };

  return (
    <div className={clsx(parentClassName, styles.uploaderWrap)}>
      {label && <div className={styles.label}>{label}</div>}
      <label htmlFor={id} className={clsx(styles.uploader, labelClassName)}>
        <input
          id={id}
          type="file"
          multiple={multiple}
          onChange={onChange}
          accept={accept}
          className={styles.uploaderInput}
          {...rest}
        />

        <div className={styles.uploaderContent}>
          {icon && <div className={styles.uploaderIcon}>{icon}</div>}
          {title && <h6 className="clr-black mb-1 fw-normal">{title}</h6>}
          {subtitle && <p className="clr-gray-dark p-sm">{subtitle}</p>}
          {uploadFileTemplateLink && (
            <a href={uploadFileTemplateLink}>Download Template</a>
          )}
        </div>

        {!multiple && previewSrc && (
          <>
            <div className={styles.singlePreview}>
              <img
                src={previewSrc}
                alt={previewName}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </>
        )}
      </label>
      {!multiple && previewSrc && (
        <Button
          icon={Icons.Trash}
          className={clsx(styles.deletePreviewSingle, "clr-danger")}
          onClick={handleImageRemove}
        />
      )}
      {errorMessage && (
        <div className={clsx(styles.errorMessage)}>{errorMessage}</div>
      )}
      {multiple && previewSrc && (
        <div className={styles.previewGrid}>
          <div
            className={"ratio ratio-1x1 overflow-hidden"}
            style={{ borderRadius: 6 }}
          >
            <img
              src={previewSrc}
              alt={previewName}
              width={80}
              height={80}
              className="object-fit-cover"
            />
            <button
              className={styles.removePreviewBtn}
              title={"Remove"}
              onClick={handleImageRemove}
            >
              {Icons.CloseCircle}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
