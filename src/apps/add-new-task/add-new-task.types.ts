import { Dayjs } from "dayjs";
import { ITasks } from "../../store/tasks/task.type";

enum MODE {
  ADD = "add",
  EDIT = "edit",
  REVIEW = "review",
}

interface IAddNewTask {
  openAddNewTaskModal: boolean;
  setOpenAddNewTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
  mode?: MODE;
  selectedTask?: ITasks;
  disableFields?: string[];
}

interface ITaskObj {
  id: string;
  title: string;
  type: string;
  status: string;
  summary: string;
  priority: string[];
  description: string;
  labels: string;
  createdDate: string;
  originalEstimate: Dayjs | null;
  assignedTo: string;
}

export type { IAddNewTask, ITaskObj };

export { MODE };
