import { ITaskConfig, TaskStatus } from "../../store/tasks/task.type";

enum TaskList {
  TOTAL_TASKS = "total_tasks",
  TODO_TASKS = "todo_tasks",
  PROGRESS_TASKS = "progress_tasks",
  IN_REVIEW_TASKS = "in_review_tasks",
  DONE_TASKS = "done_tasks",
  BACKLOG_TASKS = "backlog_tasks",
}

export const TASK_LIST_COLOR = {
  [TaskList.TOTAL_TASKS]: "rgb(45, 106, 166)",
  [TaskList.TODO_TASKS]: "rgb(185, 78, 101)",
  [TaskList.PROGRESS_TASKS]: "rgb(7, 68, 109)",
  [TaskList.IN_REVIEW_TASKS]: "rgb(187, 166, 112)",
  [TaskList.DONE_TASKS]: "rgb(29, 150, 150)",
  [TaskList.BACKLOG_TASKS]: "rgb(123, 81, 208)",
};

export const TASK_COUNTER_DETAILS_LIST = [
  {
    title: "Total Tasks",
    value: TaskList.TOTAL_TASKS,
  },
  {
    title: "Todo Tasks",
    value: TaskList.TODO_TASKS,
  },
  {
    title: "Progress Tasks",
    value: TaskList.PROGRESS_TASKS,
  },
  {
    title: "In Review Tasks",
    value: TaskList.IN_REVIEW_TASKS,
  },
  {
    title: "Done Tasks",
    value: TaskList.DONE_TASKS,
  },
  {
    title: "Backlog Tasks",
    value: TaskList.BACKLOG_TASKS,
  },
];

export const getTaskLengths = (taskStoreConfig: ITaskConfig[]) => {
  return taskStoreConfig?.reduce(
    (acc, curr) => {
      curr?.tasks?.forEach((task) => {
        acc.total_tasks += 1;
        switch (task?.status) {
          case TaskStatus.TODO:
            acc.todo_tasks += 1;
            break;
          case TaskStatus.BACKLOG:
            acc.backlog_tasks += 1;
            break;
          case TaskStatus.PROGRESS:
            acc.progress_tasks += 1;
            break;
          case TaskStatus.DONE:
            acc.done_tasks += 1;
            break;
          case TaskStatus.IN_REVIEW:
            acc.in_review_tasks += 1;
            break;
          default:
            break;
        }
      });
      return acc;
    },
    {
      total_tasks: 0,
      todo_tasks: 0,
      backlog_tasks: 0,
      progress_tasks: 0,
      done_tasks: 0,
      in_review_tasks: 0,
    }
  );
};
