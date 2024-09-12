import React from "react";
import { useSettingStore } from "../../../store";
import { SETTINGS } from "../../../store/setting/setting.type";
import Personalizations from "./personalizations";
import Pricing from "./pricing";
import Contact from "./contact";
import AboutUs from "./about-us";

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
      case SETTINGS.ABOUT_US:
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <AboutUs />
          </div>
        );
    }
  };

  return <div style={{ width: "100%", height: "100%" }}>{getComponent()}</div>;
};

export default SettingContext;
