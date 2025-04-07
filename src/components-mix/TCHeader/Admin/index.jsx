"use client";
import clsx from "clsx";
import { Layout } from "antd";
import { useMediaQuery } from "@/hooks";
import { TCButton, TCInput } from "../..";
import { Icons } from "@/constants";
import styles from "./TCHeader.module.css";

const { Header } = Layout;

export const TCHeader = ({ collapsed, ...rest }) => {
  const isIpad = useMediaQuery("(max-width: 991px)");

  return (
    <Header className={styles.header}>
      <div className="d-flex align-items-center justify-content-between w-100">
        <div
          className={clsx(
            styles.headerLeft,
            "d-flex align-align-items-center justify-content-center"
          )}
        >
          <TCButton
            className={clsx(
              "h4 d-lg-none align-self-center",
              styles.collapseBtn,
              styles.headerBtn
            )}
            icon={Icons.Chevron}
            shape="circle"
            onClick={collapsed}
            {...rest}
          />
          <h1 className="clr-dark fw-semibold d-none d-lg-block">
            Good Morning Oguz.
          </h1>
          <TCInput
            parentClassName={"d-none d-lg-block"}
            suffix={Icons.Serach}
            placeholder={"Search..."}
          />
        </div>
        <div className="d-flex align-items-center gap-4">
          {isIpad && (
            <TCButton
              icon={Icons.Serach}
              shape="circle"
              className={styles.headerBtn}
            />
          )}
          <TCButton
            icon={Icons.Notification}
            shape="circle"
            className={styles.headerBtn}
          />
        </div>
      </div>
    </Header>
  );
};
