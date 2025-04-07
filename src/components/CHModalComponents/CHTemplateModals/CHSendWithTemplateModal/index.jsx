import { Col, Row, Space } from "antd";
import { CHClsx } from "../../../../utils";
import { iPhoneMockup } from "../../../../assets/images";
import { sendWithTemplateBusinessAccounts } from "../../../../constants";
import { CHButton, CHSelect } from "../../../CHFormComponents";
import { CHModal } from "../../CHModal";
import styles from "../CHTemplateModals.module.css";

export const CHSendWithTemplateModal = ({ open, handleClose, ...rest }) => {
  return (
    <CHModal
      open={open}
      width={800}
      title="Send With Template"
      handleClose={handleClose}
      closable={false}
      closeOnOutsideClick={true}
      {...rest}
    >
      <Row gutter={{ lg: 24 }}>
        <Col
          lg={{ span: 14 }}
          className={CHClsx("d-flex flex-column", styles.createTemplateActions)}
        >
          <h2 className="clr-black mb-4">Send with template</h2>

          <div className={CHClsx(styles.fullHeightScroller, "px-0")}>
            <CHSelect
              options={sendWithTemplateBusinessAccounts}
              label="BUSINESS ACCOUNT"
              placeholder={"Select Business Account"}
              parentClassName="mb-3"
            />
            <CHSelect
              label="CHOOSE TEMPLATE"
              placeholder={"Choose template"}
              mode={"tags"}
              parentClassName="mb-3"
            />
          </div>
          <Space
            size={16}
            classNames={{ item: "w-100" }}
            className="w-100 mt-4"
          >
            <CHButton
              onClick={handleClose}
              variant={"secondary"}
              className="w-100"
            >
              Cancel
            </CHButton>
            <CHButton
              onClick={handleClose}
              variant={"primary"}
              className="w-100"
            >
              Send
            </CHButton>
          </Space>
        </Col>

        <Col lg={{ span: 10 }} className={styles.templateModalScroller}>
          <img
            src={iPhoneMockup}
            alt="Phone Mockup"
            className="object-fit-contain"
          />
        </Col>
      </Row>
    </CHModal>
  );
};
