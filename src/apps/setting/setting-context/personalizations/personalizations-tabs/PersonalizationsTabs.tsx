import React from "react";
import {
  IPersonalizationsTabs,
  PERSONALIZATIONS,
} from "../personalization.type";
import MyProfilePage from "./my-profile-page";
import CustomizationPage from "./customization-page";
import Shimmer from "../../../../../common/component-lib/shimmer/Shimmer";

const PersonalizationsTabs = (props: IPersonalizationsTabs): JSX.Element => {
  const { optionsSelected } = props;

  const getSelectedTabPage = () => {
    switch (optionsSelected?.value) {
      case PERSONALIZATIONS.MY_PROFILE:
        return (
          <MyProfilePage
            suspenseFallback={<Shimmer width="100%" height="100%" />}
          />
        );
      case PERSONALIZATIONS.PERSONALIZATIONS:
        return (
          <CustomizationPage
            suspenseFallback={<Shimmer width="100%" height="100%" />}
          />
        );
      default:
        return (
          <MyProfilePage
            suspenseFallback={<Shimmer width="100%" height="100%" />}
          />
        );
    }
  };

  return <div>{getSelectedTabPage()}</div>;
};

export default PersonalizationsTabs;