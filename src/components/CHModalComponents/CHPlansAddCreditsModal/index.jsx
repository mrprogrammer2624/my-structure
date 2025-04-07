import { useState } from "react";
import {
  CHButton,
  CHDatePicker,
  CHNumberInput,
  CHPasswordInput,
  CHSlider,
} from "../../CHFormComponents";
import { CHModal } from "../CHModal";
import styles from "./CHPlansAddCreditsModal.module.css";

export const CHPlansAddCreditModal = ({ open, handleClose }) => {
  const [creditAmount, setCreditAmount] = useState(5000);

  return (
    <CHModal
      open={open}
      handleClose={handleClose}
      title="Add Credits"
      closeOnOutsideClick={false}
    >
      <h5 className="clr-gray fw-normal mt-2">
        Provide your card details to complete the purchase
      </h5>
      <CHNumberInput
        placeholder={"Prefixed Input"}
        label="ENTER AMOUNT TO BE ADDED"
        type="number"
        prefix="$"
        onChange={(value) => {
          if (value > 10000) {
            return;
          } else {
            setCreditAmount(value);
          }
        }}
        max={10000}
        value={creditAmount}
        parentClassName="mt-4"
      />
      <CHSlider
        min={0}
        max={10000}
        value={creditAmount}
        onChange={(value) => setCreditAmount(value)}
      />

      <div className={styles.tableWrapper}>
        <table>
          <tr>
            <td>Selected amount</td>
            <td>$ 10000</td>
          </tr>
          <tr>
            <td>tax 5%</td>
            <td>$ 5</td>
          </tr>
          <tr>
            <td>total to be paid</td>
            <td>$ 105</td>
          </tr>
        </table>
      </div>

      <h4 className="mt-4">Card Details</h4>
      <CHNumberInput
        id="userCardNumber"
        label="CARD NUMBER"
        labelClassName="mt-4"
        placeholder="Enter your card number"
        parentClassName="mt-2"
      />
      <div className="d-flex gap-3 mt-3">
        <CHDatePicker
          id="userCardExpiry"
          label="EXPIRY DATE"
          format={"MM/YY"}
          picker="month"
          placeholder="MM/YY"
          suffix={false}
          parentClassName="w-100"
        />
        <CHPasswordInput
          id="cvv"
          label="SECURITY CODE"
          maxLength={3}
          placeholder="CVV"
          parentClassName="w-100"
        />
      </div>
      <div className="d-flex gap-3 mt-4 pt-3">
        <CHButton className="w-100" variant="secondary" onClick={handleClose}>
          Cancel
        </CHButton>
        <CHButton className="w-100" variant="primary">
          Confirm
        </CHButton>
      </div>
    </CHModal>
  );
};
