import { PricingBucket } from "../../store/setting/setting.type";

export const USER_META_DATA = {
  [PricingBucket.FREE]: {
    DashboardLimit: 3,
    TaskLimit: 10,
    TaskLimitPerDay: 7,
  },
  [PricingBucket.PREMIUM]: {
    DashboardLimit: 10,
    TaskLimit: 50,
    TaskLimitPerDay: 50,
  },
  [PricingBucket.ENTERPRISE]: {
    DashboardLimit: 50,
    TaskLimit: 100,
    TaskLimitPerDay: 100,
  },
};
