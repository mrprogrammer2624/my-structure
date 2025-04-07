import { Avatar, Col, Row, Space } from "antd";
import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  email,
  instagram,
  line,
  sms,
  telegram,
  viber,
  wechat,
  whatsapp,
  iPhoneMockup,
} from "../../../../assets/images";
import {
  CHButton,
  CHDatePicker,
  CHInput,
  CHModal,
  CHRadioButton,
  CHSelect,
} from "../../..";
import { Icons, templateSelectBusinessAccounts } from "../../../../constants";
import styles from "../CHTemplateModals.module.css";

const channelList = [
  {
    value: "All",
    label: (
      <>
        <div className="d-flex align-items-center gap-2">
          <Avatar size={18}>All</Avatar>
          <span>All</span>
        </div>
      </>
    ),
  },
  {
    value: "WhatsApp",
    label: (
      <>
        <div className="d-flex align-items-center gap-2">
          <Avatar src={whatsapp} size={18} />
          <span>Whatsapp</span>
        </div>
      </>
    ),
  },
  {
    value: "Line",
    label: (
      <>
        <div className="d-flex align-items-center gap-2">
          <Avatar src={line} size={18} />
          <span>Line</span>
        </div>
      </>
    ),
  },
  {
    value: "Telegram",
    label: (
      <>
        <div className="d-flex align-items-center gap-2">
          <Avatar src={telegram} size={18} />
          <span>Telegram</span>
        </div>
      </>
    ),
  },
  {
    value: "Instagram",
    label: (
      <>
        <div className="d-flex align-items-center gap-2">
          <Avatar src={instagram} size={18} />
          <span>Instagram</span>
        </div>
      </>
    ),
  },
  {
    value: "WeChat",
    label: (
      <>
        <div className="d-flex align-items-center gap-2">
          <Avatar src={wechat} size={18} />
          <span>WeChat</span>
        </div>
      </>
    ),
  },
  {
    value: "Viber",
    label: (
      <>
        <div className="d-flex align-items-center gap-2">
          <Avatar src={viber} size={18} />
          <span>Viber</span>
        </div>
      </>
    ),
  },
  {
    value: "Email",
    label: (
      <>
        <div className="d-flex align-items-center gap-2">
          <Avatar src={email} size={18} />
          <span>Email</span>
        </div>
      </>
    ),
  },
  {
    value: "SMS",
    label: (
      <>
        <div className="d-flex align-items-center gap-2">
          <Avatar src={sms} size={18} />
          <span>SMS</span>
        </div>
      </>
    ),
  },
];

const ScheduleMessageOptions = [
  {
    value: "Send Immediately",
    label: "Send Immediately",
  },
  {
    value: "Specific Date and Time",
    label: "Specific Date and Time",
  },
];

export const CHCreateCampaignModal = ({ open, handleClose, ...rest }) => {
  const [showConfirmationMessageBox, setShowConfirmationMessageBox] =
    useState(false);
  const [showDateTimeInput, setShowDateTimeInput] = useState(false);

  return (
    <CHModal
      open={open}
      closeOnOutsideClick={false}
      handleClose={handleClose}
      width={1000}
      {...rest}
    >
      <Row gutter={{ lg: 24 }}>
        <Col
          lg={{ span: 16 }}
          className={clsx("d-flex flex-column", styles.createTemplateActions)}
        >
          <div className={clsx(styles.fullHeightScroller, "px-0")}>
            <CHInput
              label="CAMPAIGN NAME"
              placeholder={"Enter campaign name"}
              parentClassName="w-100 mb-3"
            />
            <CHSelect
              options={templateSelectBusinessAccounts}
              label="BUSINESS ACCOUNT"
              placeholder={"Select Business Account"}
              parentClassName="mb-3"
            />
            <CHSelect
              options={channelList}
              label="SELECT CHANNEL"
              placeholder={"Select channel"}
              parentClassName="mb-3"
            />
            <div className="mb-3">
              <h6 className="fw-normal clr-gray-dark text-uppercase mb-1">
                CONFIRMATION MESSAGE
              </h6>
              <div className="d-flex align-items-center gap-2 mb-1">
                <CHRadioButton
                  id={"hide_show_confirmation"}
                  title={"Yes"}
                  name="show_confirmation"
                  checked={showConfirmationMessageBox === true}
                  onChange={() => setShowConfirmationMessageBox(true)}
                />
                <CHRadioButton
                  id={"show_confirmation"}
                  title={"No"}
                  name="show_confirmation"
                  checked={showConfirmationMessageBox === false}
                  onChange={() => setShowConfirmationMessageBox(false)}
                />
              </div>
              <p className={styles.inputNote}>
                Note: Set “Yes” if this message is for confirming attendance on
                contacts for a campaign
              </p>
            </div>
            <div className="mb-3">
              <CHInput label="EVENT NAME" placeholder={"Enter event name"} />
              <p className={styles.inputNote}>
                Note: This field is used a landing page templates, with email
                notification that needs event details. Leave blank if not needed
              </p>
            </div>
            <div className="mb-3">
              <CHInput
                label="EVENT DETAILS"
                placeholder={"Enter event details"}
              />
              <p className={styles.inputNote}>
                Note: This field is used a landing page templates, with email
                notification that needs event details. Leave blank if not needed
              </p>
            </div>
            <CHSelect
              label="CHOOSE TEMPLATE"
              placeholder={"Choose template"}
              mode={"tags"}
              parentClassName="mb-3"
            />
            <CHSelect
              label="CONTACT LIST"
              placeholder={"Select contact list"}
              parentClassName="mb-3"
              mode={"tags"}
            />
            <CHSelect
              options={ScheduleMessageOptions}
              parentClassName="mb-3"
              label="SCHEDULE MESSAGE"
              placeholder="Schedule Message"
              onChange={(value) =>
                "Specific Date and Time" == value
                  ? setShowDateTimeInput(true)
                  : setShowDateTimeInput(false)
              }
            />
            {showDateTimeInput && (
              <CHDatePicker
                label="DATE & TIME"
                format={"DD/MM/YYYY HH:mm"}
                placeholder={"DD/MM/YYYY"}
                showTime
                parentClassName={"mb-3"}
              />
            )}
            <CHInput
              label="LANDING PAGE"
              placeholder={"www.example.com"}
              parentClassName={"mb-3"}
            />
            <div className="w-100 mb-3">
              <CHInput
                label="ADDITIONAL EMAIL NOTIFICATION RECIPIENTS"
                placeholder={"Enter email address"}
              />
              <p className={styles.inputNote}>
                Note: This field is used for additional email notification
                recipients. Add comma (,) as separator.
              </p>
            </div>
          </div>
          <Row>
            <Col span={24}>
              <Space
                size={16}
                classNames={{ item: "w-100" }}
                className="w-100 mt-4"
              >
                <CHButton variant={"danger"} className="w-100">
                  Delete Draft
                </CHButton>
                <CHButton variant={"secondary"} className="w-100">
                  Save as draft
                </CHButton>
                <CHButton variant={"primary"} className="w-100">
                  Submit for review
                </CHButton>
              </Space>
            </Col>
          </Row>
        </Col>

        <Col lg={{ span: 8 }} className={styles.templateModalScroller}>
          <img
            src={iPhoneMockup}
            alt="WhatsApp"
            className="object-fit-contain"
          />
          <Link className={styles.templateHelpCard}>
            <div className={clsx(styles.cardIcon, "clr-alert")}>
              {Icons.QuestionCircle}
            </div>
            <div className="d-flex justify-content-between w-100">
              <div>
                <h5 className="fw-medium clr-black">Watch Tutorial</h5>
                <p className="clr-gray">Stuck on creating template?</p>
              </div>
              <div className={clsx(styles.cardArrow)}>{Icons.ArrowRight}</div>
            </div>
          </Link>
          <Link className={styles.templateHelpCard}>
            <div className={clsx(styles.cardIcon, "clr-success")}>
              {Icons.PlayCircle}
            </div>
            <div className="d-flex justify-content-between w-100">
              <div>
                <h5 className="fw-medium clr-black">Watch Tutorial</h5>
                <p className="clr-gray">Stuck on creating template?</p>
              </div>
              <div className={clsx(styles.cardArrow)}>{Icons.ArrowRight}</div>
            </div>
          </Link>
        </Col>
      </Row>
    </CHModal>
  );
};
