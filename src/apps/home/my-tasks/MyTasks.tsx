import React, { useEffect, useState } from "react";
import styles from "../home.module.css";
import { useTranslation } from "react-i18next";
import { useTaskStore, useUserDataStore } from "../../../store";
import { ITasks } from "../../../store/tasks/task.type";
import TaskConfig from "../upcoming-tasks/TaskConfig";

const MyTasks = (): JSX.Element => {
  const { t } = useTranslation();

  const allTasks = useTaskStore();
  const allDashboardsTasks = allTasks?.taskStoreConfig;

  const [tasksList, setTasksList] = useState<ITasks[]>([]);

  useEffect(() => {
    const tasks: ITasks[] = [];
    allDashboardsTasks?.forEach((taskConfig) => {
      taskConfig?.tasks?.forEach((task) => {
        if (task?.assignedTo === userName) {
          tasks.push(task);
        }
      });
    });
    setTasksList(tasks);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userName = useUserDataStore()?.userName?.split(" ")[0];

  return (
    <div className={styles.my_tasks_container}>
      <div className={styles.my_tasks_text}>{t("MY TASKS")}</div>
      <div className={styles.task_list}>
        {tasksList?.map((data) => (
          <TaskConfig taskConfig={data} key={data?.id} />
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
