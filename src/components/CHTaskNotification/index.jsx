import { Icons } from "../../constants";
import { CHButton } from "../CHFormComponents/CHButton";
import styles from "./CHTaskNotification.module.css";

export const CHTaskNotification = ({
  imgSrc,
  title,
  time,
  onClick,
  requireResponse,
}) => {
  return (
    <div className={styles.notificationWrapper}>
      <img src={imgSrc} alt={title} className={styles.img} />
      <div className={styles.content}>
        <h6 className="clr-black fw-normal">{title}</h6>
        <p className="clr-gray-dark">{time}</p>
      </div>
      {requireResponse && (
        <CHButton
          variant="primary"
          size="small"
          onClick={(e) => onClick(e)}
          icon={Icons.Response}
          className={styles.responseBtn}
        >
          Requires Response
        </CHButton>
      )}
    </div>
  );
};
