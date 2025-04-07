import Image from "next/image";
import clsx from "clsx";
import styles from "./teamCard.module.css";

export const TeamCard = ({ name, position, image }) => {
  return (
    <div className={clsx(styles.card, "position-relative overflow-hidden")}>
      <div className={clsx(styles.imageContainer, "ratio ratio-1x1")}>
        <Image src={image} alt={name} />
      </div>
      <div
        className={clsx(
          styles.teamDetails,
          "clr-white position-absolute bottom-0 start-0"
        )}
      >
        <h6 className="fw-semibold p">{name}</h6>
        <p className="sm fw-normal">{position}</p>
      </div>
    </div>
  );
};
