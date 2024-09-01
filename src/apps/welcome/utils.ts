import { setItem } from "../../common/component-lib/storage-manager/storage";
import { StorageKey } from "../../common/component-lib/storage-manager/storage.types";
import { USER_META_DATA } from "../../common/constants/user-info";
import { setUserDetails } from "../../store";
import { PricingBucket } from "../../store/setting/setting.type";

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleNextClickedSuccess = (
  email: string,
  name: string,
  mobile: string
): boolean => {
  if (isValidEmail(email) && name) {
    const userData = {
      userName: name,
      email: email,
      mobile: mobile,
      isLoggedIn: true,
      membershipType: PricingBucket.FREE,
      userBoardLimit: USER_META_DATA.Free.DashboardLimit,
      userTasksLimit: USER_META_DATA.Free.TaskLimit,
      userDayTaskLimit: USER_META_DATA.Free.TaskLimitPerDay,
    };
    setUserDetails(userData);
    setItem(StorageKey.USER_DETAILS, userData);
    return true;
  }
  return false;
};

export { handleNextClickedSuccess };
