import React from "react";
import { useActivityLog, useDashboardStore } from "../../../store";
import LogRenderer from "./LogRenderer";
import styles from "./activity-log.module.css";
import { IDashboardStore } from "../../../store/dashboard/dash-board.type";

const ActivityLog = (): JSX.Element => {
  const activityLog = useActivityLog();

  const dashBoardDetails = useDashboardStore() as IDashboardStore;
  const selectedDashBoardId = dashBoardDetails?.selectedDashBoardId;

  const selectedActivityLog = activityLog?.activityLogConfig?.find(
    (data) => data?.dashboardId === selectedDashBoardId
  );

  return (
    <div className={styles.activity_log_container}>
      <div
        className={
          !activityLog?.activityLogConfig?.length
            ? styles.no_activity_log_container
            : ""
        }>
        {selectedActivityLog?.activityLog?.length ? (
          selectedActivityLog?.activityLog?.map((activity) => {
            return <LogRenderer activity={activity} key={activity?.logId} />;
          })
        ) : (
          <div className={styles.no_activity_log}>No Log To Display</div>
        )}
      </div>
    </div>
  );
};

export default ActivityLog;
