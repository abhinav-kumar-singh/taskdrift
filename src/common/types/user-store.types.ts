import { PricingBucket } from "../../store/setting/setting.type";

interface IUserDetails {
  userName: string;
  email: string;
  mobile: string;
  isLoggedIn: boolean;
  membershipType: PricingBucket;
  userBoardLimit: number;
  userTasksLimit: number;
  userDayTaskLimit: number;
}

export type { IUserDetails };
