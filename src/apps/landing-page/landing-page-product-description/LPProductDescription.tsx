import { useState } from "react";
import styles from "../landing-page.module.css";
import { PRODUCT_DESCRIPTION_LIST } from "../utils";
import { IListItem } from "../landing-page.types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import project from "../../../assets/PROJECT.webp";
import timeTracking from "../../../assets/TIME_TRACKING.webp";
import personalization from "../../../assets/PERSONALIZATION.webp";
import analytics from "../../../assets/ANALYTICS.webp";
import activityLog from "../../../assets/ACTIVITY_LOG.webp";
import dashboard from "../../../assets/DASHBOARD.webp";
import { useTranslation } from "react-i18next";

const LPProductDescription = (): JSX.Element => {
  const { t } = useTranslation();

  const [listItemSelected, setListItemSelected] = useState<IListItem>(
    PRODUCT_DESCRIPTION_LIST[0]
  );

  const PRODUCT_DESCRIPTION_LIST_IMAGES: Record<number, string> = {
    1: project,
    2: timeTracking,
    3: personalization,
    4: dashboard,
    5: analytics,
    6: activityLog,
  };

  const handleListItemClick = (item: IListItem): void => {
    setListItemSelected(item);
  };

  const handlePrev = () => {
    const currentIndex = listItemSelected.index;
    const updatedItem = PRODUCT_DESCRIPTION_LIST.find(
      (item) => item.index === currentIndex - 1
    );
    setListItemSelected(updatedItem || PRODUCT_DESCRIPTION_LIST[0]);
  };

  const handleNext = () => {
    const currentIndex = listItemSelected.index;
    const updatedItem = PRODUCT_DESCRIPTION_LIST.find(
      (item) => item.index === currentIndex + 1
    );
    setListItemSelected(updatedItem || PRODUCT_DESCRIPTION_LIST[0]);
  };

  return (
    <div className={styles.product_description_container}>
      <div className={styles.product_description_list}>
        {PRODUCT_DESCRIPTION_LIST.map((item) => {
          return (
            <div
              className={`${styles.product_list_container} ${
                listItemSelected.value === item.value
                  ? styles.list_item_selected
                  : ""
              }`}
              onClick={() => handleListItemClick(item)}>
              <item.icon />
              <div>{t(item.title)}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.image_container}>
        <div onClick={handlePrev}>
          <ArrowBackIosNewIcon
            fontSize="large"
            className={`${styles.prev_next_button} ${
              listItemSelected.index === PRODUCT_DESCRIPTION_LIST[0].index
                ? styles.hide_button
                : ""
            }`}
          />
        </div>
        <img
          src={PRODUCT_DESCRIPTION_LIST_IMAGES[listItemSelected.index]}
          alt="task manager app"
          className={styles.product_description_img}
        />
        <div onClick={handleNext}>
          <ArrowForwardIosIcon
            fontSize="large"
            className={`${styles.prev_next_button} ${
              listItemSelected.index ===
              PRODUCT_DESCRIPTION_LIST[PRODUCT_DESCRIPTION_LIST.length - 1]
                .index
                ? styles.hide_button
                : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default LPProductDescription;
