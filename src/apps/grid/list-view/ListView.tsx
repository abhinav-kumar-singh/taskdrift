import React, { useEffect, useState } from "react";
import { useDashboardStore } from "../../../store";
import { IDashboardStore } from "../../../store/dashboard/dash-board.type";
import { useTaskStore } from "../../../store";
import { ITasks, TaskStatus } from "../../../store/tasks/task.type";
import ListViewAccordion from "./ListViewAccordion";

interface ITaskRecordsConfig {
  name: string;
  task: ITasks[];
}

const ListView = (): JSX.Element => {
  const dashBoardDetails = useDashboardStore() as IDashboardStore;
  const selectedDashBoardId = dashBoardDetails?.selectedDashBoardId;
  const { taskStoreConfig } = useTaskStore();
  const tasks =
    taskStoreConfig.find((data) => data.dashBoardId === selectedDashBoardId)
      ?.tasks || [];

  const assignedToFilter =
    taskStoreConfig?.find((data) => data.dashBoardId === selectedDashBoardId)
      ?.assignedToFilter || "";

  const [taskRecordsConfig, setTaskRecordsConfig] = useState<
    ITaskRecordsConfig[]
  >([]);

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

      const newObj = [
        {
          name: "To Do",
          task: newToDoTasks,
        },
        {
          name: "On Progress",
          task: newProgressTasks,
        },
        {
          name: "In Review",
          task: newInReviewTasks,
        },
        {
          name: "Done",
          task: newDoneTasks,
        },
        {
          name: "Backlog",
          task: newBacklogTasks,
        },
      ];
      setTaskRecordsConfig(newObj);
    };
    categoryTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks?.length, assignedToFilter]);

  return (
    <>
      {taskRecordsConfig?.map((taskConfig) => {
        return (
          <ListViewAccordion
            taskRepName={taskConfig?.name}
            taskRecords={taskConfig?.task}
            taskCount={taskConfig?.task?.length}
          />
        );
      })}
    </>
  );
};

export default ListView;
