import clsx from "clsx";
import styles from "./BBSectionCard.module.css";
import { BBLoader } from "../../BBLoader";

export const BBSectionCard = ({
  title,
  extraHeadContent,
  children,
  className,
  bodyClassName,
  isLoading,
}) => {
  return (
    <>
      <div className={clsx(className, styles.cardWrapper)}>
        {title && (
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="lh-sm clr-dark fw-semibold">{title}</h2>
            {extraHeadContent}
          </div>
        )}
        <div className={clsx(styles.cardBody, bodyClassName)}>
          {isLoading ? (
            <BBLoader className={styles.sectionCardLoader} />
          ) : (
            children
          )}
        </div>
      </div>
    </>
  );
};
