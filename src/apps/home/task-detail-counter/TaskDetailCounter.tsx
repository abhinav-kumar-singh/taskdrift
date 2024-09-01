import React from "react";
import {
  TASK_COUNTER_DETAILS_LIST,
  TASK_LIST_COLOR,
  getTaskLengths,
} from "../utils";
import styles from "../home.module.css";
import { useTaskStore } from "../../../store";
import { useTranslation } from "react-i18next";

const TaskDetailCounter = (): JSX.Element => {
  const { taskStoreConfig } = useTaskStore();

  const { t } = useTranslation();

  const taskCountsList = getTaskLengths(taskStoreConfig);

  return (
    <div className={styles.task_details_counter}>
      {TASK_COUNTER_DETAILS_LIST.map((item) => {
        return (
          <div className={styles.list_counter}>
            <div
              className={styles.list_title}
              style={{
                borderLeft: `6px solid ${TASK_LIST_COLOR[item?.value]}`,
              }}>
              {t(item?.title)}
            </div>
            <div className={styles.list_value}>
              {taskCountsList[item?.value]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskDetailCounter;
