import { Collapse } from "antd";
import { Icons } from "../../constants";
import clsx from "clsx";
import styles from "./CHAccordion.module.css";

export const CHAccordion = ({
  // defaultActiveKey = "1",
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
      // defaultActiveKey={defaultActiveKey}
      expandIconPosition="end"
      expandIcon={({ isActive }) => {
        return (
          <div
            className="d-flex align-items-center"
            style={{
              transition: ".3s all",
              transform: `${isActive ? "rotate(0)" : "rotate(-90deg)"}`,
            }}
          >
            {Icons.AltArrowDown}
          </div>
        );
      }}
      accordion
      ghost
    />
  );
};
