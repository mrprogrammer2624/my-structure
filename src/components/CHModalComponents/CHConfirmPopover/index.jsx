import React, { useState } from "react";
import styles from "./CHConfirmPopover.module.css";
import { Popover, Space } from "antd";
import { CHButton } from "../../CHFormComponents/CHButton";
import clsx from "clsx";

export const CHConfirmPopover = ({
  id,
  className,
  children,
  icon,
  title,
  description,
  cancelText,
  deleteText,
  placement,
  handleOpenChange,
  cancelHandleClick,
  deleteHandleClick,
  onOpenChange,
  isOpen,
  disabled,
  ...rest
}) => {
  const [openPopover, setOpenPopover] = useState(false);

  const handlePopoverOpenChange = (newOpen) => {
    setOpenPopover(newOpen);
    onOpenChange();
    if (handleOpenChange) {
      handleOpenChange();
    }
  };

  const cancelHandle = () => {
    setOpenPopover(false);
    cancelHandleClick();
  };
  const deleteHandle = () => {
    setOpenPopover(false);
    deleteHandleClick();
  };

  const CHConfirmPopoverContent = (
    <>
      <Space direction="vertical" className="gap-3 w-100">
        <Space className="gap-2 w-100" classNames={{ item: "d-inline-flex" }}>
          {icon && (
            <span
              className={clsx(styles.popoverIcon, "clr-danger d-inline-flex")}
            >
              {icon}
            </span>
          )}
          <div>
            <h4 className="clr-pure-black fw-semibold lh-base">{title}</h4>
            {description && <p>{description}</p>}
          </div>
        </Space>
        <Space className="gap-3 w-100" classNames={{ item: "w-100" }}>
          <CHButton
            className={styles.popoverBtn}
            variant="secondary"
            size="small"
            onClick={() => cancelHandle()}
          >
            {cancelText ? cancelText : "Cancel"}
          </CHButton>
          <CHButton
            className={styles.popoverBtn}
            variant="danger"
            size="small"
            onClick={() => deleteHandle()}
            disabled={disabled}
          >
            {deleteText ? deleteText : "Yes, Delete"}
          </CHButton>
        </Space>
      </Space>
    </>
  );
  return (
    <>
      <Popover
        id={id}
        overlayClassName={clsx(className, styles.popoverInner)}
        overlayInnerStyle={{ maxWidth: 300 }}
        arrow={false}
        content={CHConfirmPopoverContent}
        placement={placement}
        trigger="click"
        open={openPopover}
        onOpenChange={handlePopoverOpenChange}
        {...rest}
      >
        {children}
      </Popover>
    </>
  );
};
