import React from "react";
import { useSettingStore, useUserDataStore } from "../../../../../../../store";
import { getPersonalDetailsList } from "./utils";
import styles from "../../../personalizations.module.css";

const MyProfilePersonalDetails = (): JSX.Element => {
  const userInfo = useUserDataStore();
  const setting = useSettingStore();

  const getList = getPersonalDetailsList(userInfo, setting.settingConfig);

  console.log(getList);

  return (
    <div className={styles.personal_details_container}>
      {getList.map((item) => {
        return (
          <div className={styles.personal_details_item_container}>
            <div className={styles.personal_details_label}>{item.title}</div>
            <div className={styles.personal_details_value}>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MyProfilePersonalDetails;
