import React, { useState } from "react";
import styles from "./CHFreeToUpgradePlanCard.module.css";
import { CHBookDemoModal } from "../../CHModalComponents/CHBookDemoModal";
import { CHSuccessModal } from "../../CHModalComponents/CHSuccessModal";
import { CHButton } from "../../CHFormComponents/CHButton";
import { useFreeToUpgradePlanHook } from "../../../hooks";
import { CHClsx } from "../../../utils";

export const CHFreeToUpgradePlanCard = ({ className }) => {
  const {
    bookDemoModalData,
    successModalData,
    handleUpgradePlanClick,
    handleViewBookDemoModal,
    handleCloseBookDemoModal,
    handleOpenSuccessModal,
    handleCloseSuccessModal,
  } = useFreeToUpgradePlanHook();

  return (
    <>
      <div className={CHClsx(styles.applicationAd, className)}>
        <div>
          <p className={`${styles.demoInfo} h4`}>
            You are currently using a{" "}
            <span className={"clr-pure-black fw-semibold"}>FREE</span> plan.
          </p>
          <p className={`${styles.demoInfo} h4`}>
            Upgrade to{" "}
            <span className="clr-primary-gradient fw-semibold">PRO</span> for
            unlimited features.
          </p>
        </div>
        <div className={styles.demoBtnGroup}>
          <CHButton
            variant="primary-outlined"
            onClick={() => handleViewBookDemoModal()}
          >
            Book a demo{" "}
          </CHButton>
          <CHButton variant="primary" onClick={() => handleUpgradePlanClick()}>
            Upgrade Now
          </CHButton>
        </div>
      </div>

      <CHBookDemoModal
        open={bookDemoModalData}
        handleClose={() => handleCloseBookDemoModal()}
        handleOpenSuccessModal={() => handleOpenSuccessModal()}
      />

      <CHSuccessModal
        open={successModalData}
        handleClose={() => handleCloseSuccessModal()}
      />
    </>
  );
};
