import clsx from "clsx";
import { BBButton } from "../BBButton";
import styles from "./BBAuthentication.module.css";
import { Link } from "react-router-dom";
import { BBSwitch } from "../BBFormComponents";

export const BBAuthentication = ({
  children,
  buttonContent,
  title,
  link,
  term,
  linkTitle,
  checked,
  value,
  handleClick,
  hrefLink,
  forgot,
}) => {
  return (
    <>
      <h3 className="fw-semibold lh-base font-tertiary">{title}</h3>
      <div className={clsx(styles.inputsWrapper, "d-flex flex-column gap-3")}>
        {children}
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <BBSwitch checked={checked} value={value} label={term} />
        {forgot}
      </div>
      <BBButton
        className={clsx(styles.authenticationButton, "font-secondary")}
        block
        variant="primary"
        onClick={handleClick}
      >
        {buttonContent}
      </BBButton>
      <p
        className={clsx(
          styles.wrapperLastLink,
          "p-sm fw-normal d-flex align-items-center justify-content-center"
        )}
      >
        {linkTitle}
        <Link to={hrefLink}>{link}</Link>
      </p>
    </>
  );
};
