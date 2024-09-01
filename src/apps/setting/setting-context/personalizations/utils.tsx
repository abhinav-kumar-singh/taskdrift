import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { PERSONALIZATIONS } from "./personalization.type";
import { Language, Theme } from "../../../../store/setting/setting.type";

export const PERSONALIZATIONS_LIST = [
  {
    title: "My Profile",
    value: PERSONALIZATIONS.MY_PROFILE,
    id: 1,
    icon: AccountCircleIcon,
  },
  {
    title: "Customizations",
    value: PERSONALIZATIONS.PERSONALIZATIONS,
    id: 2,
    icon: EngineeringIcon,
  },
];

export const LANGUAGE_LIST = [
  {
    value: Language.HI,
    title: "हिंदी",
    index: 0,
  },
  {
    value: Language.EN,
    title: "English",
    index: 1,
  },
  {
    value: Language.FR,
    title: "Français",
    index: 2,
  },
  {
    value: Language.ES,
    title: "Española",
    index: 3,
  },
  {
    value: Language.DE,
    title: "Deutsch",
    index: 4,
  },
];

export const THEME_LIST = [
  {
    value: Theme.LIGHT,
    title: "Light Theme",
    index: 0,
  },
  {
    value: Theme.DARK,
    title: "Dark Theme",
    index: 1,
  },
];
