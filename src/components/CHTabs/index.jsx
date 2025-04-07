import { Button, Tabs, Tooltip } from "antd";
import clsx from "clsx";
import { Icons } from "../../constants";
import styles from "./CHTabs.module.css";
import { CHButton } from "../CHFormComponents";

export const CHTabs = ({
  items,
  animated,
  onChange,
  className,
  extraContent,
  theme = "white",
  onTabRemove,
  defaultActiveKey,
  tabPosition = "top",
  activeTabKey,
  pinClickHandler,
  ...rest
}) => {
  const updatedItems = items.map((item) => {
    if (item.isRemovable) {
      return {
        ...item,
        label: (
          <div className={"d-flex align-items-center"}>
            <div className="d-flex align-items-center gap-2">
              {true ? (
                <button
                  className={styles.removeTabBtn}
                  onClick={pinClickHandler}
                >
                  {Icons.Pin}
                </button>
              ) : (
                <button
                  className={styles.removeTabBtn}
                  onClick={pinClickHandler}
                >
                  {Icons.Unpin}
                </button>
              )}
              {item.label}
            </div>
            <Tooltip title="Remove View">
              <button
                className={styles.removeTabBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  onTabRemove(item?.key);
                }}
              >
                {Icons.CloseCircleFilled}
              </button>
            </Tooltip>
          </div>
        ),
      };
    } else {
      return item;
    }
  });

  return (
    <Tabs
      items={updatedItems}
      defaultActiveKey={activeTabKey}
      activeKey={activeTabKey}
      onChange={onChange}
      tabBarExtraContent={extraContent}
      animated={animated}
      className={clsx(
        styles.tabs,
        {
          [styles.themeGray]: theme === "gray",
          [styles.tabsTop]: tabPosition === "top",
          [styles.tabsLeft]: tabPosition === "left",
        },
        className
      )}
      tabPosition={tabPosition}
      {...rest}
    />
  );
};
