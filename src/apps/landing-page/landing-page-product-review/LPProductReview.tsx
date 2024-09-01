import React from "react";
import { PRODUCT_REVIEW } from "../utils";
import styles from "../landing-page.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useTranslation } from "react-i18next";

const LPProductReview = (): JSX.Element => {
  const { t } = useTranslation();

  const handleRightClick = () => {
    const element = document.getElementById("product_review_list_container");
    if (element) {
      element.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  const handleLeftClick = () => {
    const element = document.getElementById("product_review_list_container");
    if (element) {
      element.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.product_review_container}>
      <div className={styles.review_heading}>
        {t("Still in DOUBT, why choose out product?")}
      </div>
      <div className={styles.review_carousel}>
        <div onClick={handleLeftClick}>
          <ArrowBackIosNewIcon
            fontSize="large"
            className={`${styles.prev_next_button}`}
          />
        </div>
        <div
          className={styles.product_review_list_container}
          id="product_review_list_container">
          {PRODUCT_REVIEW.map((review) => {
            return (
              <div className={styles.review_list_container}>
                <div className={styles.flip_container}>
                  <div className={styles.flipper}>
                    <div className={styles.front}>
                      <div className={styles.reviewer_title}>
                        {review.title}
                      </div>
                      <div className={styles.reviewer_name}>
                        {`by ${review.name}`}{" "}
                      </div>
                    </div>
                    <div className={styles.back}>{review.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div onClick={handleRightClick}>
          <ArrowForwardIosIcon
            fontSize="large"
            className={`${styles.prev_next_button}`}
          />
        </div>
      </div>
    </div>
  );
};

export default LPProductReview;
