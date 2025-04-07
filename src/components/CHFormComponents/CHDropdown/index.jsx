import React from "react";
import styles from "./CHDropdown.module.css";
import { Dropdown } from "antd";
import clsx from "clsx";
import { Icons } from "../../../constants";

export const CHDropdown = ({
  onClick,
  dropdownMenu,
  children,
  className,
  rootClassName,
  placement,
  trigger,
  expandIcon,
  ...rest
}) => {
  return (
    <Dropdown
      menu={{
        expandIcon: expandIcon ? expandIcon : Icons.DropdownArrowRight,
        items: dropdownMenu,
        onClick: onClick,
        className: styles.dropdownMenu,
        rootClassName: styles.dropdownSubMenu,
      }}
      trigger={trigger}
      className={className}
      rootClassName={clsx(styles.dropdown, rootClassName)}
      {...rest}
      placement={placement}
    >
      {children}
    </Dropdown>
  );
};
