import React from "react";
import styles from "../../setting.module.css";
import { PRICING_LIST } from "../../utils";
import ButtonField from "../../../../common/component-lib/button-field/ButtonField";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  setMembershipType,
  setUserBoardLimit,
  setUserDayTaskLimit,
  setUserTasksLimit,
  useSettingStore,
} from "../../../../store";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { PricingBucket } from "../../../../store/setting/setting.type";
import { useTranslation } from "react-i18next";
import { USER_META_DATA } from "../../../../common/constants/user-info";

const Pricing = (): JSX.Element => {
  const { t } = useTranslation();
  const { setPricing, settingConfig } = useSettingStore();
  const selectedPriceBucket = settingConfig?.pricing?.selectedPriceBucket;

  return (
    <div>
      <div className={styles.pricing_container}>
        <div className={styles.pricing_plan_header}>
          {t("Choose Your Plan")}
        </div>
        <div className={styles.pricing_plan_description}>
          {t("Unlock endless possibilities")}
        </div>
      </div>

      <div className={styles.pricing_plan_list_container}>
        {PRICING_LIST?.map((item) => {
          return (
            <div className={styles.pricing_plan_individual_list}>
              <div>
                <div className={styles.banner_container}>
                  {item?.value === PricingBucket.PREMIUM ? (
                    <div className={styles.banner}>Most Popular</div>
                  ) : null}
                </div>
                <div
                  className={styles.pricing_plan_individual_title}
                  style={{ color: item.colorAssociated }}>
                  <div>{t(item?.title)}</div>
                </div>
                <div className={styles.pricing_plan_individual_description}>
                  {t(item?.description)}
                </div>
              </div>

              <div className={styles.container}>
                <div className={styles.pricing_plan_individual_price_container}>
                  <div className={styles.pricing_plan_individual_price_symbol}>
                    &#8377;
                  </div>
                  <div className={styles.pricing_plan_individual_price}>
                    {item?.price}
                  </div>
                </div>
                <div className={styles.button_container}>
                  {selectedPriceBucket !== item?.value ? (
                    <ButtonField
                      text={
                        selectedPriceBucket === item?.value
                          ? ""
                          : t("Get Started, (monthly)")
                      }
                      variant="contained"
                      onClick={() => {
                        setPricing(item?.value);
                        setMembershipType(item.value);
                        setUserBoardLimit(
                          USER_META_DATA[item.value].DashboardLimit
                        );
                        setUserTasksLimit(USER_META_DATA[item.value].TaskLimit);
                        setUserDayTaskLimit(
                          USER_META_DATA[item.value].TaskLimitPerDay
                        );
                      }}
                      isDisabled={selectedPriceBucket === item?.value}
                    />
                  ) : (
                    <div className={styles.check_icon_container}>
                      {selectedPriceBucket === item?.value ? (
                        <TaskAltIcon
                          sx={{ fontSize: "40px", color: item.colorAssociated }}
                        />
                      ) : null}
                    </div>
                  )}
                </div>
                <div className={styles.features_container}>
                  {item?.features?.map((feature) => {
                    return (
                      <div className={styles.feature}>
                        <div className={styles.feature_icon_container}>
                          <VerifiedIcon
                            style={{ color: item.colorAssociated }}
                          />
                          <div>{t(feature)}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
