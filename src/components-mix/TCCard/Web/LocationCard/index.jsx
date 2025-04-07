import { Icons } from "@/constants/";
import Link from "next/link";
import clsx from "clsx";
import styles from "./LocationCard.module.css";

export const LocationCard = ({ name, address, link }) => {
  return (
    <div className={clsx(styles.Card, "bg-white")}>
      <div className={clsx(styles.LeftCard, "d-flex")}>
        <span className="d-flex">{Icons?.LocationSecondary}</span>
        <div className={clsx(styles.LeftCardContent, "d-flex flex-column")}>
          <h6 className="p lh-1">{name}</h6>
          <p className="sm">{address}</p>
          <Link
            href={link} 
            className={clsx(
              styles.MapView,
              "d-flex fw-medium lh-base clr-golden text-uppercase align-items-center justify-content-start"
            )}
          >
            View on Map {Icons?.RightArrowFullLg}
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};
