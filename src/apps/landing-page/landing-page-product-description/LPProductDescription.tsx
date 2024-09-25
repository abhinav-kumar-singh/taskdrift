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

  const [hoverIndex, setHoverIndex] = useState<null | number>(null);

  PRODUCT_DESCRIPTION_LIST.forEach((item, index) => {
    const scrollButton = document.getElementById(`imageCaptureButton-${index}`);
    const targetDiv = document.getElementById("targetImageToBringIntoView");

    scrollButton?.addEventListener("click", () => {
      targetDiv?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    });
  });

  return (
    <div className={styles.product_description_container}>
      <div className={styles.product_description_list}>
        {PRODUCT_DESCRIPTION_LIST.map((item, index) => {
          return (
            <div
              title={t(item.title)}
              id={`imageCaptureButton-${index}`}
              className={`${styles.product_list_container} ${
                listItemSelected.value === item.value
                  ? styles.list_item_selected
                  : ""
              }
                ${styles.icon}  ${
                hoverIndex !== null && index === hoverIndex
                  ? styles.icon_hovered
                  : hoverIndex !== null &&
                    (index === hoverIndex - 1 || index === hoverIndex + 1)
                  ? styles.icon_adjacent
                  : ""
              }
              `}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => handleListItemClick(item)}
            >
              <item.icon />
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
          id="targetImageToBringIntoView"
          src={PRODUCT_DESCRIPTION_LIST_IMAGES[listItemSelected.index]}
          alt={`task drift app - ${listItemSelected?.title}`}
          className={styles.product_description_img}
          loading="lazy"
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
