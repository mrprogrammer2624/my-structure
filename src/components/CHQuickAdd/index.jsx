import { Popover, Radio } from "antd";
import React from "react";
import { CHAvatar, CHInput } from "../index";
import { Icons } from "../../constants";
import styles from "./CHQuickAdd.module.css";
import clsx from "clsx";

export const CHQuickAdd = ({
  children,
  users,
  isOpen,
  handleQuickSearchChange,
  handleAddCompanyOwnerClick,
  onOpenChange,
  isDisabled = false,
}) => {
  const popoverContent = (
    <>
      <CHInput
        rootClassName={"bg-gray-washed mb-3"}
        size="small"
        prefix={Icons.Magnifier}
        placeholder="Search"
        onChange={handleQuickSearchChange}
      />
      <Radio.Group
        name="companyUserId"
        rootClassName={styles.quickAddRadioGroup}
        onChange={handleAddCompanyOwnerClick}
      >
        {users &&
          users.map((user, index) => {
            return (
              <Radio
                key={index}
                className={clsx(styles.quickAddRadio, "m-0 py-2")}
                value={user?.company_user_id}
              >
                <CHAvatar
                  className={styles.quickAddAvatar}
                  imgClassName={styles.image}
                  imgSrc={user?.user?.profile_image}
                  title={user?.user?.name}
                />
              </Radio>
            );
          })}
      </Radio.Group>
    </>
  );

  return isDisabled ? (
    children
  ) : (
    <Popover
      overlayClassName={styles.quickAddPopover}
      arrow={false}
      content={popoverContent}
      open={isOpen}
      trigger="click"
      placement="leftTop"
      onOpenChange={() => onOpenChange()}
    >
      {children}
    </Popover>
  );
};
