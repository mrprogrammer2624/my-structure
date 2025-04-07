import {
  CHAccordion,
  CHInput,
  CHModal,
  CHSelect,
  CHSwitchCard,
  CHButton,
  CHCheckbox,
} from "../../../components";
import styles from "./CHInviteMemberModal.module.css";

export const CHInviteMemberModal = ({
  loading,
  open,
  handleCloseModal,
  invitationMemberViewData,
  validateMessages,
  userRoleList,
  userPermissionList,
  channelList,
  crmList,
  handleInputChange,
  handleSelectChange,
  handlePermissionChange,
  handleCheckboxChange,
  handleInviteMemberSubmit,
}) => {
  return (
    <CHModal
      open={open}
      handleClose={() => handleCloseModal()}
      title="Invite Member"
      width={600}
    >
      <div className={styles.inviteMemberModal}>
        <div className={styles.inviteMemberModalScroller}>
          <CHInput
            type="email"
            placeholder="Enter email address"
            label="EMAIL"
            name="email"
            value={invitationMemberViewData?.email}
            errorMessage={validateMessages?.email}
            onChange={handleInputChange}
          />
          <CHSelect
            key={"ROLE"}
            label="ROLE"
            placeholder="Select user role"
            options={userRoleList}
            name="userRole"
            value={
              invitationMemberViewData?.userRole
                ? userRoleList?.find(
                    (item) => item?.value === invitationMemberViewData?.userRole
                  )
                : undefined
            }
            onChange={(event) => handleSelectChange(event, "userRole")}
            errorMessage={validateMessages?.userRole}
          />
          {userPermissionList && (
            <label className="p clr-bg-gray-light">PERMISSIONS</label>
          )}
          {userPermissionList?.map((permissionItem, index) => {
            if (permissionItem?.name === "Channels") {
              if (channelList?.length > 0) {
                let permissionList = channelList?.map((listItem) => {
                  let checkedChannels = false;
                  const channelData =
                    invitationMemberViewData?.permissions?.filter(
                      (item) => item?.channels
                    );
                  if (channelData?.length > 0) {
                    checkedChannels = channelData?.some((item) =>
                      item?.channels?.includes(listItem?.value)
                    );
                  }
                  return (
                    <CHCheckbox
                      name="channel"
                      onChange={(event) =>
                        handleCheckboxChange(
                          event,
                          permissionItem?.name,
                          permissionItem?.permission_id
                        )
                      }
                      value={listItem?.value}
                      checked={checkedChannels}
                    >
                      {listItem?.label}
                    </CHCheckbox>
                  );
                });

                let permissionItems = [
                  {
                    key: index - 1,
                    label: (
                      <CHSwitchCard
                        title={permissionItem?.name}
                        description={permissionItem?.description}
                        switchLess
                        onChange={(event) =>
                          handlePermissionChange(
                            event,
                            permissionItem?.name,
                            permissionItem?.permission_id,
                            index
                          )
                        }
                      />
                    ),
                    children: (
                      <div className={styles.accordionList}>
                        <div className={styles.accordionContentWrap}>
                          {permissionList}
                        </div>
                      </div>
                    ),
                  },
                ];

                return (
                  <CHAccordion
                    id={permissionItem?.permission_id}
                    items={permissionItems}
                    className={styles.switchCardAccordion}
                  />
                );
              }
            } else if (permissionItem?.name === "Crms") {
              if (crmList?.length > 0) {
                let permissionCRMList = crmList?.map((listItem) => {
                  let checkedCrms = false;
                  const crmData = invitationMemberViewData?.permissions?.filter(
                    (item) => item?.crms
                  );
                  if (crmData?.length > 0) {
                    checkedCrms = crmData?.some((item) =>
                      item?.crms?.includes(listItem?.value)
                    );
                  }
                  return (
                    <CHCheckbox
                      name="crm"
                      onChange={(event) =>
                        handleCheckboxChange(
                          event,
                          permissionItem?.name,
                          permissionItem?.permission_id
                        )
                      }
                      value={listItem?.value}
                      checked={checkedCrms}
                    >
                      {listItem?.label}
                    </CHCheckbox>
                  );
                });

                let permissionItems = [
                  {
                    key: index - 1,
                    label: (
                      <CHSwitchCard
                        title={permissionItem?.name}
                        description={permissionItem?.description}
                        switchLess
                        onChange={(event) =>
                          handlePermissionChange(
                            event,
                            permissionItem?.name,
                            permissionItem?.permission_id,
                            index
                          )
                        }
                      />
                    ),
                    children: (
                      <div className={styles.accordionList}>
                        <div className={styles.accordionContentWrap}>
                          {permissionCRMList}
                        </div>
                      </div>
                    ),
                  },
                ];
                return (
                  <CHAccordion
                    id={permissionItem?.permission_id}
                    items={permissionItems}
                    className={styles.switchCardAccordion}
                  />
                );
              }
            } else {
              const checkedPermission =
                invitationMemberViewData?.permissions?.some(
                  (item) => item?.type === permissionItem?.name
                );

              return (
                <CHSwitchCard
                  fullWidth
                  title={permissionItem?.name}
                  bordered
                  value={checkedPermission}
                  onChange={(event) =>
                    handlePermissionChange(
                      event,
                      permissionItem?.name,
                      permissionItem?.permission_id,
                      index
                    )
                  }
                />
              );
            }
          })}
        </div>

        <div className="d-flex gap-3 mt-4 ">
          <CHButton
            className="flex-fill"
            variant="secondary"
            onClick={() => handleCloseModal()}
          >
            Cancel
          </CHButton>
          <CHButton
            className="flex-fill"
            variant="primary"
            onClick={() => handleInviteMemberSubmit()}
            disabled={loading}
          >
            Send Invite
          </CHButton>
        </div>
      </div>
    </CHModal>
  );
};
