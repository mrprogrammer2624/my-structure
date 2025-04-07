import React from "react";
import styles from "./CHCRMPlanCard.module.css";
import { CHCheckbox } from "../CHFormComponents";
import { Divider } from "antd";
import clsx from "clsx";

export const CHCRMPlanCard = ({
  cardData,
  customDisabled = true,
  standardCheckboxClick,
  customCheckboxClick,
}) => {
  const { customPrice } = cardData;
  return (
    <div className={styles.cardWrapper}>
      <div className="d-flex align-items-center gap-2 mb-2">
        <div className={styles.imgWrapper}>
          <img src={cardData?.SubscriptionProduct?.logo} />
        </div>
        <h6>{cardData?.SubscriptionProduct?.name}</h6>
      </div>
      <Divider className="m-0" />

      <label
        className={clsx(
          customDisabled && styles.labelDisabled,
          !customDisabled && "cursor-pointer",
          "d-flex justify-content-between  my-2"
        )}
        // className="cursor-pointer d-flex justify-content-between my-2"
        htmlFor={"standard" + cardData?.SubscriptionProduct?.name}
      >
        <div className="d-flex gap-2 align-items-center">
          <CHCheckbox
            variant="Add"
            id={"standard" + cardData?.SubscriptionProduct?.name}
            value={cardData?.plan_id}
            onClick={standardCheckboxClick}
            checked={cardData?.checked}
            disabled={customDisabled}
          />
          Standard
        </div>
        <div className="d-flex align-items-center">
          &#36;
          {cardData?.price}
        </div>
      </label>

      <Divider className="m-0" />
      <label
        className={clsx(
          customDisabled && styles.labelDisabled,
          !customDisabled && "cursor-pointer",
          "d-flex mt-2 justify-content-between"
        )}
        htmlFor={"custom" + cardData?.SubscriptionProduct?.name}
      >
        <div className="d-flex gap-2 align-items-center">
          <CHCheckbox
            variant="Add"
            id={"custom" + cardData?.SubscriptionProduct?.name}
            disabled={customDisabled}
            onClick={customCheckboxClick}
          />
          Custom
        </div>
        <span>
          &#36;
          {0}
        </span>
      </label>
    </div>
  );
};
