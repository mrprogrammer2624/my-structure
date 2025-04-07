import React from "react";
import clsx from "clsx";
import styles from "./CHPlanCard.module.css";
import { Divider } from "antd";
import { popularBadge } from "../../../assets/images";
import { Icons } from "../../../constants";

export const CHPlanCard = ({
  id,
  imgSrc,
  title,
  rate,
  period,
  isPopular,
  handleChange,
  isSelect,
  planDetails,
  planContent,
  ...rest
}) => {
  let planDataAry = [];
  if (planDetails?.includes(", ")) {
    planDetails = planDetails?.split(", ");

    planDataAry?.push({
      image: Icons.PlanIntegrations,
      name: (
        <>
          <div>{planDetails[0].split(" ")[0]}</div>
          {planDetails[0]?.split(" ")[1]}
        </>
      ),
    });
    planDataAry?.push({
      image: Icons.PlanUser,
      name: (
        <>
          <div>{planDetails[1].split(" ")[0]}</div>
          {planDetails[1]?.split(" ")[1]}
        </>
      ),
    });
    planDataAry?.push({
      image: Icons.PlanRule,
      name: (
        <>
          <div>{planDetails[2].split(" ")[0]}</div>
          {planDetails[2]?.split(" ")[1]}
        </>
      ),
    });
    planDataAry.push({
      image: Icons.PlanContacts,
      name: (
        <>
          <div>{planDetails[3].split(" ")[0]}</div>
          {planDetails[3]?.split(" ")[1]}
        </>
      ),
    });
  }
  return (
    <div
      className={clsx(styles.cardWrapper, {
        [styles.active]: isSelect === id,
      })}
      onClick={handleChange}
      {...rest}
    >
      {isPopular && (
        <img
          src={popularBadge}
          alt="Popular"
          width={122}
          height={24}
          className={clsx(styles.popularBadge, "object-fit-contain")}
        />
      )}

      <div className={styles.card}>
        <div className="d-flex align-items-center w-100">
          <img src={imgSrc} className={styles.img} />
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.rates}>
            <h2 className={clsx(styles.price)}>{rate}</h2>
            <h6 className={clsx(styles.period)}>
              {rate === "Free" ? "No Cost" : `Per ${period}`}
            </h6>
          </div>
        </div>
        <Divider
          style={{
            margin: "16px 0",
          }}
        />
        <div className={styles.planDetails}>
          {planDataAry &&
            planDataAry?.length > 0 &&
            planDataAry?.map((item) => (
              <React.Fragment>
                <div className={clsx(styles.detail)}>
                  <div className="clr-black">{item?.image}</div>
                  <div className="p-sm clr-black">{item?.name}</div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};
