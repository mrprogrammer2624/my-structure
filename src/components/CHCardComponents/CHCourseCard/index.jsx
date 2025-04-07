import { Link } from "react-router-dom";
import styles from "./CHCourseCard.module.css";
import { useState } from "react";
import clsx from "clsx";
import { CHVideoModal } from "../../CHModalComponents";
import { Icons } from "../../../constants";

export const CHCourseCard = ({ cardData, courseUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className={styles.cardWrapper}>
        <div
          className={clsx(styles.videoThumbnailWrapper, "ratio", "ratio-16x9")}
        >
          <div
            className={styles.imageOverlay}
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            {Icons.VideoPlay}
          </div>
          <img
            className="object-fit-cover"
            src={cardData.videoThumbnail}
            width={240}
            height={160}
            alt={cardData.title}
          />
        </div>
        <div>
          <h4 className={styles.title}>{cardData.title}</h4>
          <p className={styles.description}>
            {cardData.description.length > 115 ? (
              <>
                {cardData.description.slice(0, 115)}...{" "}
                <Link
                  to={courseUrl}
                  className="link link-primary text-uppercase d-inline-block"
                >
                  Read More
                </Link>
              </>
            ) : (
              <>{cardData.description}</>
            )}
          </p>

          <span className="clr-gray-dark">{cardData.time}</span>
        </div>
      </div>
      <CHVideoModal
        open={isModalOpen}
        width={1000}
        handleClose={() => setIsModalOpen(false)}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    </>
  );
};
