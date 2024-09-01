import useUserDataStore, {
  setUserName,
  setUserEmail,
  setUserMobile,
  setIsLoggedIn,
  setUserDetails,
  setUserBoardLimit,
  setUserTasksLimit,
  setMembershipType,
  setUserDayTaskLimit,
} from "./user-data";

import {
  useDashboardStore,
  setDashBoardView,
  setIsDefaultDashboard,
  setSelectedDartboardId,
} from "./dashboard";

import {
  useActivityLog,
  setActivityLog,
  setActivityLogFilteredData,
} from "./activity";

import { useTaskStore, setTaskDelete } from "./tasks";

import { useSettingStore } from "./setting";

export {
  setUserName,
  useTaskStore,
  setTaskDelete,
  setUserEmail,
  setUserMobile,
  setIsLoggedIn,
  useActivityLog,
  setActivityLog,
  setUserDetails,
  useSettingStore,
  useUserDataStore,
  setDashBoardView,
  setUserBoardLimit,
  setMembershipType,
  useDashboardStore,
  setUserTasksLimit,
  setUserDayTaskLimit,
  setIsDefaultDashboard,
  setSelectedDartboardId,
  setActivityLogFilteredData,
};
