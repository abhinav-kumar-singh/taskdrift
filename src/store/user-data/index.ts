import useUserDataStore, {
  setUserName,
  setUserEmail,
  setIsLoggedIn,
  setUserMobile,
  setUserDetails,
  setUserBoardLimit,
  setUserTasksLimit,
  setMembershipType,
  setUserDayTaskLimit,
} from "./user-data.store";

export default useUserDataStore;

export {
  setUserName,
  setUserEmail,
  setUserMobile,
  setIsLoggedIn,
  setUserDetails,
  setUserBoardLimit,
  setUserTasksLimit,
  setMembershipType,
  setUserDayTaskLimit,
};
