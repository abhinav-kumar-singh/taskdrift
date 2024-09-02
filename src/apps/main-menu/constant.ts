import FoundationIcon from "@mui/icons-material/Foundation";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";

export enum MENUS {
  SEARCH = "search",
  HOME = "home",
  SETTING = "setting",
  DASHBOARD = "dashboard",
}

export const MENU_ITEMS = [
  {
    label: "Dashboard",
    value: MENUS.DASHBOARD,
    icon: DashboardIcon,
  },
  {
    label: "Home",
    value: MENUS.HOME,
    icon: FoundationIcon,
  },
  {
    label: "Setting",
    value: MENUS.SETTING,
    icon: SettingsIcon,
  },
];
