import { useState } from "react";
import { Icons } from "../../../constants";
import { Button, Switch } from "antd";
import clsx from "clsx";
import styles from "./CHAutomationCard.module.css";
import { CHConfirmPopover } from "../../CHModalComponents";
import { CHDropdown } from "../../CHFormComponents";
export const CHAutomationCard = ({ cardData, cardViewHandle }) => {
  const [openOptionMenu, setOpenOptionMenu] = useState(false);
  const [isCardActive, setIsCardActive] = useState(cardData?.isActive);
  const userOptions = [
    {
      key: "ViewRule",
      icon: Icons.EyeOpen,
      label: "View Rule",
      onClick: cardViewHandle,
    },
    {
      key: "EditRule",
      icon: Icons.EditPen,
      label: "Edit Rule",
    },
    {
      key: "delete",
      label: (
        <CHConfirmPopover
          placement="right"
          icon={Icons.MinusCircle}
          title="Delete List"
          description="Are you sure you want to delete this list?"
          cancelHandleClick={() => {
            console.log("cancel");
            setOpenOptionMenu(false);
          }}
          deleteHandleClick={() => {
            console.log("delete");
            setOpenOptionMenu(false);
          }}
        >
          <span className={styles.list}>{Icons.Trash}Delete Rule</span>
        </CHConfirmPopover>
      ),
      danger: true,
      className: "p-0",
    },
  ];

  const optionMenuClick = (e) => {
    if (e.key === "ViewRule" || e.key === "EditRule") {
      setOpenOptionMenu(false);
    }
  };

  const handleOpenChange = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpenOptionMenu(nextOpen);
    }
  };

  return (
    <div className={styles.card}>
      <div className="d-flex justify-content-between">
        <div className={styles.headerBtn}>
          <img
            src={cardData.icon}
            alt={cardData.headerTitle}
            width="12"
            height="12"
          />
          <span className="text-uppercase clr-black fw-medium p-sm lh-1">
            {cardData.headerTitle}
          </span>
        </div>
        <CHDropdown
          onClick={optionMenuClick}
          open={openOptionMenu}
          trigger={["click"]}
          dropdownMenu={userOptions}
          placement="bottomRight"
          onOpenChange={handleOpenChange}
        >
          <Button
            type="text"
            shape="circle"
            icon={Icons.OptionMenu}
            className={clsx(styles.optionMenuBtn, "clr-black")}
          />
        </CHDropdown>
      </div>
      <h5 className={styles.cardTitle}>{cardData.title}</h5>
      <p className={styles.description}>{cardData.description}</p>
      <div className={styles.cardFooter}>
        <p>{isCardActive ? "Active" : "Set as Active"}</p>
        <Switch
          value={isCardActive}
          onChange={(checked) => {
            setIsCardActive(!isCardActive);
          }}
        />
      </div>
    </div>
  );
};
