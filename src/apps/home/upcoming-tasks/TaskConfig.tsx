import React, { useState } from "react";
import { ITasks } from "../../../store/tasks/task.type";
import styles from "../home.module.css";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import DeleteIcon from "@mui/icons-material/Delete";
import { getFormattedEstimatedDate } from "../../../common/helpers/helpers";

interface ITaskConfig {
  taskConfig: ITasks;
}

const TaskConfig = (props: ITaskConfig): JSX.Element => {
  const { taskConfig } = props;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.task_config_container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className={styles.first_column}>
        <div className={styles.task_config_icon}>
          <AssignmentLateIcon fontSize="large" />
        </div>
        <div className={styles.task_config_info}>
          <div className={styles.task_summary}>{taskConfig.summary}</div>
          <div className={styles.task_title}>{taskConfig.title}</div>
        </div>
      </div>
      <div className={styles.second_column}>
        <div className={styles.task_config_date}>
          Due on{" "}
          <span className={styles.formatted_date}>
            {getFormattedEstimatedDate(taskConfig?.originalEstimate)}
          </span>
        </div>
        <div
          style={{ visibility: isHovered ? "visible" : "hidden" }}
          className={styles.delete_icon}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default TaskConfig;
