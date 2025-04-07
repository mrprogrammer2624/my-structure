import React from "react";
import clsx from "clsx";
import { CHLogo } from "../CHLogo";
import { CHNotification } from "./CHNotification";
import { Divider, Space } from "antd";
import { CHInput } from "../CHFormComponents";
import { Icons } from "../../constants";
import { CHMessageMiles } from "./CHMessageMiles";
import { Link } from "react-router-dom";
import styles from "./CHHeader.module.css";
import { CHProfile } from "./CHProfile";

export const CHHeader = ({ expanded }) => {
  return (
    <header
      className={clsx(styles.headerWrapper, { [styles.expanded]: expanded })}
    >
      <div className={clsx(styles.header)}>
        <Space size={20} className={styles.headerLeft}>
          <Link to="/">
            <CHLogo hasText={false} width={80} />
          </Link>
          <Divider
            type="vertical"
            className={clsx(styles.headerDivider, "m-0 d-none d-lg-flex")}
          />
          <CHMessageMiles className="d-none d-lg-flex" />
        </Space>
        <Space size={16} className={clsx(styles.headerRight)}>
          <CHInput
            rootClassName="d-none d-lg-flex"
            prefix={Icons.Magnifier}
            placeholder="Search"
          />
          <CHNotification />
          <CHProfile />
        </Space>
      </div>
    </header>
  );
};
