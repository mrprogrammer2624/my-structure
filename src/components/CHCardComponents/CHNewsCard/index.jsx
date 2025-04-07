import { Link } from "react-router-dom";
import styles from "./CHNewsCard.module.css";

export const CHNewsCard = ({ cardData }) => {
  return (
    <div className={styles.newsCard}>
      <div className={styles.imgWrapper}>
        <img
          src={cardData.imgSrc}
          width="80"
          height="80"
          alt={cardData.title}
          className={styles.img}
        />
      </div>

      <div className={styles.newsDataWrapper}>
        <div className={styles.newsData}>
          <h5 className="fw-medium mb-2">{cardData.title}</h5>
          <p className={styles.description}>
            {cardData.description.length > 115 ? (
              <>
                {cardData.description.slice(0, 140)}...{" "}
                <Link
                  to="#"
                  className="link link-primary text-uppercase d-inline-block"
                >
                  Read More
                </Link>
              </>
            ) : (
              <>{cardData.description}</>
            )}
          </p>
        </div>
        <p className={styles.time}>{cardData.time}</p>
      </div>
    </div>
  );
};
