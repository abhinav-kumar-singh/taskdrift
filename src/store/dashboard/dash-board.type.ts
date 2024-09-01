import { Dayjs } from "dayjs";

enum DashBoardViewType {
  TABLE = "table",
  LIST = "list",
  ACTIVITY_LOG = "activity_log",
}

interface IDashboardConfig {
  name: string;
  description: string;
  isDefault: boolean;
  projectTags: string[];
  priorityTags: string[];
  contextTags: string[];
  createdDate: string;
  updatedDate: string;
  dashboardId: string;
  dueDate: Dayjs | null;
  dashBoardViewType: DashBoardViewType;
  showMidSection: boolean;
}

interface IDashboardStore {
  id: string;
  userName: string;
  dashBoardConfig: IDashboardConfig[];
  selectedDashBoardId: string;
  setDashBoardConfig: (data: IDashboardConfig) => void;
}

export type { IDashboardStore, IDashboardConfig };

export { DashBoardViewType };
