import { PricingBucket, SETTINGS } from "../../store/setting/setting.type";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CallIcon from "@mui/icons-material/Call";

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
  },
];
