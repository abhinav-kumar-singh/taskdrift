import { PricingBucket, SETTINGS } from "../../store/setting/setting.type";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CallIcon from "@mui/icons-material/Call";
import Diversity3Icon from "@mui/icons-material/Diversity3";

export const SETTINGS_LIST = [
  {
    title: "Personalizations",
    value: SETTINGS.PERSONALIZATIONS,
    id: 1,
    icon: WbIncandescentIcon,
  },
  {
    title: "Pricing",
    value: SETTINGS.PRICING,
    id: 2,
    icon: CurrencyRupeeIcon,
  },
  {
    title: "Contact Us",
    value: SETTINGS.CONTACT_US,
    id: 3,
    icon: CallIcon,
  },
  {
    title: "About Us",
    value: SETTINGS.ABOUT_US,
    id: 4,
    icon: Diversity3Icon,
  },
];

export const PRICING_LIST = [
  {
    title: "Free",
    value: PricingBucket.FREE,
    id: 1,
    description: "For Personal use and exploration of the platform",
    price: 0,
    features: [
      "Upto 3 Dashboards support",
      "10 tasks support of each type",
      "7 tasks can be created in a day",
      "Limited features access",
    ],
    colorAssociated: "#4CAF50",
    priority: 1,
  },
  {
    title: "Premium",
    value: PricingBucket.PREMIUM,
    id: 2,
    description:
      "Perfect for professionals and small businesses in need of task handling.",
    price: 1999,
    features: [
      "Upto 10 Dashboards support",
      "50 tasks support of each type",
      "50 tasks can be created in a day",
      "Full access to all features",
    ],
    colorAssociated: "#2196F3",
    priority: 2,
  },
  {
    title: "Enterprise",
    value: PricingBucket.ENTERPRISE,
    id: 3,
    description:
      "Perfect for large businesses or organizations that require specialized support.",
    price: 4999,
    features: [
      "Upto 50 Dashboards support",
      "100 tasks support of each type",
      "100 tasks can be created in a day",
      "Custom access to all features",
    ],
    colorAssociated: "#FFD700",
    priority: 3,
  },
];

export const PriceProductLimit = {
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
