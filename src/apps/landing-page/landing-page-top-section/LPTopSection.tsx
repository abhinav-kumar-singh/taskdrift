import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useSettingStore } from "../../../store";
import { Theme } from "../../../store/setting/setting.type";
import styles from "../landing-page.module.css";
import LanguageCustomization from "../../setting/setting-context/personalizations/personalizations-tabs/customization-page/language-customization";
import { useTranslation } from "react-i18next";
import { HEADER_OPTION_LIST } from "../utils";
import { HeaderOptions, IHeaderItem } from "../landing-page.types";
import { useState } from "react";
import ModalField from "../../../common/component-lib/modal/ModalField";
import AboutUs from "../../setting/setting-context/about-us";

const LPTopSection = (): JSX.Element => {
  const { t } = useTranslation();
  const { settingConfig, setTheme } = useSettingStore();

  const [showAboutUsModal, setShowAboutUsModal] = useState(false);

  const selectedTheme = settingConfig?.personalizations?.theme;

  const handleThemeChange = (): void => {
    setTheme(
      settingConfig?.personalizations?.theme === Theme.LIGHT
        ? Theme.DARK
        : Theme.LIGHT
    );
  };

  const handleNavigation = (option: IHeaderItem): void => {
    if (option?.value === HeaderOptions.ABOUT_US) {
      setShowAboutUsModal(true);
    } else {
      const element = document.getElementById(option.section_linked_to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleCloseModal = (
    event: React.SyntheticEvent,
    reason: string
  ): void => {
    if (reason !== "backdropClick") {
      setShowAboutUsModal(false);
    }
  };

  return (
    <>
      <div className={styles.top_section_container}>
        <div className={styles.company_logo}>Task Drift</div>
        <div className={styles.header_option_container}>
          {HEADER_OPTION_LIST.map((option) => {
            return (
              <div
                className={styles.header_option}
                onClick={() => handleNavigation(option)}>
                {t(option.title)}
              </div>
            );
          })}
          <div
            className={styles.header_option}
            onClick={handleThemeChange}
            title="Change Theme">
            {selectedTheme === Theme.LIGHT ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </div>
          <div>
            <LanguageCustomization customClass={styles.language_dropdown} />
          </div>
        </div>
      </div>
      {showAboutUsModal ? (
        <ModalField
          handleCloseModal={handleCloseModal}
          showModal={showAboutUsModal}
          modalWidth="md"
          handleCrossIcon={() => setShowAboutUsModal(false)}
          dialogContent={<AboutUs />}
          hideContentBorder
        />
      ) : null}
    </>
  );
};

export default LPTopSection;
