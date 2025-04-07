import { Icons } from "../../constants/Icons.jsx";
import styles from "./CHResponsiveWarning.module.css";

export const CHResponsiveWarning = () => {
  return (
    <div className={styles.warning}>
      <div className="d-flex align-items-center mb-3">
        <div className={styles.icon}>{Icons.PhoneDuotone}</div>
        <div className="mx-2 d-flex">{Icons.ArrowRight}</div>
        <div className="d-flex align-items-center gap-2">
          <div className={styles.icon}>{Icons.LaptopDuotone}</div>
          <div className={styles.icon}>{Icons.MonitorDuotone}</div>
        </div>
      </div>
      <p className="clr-black fw-medium h5">
        For an optimal experience, please use a device with a larger screen size
        or switch to a laptop/desktop computer.
      </p>
    </div>
  );
};
