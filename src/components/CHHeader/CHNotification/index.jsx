import React, { useState } from "react";
import { Avatar, Button, Dropdown } from "antd";
import clsx from "clsx";
import { Icons } from "../../../constants";
import { CHButton } from "../../CHFormComponents/CHButton";
import { notificationList } from "../../../constants/staticDatas";
import styles from "./CHNotification.module.css";

export const CHNotification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const items =
    notificationList &&
    notificationList.map((item, index) => {
      return {
        key: index + 1,
        label: (
          <>
            <div className={styles.MenuItem}>
              <Avatar
                shape="square"
                size={56}
                icon={Icons.Notification}
                className={clsx("bg-gray-washed clr-primary flex-shrink-0")}
              />
              <div className="flex-grow-1 ms-3">
                <div className="d-flex align-items-center justify-content-between lh-base">
                  <h5 className="fw-medium clr-black">{item.title}</h5>
                  <span className="p clr-gray-dark">{item.time}</span>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          </>
        ),
      };
    });

  const handleOpenChange = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setShowNotification(nextOpen);
    }
  };

  return (
    <>
      <Dropdown
        open={showNotification}
        onOpenChange={handleOpenChange}
        placement="bottomRight"
        trigger={["click"]}
        menu={{ items }}
        overlayClassName={styles.notificationOverlay}
        dropdownRender={(menu) => (
          <>
            <div className="d-flex align-items-center justify-content-between lh-1 mb-2">
              <h2 className="clr-black">Notifications</h2>
              <Button
                onClick={() => setShowNotification(false)}
                type="link"
                className="clr-pure-black p-0"
              >
                {/* {Icons.CloseCircle} */}
              </Button>
            </div>
            {React.cloneElement(menu, {
              style: { boxShadow: "none" },
            })}
          </>
        )}
      >
        <CHButton
          shape="rounded-square"
          width={56}
          height={56}
          variant="secondary"
          className={clsx("bg-gray-washed clr-black d-none d-lg-flex")}
          onClick={() => setShowNotification(!showNotification)}
        >
          {Icons.Notification}
        </CHButton>
      </Dropdown>
    </>
  );
};
