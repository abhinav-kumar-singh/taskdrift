import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import styles from "./product-info-navigation.module.css";
import NavigationIcon from "@mui/icons-material/Navigation";
import { LANDING_PAGE_LINKS } from "../../common/constants/landing-page-links";

const ProductInfoNavigation = (): JSX.Element => {
  const handleBackToTop = () => {
    const element = document.getElementById(LANDING_PAGE_LINKS.BACK_TO_TOP);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.product_name}>
        <div
          onClick={handleBackToTop}
          className={styles.top_top}
          id="back-to-top"
        >
          <NavigationIcon />
        </div>
        <div>Task Drift</div>
      </div>
      <div className={styles.connect_links}>
        <div
          className={styles.link}
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/abhinav-singh-602934267/",
              "_blank"
            );
          }}
        >
          <LinkedInIcon />
        </div>
        <div className={styles.link}>
          <InstagramIcon />
        </div>
        <div className={styles.link}>
          <FacebookIcon />
        </div>
        <div className={styles.link}>
          <XIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductInfoNavigation;
