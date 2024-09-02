import { useEffect, useState } from "react";
import { useDashboardStore } from "../../store";
import { IDashboardStore } from "../../store/dashboard/dash-board.type";
import { useTaskStore } from "../../store";
import { ITasks, TaskStatus } from "../../store/tasks/task.type";
import { TASK_STATUS } from "../../common/constants/task-create";

const useGrid = () => {
  const dashBoardDetails = useDashboardStore() as IDashboardStore;
  const selectedDashBoardId = dashBoardDetails?.selectedDashBoardId;
  const { taskStoreConfig } = useTaskStore();
  const tasks =
    taskStoreConfig.find((data) => data.dashBoardId === selectedDashBoardId)
      ?.tasks || [];

  const assignedToFilter =
    taskStoreConfig?.find((data) => data.dashBoardId === selectedDashBoardId)
      ?.assignedToFilter || "";

  const [toDoTasks, setToDoTasks] = useState<ITasks[]>([]);
  const [progressTasks, setProgressTasks] = useState<ITasks[]>([]);
  const [inReviewTasks, setInReviewTasks] = useState<ITasks[]>([]);
  const [doneTasks, setDoneTasks] = useState<ITasks[]>([]);
  const [backlogTasks, setBacklogTasks] = useState<ITasks[]>([]);

  useEffect(() => {
    const categoryTasks = (): void => {
      const newToDoTasks: ITasks[] = [];
      const newProgressTasks: ITasks[] = [];
      const newInReviewTasks: ITasks[] = [];
      const newDoneTasks: ITasks[] = [];
      const newBacklogTasks: ITasks[] = [];

      tasks?.forEach((task) => {
        switch (task?.status) {
          case TaskStatus.TODO: {
            if (!assignedToFilter) {
              newToDoTasks.push(task);
            } else if (
              assignedToFilter &&
              task?.assignedTo === assignedToFilter
            ) {
              newToDoTasks.push(task);
            }
            break;
          }
          case TaskStatus.PROGRESS: {
            if (!assignedToFilter) {
              newProgressTasks.push(task);
            } else if (
              assignedToFilter &&
              task?.assignedTo === assignedToFilter
            ) {
              newProgressTasks.push(task);
            }
            break;
          }
          case TaskStatus.IN_REVIEW: {
            if (!assignedToFilter) {
              newInReviewTasks.push(task);
            } else if (
              assignedToFilter &&
              task?.assignedTo === assignedToFilter
            ) {
              newInReviewTasks.push(task);
            }
            break;
          }
          case TaskStatus.DONE: {
            if (!assignedToFilter) {
              newDoneTasks.push(task);
            } else if (
              assignedToFilter &&
              task?.assignedTo === assignedToFilter
            ) {
              newDoneTasks.push(task);
            }
            break;
          }
          case TaskStatus.BACKLOG: {
            if (!assignedToFilter) {
              newBacklogTasks.push(task);
            } else if (
              assignedToFilter &&
              task?.assignedTo === assignedToFilter
            ) {
              newBacklogTasks.push(task);
            }
            break;
          }
          default:
            break;
        }
      });

      setToDoTasks(newToDoTasks);
      setProgressTasks(newProgressTasks);
      setInReviewTasks(newInReviewTasks);
      setDoneTasks(newDoneTasks);
      setBacklogTasks(newBacklogTasks);
    };

    categoryTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks?.length, assignedToFilter]);

  return {
    toDoTasks,
    progressTasks,
    inReviewTasks,
    doneTasks,
    backlogTasks,
    tasks,
    TASK_STATUS,
  };
};

export default useGrid;
