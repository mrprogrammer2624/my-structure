import {
  course1,
  discord,
  email,
  instagram,
  line,
  marvin,
  messenger,
  sms,
  telegram,
  viber,
  wechat,
  whatsapp,
} from "../../assets/images";
import { Icons } from "../../constants";
import { CHButton, CHDropdown, CHInput, CHTag } from "../CHFormComponents";
import styles from "./CHInboxChat.module.css";
import React, { useEffect, useRef, useState } from "react";
import { Avatar, Badge, Button, Popover } from "antd";
import {
  CHConversationModal,
  CHConversationTypeModal,
  CHForwardMessageModal,
  CHScheduleMessageModal,
} from "../../pages/CHInbox/CHInboxModals";
import { CHMessageCard } from "../CHCardComponents";
import { CHSendWithTemplateModal } from "../CHModalComponents";
import {
  conversationListData,
  forwardMessageData,
  inboxContactList,
} from "../../constants/staticDatas";
import { CHAddMembersToGroupModal } from "../../pages/CHInbox/CHInboxModals/CHAddMembersToGroupModal";
import { CHClsx } from "../../utils";
import { CHChaaatAI } from "../CHChaaatAI";

export const CHInboxChat = ({
  inboxActiveChat,
  activeFilter,
  setInboxActiveChat,
  activateSideProfile,
}) => {
  const [isConversationModalOpen, setIsConversationModalOpen] = useState(false);
  const [isConversationTypeModalOpen, setIsConversationTypeModalOpen] =
    useState(false);
  const [isForwardMessageModalOpen, setIsForwardMessageModalOpen] =
    useState(false);
  const [sendWithTemplateModalOpen, setSendWithTemplateModalOpen] =
    useState(false);
  const [sendMessageDisabled, setSendMessageDisabled] = useState(false);

  const [isScheduleMessageModal, setScheduleMessageModal] = useState(false);
  const [showUploadDocPreview, setShowUploadDocPreview] = useState(false);
  const [addMembersToGroupModal, setAddMembersToGroupModal] = useState(false);
  const chatUserList = useRef();
  const messageWrapper = useRef();

  useEffect(() => {
    let bottomSpace = 28;
    let messageInputHeight = 90;
    let windowHeight = window.innerHeight;
    let maxChatUserheight =
      windowHeight -
      (chatUserList.current.getBoundingClientRect().top + bottomSpace);
    chatUserList.current.style.cssText = `max-height:${maxChatUserheight}px; overflow-y:scroll`;
    let chatMessageListHeight =
      windowHeight -
      (messageWrapper.current.getBoundingClientRect().top +
        bottomSpace +
        messageInputHeight);
    messageWrapper.current.style.cssText = `height:${chatMessageListHeight}px; overflow-y:scroll`;
  }, []);

  const createRuleCardData = [
    {
      icon: Icons.Message,
      title: "Send Message",
      description:
        "Start with a blank slate and customize your own automation rule for unlimited possibilities.",
      onClick: () => setIsConversationTypeModalOpen(false),
    },
    {
      icon: Icons.DocumentFolder,
      title: "Send with Template",
      description:
        "Select one of Chaaat.io's curated templates as a starting point to understand the basics.",
      onClick: () => {
        setIsConversationTypeModalOpen(false);
        setSendWithTemplateModalOpen(true);
      },
    },
  ];
  const online = true;
  let dateTracker = null;
  const messages = [
    {
      type: "audio",
      file: "audio123456789.mp3",
      fileSize: "00:30 (10 MB)",
      time: "03:44pm",
      date: "15/02/2024",
      user: true,
    },
    {
      type: "pdf",
      file: "impfile.pdf",
      fileSize: "32 kb",
      time: "03:44pm",
      date: "15/02/2024",
      user: true,
    },
    {
      type: "pdf",
      file: "impfile.pdf",
      fileSize: "32 kb",
      time: "03:44pm",
      date: "15/02/2024",
    },
    {
      type: "image",
      image: course1,
      time: "03:44pm",
      date: "15/02/2024",
    },
    {
      type: "image",
      image: course1,
      time: "03:44pm",
      date: "15/02/2024",
      user: true,
    },
    {
      type: "text",
      message: "Hello, Good Afternoon",
      time: "03:43pm",
      date: "07/02/2024",
    },
    {
      type: "text",
      message:
        "Hope you’re doing well..! Start with a blank slate and customize your own automation rule for unlimited possibilities.",
      time: "03:44pm",
      date: "07/02/2024",
    },
    {
      type: "text",
      message: "Hello, Good Afternoon \n What’s up mate?",
      time: "03:44pm",
      date: "07/02/2024",
      user: true,
    },
    {
      type: "text",
      message: "Hope you’re doing well..!",
      time: "03:44pm",
      date: "08/02/2024",
    },
    {
      type: "text",
      message: "Hello, Good Afternoon \n What’s up mate?",
      time: "03:44pm",
      date: "08/02/2024",
      user: true,
    },
    {
      type: "text",
      message: "Hello, Good Afternoon",
      time: "03:43pm",
      date: "08/02/2024",
    },
    {
      type: "text",
      message: "Hope you’re doing well..!",
      time: "03:44pm",
      date: "09/02/2024",
    },
    {
      type: "text",
      message: "Hello, Good Afternoon \n What’s up mate?",
      time: "03:44pm",
      date: "09/02/2024",
      user: true,
    },
    {
      type: "text",
      message: "Hope you’re doing well..!",
      time: "03:44pm",
      date: "09/02/2024",
    },
    {
      type: "text",
      message: "Hello, Good Afternoon \n What’s up mate?",
      time: "03:44pm",
      date: "09/02/2024",
      user: true,
    },
  ];

  const filterDropdownMenu = [
    {
      key: "ContactOwner",
      label: "Contact Owner",
      children: [
        {
          key: "Guy Hawkins",
          label: "Guy Hawkins",
        },
        {
          key: "Savannah Nguyen",
          label: "Savannah Nguyen",
        },
        {
          key: "Floyd Miles",
          label: "Floyd Miles",
        },
        {
          key: "Cameron Williamson",
          label: "Cameron Williamson",
        },
        {
          key: "Jerome Bell",
          label: "Jerome Bell",
        },
        {
          key: "Cody Fisher",
          label: "Cody Fisher",
        },
        {
          key: "Kathryn Murphy",
          label: "Kathryn Murphy",
        },
        {
          key: "Annette Black",
          label: "Annette Black",
        },
        {
          key: "Theresa Webb",
          label: "Theresa Webb",
        },
        {
          key: "Devon Lane",
          label: "Devon Lane",
        },
      ],
    },
    {
      key: "Messages",
      label: "Messages ",
      children: [
        {
          key: "Only Show with Responses",
          label: "Only Show with Responses",
        },
        {
          key: "Show All Messages",
          label: "Show All Messages",
        },
      ],
    },
    {
      key: "Automation",
      label: "Automation",
      children: [
        {
          key: "Automation Messages Only",
          label: "Automation Messages Only",
          className: "px-2 text-center",
        },
      ],
    },
    {
      key: "Sort By",
      label: "Sort By",
      children: [
        {
          key: "Newest First",
          label: "Newest First",
        },
        {
          key: "Oldest First",
          label: "Oldest First",
        },
      ],
    },
  ];

  const inboxMessageDropdownMenu = [
    {
      key: "Send Via",
      label: "Send Via",
      icon: Icons.SendMessageOutline,
      children: [
        {
          key: "WhatsApp",
          label: "WhatsApp",
          icon: <img src={whatsapp} width={24} height={24} alt="whatsapp" />,
        },
        {
          key: "Line",
          label: "Line",
          icon: <img src={line} width={24} height={24} alt="line" />,
          disabled: true,
        },
        {
          key: "WeChat",
          label: "WeChat",
          icon: <img src={wechat} width={24} height={24} alt="wechat" />,
          disabled: true,
        },
        {
          key: "Discord",
          label: "Discord",
          icon: <img src={discord} width={24} height={24} alt="discord" />,
          disabled: true,
        },
        {
          key: "Messenger",
          label: "Messenger",
          icon: <img src={messenger} width={24} height={24} alt="messenger" />,
          disabled: true,
        },
        {
          key: "Instagram",
          label: "Instagram",
          icon: <img src={instagram} width={24} height={24} alt="instagram" />,
          disabled: true,
        },
        {
          key: "Telegram",
          label: "Telegram",
          icon: <img src={telegram} width={24} height={24} alt="telegram" />,
          disabled: true,
        },
        {
          key: "Viber",
          label: "Viber",
          icon: <img src={viber} width={24} height={24} alt="viber" />,
          disabled: true,
        },
        {
          key: "SMS",
          label: "SMS",
          icon: <img src={sms} width={24} height={24} alt="sms" />,
        },
        {
          key: "Email",
          label: "Email",
          icon: <img src={email} width={24} height={24} alt="email" />,
        },
      ],
    },
    {
      key: "Add Media",
      label: "Add Media",
      icon: Icons.Media,
      children: [
        {
          key: "Gallery",
          label: "Gallery",
          icon: Icons.GalleryAdd,
        },
        {
          key: "Audio",
          label: "Audio",
          icon: Icons.Audio,
        },
      ],
    },
    {
      key: "Add Files",
      label: "Add Files",
      icon: Icons.Notes,
      children: [
        {
          key: "PDF",
          label: "PDF",
          icon: Icons.PDF,
          onClick: () => setShowUploadDocPreview(true),
        },
        {
          key: "Word Document",
          label: "Word Document",
          icon: Icons.DocumentText,
        },
        {
          key: "Others",
          label: "Others",
          icon: Icons.DocumentText,
        },
      ],
    },
    {
      key: "Schedule Message",
      label: "Schedule Message",
      icon: Icons.InboxScheduleMessage,
      onClick: () => setScheduleMessageModal(true),
    },
  ];

  const profileDropdownOptions = [
    {
      key: "ViewProfile",
      label: "View Profile",
      onClick: () => {
        activateSideProfile("CHInboxUserProfile");
      },
    },
  ];
  const chatGroupOptions = [
    {
      key: "ViewGroupProfile",
      label: "View Group Profile",
      onClick: () => {
        activateSideProfile("CHInboxGroupChatProfile");
      },
    },
    {
      key: "Add members to the group",
      label: "Add members to the group",
      onClick: () => {},
    },
  ];

  let filterChatList = inboxContactList.filter(
    (item) =>
      item.source === activeFilter ||
      (activeFilter == "Direct Message" && item.type === "Direct Message") ||
      (activeFilter == "All Chaaat" && item.type !== "Direct Message")
  );

  return (
    <>
      <section className="flex-fill">
        <section className={styles.ibChatContainer}>
          <div className={styles.ibChatLeftBar}>
            <div className={CHClsx(styles.ibCard, styles.ibChatListSearch)}>
              <CHInput
                rootClassName={"bg-gray-washed"}
                placeholder="Search"
                prefix={Icons.Magnifier}
                size="small"
                suffix={
                  <CHDropdown
                    dropdownMenu={filterDropdownMenu}
                    trigger={["click"]}
                  >
                    <Button
                      type="text"
                      shape="circle"
                      icon={Icons.FineTuning}
                      className="d-inline-flex align-items-center justify-content-center"
                    />
                  </CHDropdown>
                }
              />
            </div>
            <div className={styles.ibChatListActions}>
              <button
                className={styles.ibChatListActionBtn}
                onClick={() => setIsConversationModalOpen(true)}
              >
                <div className="mb-1">{Icons.PenAndPaper}</div>
                <div>Start Conversation</div>
              </button>
              <button className={styles.ibChatListActionBtn}>
                <div className="mb-1">{Icons.InboxIn}</div>
                <div>Archived Chats</div>
              </button>
            </div>
            <div className={styles.ibChatContactList} ref={chatUserList}>
              {filterChatList.map((user, index) => {
                return (
                  <CHUser
                    data={user}
                    key={index}
                    isActive={inboxActiveChat}
                    setActive={() => setInboxActiveChat(user.id)}
                    activateSideProfile={activateSideProfile}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.ibChatRightBar}>
            <div
              className={CHClsx(
                styles.chatProfileHeader,
                "d-flex align-items-center  justify-content-between"
              )}
            >
              <div className="d-flex align-items-center gap-2">
                <Avatar
                  size={48}
                  icon={Icons.AccountSetup}
                  src={inboxContactList[inboxActiveChat - 1].userImage}
                />
                <div className="d-flex flex-column gap-1">
                  <div className="d-flex gap-2 align-items-center">
                    <span className="h5 fw-medium">
                      {inboxContactList[inboxActiveChat - 1].name}
                    </span>
                    {!inboxContactList[inboxActiveChat - 1].isGroup && (
                      <span
                        className={CHClsx(
                          online && styles.online,
                          styles.onlineStatus
                        )}
                      ></span>
                    )}
                    {inboxContactList[inboxActiveChat - 1].type ===
                      "Direct Message" ||
                      (!inboxContactList[inboxActiveChat - 1].isGroup && (
                        <CHTag variant="primary">Customer</CHTag>
                      ))}
                  </div>
                  <span className="clr-gray">Active 3 hours ago</span>
                </div>
              </div>
              {(inboxContactList[inboxActiveChat - 1].type ===
                "Direct Message" ||
                inboxContactList[inboxActiveChat - 1].isGroup) && (
                <CHDropdown
                  dropdownMenu={
                    inboxContactList[inboxActiveChat - 1].isGroup
                      ? chatGroupOptions
                      : profileDropdownOptions
                  }
                  trigger="click"
                  placement="bottomRight"
                >
                  <span className="cursor-pointer">{Icons.OptionMenu}</span>
                </CHDropdown>
              )}
            </div>
            <div
              className={CHClsx(styles.messagesWrapper)}
              ref={messageWrapper}
            >
              {!inboxContactList[inboxActiveChat - 1].isGroup &&
                messages.map((data, index) => {
                  let tag = false;
                  if (data.date !== dateTracker) {
                    tag = true;
                    dateTracker = data.date;
                  }
                  return (
                    <React.Fragment key={index}>
                      {tag && (
                        <CHTag
                          className={CHClsx(styles.tag, "mx-auto d-block")}
                        >
                          {data.date}
                        </CHTag>
                      )}
                      <div
                        className={CHClsx(
                          styles.messageContent,
                          data.user && styles.user
                        )}
                      >
                        <div className="d-flex align-items-center gap-2">
                          <div className="d-flex flex-column gap-2">
                            {data.type === "text" ? (
                              <span className={CHClsx(styles.message)}>
                                {data.message}
                              </span>
                            ) : data.type === "image" ? (
                              <img
                                src={data.image}
                                className={styles.messageImg}
                              />
                            ) : data.type === "pdf" ? (
                              <CHMessageCard
                                className={CHClsx(
                                  styles.message,
                                  styles.messageDoc
                                )}
                                title={data.file}
                                description={`PDF(${data.fileSize})`}
                                icon={Icons.PDF}
                              />
                            ) : (
                              data.type === "audio" && (
                                <CHMessageCard
                                  className={CHClsx(
                                    styles.message,
                                    styles.messageDoc
                                  )}
                                  title={data.file}
                                  description={data.fileSize}
                                  icon={Icons.Audio}
                                />
                              )
                            )}

                            <span className="align-self-end clr-gray  p-sm">
                              {data.time}
                            </span>
                          </div>

                          <CHButton
                            variant="secondary"
                            className={styles.forward}
                            onClick={() => setIsForwardMessageModalOpen(true)}
                          >
                            {Icons.ForwardMessage}
                          </CHButton>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              {inboxContactList[inboxActiveChat - 1].isGroup && (
                <div className="h-100 d-flex flex-column align-items-center">
                  <CHTag className={CHClsx(styles.tag, "mx-auto d-block")}>
                    Today
                  </CHTag>
                  <span className="clr-gray-dark">
                    You have successfully created “Marketing Team” group. Start
                    messaging.
                  </span>
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    <Button
                      variant="secondary"
                      className="d-flex flex-column align-items-center bg-transparent h-auto border-0"
                      onClick={() => setAddMembersToGroupModal(true)}
                    >
                      <span className="clr-primary">{Icons.AddCircle}</span>
                      <span className="clr-primary text-uppercase">
                        add members to group
                      </span>
                    </Button>
                  </div>
                </div>
              )}
            </div>
            {sendMessageDisabled ? (
              <div className="text-center p-2 bg-gray-line">
                <h4 className="clr-black fw-normal mb-2">
                  Sending message is disabled. No response from contact for more
                  than 24 hours
                </h4>
                <CHButton
                  onClick={() => setSendWithTemplateModalOpen(true)}
                  size="medium"
                >
                  Re-Open chat with templates
                </CHButton>
              </div>
            ) : (
              <div className="d-flex p-3 align-items-end gap-2">
                <div
                  className={CHClsx(
                    styles.inputWrapper,
                    "d-flex w-100 bg-gray-washed flex-fill p-2 align-items-end"
                  )}
                >
                  <div className="flex-1">
                    <CHInput
                      type="text"
                      placeholder="Type your message here..."
                      className="flex-fill border-0 bg-transparent"
                      parentClassName={CHClsx(styles.messageInput, "flex-fill")}
                    />
                    {showUploadDocPreview && (
                      <div className="d-flex gap-2">
                        <CHMessageCard
                          className={CHClsx(
                            styles.messageDoc,
                            styles.messagePreview,
                            "bg-white"
                          )}
                          iconClassName="bg-gray-washed"
                          title={"doc1.pdf"}
                          description={`PDF (32kb)`}
                          icon={Icons.PDF}
                          modePreview
                        />
                      </div>
                    )}
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <CHChaaatAI>
                      <CHButton variant="primary-outlined" size="small">
                        {Icons.Robot}
                        Chaaat AI
                        {Icons.DropdownArrow}
                      </CHButton>
                    </CHChaaatAI>

                    <CHDropdown
                      dropdownMenu={inboxMessageDropdownMenu}
                      trigger={["click"]}
                    >
                      <CHButton
                        variant="secondary"
                        size="small"
                        className={CHClsx(styles.dropdownBtn, "bg-white")}
                      >
                        {Icons.DropdownArrow}
                      </CHButton>
                    </CHDropdown>
                  </div>
                </div>
                <CHButton className={styles.sendBtn} size="small">
                  {Icons.SendFilled}
                </CHButton>
              </div>
            )}
          </div>
        </section>
      </section>
      <CHConversationModal
        open={isConversationModalOpen}
        handleClose={() => {
          setIsConversationModalOpen(false);
        }}
        conversationData={conversationListData}
        conversationBtnHandler={() => {
          setIsConversationModalOpen(false);
          setIsConversationTypeModalOpen(true);
        }}
      />
      <CHConversationTypeModal
        open={isConversationTypeModalOpen}
        handleClose={() => setIsConversationTypeModalOpen(false)}
        createRuleCardData={createRuleCardData}
      />
      <CHForwardMessageModal
        open={isForwardMessageModalOpen}
        handleClose={() => setIsForwardMessageModalOpen(false)}
        forwardMessageData={forwardMessageData}
      />
      <CHSendWithTemplateModal
        open={sendWithTemplateModalOpen}
        handleClose={() => setSendWithTemplateModalOpen(false)}
      />
      <CHScheduleMessageModal
        open={isScheduleMessageModal}
        handleClose={() => setScheduleMessageModal(false)}
      />
      <CHAddMembersToGroupModal
        open={addMembersToGroupModal}
        handleClose={() => setAddMembersToGroupModal(false)}
      />
    </>
  );
};

const CHUser = ({
  data: {
    id,
    name,
    lastMessage,
    lastChatTimestamp,
    isOnline,
    userImage,
    source,
    unreadCount,
    isGroup,
    type,
  },
  activateSideProfile,
  isActive,
  setActive,
}) => {
  const iconSources = {
    WhatsApp: whatsapp,
    SMS: sms,
    Discord: discord,
    Instagram: instagram,
    Mail: email,
    Viber: viber,
    WeChat: wechat,
    Line: line,
    Messenger: messenger,
    Telegram: telegram,
  };

  const userDropdownOption = [
    { key: "Archive Chat", label: "Archive Chat" },
    { key: "Mark as Unread", label: "Mark as Unread" },
    {
      key: "Delete Conversation",
      label: <span className="clr-danger">Delete Conversation</span>,
    },
  ];

  return (
    <button
      title={name}
      aria-label={`Contact Item - ${name}`}
      className={clsx(styles.ibCard, styles.ibContactListItem, {
        [styles.isOnline]: isOnline,
        [styles.isActive]: isActive === id,
      })}
      onClick={() => setActive(id)}
    >
      <div className="me-xxl-3 me-2 flex-shrink-0 d-flex align-items-center position-relative">
        <img
          src={userImage}
          alt={name}
          width={48}
          height={48}
          className={`object-fit-cover rounded-circle ${styles.userImage}`}
        />

          if (type) {
            console.log("type");
            activateSideProfile("CHInboxMyGroup");
          } else {
            console.log("no type");
            activateSideProfile("CHInboxProfileBar");
          }
        }}
      >
        <div className="me-3 flex-shrink-0 position-relative">
          <img
            src={userImage}
            alt={name}
            width={48}
            height={48}
            className="object-fit-cover rounded-circle"
          />

          {source && (
            <div className={styles.ibContactListSource}>
              <img
                src={iconSources[source]}
                alt={source}
                width={16}
                height={16}
                className="object-fit-contain"
              />
            </div>
          )}
        </div>

        <div className={styles.ibContactListMid}>
          <div className={styles.ibContactListMidTop}>
            <h5
              className={CHClsx(
                styles.ibContactListName,
                styles.ibClampOneLine
              )}
            >
              {name}
            </h5>
            {!isGroup && (
              <div
                className={CHClsx(styles.onlineStatus, {
                  [styles.online]: isOnline,
                })}
              />
            )}
          </div>

          {lastMessage && (
            <p
              className={CHClsx(
                styles.ibContactListLastMsg,
                styles.ibClampOneLine,
                "p-sm mb-0 clr-gray"
              )}
              title={lastMessage}
            >
              {lastMessage}
            </p>
          )}
        </div>
        <div className={styles.ibContactItemEnd}>
          <div
            className={CHClsx("p-sm mb-2", {
              "clr-primary": unreadCount > 0,
              "clr-gray-dark": unreadCount === 0,
            })}
          >
            {lastChatTimestamp}
          </div>
          <div className="d-flex align-items-center justify-content-end gap-2">
            {unreadCount > 0 && (
              <Badge
                color={"var(--clr-primary)"}
                classNames={{
                  indicator: "p-sm",
                }}
                count={unreadCount}
              />
            )}
            <CHDropdown trigger="click" dropdownMenu={userDropdownOption}>
              {Icons.AltArrowDown}
            </CHDropdown>
          </div>
        </div>
      </button>
    </>
  );
};
