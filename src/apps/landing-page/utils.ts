import { HeaderOptions, ProductDescription } from "./landing-page.types";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TimelineIcon from "@mui/icons-material/Timeline";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import { LANDING_PAGE_LINKS } from "../../common/constants/landing-page-links";

export const HEADER_OPTION_LIST = [
  {
    value: HeaderOptions.PRICING,
    title: "Pricing",
    index: 1,
    section_linked_to: LANDING_PAGE_LINKS[HeaderOptions.PRICING],
  },
  {
    value: HeaderOptions.ABOUT_US,
    title: "About Us",
    index: 2,
    section_linked_to: LANDING_PAGE_LINKS[HeaderOptions.ABOUT_US],
  },
  {
    value: HeaderOptions.CONTACT_US,
    title: "Contact Us",
    index: 3,
    section_linked_to: LANDING_PAGE_LINKS[HeaderOptions.CONTACT_US],
  },
];

export const PRODUCT_DESCRIPTION_LIST = [
  {
    value: ProductDescription.PROJECTS,
    title: "Projects",
    index: 1,
    icon: AssignmentIcon,
  },
  {
    value: ProductDescription.TIME_TRACKING,
    title: "Time Tracking",
    index: 2,
    icon: TimelineIcon,
  },
  {
    value: ProductDescription.PERSONALIZATION,
    title: "Personalization",
    index: 3,
    icon: SettingsAccessibilityIcon,
  },
  {
    value: ProductDescription.DASHBOARD,
    title: "Dashboard",
    index: 4,
    icon: DashboardIcon,
  },
  {
    value: ProductDescription.ANALYTICS,
    title: "Analytics",
    index: 5,
    icon: EqualizerIcon,
  },
  {
    value: ProductDescription.ACTIVITY_LOG,
    title: "Activity Log",
    index: 6,
    icon: PlaylistAddCheckCircleIcon,
  },
];

export const PRODUCT_REVIEW = [
  {
    title: "Happy with the languages support!",
    description:
      "Really loved the other languages support and the theme design",
    name: "anonymous",
  },
  {
    title: "Happy with easy design layout!",
    description: "I am very happy with the dashboard design",
    name: "anonymous",
  },
  {
    title: "Happy with the free version support!",
    description:
      "Even the free version support is very good, able to create 7 tasks in a day, which is more than enough for me as i use this product for my daily personal tasks",
    name: "anonymous",
  },
  {
    title: "Happy with the app performance!",
    description:
      "happy with the performance of the dashboard, it is very smooth and easy to use",
    name: "anonymous",
  },
  {
    title: "Happy with analytics!",
    description:
      "happy with the product, especially like the analytics part, it is very smooth and easy to use",
    name: "anonymous",
  },
  {
    title: "An Exceptional Task Manager App!",
    description:
      "This task management app is the best I’ve used. Its intuitive interface makes organizing tasks easy, and the customization options, including themes and dark/light modes, are fantastic. Perfect for boosting productivity day or night",
    name: "anonymous",
  },
  {
    title: "Simple Yet Powerful!",
    description:
      "This app combines simplicity with powerful features. The linear task representation is a game-changer, and the overall experience is smooth. Highly recommend it for anyone who needs to stay organized.",
    name: "anonymous",
  },
  {
    title: "Top-Notch Task Manager!",
    description:
      "This app is exactly what I was looking for. The interface is clean, the themes are visually appealing, and the functionality is top-notch. It’s helped me stay on top of my tasks like never before!",
    name: "anonymous",
  },
  {
    title: "A Productivity Booster!",
    description:
      "Since using this app, my productivity has skyrocketed. The ability to break down tasks into smaller steps with sub-descriptions is incredibly useful. It’s intuitive, efficient, and just what I needed!",
    name: "anonymous",
  },
  {
    title: "Great App for Busy Professionals!",
    description:
      "As a busy professional, this app has been a game-changer. The clean interface and robust features help me manage my tasks efficiently. It’s a must-have for anyone with a hectic schedule!",
    name: "anonymous",
  },
];
