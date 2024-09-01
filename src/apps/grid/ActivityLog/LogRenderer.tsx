import React, { useState } from "react";
import {
  ActivityType,
  IActivityLogConfig,
} from "../../../store/activity/activity-log.types";
import styles from "./activity-log.module.css";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDashboardStore } from "../../../store";
import { IDashboardStore } from "../../../store/dashboard/dash-board.type";
import { useTaskStore } from "../../../store";
import { getActivityRenderer, getFormattedDateTime } from "./utils";
import { setActivityLogFilteredData } from "../../../store";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";

interface ILogRenderer {
  activity: IActivityLogConfig;
}

const LogRenderer = (props: ILogRenderer): JSX.Element => {
  const { activity } = props;
  const dashBoardDetails = useDashboardStore() as IDashboardStore;
  const selectedDashBoardId = dashBoardDetails?.selectedDashBoardId;
  const { taskStoreConfig } = useTaskStore();
  const tasksRecord =
    taskStoreConfig.find((data) => data.dashBoardId === selectedDashBoardId)
      ?.tasks || [];
  const selectedTask = tasksRecord?.find(
    (task) => task?.id === activity?.relatedTaskId
  );
  const [isItemHovered, setIsItemHovered] = useState(false);

  const getIcon = () => {
    switch (activity?.activityType) {
      case ActivityType.CREATE:
        return <AddCircleIcon sx={{ color: "rgb(var(--background-2))" }} />;
      case ActivityType.UPDATE:
        return <UpdateIcon />;
      case ActivityType.DELETE:
        return <DeleteIcon />;
      default:
        return <PanoramaFishEyeIcon />;
    }
  };

  return (
    <div className={styles.log_rendered_container}>
      <div className={styles.time}>
        {getFormattedDateTime(activity?.logTime)}
      </div>
      <div className={styles.activity_timeline}></div>
      <div className={styles.bottom_identifier}>{getIcon()}</div>
      <div
        className={styles.timeline_detail}
        onMouseEnter={() => setIsItemHovered(true)}
        onMouseLeave={() => setIsItemHovered(false)}>
        <div>
          Task {getActivityRenderer(activity?.activityType)} with summary
          <span className={styles.log_details}>{selectedTask?.summary}</span>
          and description
          <span className={styles.log_details}>
            {selectedTask?.description}
          </span>
        </div>
        <div className={styles.task_action_container}>
          <div
            className={styles.task_assignee}
            title={selectedTask?.assignedTo}>
            {selectedTask?.assignedTo[0]}
          </div>
          <div
            className={styles.delete_button}
            style={{ visibility: isItemHovered ? "visible" : "hidden" }}
            onClick={() =>
              setActivityLogFilteredData(selectedDashBoardId, activity?.logId)
            }>
            <DeleteForeverIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogRenderer;
