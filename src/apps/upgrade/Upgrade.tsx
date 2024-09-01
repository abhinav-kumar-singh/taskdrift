import React, { useState } from "react";
import styles from "./upgrade.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { LinearProgress } from "@mui/material";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import {
  useDashboardStore,
  useSettingStore,
  useUserDataStore,
} from "../../store";
import { IDashboardStore } from "../../store/dashboard/dash-board.type";
import ButtonField from "../../common/component-lib/button-field";
import { useLocation } from "wouter";
import { APP_ROUTES } from "../../common/constants/app-routes";
import { SETTINGS } from "../../store/setting/setting.type";
import { useTranslation } from "react-i18next";

const Upgrade = (): JSX.Element => {
  const [showComp, setShowComp] = useState(true);

  const [, setLocation] = useLocation();

  const { t } = useTranslation();

  const { setSelectedSettingOption } = useSettingStore();

  const { userBoardLimit } = useUserDataStore();

  const dashBoardDetails = useDashboardStore() as IDashboardStore;

  const handleUpgrade = () => {
    setSelectedSettingOption({
      title: "Pricing",
      value: SETTINGS.PRICING,
      id: 2,
    });
    setLocation(APP_ROUTES.SETTING);
  };

  return (
    <>
      {showComp ? (
        <div className={styles.update_container}>
          <div className={styles.header_container}>
            <div className={styles.header}>
              <div className={styles.icon}>
                <TipsAndUpdatesIcon className={styles.upgrade_label} />
              </div>
              <div className={styles.upgrade_label}>{t("Become a pro")}</div>
            </div>
            <div
              className={styles.close_button}
              onClick={() => setShowComp(false)}>
              <CloseIcon />
            </div>
          </div>
          <div className={styles.description}>
            {t("upgrade for premium feature")}
          </div>
          <div className={styles.progress_container}>
            <div className={styles.progress_bar}>
              <LinearProgress
                variant="determinate"
                value={dashBoardDetails?.dashBoardConfig?.length * 10}
              />
            </div>
            <div className={styles.count_container}>
              {`${dashBoardDetails?.dashBoardConfig?.length}/${userBoardLimit}`}
            </div>
          </div>
          <div className={styles.button_container}>
            <ButtonField
              variant="contained"
              text={t("Upgrade")}
              endIcon={<SwipeRightIcon />}
              customClass={styles.upgrade_button}
              onClick={handleUpgrade}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Upgrade;
