import { Icons } from "@constants";
import { Logo, LogoBlue } from "@images";
import { Link } from "react-router-dom";
import styles from "./BBSidebar.module.css";
import { Layout, Menu } from "antd";
import clsx from "clsx";
import { BBButton } from "../BBButton";
import { useMediaQuery } from "../../hooks";
const { Sider } = Layout;

export const BBSidebar = ({
  collapsed,
  items,
  className,
  defaultSelectedKeys,
  selectedKeys,
}) => {
  const isIpad = useMediaQuery("(max-width: 991px)");
  const collapsedChange = () => {
    if (isIpad === false) {
      return collapsed;
    } else {
      return !collapsed;
    }
  };

  return (
    <Sider
      trigger={null}
      collapsible
      className={clsx(styles.sider, className)}
      width={250}
      collapsed={collapsedChange}
    >
      <div className={styles.logo}>
        <Link to="/" className="d-inline-block">
          {isIpad === true ? (
            <img src={collapsed === false ? LogoBlue : Logo} alt="BurnBlack" />
          ) : (
            <img src={collapsed === true ? LogoBlue : Logo} alt="BurnBlack" />
          )}
        </Link>
      </div>
      <BBButton
        className={styles.siderBtn}
        icon={Icons.AddPaper}
        variant="primary"
      >
        {isIpad === false
          ? collapsed === false
            ? "Start New Filing"
            : ""
          : collapsed === true
          ? "Start New Filing"
          : ""}
      </BBButton>
      <Menu
        mode="inline"
        className={clsx(styles.menu, "border-0")}
        defaultSelectedKeys={defaultSelectedKeys}
        selectedKeys={selectedKeys}
        items={items}
      />
    </Sider>
  );
};
