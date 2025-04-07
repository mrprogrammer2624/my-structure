import { Icons } from "@constants";
import { Avatar, Button, Layout } from "antd";
import { useTitle } from "../../App";
const { Header } = Layout;
import styles from "./BBHeader.module.css";
import clsx from "clsx";
import { BBButton } from "../BBButton";
import { Profile1 } from "@images";
export const BBHeader = ({ collapsed, collapseHandle, mobileShow, show }) => {
  const { headerText } = useTitle();
  return (
    <Header className={styles.header}>
      <Button
        className={clsx("h4 d-sm-flex d-none", styles.collapseBtn)}
        icon={Icons.Chevron}
        onClick={collapseHandle}
        shape="circle"
        size="large"
        style={{ transform: collapsed ? "rotate(-90deg)" : "rotate(90deg)" }}
      />
      <Button
        className={clsx(styles.collapsedMobile, "h4 d-sm-none d-flex position-fixed",show ===true && styles.collapsedMobileTrue)}
        icon={show === false ? Icons.menu : Icons.closeMenu}
        onClick={mobileShow}
        shape="circle"
        size="large"
      />
      <div className="d-flex align-items-center justify-content-between w-100">
        <h1 className="clr-dark fw-semibold">{headerText}</h1>
        <div className="d-flex align-items-center gap-4">
          <BBButton
            icon={Icons.SettingOutLine}
            shape="circle"
            className={styles.headerBtn}
            style={{ color: "#718EBF" }}
          />
          <BBButton
            icon={Icons.Notification}
            shape="circle"
            className={styles.headerBtn}
            style={{ color: "#FE5C73" }}
          />
          <Avatar src={Profile1} size={60} />
        </div>
      </div>
    </Header>
  );
};
