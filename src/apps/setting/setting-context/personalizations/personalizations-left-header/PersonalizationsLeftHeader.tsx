import React from "react";
import { PERSONALIZATIONS_LIST } from "../utils";
import styles from "../personalizations.module.css";
import { IPersonalizationsLeftHeader } from "../personalization.type";
import { useTranslation } from "react-i18next";

const PersonalizationsLeftHeader = (
  props: IPersonalizationsLeftHeader
): JSX.Element => {
  const { t } = useTranslation();
  const { optionsSelected, setOptionsSelected } = props;

  return (
    <div className={styles.left_header}>
      {PERSONALIZATIONS_LIST?.map((item) => {
        return (
          <div
            className={`${styles.setting_name} ${
              optionsSelected?.value === item?.value
                ? styles.selected_setting
                : ""
            }`}
            key={item?.id}
            onClick={() => setOptionsSelected(item)}>
            <item.icon />
            <div className={styles.setting_label} title={t(item?.title)}>
              {t(item?.title)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PersonalizationsLeftHeader;
