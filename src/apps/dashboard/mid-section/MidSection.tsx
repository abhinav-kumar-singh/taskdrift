import styles from "../dashboard.module.css";
import DashboardProfile from "../../dashboard-profile";
import DashBoardInfo from "../../dashboard-info";
import { useDashboardStore } from "../../../store";
import { IDashboardStore } from "../../../store/dashboard/dash-board.type";

const MidSection = (): JSX.Element => {
  const dashBoardDetails = useDashboardStore() as IDashboardStore;
  const selectedDashBoardId = dashBoardDetails?.selectedDashBoardId;
  const isMidSectionOpen = dashBoardDetails?.dashBoardConfig?.find(
    (config) => config?.dashboardId === selectedDashBoardId
  )?.showMidSection;

  return (
    <div>
      <div
        className={`${styles.mid_section} ${
          isMidSectionOpen ? styles.open : styles.hide
        }`}>
        <div className={styles.dashboard_profile}>
          <DashboardProfile />
        </div>
        <div className={styles.dashboard_info}>
          <DashBoardInfo />
        </div>
      </div>
    </div>
  );
};

export default MidSection;
