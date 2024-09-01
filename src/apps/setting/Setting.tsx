import SettingHeader from "./setting-header";
import SettingContext from "./setting-context";
import styles from "./setting.module.css";

const Setting = (): JSX.Element => {
  return (
    <div className={styles.setting_page_container}>
      <div className={styles.setting_header}>
        <SettingHeader />
      </div>
      <div className={styles.setting_context}>
        <SettingContext />
      </div>
    </div>
  );
};

export default Setting;
