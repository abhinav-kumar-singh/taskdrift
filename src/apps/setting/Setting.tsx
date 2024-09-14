import SettingHeader from "./setting-header";
import SettingContext from "./setting-context";
import styles from "./setting.module.css";
import Shimmer from "../../common/component-lib/shimmer";

const Setting = (): JSX.Element => {
  return (
    <div className={styles.setting_page_container}>
      <div className={styles.setting_header}>
        <SettingHeader
          suspenseFallback={<Shimmer height="100%" width="100%" />}
        />
      </div>
      <div className={styles.setting_context}>
        <SettingContext
          suspenseFallback={<Shimmer height="100%" width="100%" />}
        />
      </div>
    </div>
  );
};

export default Setting;
