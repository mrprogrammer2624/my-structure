import clsx from "clsx";
import styles from "./OurAwardCard.module.css";
import Image from "next/image";

export const OurAwardCard = ({ className, title, logo, subContent }) => {
  return (
    <div className={clsx(className)}>
      <div
        className={clsx("d-flex justify-content-center", styles.awardCardLogo)}
      >
        <Image src={logo} alt={title} width="100%" height="100%" />
      </div>
      <div className={clsx(styles.awardCardContent, "d-flex flex-column")}>
        <h5 className="clr-white fw-medium">{title}</h5>
        <p className="clr-shadow fw-normal lh-sm">{subContent}</p>
      </div>
    </div>
  );
};
