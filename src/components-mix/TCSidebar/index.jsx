import clsx from "clsx";
import Link from "next/link";
import { Avatar, Layout, Menu, Space } from "antd";
import styles from "./TCSidebar.module.css";

const { Sider } = Layout;

export const TCSidebar = ({
  collapsed,
  items,
  className,
  defaultSelectedKeys,
  selectedKeys,
  ...rest
}) => {
  return (
    <Sider
      trigger={null}
      breakpoint="lg"
      className={clsx(styles.sider, className)}
      width={"var(--sidebar-width)"}
      collapsed={collapsed}
      {...rest}
    >
      <div className={styles.logo}></div>
      <Menu
        mode="inline"
        className={clsx(styles.menu, "border-0")}
        defaultSelectedKeys={defaultSelectedKeys}
        selectedKeys={selectedKeys}
        items={items}
      />
      <div
        className={clsx(
          styles.sidebarBottom,
          "align-items-center justify-content-start d-flex",
          {
            ["align-items-center"]: collapsed,
          }
        )}
      >
        <Avatar
          size={40}
          // src={AvatarSidebar}
          alt="User profile picture"
          className="flex-shrink-0"
        />
        <Space direction="vertical" size={0} className={styles.BottomContent}>
          <h4>Oguz Gencer</h4>
          <p>oguz@mansory.com</p>
        </Space>
      </div>
    </Sider>
  );
};
