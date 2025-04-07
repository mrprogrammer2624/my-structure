import clsx from "clsx";
import styles from "./CHRadioButton.module.css";

export const CHRadioButton = ({
  id,
  name,
  imgSrc,
  title,
  className,
  ...rest
}) => {
  return (
    <div className={clsx(styles.labelBtn, className)}>
      <input type="radio" id={id} name={name} {...rest} />
      <label htmlFor={id}>
        {imgSrc && <img src={imgSrc} width={24} height={24} />}
        <p>{title}</p>
      </label>
    </div>
  );
};
