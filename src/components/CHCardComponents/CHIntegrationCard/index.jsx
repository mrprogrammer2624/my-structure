import React from "react";
import clsx from "clsx";
import { CHAvatar, CHButton, CHDropdown, CHTag } from "../../CHFormComponents";
import { Badge, Tooltip } from "antd";
import { Icons } from "../../../constants";
import styles from "./CHIntegration.module.css";

export const CHIntegrationCard = ({
  imgSrc,
  title,
  subTitle,
  isPremium,
  isConnected,
  pathname,
  dropdownOptions,
  handleTutorialClick,
  handleDisconnectClick,
  handleConnectClick,
  direction = "vertical",
  disabled,
}) => {
  const isHorizontal = direction === "horizontal" ? true : false;
  return (
    <div
      className={clsx(styles.cardContainer, {
        [styles.horizontal]: isHorizontal,
      })}
    >
      <div
        className={clsx(
          "d-flex align-items-center justify-content-between gap-2"
        )}
      >
        <CHAvatar
          imgSrc={imgSrc}
          title={
            <div className="d-flex gap-2">
              {title}
              {dropdownOptions && (
                <div className="d-flex gap-1 align-items-center">
                  {dropdownOptions?.length > 0 && (
                    <Badge count={dropdownOptions?.length} color="#2b2b2b" />
                  )}
                  <CHDropdown
                    dropdownMenu={dropdownOptions}
                    disabled={dropdownOptions?.length > 0 ? false : true}
                    className="cursor-pointer "
                    trigger={["click"]}
                    rootClassName={styles.integrationDropdown}
                  >
                    <span
                      className={clsx("d-flex", {
                        "clr-gray-light ":
                          dropdownOptions?.length > 0 ? false : true,
                      })}
                    >
                      {Icons.AltArrowDown}
                    </span>
                  </CHDropdown>
                </div>
              )}
            </div>
          }
          subTitle={subTitle}
          imgClassName={clsx({ [styles.horizontalCardIcon]: isHorizontal })}
        />
        {isPremium && !isHorizontal && (
          <CHTag bordered={false} variant="isPremium">
            PREMIUM
          </CHTag>
        )}
      </div>

      <div className="d-flex align-items-center justify-content-between gap-2">
        {isHorizontal ? (
          <Tooltip title="Watch Tutorial">
            <CHButton
              shape="square"
              variant="primary-outlined"
              className={clsx(styles.playTutorial, "flex-shrink-0 clr-primary")}
              width="36px"
              height="36px"
              onClick={handleTutorialClick}
            >
              {Icons.PlayOutline}
            </CHButton>
          </Tooltip>
        ) : (
          <CHButton
            variant="primary-outlined"
            className={clsx(styles.playBtn, "w-100")}
            size="small"
            icon={Icons.PlayOutline}
            onClick={handleTutorialClick}
          >
            Watch Tutorial
          </CHButton>
        )}
        {isConnected ? (
          pathname?.includes("/connect-channel") ? (
            <CHButton
              variant="secondary"
              size="small"
              className={clsx(styles.disconnect, "w-100")}
              icon={Icons.Disconnect}
              onClick={handleDisconnectClick}
            >
              Disconnect
            </CHButton>
          ) : (
            <CHButton
              variant="primary"
              size="small"
              className={clsx(styles.connect, "w-100")}
              icon={Icons.Disconnect}
              onClick={handleConnectClick}
              disabled={disabled}
            >
              {dropdownOptions?.length > 0 ? "Connect Another" : "Connect Now"}
            </CHButton>
          )
        ) : pathname?.includes("/connect-channel") ? (
          <CHButton
            variant="primary"
            size="small"
            className={clsx(styles.connect, "w-100")}
            icon={Icons.Disconnect}
            onClick={handleConnectClick}
            disabled={disabled}
          >
            Connect Now
          </CHButton>
        ) : (
          <CHButton
            variant="secondary"
            size="small"
            className={clsx(styles.disconnect, "w-100")}
            icon={Icons.Disconnect}
            onClick={handleDisconnectClick}
          >
            Disconnect
          </CHButton>
        )}
      </div>
    </div>
  );
};
