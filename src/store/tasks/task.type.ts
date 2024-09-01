import { Dayjs } from "dayjs";

enum TaskType {
  INDEPENDENT_BUG = "independent bug",
  EPIC = "epic",
  STORY = "story",
  SECURITY_BUG = "security bug",
  AD_HOC = "ad hoc",
  SUPPORT = "support",
  PERFORMANCE_IMPROVEMENT = "performance improvement",
  ANALYSIS_TASK = "analysis task",
}

enum TaskStatus {
  BACKLOG = "backlog",
  TODO = "todo",
  PROGRESS = "progress",
  DONE = "done",
  IN_REVIEW = "in review",
}

interface ITasks {
  id: string;
  title: string;
  type: TaskType;
  status: TaskStatus;
  summary: string;
  priority: string[];
  description: string;
  labels: string[];
  createdDate: string;
  originalEstimate: Dayjs | null;
  assignedTo: string;
}

interface ITaskConfig {
  dashBoardId: string;
  tasks: ITasks[];
}

interface ITaskStoreConfig {
  taskStoreId: string;
  taskStoreConfig: ITaskConfig[];
  setTaskStoreConfig: (newTask: ITasks, dashBoardId: string) => void;
}

export type { ITasks, ITaskConfig, ITaskStoreConfig };

export { TaskType, TaskStatus };
