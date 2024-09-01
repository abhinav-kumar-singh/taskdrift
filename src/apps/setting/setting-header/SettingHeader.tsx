import React from "react";
import { SETTINGS_LIST } from "../utils";
import styles from "../setting.module.css";
import { useSettingStore } from "../../../store";
import { useTranslation } from "react-i18next";

const SettingHeader = (): JSX.Element => {
  const selectedSetting =
    useSettingStore()?.settingConfig?.selectedSettingOption;

  const { t } = useTranslation();

  const { setSelectedSettingOption } = useSettingStore();

  return (
    <div className={styles.setting_container}>
      {SETTINGS_LIST.map((item) => {
        return (
          <div
            key={item.id}
            className={`${styles.individual_setting} ${
              selectedSetting?.value === item.value
                ? styles.selected_setting
                : ""
            }`}
            onClick={() => setSelectedSettingOption(item)}>
            <item.icon />
            <div
              className={styles.individual_setting_label}
              title={t(item.title)}>
              {t(item.title)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SettingHeader;
