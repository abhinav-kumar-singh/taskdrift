import { useState } from "react";
import styles from "../landing-page.module.css";
import ButtonField from "../../../common/component-lib/button-field/ButtonField";
import SendIcon from "@mui/icons-material/Send";
import { useTranslation } from "react-i18next";
import {
  getItem,
  setItem,
} from "../../../common/component-lib/storage-manager/storage";
import { StorageKey } from "../../../common/component-lib/storage-manager/storage.types";
import Welcome from "../../welcome";
import { IDashboardStore } from "../../../store/dashboard/dash-board.type";
import { useLocation } from "wouter";
import { APP_ROUTES } from "../../../common/constants/app-routes";

const LPMiddleSection = (): JSX.Element => {
  const dashBoardDetails = getItem(
    StorageKey.DASH_BOARD_DETAILS
  ) as IDashboardStore;

  const [, setLocation] = useLocation();

  const [showWelcomePage, setShowWelcomePage] = useState(
    getItem(StorageKey.USER_VIEWED_LANDING_PAGE) || false
  );

  const handleButtonClick = (showPage: boolean): void => {
    if (dashBoardDetails?.dashBoardConfig?.length && showPage) {
      setLocation(APP_ROUTES.DASHBOARD);
    } else {
      setShowWelcomePage((prev) => !prev);
      setItem(StorageKey.USER_VIEWED_LANDING_PAGE, showPage);
    }
  };

  const { t } = useTranslation();

  const getButtonText = (): JSX.Element => {
    return (
      <div className={styles.button_text} title={t("Get Started, It's FREE")}>
        {" "}
        {t("Get Started, It's FREE")}
      </div>
    );
  };
  return (
    <>
      <div className={styles.middle_section_container}>
        <div className={styles.middle_section_container_heading}>
          {t("Your all-in-one toolkit for mastering work.")}
        </div>
        <div className={styles.middle_section_container_sub_heading}>
          {t(
            "Streamline every task with a platform built for all your work needs."
          )}
        </div>
        <ButtonField
          variant="contained"
          text={getButtonText()}
          customClass={styles.get_started_button}
          endIcon={<SendIcon fontSize="large" className={styles.icon_style} />}
          onClick={() => handleButtonClick(true)}
        />
        <div className={styles.user_info}>Free FOREVER*</div>
      </div>
      {showWelcomePage ? (
        <Welcome
          handleButtonClick={handleButtonClick}
          showWelcomePage={showWelcomePage}
        />
      ) : null}
    </>
  );
};

export default LPMiddleSection;
