import React from "react";
import { useSettingStore } from "../../../store";
import { SETTINGS } from "../../../store/setting/setting.type";
import Personalizations from "./personalizations";
import Pricing from "./pricing";
import Contact from "./contact";

const SettingContext = () => {
  const selectedSetting =
    useSettingStore()?.settingConfig?.selectedSettingOption;

  const getComponent = () => {
    switch (selectedSetting?.value) {
      case SETTINGS.PERSONALIZATIONS:
        return <Personalizations />;
      case SETTINGS.PRICING:
        return <Pricing />;
      case SETTINGS.CONTACT_US:
        return <Contact />;
    }
  };

  return <div>{getComponent()}</div>;
};

export default SettingContext;
