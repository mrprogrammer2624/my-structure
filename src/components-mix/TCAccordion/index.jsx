"use client";
import { Collapse } from "antd";
import { Icons } from "../../constants";
import clsx from "clsx";
import styles from "./TCAccordion.module.css";

export const TCAccordion = ({
  defaultActiveKey = "1",
  className,
  items,
  onChange,
  id,
}) => {
  return (
    <Collapse
      id={id}
      onChange={onChange}
      className={clsx(styles.accordion, className)}
      items={items}
      defaultActiveKey={defaultActiveKey}
      expandIconPosition="end"
      expandIcon={({ isActive }) => {
        return (
          <div
            className="d-flex align-items-center"
            style={{
              transition: ".3s all",
              transform: `${isActive ? "rotate(-45deg)" : "rotate(-0)"}`,
              opacity: `${!isActive ? "0.6" : "1"}`,
            }}
          >
            {Icons.Plus}
          </div>
        );
      }}
      accordion
      ghost
    />
  );
};
