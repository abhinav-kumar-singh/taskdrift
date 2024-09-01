import { create } from "zustand";
import { IUserDetails } from "../../common/types/user-store.types";
import {
  getItem,
  setItem,
} from "../../common/component-lib/storage-manager/storage";
import { StorageKey } from "../../common/component-lib/storage-manager/storage.types";
import { IUserDetailsStore } from "./types";
import { PricingBucket } from "../setting/setting.type";
import { USER_META_DATA } from "../../common/constants/user-info";

const initialData = {
  userName: "",
  email: "",
  mobile: "",
  isLoggedIn: false,
  membershipType: PricingBucket.FREE,
  userBoardLimit: USER_META_DATA.Free.DashboardLimit,
  userTasksLimit: USER_META_DATA.Free.TaskLimit,
  userDayTaskLimit: USER_META_DATA.Free.TaskLimitPerDay,
};

const useUserDataStore = create<IUserDetailsStore>(() => {
  const userAuthConfig = getItem(StorageKey.USER_DETAILS) as IUserDetails;
  return {
    userName: userAuthConfig?.userName || initialData.userName,
    email: userAuthConfig?.email || initialData.email,
    mobile: userAuthConfig?.mobile || initialData.mobile,
    isLoggedIn: userAuthConfig?.isLoggedIn || initialData.isLoggedIn,
    membershipType:
      userAuthConfig?.membershipType || initialData.membershipType,
    userBoardLimit:
      userAuthConfig?.userBoardLimit || initialData.userBoardLimit,
    userTasksLimit:
      userAuthConfig?.userTasksLimit || initialData.userTasksLimit,
    userDayTaskLimit:
      userAuthConfig?.userDayTaskLimit || initialData.userDayTaskLimit,
  };
});

const setUserDetails = (data: IUserDetails) => {
  useUserDataStore.setState(data);
};

const setUserName = (data: string) => {
  useUserDataStore.setState((state) => {
    const newData = { ...state, userName: data };
    setItem(StorageKey.USER_DETAILS, newData);
    return { ...newData };
  });
};

const setUserEmail = (data: string) => {
  useUserDataStore.setState((state) => {
    const newData = { ...state, email: data };
    setItem(StorageKey.USER_DETAILS, newData);
    return { ...newData };
  });
};

const setUserMobile = (data: string) => {
  useUserDataStore.setState((state) => {
    const newData = { ...state, mobile: data };
    setItem(StorageKey.USER_DETAILS, newData);
    return { ...newData };
  });
};

const setIsLoggedIn = (data: boolean) => {
  useUserDataStore.setState({ isLoggedIn: data });
};

const setMembershipType = (data: PricingBucket) => {
  useUserDataStore.setState((state) => {
    const newData = { ...state, membershipType: data };
    setItem(StorageKey.USER_DETAILS, newData);
    return { ...newData };
  });
};

const setUserBoardLimit = (data: number) => {
  useUserDataStore.setState((state) => {
    const newData = { ...state, userBoardLimit: data };
    setItem(StorageKey.USER_DETAILS, newData);
    return { ...newData };
  });
};

const setUserTasksLimit = (data: number) => {
  useUserDataStore.setState((state) => {
    const newData = { ...state, userTasksLimit: data };
    setItem(StorageKey.USER_DETAILS, newData);
    return { ...newData };
  });
};

const setUserDayTaskLimit = (data: number) => {
  useUserDataStore.setState((state) => {
    const newData = { ...state, userDayTaskLimit: data };
    setItem(StorageKey.USER_DETAILS, newData);
    return { ...newData };
  });
};

export default useUserDataStore;
export {
  setUserName,
  setUserEmail,
  setIsLoggedIn,
  setUserMobile,
  setUserDetails,
  setMembershipType,
  setUserBoardLimit,
  setUserTasksLimit,
  setUserDayTaskLimit,
};
