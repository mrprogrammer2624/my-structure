import React from "react";
import styles from "./CHProfile.module.css";
import { Avatar, Space } from "antd";
import { homeTaskProfile } from "../../../assets/images";
import clsx from "clsx";
import { Icons } from "../../../constants";
import { useHeaderProfileHook } from "../../../hooks";
import { CHDropdown } from "../../CHFormComponents/CHDropdown";

export const CHProfile = () => {
  const {
    userDetails,
    handleNavigateToProfile,
    handleNavigateToPlan,
    handleNavigateToSettings,
    handleLogoutSubmit,
  } = useHeaderProfileHook();

  const items = [
    {
      key: "MyProfile",
      icon: Icons.ProfileOutline,
      label: "My Profile",
      onClick: handleNavigateToProfile,
    },
    {
      key: "Plans",
      icon: Icons.PlanOutline,
      label: "Plans",
      onClick: handleNavigateToPlan,
    },
    {
      key: "Settings",
      icon: Icons.SettingsOutline,
      label: "Settings",
      onClick: handleNavigateToSettings,
    },
    {
      key: "Logout",
      icon: Icons.Logout,
      label: "Logout",
      danger: true,
      onClick: handleLogoutSubmit,
    },
  ];

  return (
    <CHDropdown
      dropdownMenu={items}
      // onClick={handleMenuClick}
      className={styles.headerProfile}
      placement="bottomRight"
    >
      <Space size={8}>
        <Avatar
          shape="square"
          src={
            userDetails?.profile_image
              ? userDetails?.profile_image
              : homeTaskProfile
          }
          className={clsx(
            "bg-gray-washed clr-primary flex-shrink-0",
            styles.headerProfileAvatar
          )}
        />
        <Space className="d-none d-sm-flex" direction="vertical" size={4}>
          <Space size={4} className="lh-1">
            {userDetails?.name ? (
              <>
                <h4 className="fw-medium">{userDetails?.name}</h4>
                <span>{Icons.DropdownArrow}</span>
              </>
            ) : null}
          </Space>
          <span className="p-sm text-uppercase clr-gray-dark">
            {userDetails?.job_title ? userDetails?.job_title : ""}
          </span>
        </Space>
      </Space>
    </CHDropdown>
  );
};
