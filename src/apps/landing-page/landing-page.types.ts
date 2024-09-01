import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export enum HeaderOptions {
  CONTACT_US = "Contact Us",
  ABOUT_US = "About Us",
  PRICING = "Pricing",
}

export enum ProductDescription {
  PROJECTS = "Projects",
  DASHBOARD = "Dashboard",
  TIME_TRACKING = "Time Tracking",
  PERSONALIZATION = "Personalization",
  ANALYTICS = "Analytics",
  ACTIVITY_LOG = "Activity Log",
}

export interface IListItem {
  value: ProductDescription;
  title: string;
  index: number;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

export interface IHeaderItem {
  value: HeaderOptions;
  title: string;
  index: number;
  section_linked_to: string;
}
