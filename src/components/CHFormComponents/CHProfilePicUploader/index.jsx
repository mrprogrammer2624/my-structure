import { Icons } from "../../../constants";
import styles from "./CHProfilePicUploader.module.css";

export const CHProfilePicUploader = ({
  id,
  label,
  accept,
  onChange,
  previewName,
  errorMessage,
  parentClassName,
  title,
  icon,
  description,
  previewImage,
  multiple = false,
  fileName,
  ...rest
}) => {
  return (
    <div className={parentClassName}>
      {label && <div className={styles.label}>{label}</div>}
      <label
        htmlFor={id}
        className={styles.uploader}
        multiple={multiple}
        title="Upload Image"
      >
        <input
          id={id}
          type="file"
          accept={accept}
          onChange={onChange}
          className={styles.uploaderInput}
          {...rest}
        />

        {!previewImage ? (
          <div className={styles.uploaderContent}>
            <div className={styles.uploaderIcon}>{Icons.GalleryAdd}</div>
          </div>
        ) : (
          <img
            src={previewImage}
            alt={previewName}
            width={96}
            height={96}
            className="object-fit-cover"
          />
        )}

        <div className={styles.hoverOverlay}>{Icons.GalleryAdd}</div>
      </label>
      {errorMessage && (
        <div className={clsx(styles.errorMessage, "mt-2")}>{errorMessage}</div>
      )}
    </div>
  );
};
