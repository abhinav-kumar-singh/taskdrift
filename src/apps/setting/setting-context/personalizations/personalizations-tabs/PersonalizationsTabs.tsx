import React from "react";
import {
  IPersonalizationsTabs,
  PERSONALIZATIONS,
} from "../personalization.type";
import MyProfilePage from "./my-profile-page";
import CustomizationPage from "./customization-page";

const PersonalizationsTabs = (props: IPersonalizationsTabs): JSX.Element => {
  const { optionsSelected } = props;

  const getSelectedTabPage = () => {
    switch (optionsSelected?.value) {
      case PERSONALIZATIONS.MY_PROFILE:
        return <MyProfilePage />;
      case PERSONALIZATIONS.PERSONALIZATIONS:
        return <CustomizationPage />;
      default:
        return <div></div>;
    }
  };

  return <div>{getSelectedTabPage()}</div>;
};

export default PersonalizationsTabs;
