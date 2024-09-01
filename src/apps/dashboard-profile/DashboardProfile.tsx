import { useDashboardStore } from "../../store";
import { IDashboardStore } from "../../store/dashboard/dash-board.type";
import styles from "./dashboard-profile.module.css";
import { getSelectedDashboardConfig } from "../../common/helpers/helpers";
const DashboardProfile = (): JSX.Element => {
  const dashBoardDetails = useDashboardStore() as IDashboardStore;

  const selectedDashBoard = getSelectedDashboardConfig(dashBoardDetails);

  return (
    <div className={styles.profile_container}>
      <div className={styles.profile}>
        <div>
          <div className={styles.name} title={selectedDashBoard?.name}>
            {selectedDashBoard?.name}
          </div>
          <div
            className={styles.description}
            title={selectedDashBoard?.description}>
            {selectedDashBoard?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
