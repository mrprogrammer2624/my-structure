import { Modal } from "antd";
import { clsx } from "clsx";
import { Icons } from "../../../constants";
import styles from "./CHModal.module.css";

export const CHModal = (
  {
    open,
    title,
    width,
    children,
    className,
    handleClose,
    contentClassName,
    closeOnOutsideClick,
    ...rest
  },
  ref
) => {
  const finalClassName = {
    body: styles.body,
    content: clsx(styles.content, contentClassName),
    header: styles.header,
    footer: styles.footer,
    mask: styles.mask,
  };

  return (
    <Modal
      classNames={finalClassName}
      rootClassName={styles.modalParent}
      open={open}
      onCancel={handleClose}
      className={clsx(styles.modal, className)}
      title={title}
      maskClosable={closeOnOutsideClick}
      width={width}
      closeIcon={
        <div
          className={clsx(
            styles.closeBtn,
            "clr-black d-flex align-items-center"
          )}
        >
          {Icons.CloseCircle}
        </div>
      }
      centered
      {...rest}
    >
      {children}
    </Modal>
  );
};
