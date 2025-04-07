import { Avatar, Popover, Slider, Space } from "antd";
import React from "react";
import { Icons } from "../../../constants";
import styles from "./CHMessageMiles.module.css";
import clsx from "clsx";

export const CHMessageMiles = ({ className }) => {
  const content = (
    <div className="text-center">
      <p className="p-sm clr-gray mb-1">
        Your point:{" "}
        <span className="clr-primary-gradient fw-medium">12,345</span>
      </p>
      <p className="p-sm clr-gray">
        You need more <span className="clr-black">2655</span> to reach{" "}
        <span className="clr-black">L2</span>
      </p>
    </div>
  );
  return (
    <>
      <Space size={8} className={className}>
        <Avatar
          size={40}
          icon={Icons.RocketBold}
          className="clr-primary d-flex align-items-center justify-content-center bg-gray-washed"
        />
        <div>
          <Space className="mb-2" size={4}>
            <span className="text-uppercase clr-gray-dark lh-1">
              Message Miles
            </span>
            <Popover
              className="d-flex"
              overlayClassName={styles.messageMiles}
              placement="bottomLeft"
              content={content}
              arrow={false}
            >
              <span className="lh-1 clr-primary">{Icons.QuestionCircle}</span>
            </Popover>
          </Space>
          <div className={styles.pointProgressWrapper}>
            <div
              style={{ width: "55%" }}
              className={clsx(styles.pointProgress, "bg-success")}
            ></div>
          </div>
          <div className="d-flex justify-content-between mt-1">
            <span className="p-xs clr-black fw-medium">L1</span>
            <span className="p-xs clr-black fw-medium">L2</span>
          </div>
        </div>
      </Space>
    </>
  );
};
