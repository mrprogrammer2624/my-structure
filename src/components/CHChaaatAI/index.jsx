import { Input, Popover } from "antd";
import React from "react";
import { CHButton } from "../CHFormComponents";
import { Icons } from "../../constants";
import styles from "./CHChaaatAI.module.css";
import { CHClsx } from "../../utils";

export const CHChaaatAI = ({ children }) => {
  return (
    <>
      <Popover
        placement="topRight"
        overlayClassName={styles.chaaatAIPopover}
        trigger="click"
        arrow={false}
        content={
          <>
            <div className="d-flex flex-wrap mb-2 gap-2">
              <div
                className={CHClsx(
                  "d-flex align-items-center gap-2 bg-gray-line clr-black",
                  styles.suggested
                )}
              >
                {Icons.MagicStick}
                <span>Suggested prompt 1 will be shown here</span>
              </div>
              <div
                className={CHClsx(
                  "d-flex align-items-center gap-2 bg-gray-line clr-black",
                  styles.suggested
                )}
              >
                {Icons.MagicStick}
                <span>Suggested prompt 2 will be shown here</span>
              </div>
            </div>
            <div
              className={CHClsx(
                styles.chaaatAIInput,
                "d-flex align-items-center gap-3"
              )}
            >
              <Input
                type="text"
                placeholder="Type your prompt here..."
                className="flex-fill p-0 border-0 bg-transparent rounded-0"
              />
              <CHButton
                className={styles.generateBtn}
                icon={Icons.Robot}
                size="medium"
              >
                Generate
              </CHButton>
            </div>
          </>
        }
      >
        {children}
      </Popover>
    </>
  );
};
