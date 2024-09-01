import { IUserDetails } from "../../../../../../../common/types/user-store.types";
import { ISettingConfig } from "../../../../../../../store/setting/setting.type";

export const getPersonalDetailsList = (
  userInfo: IUserDetails,
  settingConfig: ISettingConfig
) => {
  const {
    userName,
    email,
    mobile,
    membershipType,
    userBoardLimit,
    userTasksLimit,
    userDayTaskLimit,
  } = userInfo;

  const { personalizations } = settingConfig;

  const personalDetailsList = [
    {
      title: "User Name",
      value: userName,
    },
    {
      title: "Email",
      value: email,
    },
    {
      title: "Mobile",
      value: mobile,
    },
    {
      title: "Membership Type",
      value: membershipType,
    },
    {
      title: "Board Limit",
      value: userBoardLimit,
    },
    {
      title: "Task Limit",
      value: userTasksLimit,
    },
    {
      title: "Day Task Limit",
      value: userDayTaskLimit,
    },
    {
      title: "Theme",
      value: personalizations?.theme,
    },
  ];

  return personalDetailsList;
};
