import { Icons } from "../../../constants";
import { CHAvatar, CHButton, CHTag } from "../../CHFormComponents";
import styles from "./CHConnectChannelCard.module.css";

export const CHConnectChannelCard = ({
  isPremium,
  isConnected,
  title,
  subTitle,
  imgSrc,
  handleTutorialClick,
  handleConnectClick,
  handleDisconnectClick,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className="d-flex justify-content-between align-items-center">
        <CHAvatar imgSrc={imgSrc} title={title} subTitle={subTitle} />
        {isPremium && (
          <CHTag bordered={false} variant="isPremium">
            PREMIUM
          </CHTag>
        )}
      </div>

      <div className="d-flex justify-content-between gap-2">
        <CHButton
          variant="primary-outlined"
          className="w-100"
          size="small"
          icon={Icons.playBtn}
          onClick={handleTutorialClick}
        >
          Watch Tutorial
        </CHButton>
        {isConnected ? (
          <CHButton
            variant="secondary"
            size="small"
            className="w-100"
            icon={Icons.Disconnect}
            onClick={handleDisconnectClick}
          >
            Disconnect
          </CHButton>
        ) : (
          <CHButton
            variant="primary"
            size="small"
            className="w-100"
            icon={Icons.Disconnect}
            onClick={handleConnectClick}
          >
            Connect Now
          </CHButton>
        )}
      </div>
    </div>
  );
};
