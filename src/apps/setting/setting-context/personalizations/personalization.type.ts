import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export enum PERSONALIZATIONS {
  MY_PROFILE = "MY_PROFILE",
  PERSONALIZATIONS = "PERSONALIZATIONS",
}

export interface IPersonalizationListOption {
  title: string;
  value: PERSONALIZATIONS;
  id: number;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

export interface IPersonalizationsLeftHeader {
  optionsSelected: IPersonalizationListOption;
  setOptionsSelected: React.Dispatch<
    React.SetStateAction<IPersonalizationListOption>
  >;
}

export interface IPersonalizationsTabs {
  optionsSelected: IPersonalizationListOption;
}
