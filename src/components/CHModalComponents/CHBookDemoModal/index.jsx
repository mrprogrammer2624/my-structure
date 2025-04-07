import React from "react";
import { CHModal } from "../CHModal";
import clsx from "clsx";
import {
  CHDatePicker,
  CHInput,
  CHPhoneInput,
  CHTextArea,
} from "../../CHFormComponents";
import { CHButton } from "../../CHFormComponents/CHButton";
import styles from "./CHBookDemoModal.module.css";
import { Icons } from "../../../constants";
import { useBookDemoHook } from "../../../hooks/userProfile/userProfileManagement/bookDemo.hook";

export const CHBookDemoModal = ({
  open,
  handleClose,
  handleBookDemo,
  handleOpenSuccessModal,
  ...rest
}) => {
  const {
    isLoading,
    bookDemoData,
    validateMessages,
    handleInputChange,
    handlePhoneInputChange,
    handleSelectChange,
    handleDateTimeSelectChange,
    handleBookDemoSubmit,
  } = useBookDemoHook({ open, handleClose, handleOpenSuccessModal });
  return (
    <CHModal
      open={open}
      width="800px"
      handleClose={handleClose}
      contentClassName={"p-0 overflow-hidden"}
      {...rest}
    >
      <div className={clsx(styles.demoWrapper, "d-flex")}>
        <div>
          <h2 className="clr-black text-capitalize mb-3 mb-sm-5">
            Why Clients choose us?
          </h2>
          <ul className="list-group gap-2 gap-sm-4 d-flex flex-column">
            <li className="list-group-item d-flex  align-items-center">
              <span className="d-inline me-3 flex-shrink-0">
                {Icons.Target}
              </span>
              <p>We know exactly what our clients need right now </p>
            </li>
            <li className="list-group-item d-flex  align-items-center">
              <span className="d-inline me-3 flex-shrink-0">
                {Icons.Network}
              </span>
              <p>We always work together with our clients</p>
            </li>
            <li className="list-group-item d-flex  align-items-center">
              <span className="d-inline me-3 flex-shrink-0">{Icons.Ideas}</span>
              <p>Our company is not just a product - we really inspire.</p>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.demoFormWrapper, "bg-gray-washed")}>
          <div>
            <h2 className="mb-sm-3 pb-3 clr-black text-capitalize">
              Book a Demo
            </h2>

            <div className="d-flex flex-column gap-3">
              <CHInput
                label="FULL NAME"
                placeholder="Enter full name"
                onChange={(event) => handleInputChange(event)}
                name="name"
                value={bookDemoData?.name}
                errorMessage={validateMessages?.name}
              />
              <CHInput
                parentClassName="flex-1"
                className="flex-1"
                type="email"
                label="EMAIL"
                placeholder="Enter your email"
                name={"email"}
                value={bookDemoData?.email}
                onChange={(event) => handleInputChange(event)}
                errorMessage={validateMessages?.email}
              />

              <CHPhoneInput
                parentClassName="flex-1"
                label="PHONE NUMBER"
                onCountrySelect={(event) =>
                  handleSelectChange(event, "phoneCode")
                }
                value={bookDemoData?.phoneNumber}
                onChange={(event) =>
                  handlePhoneInputChange(event, "phoneNumber")
                }
                errorMessage={validateMessages?.phoneNumber}
                countryName={"phoneCode"}
                selectedCountry={bookDemoData?.phoneCode}
              />
              <CHTextArea
                id="demoMessage"
                labelClassName="text-uppercase clr-gray"
                placeholder="Enter your message here"
                label="Message"
                style={{
                  height: 120,
                  resize: "none",
                  backgroundColor: "white",
                }}
                name={"message"}
                value={bookDemoData?.message}
                onChange={(event) => handleInputChange(event)}
                errorMessage={validateMessages?.message}
              />

              {/* <Link className="link link-primary text-uppercase mb-4">
                Select Date & Time
              </Link> */}
              <CHDatePicker
                label="DATE & TIME"
                format={"DD-MM-YYYY HH:mm"}
                placeholder={"DD/MM/YYYY"}
                showTime
                name="date"
                value={bookDemoData?.date}
                onChange={(event) => handleDateTimeSelectChange(event, "date")}
                errorMessage={validateMessages?.date}
              />

              <CHButton
                variant="primary"
                type="submit"
                onClick={() => handleBookDemoSubmit()}
                disabled={isLoading}
              >
                Book A Demo
              </CHButton>
            </div>
          </div>
        </div>
      </div>
    </CHModal>
  );
};
