import { TaskStatus, TaskType } from "../../store/tasks/task.type";

const TASK_STATUS = [
  {
    title: "To Do",
    value: TaskStatus.TODO,
  },
  {
    title: "On Progress",
    value: TaskStatus.PROGRESS,
  },
  {
    title: "In Review",
    value: TaskStatus.IN_REVIEW,
  },
  {
    title: "Done",
    value: TaskStatus.DONE,
  },
  {
    title: "Backlog",
    value: TaskStatus.BACKLOG,
  },
];

const TASK_TYPES = [
  {
    title: "Independent Bug",
    value: TaskType.INDEPENDENT_BUG,
  },
  {
    title: "Epic",
    value: TaskType.EPIC,
  },
  {
    title: "Story",
    value: TaskType.STORY,
  },
  {
    title: "Security Bug",
    value: TaskType.SECURITY_BUG,
  },
  {
    title: "AD-HOCK",
    value: TaskType.AD_HOC,
  },
  {
    title: "Support",
    value: TaskType.SUPPORT,
  },
  {
    title: "Performance Improvement",
    value: TaskType.PERFORMANCE_IMPROVEMENT,
  },
  {
    title: "Analysis Task",
    value: TaskType.ANALYSIS_TASK,
  },
];

const PRIORITY_COLOR = {
  urgent: "rgb(var(--urgent))",
  high: "rgb(var(--high))",
  medium: "rgb(var(--medium))",
  low: "rgb(var(--cool))",
  none: "rgb(var(--good))",
};

const USER_BOARD_TAG_COLORS = {
  frontend: "rgb(255, 167, 135)",
  backend: "rgb(119, 155, 184)",
  fullstack: "rgb(203, 169, 235)",
  devops: "rgb(101, 181, 177)",
  design: "rgb(255, 201, 228)",
  marketing: "rgb(255, 243, 176)",
  product: "rgb(169, 214, 169)",
  management: "rgb(255, 185, 56)",
  sales: "rgb(255, 203, 184)",
  engineering: "rgb(111, 111, 209)",
  hr: "rgb(255, 56, 162)",
  legal: "rgb(138, 73, 73)",
  finance: "rgb(66, 140, 98)",
  admin: "rgb(161, 124, 124)",
  operations: "rgb(96, 207, 209)",
  customer_success: "rgb(255, 218, 185)",
  customer_service: "rgb(148, 146, 130)",
  other: "rgb(211, 211, 211)",
};

const TASK_TYPE_COLORS = {
  "independent bug": "rgb(255, 69, 0)",
  epic: "rgb(75, 0, 130)",
  story: "rgb(0, 128, 128)",
  "security bug": "rgb(220, 20, 60)",
  "ad hoc": "rgb(173, 149, 104)",
  support: "rgb(30, 144, 255)",
  "performance improvement": "rgb(50, 205, 50)",
  "analysis task": "rgb(255, 215, 0)",
};

const USER_CONTEXT_TAG_COLORS = {
  personal: "rgb(102, 205, 170)",
  work: "rgb(70, 130, 180)",
  other: "rgb(255, 165, 0)",
};

export {
  TASK_STATUS,
  TASK_TYPES,
  PRIORITY_COLOR,
  USER_BOARD_TAG_COLORS,
  TASK_TYPE_COLORS,
  USER_CONTEXT_TAG_COLORS,
};
