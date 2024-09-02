import { getItem } from "../../common/component-lib/storage-manager/storage";
import { StorageKey } from "../../common/component-lib/storage-manager/storage.types";

import styles from "./landing-page.module.css";
import { useLocation } from "wouter";
import LPTopSection from "./landing-page-top-section";
import LPMiddleSection from "./landing-page-middle-section";
import LPProductDescription from "./landing-page-product-description";
import LPProductReview from "./landing-page-product-review";
import Pricing from "../setting/setting-context/pricing";
import Contact from "../setting/setting-context/contact";
import ProductInfoNavigation from "../product-info-navigation";
import { LANDING_PAGE_LINKS } from "../../common/constants/landing-page-links";
import { HeaderOptions } from "./landing-page.types";

const LandingPage = () => {
  // const [, setLocation] = useLocation();

  // const dashBoardDetails = getItem(StorageKey.DASH_BOARD_DETAILS);

  // if (dashBoardDetails) setLocation("/dashboard");

  return (
    <div
      className={styles.landing_page_container}
      id={LANDING_PAGE_LINKS.BACK_TO_TOP}>
      <div className={`${styles.top_section}`} id="LDTopSection">
        <LPTopSection />
      </div>
      <div className={`${styles.middle_section} ${styles.common_design}`}>
        <LPMiddleSection />
      </div>
      <div className={`${styles.product_description} ${styles.common_design}`}>
        <LPProductDescription />
      </div>
      <div className={styles.review_section}>
        <LPProductReview />
      </div>
      <div
        className={styles.pricing_container}
        id={LANDING_PAGE_LINKS[HeaderOptions.PRICING]}>
        <Pricing />
      </div>

      <div id={LANDING_PAGE_LINKS[HeaderOptions.CONTACT_US]}>
        <Contact customStyle={styles.contact_container as string} />
      </div>
      <div>
        <ProductInfoNavigation />
      </div>
    </div>
  );
};

export default LandingPage;
