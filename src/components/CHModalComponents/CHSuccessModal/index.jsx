import { Icons } from "../../../constants";
import { CHModal } from "../CHModal";
import styles from "./CHSuccessModal.module.css";

export const CHSuccessModal = ({ open, handleClose }) => {
  return (
    <CHModal open={open} width="400px" handleClose={handleClose}>
      <span className={styles.successIcon}>{Icons.Badge}</span>
      <h2 className="fw-semibold text-center mb-2 lh-1">Successful</h2>
      <h5 className="text-center clr-gray fw-normal">
        Your request for demo has been successfully sent. Someone from our team
        will be in touch with you shortly.
      </h5>
    </CHModal>
  );
};
