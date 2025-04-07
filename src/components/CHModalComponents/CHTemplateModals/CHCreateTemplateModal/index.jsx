import { Button, Col, Row, Space } from "antd";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { iPhoneMockup } from "../../../../assets/images";
import {
  CHButton,
  CHEditor,
  CHInput,
  CHModal,
  CHSelect,
  CHUploader,
  CHRadioButton,
} from "../../..";
import {
  Icons,
  createTemplateActionsList,
  createTemplateChannelList,
  createTemplateURLTypesList,
  createTemplateLanguagesList,
  createTemplateCategoriesList,
} from "../../../../constants";
import { useCreateTemplate } from "../../../../hooks/create/createTemplate.hook";
import styles from "../CHTemplateModals.module.css";

export const CHCreateTemplateModal = ({ open, handleClose, ...rest }) => {
  const {
    templateData,
    handleVariableAdd,
    handleInputChange,
    handleOptionChange,
    handleEditorChange,
    handleReplyInputAdd,
    handleVariableRemove,
    handleReplyInputChange,
    handleReplyInputRemove,
    handleHeaderImageChange,
    handleHeaderImageRemove,
    handleHeaderRadioChange,
  } = useCreateTemplate();

  return (
    <CHModal
      open={open}
      width={1000}
      handleClose={handleClose}
      closeOnOutsideClick={false}
      {...rest}
    >
      <Row gutter={[24, 24]}>
        <Col
          lg={{ span: 16 }}
          className={clsx("d-flex flex-column", styles.createTemplateActions)}
        >
          <div className={styles.fullHeightScroller}>
            <Row gutter={[16, 16]}>
              <Col span={24} sm={{ span: 24 }}>
                <CHInput
                  label="TEMPLATE NAME"
                  name="templateName"
                  onChange={handleInputChange}
                  value={templateData.templateName}
                  placeholder={"Enter template name"}
                />
              </Col>
              <Col span={24} sm={{ span: 12 }}>
                <CHSelect
                  options={createTemplateChannelList}
                  label="SELECT CHANNEL"
                  name="channel"
                  placeholder={"Select channel"}
                  onSelect={(value) =>
                    handleOptionChange(
                      value,
                      "channel",
                      createTemplateChannelList
                    )
                  }
                />
              </Col>
              <Col span={24} sm={{ span: 12 }}>
                <CHSelect
                  options={createTemplateChannelList}
                  label="SELECT BUSINESS ACCOUNT"
                  name="channel"
                  placeholder={"Select business account"}
                  onSelect={(value) =>
                    handleOptionChange(
                      value,
                      "channel",
                      createTemplateChannelList
                    )
                  }
                />
              </Col>
              <Col span={24} sm={{ span: 12 }}>
                <CHSelect
                  label="CATEGORY"
                  options={createTemplateCategoriesList}
                  placeholder={"Select category"}
                  onSelect={(value) =>
                    handleOptionChange(
                      value,
                      "category",
                      createTemplateCategoriesList
                    )
                  }
                />
              </Col>
              <Col span={24} sm={{ span: 12 }}>
                <CHSelect
                  label="LANGUAGE"
                  placeholder={"Select language"}
                  options={createTemplateLanguagesList}
                  onSelect={(value) =>
                    handleOptionChange(
                      value,
                      "language",
                      createTemplateLanguagesList
                    )
                  }
                />
              </Col>
              <Col span={24} sm={{ span: 24 }}>
                <h6 className="fw-normal clr-gray-dark text-uppercase mb-1">
                  HEADER
                </h6>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <CHRadioButton
                    id={"hide_show_header"}
                    title={"None"}
                    name="show_header"
                    value="false"
                    checked={!templateData.includeHeader}
                    onChange={(e) =>
                      handleHeaderRadioChange(e, "includeHeader")
                    }
                  />
                  <CHRadioButton
                    id={"show_header"}
                    title={"Header"}
                    name="show_header"
                    value="true"
                    checked={templateData.includeHeader}
                    onChange={(e) =>
                      handleHeaderRadioChange(e, "includeHeader")
                    }
                  />
                </div>
                {templateData.includeHeader && (
                  <CHUploader
                    icon={Icons.GalleryAdd}
                    title={"Upload from gallery"}
                    previewSrc={templateData.headerImage}
                    onChange={handleHeaderImageChange}
                    onRemoveClick={handleHeaderImageRemove}
                  />
                )}
              </Col>
              <Col span={24} sm={{ span: 24 }}>
                <h6 className="fw-normal clr-gray-dark text-uppercase mb-1">
                  Body
                </h6>
                <CHEditor
                  className={styles.templateRichTextEditor}
                  emoji
                  link
                  bold
                  italic
                  underline
                  strike
                  wordLimit={1024}
                  onChange={handleEditorChange}
                />

                <div className="mt-2 d-flex flex-column align-items-start gap-2">
                  {templateData.variables.map((v) => {
                    return (
                      <div className="d-flex align-items-center gap-2">
                        <CHSelect
                          size="small"
                          parentClassName={styles.variableTypeSelect}
                          options={[
                            {
                              value: "contact",
                              label: "Contact",
                            },
                            {
                              value: "agent",
                              label: "Agent",
                            },
                          ]}
                        />
                        <CHInput
                          rootClassName={styles.variableValueInput}
                          placeholder={`Enter Variable ${v.identifier}`}
                          size="small"
                        />
                        <Button
                          icon={Icons.CloseCircle}
                          shape="circle"
                          onClick={() => handleVariableRemove(v.id)}
                        />
                      </div>
                    );
                  })}

                  <CHButton
                    variant="secondary-outlined"
                    size="small"
                    onClick={handleVariableAdd}
                  >
                    {Icons.AddCircle} Add Variable
                  </CHButton>
                </div>
              </Col>
              <Col span={24} sm={{ span: 24 }}>
                <h6 className="fw-normal clr-gray-dark text-uppercase mb-1">
                  BUTTON
                </h6>

                <div className="d-flex align-items-center gap-2 mb-3">
                  <CHRadioButton
                    id={"dont_show_btn"}
                    title={"None"}
                    checked={templateData.buttonType === "none"}
                    value="none"
                    onChange={(e) => handleHeaderRadioChange(e, "buttonType")}
                  />
                  <CHRadioButton
                    id={"call_to_action_btn"}
                    title={"Call to action"}
                    checked={templateData.buttonType === "cta"}
                    value="cta"
                    onChange={(e) => handleHeaderRadioChange(e, "buttonType")}
                  />
                  <CHRadioButton
                    id={"quick_reply_btn"}
                    title={"Quick reply"}
                    checked={templateData.buttonType === "quick_reply"}
                    value="quick_reply"
                    onChange={(e) => handleHeaderRadioChange(e, "buttonType")}
                  />
                </div>

                {templateData.buttonType === "cta" && (
                  <Row gutter={[16, 16]}>
                    <Col span={24} sm={{ span: 12 }}>
                      <CHSelect
                        label="TYPE OF ACTION"
                        options={createTemplateActionsList}
                        onSelect={(value) =>
                          handleOptionChange(
                            value,
                            "actionType",
                            createTemplateActionsList
                          )
                        }
                        placeholder={"Select action"}
                      />
                    </Col>
                    <Col span={24} sm={{ span: 12 }}>
                      <CHInput
                        label="BUTTON TEXT"
                        name="buttonText"
                        value={templateData.buttonText}
                        onChange={handleInputChange}
                        placeholder={"Enter button text"}
                      />
                    </Col>
                    <Col span={24} sm={{ span: 12 }}>
                      <CHSelect
                        label="URL TYPE"
                        options={createTemplateURLTypesList}
                        onSelect={(value) =>
                          handleOptionChange(
                            value,
                            "URLType",
                            createTemplateURLTypesList
                          )
                        }
                        placeholder={"Select category"}
                      />
                    </Col>
                    <Col span={24} sm={{ span: 12 }}>
                      <CHInput
                        label="WEBSITE URL"
                        name="websiteURL"
                        value={templateData.websiteURL}
                        onChange={handleInputChange}
                        placeholder={"Enter your website url here"}
                      />
                    </Col>
                  </Row>
                )}
                {templateData.buttonType === "quick_reply" && (
                  <div className="d-flex align-items-start flex-column gap-2">
                    {templateData.replyButtonsList.map((btn, idx) => {
                      return (
                        <div className="d-flex align-items-center gap-2">
                          <CHInput
                            id={btn.id}
                            name="buttonText"
                            value={btn.text}
                            size="small"
                            onChange={(e) => handleReplyInputChange(e, btn.id)}
                            placeholder={"Enter button text"}
                          />
                          {templateData.replyButtonsList.length > 1 && (
                            <Button
                              icon={Icons.CloseCircle}
                              shape="circle"
                              onClick={() => handleReplyInputRemove(btn.id)}
                            />
                          )}
                        </div>
                      );
                    })}
                    {templateData.replyButtonsList.length < 5 && (
                      <CHButton
                        variant="secondary-outlined"
                        size="small"
                        onClick={handleReplyInputAdd}
                      >
                        {Icons.AddCircle} Add Button
                      </CHButton>
                    )}
                  </div>
                )}
              </Col>
            </Row>
          </div>
          <Row>
            <Col span={24} sm={{ span: 24 }}>
              <Space
                size={16}
                classNames={{ item: "w-100" }}
                className="w-100 mt-4"
              >
                <CHButton variant={"secondary"} className="w-100">
                  Save as draft
                </CHButton>
                <CHButton variant={"primary"} className="w-100">
                  Submit
                </CHButton>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col lg={{ span: 8 }} className={styles.templateModalScroller}>
          <div className={styles.previewContainer}>
            <img
              src={iPhoneMockup}
              alt="WhatsApp"
              className="object-fit-contain"
              width={294}
            />
            <div className={styles.WAPreviewContainer}>
              <>
                {templateData.bodyContent !== null ||
                templateData.buttonText.trim() !== "" ||
                templateData.includeHeader ? (
                  <div className={styles.WAPreviewItemWrap}>
                    <div className={styles.WAPreviewItem}>
                      {templateData.includeHeader && (
                        <div className={styles.WAPreviewHeader}>
                          {templateData.headerImage ? (
                            <img
                              src={templateData.headerImage}
                              className="object-fit-cover"
                              alt="header preview"
                            />
                          ) : (
                            <div
                              className={clsx(
                                styles.HeaderPreviewPlaceholder,
                                "bg-gray-line d-flex align-items-center justify-content-center"
                              )}
                            >
                              <div className="clr-gray">{Icons.Gallary}</div>
                            </div>
                          )}
                        </div>
                      )}
                      <div className={styles.WAPreviewContent}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: templateData.bodyContent,
                          }}
                        />
                        <small className={styles.WAPreviewTime}>12:00</small>
                      </div>
                    </div>
                    {templateData.buttonType === "cta" && (
                      <div className={styles.WAPreviewFooter}>
                        {templateData.buttonText && (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 512 512"
                              fill="currentcolor"
                            >
                              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
                            </svg>
                            {templateData.buttonText}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ) : null}
                {templateData.buttonType === "quick_reply" && (
                  <div className={styles.quickReply}>
                    {templateData.replyButtonsList.map((btn) => {
                      if (btn.text) {
                        return (
                          <button className={styles.quickReplyBtn}>
                            {btn.text}
                          </button>
                        );
                      }
                    })}
                  </div>
                )}
              </>
            </div>
          </div>

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
