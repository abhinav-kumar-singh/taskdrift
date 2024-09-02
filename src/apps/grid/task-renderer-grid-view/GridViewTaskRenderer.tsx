import React from "react";
import { ITasks } from "../../../store/tasks/task.type";
import styles from "../grid.module.css";
import { Divider } from "@mui/material";
import GridAction from "../grid-action";
import {
  PRIORITY_COLOR,
  TASK_TYPE_COLORS,
} from "../../../common/constants/task-create";
import { getFormattedEstimatedDate } from "../../../common/helpers/helpers";

interface IGridViewTaskRenderer {
  taskConfig: ITasks;
}

const GridViewTaskRenderer = (props: IGridViewTaskRenderer): JSX.Element => {
  const { taskConfig } = props;

  return (
    <div className={styles.todo_container}>
      <div className={styles.todo_box}>
        <div className={styles.tag_container}>
          <div className={styles.tag_list}>
            <div
              className={styles.tag_color}
              style={{
                backgroundColor: TASK_TYPE_COLORS[taskConfig?.type],
              }}></div>
            <div className={styles.tags} title={taskConfig?.type}>
              <div className={styles.tag_label}>{taskConfig?.type}</div>
            </div>
            <div
              className={styles.tag_color}
              style={{
                backgroundColor:
                  PRIORITY_COLOR[
                    taskConfig?.priority[0] as keyof typeof PRIORITY_COLOR
                  ],
              }}></div>
            <div className={styles.tags} title={taskConfig?.priority[0]}>
              {taskConfig?.priority}
            </div>
          </div>
          <GridAction
            id={taskConfig?.id || ""}
            taskSummary={taskConfig?.summary}
          />
        </div>
        <div className={styles.todo_header} title={taskConfig?.summary}>
          {taskConfig?.summary}
        </div>
        <div
          className={styles.todo_description}
          title={taskConfig?.description}>
          {taskConfig?.description}
        </div>
        <Divider />
        <div className={styles.bottom_container} title={taskConfig?.assignedTo}>
          <div className={styles.assigned_to}>
            <div>{taskConfig?.assignedTo[0]?.toUpperCase()}</div>
          </div>
          <div>
            Due on {getFormattedEstimatedDate(taskConfig?.originalEstimate)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridViewTaskRenderer;
