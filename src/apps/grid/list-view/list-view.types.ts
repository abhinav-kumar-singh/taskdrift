import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ITasks } from "../../../store/tasks/task.type";
import { SvgIconTypeMap } from "@mui/material";

interface IAccordionHeader {
  taskRepName: string;
  taskCount: number;
  taskRecords: ITasks[];
}

const enum LIST_VIEW_COLUMN_ID {
  SUMMARY = "summary",
  DESCRIPTION = "description",
  ORIGINAL_ESTIMATE = "originalEstimate",
  TYPE = "type",
  ASSIGNED_TO = "assignedTo",
  PRIORITY = "priority",
  ACTION = "action",
}

interface IColumn {
  id: LIST_VIEW_COLUMN_ID;
  title: string;
  width?: number;
  align?: "center" | "inherit" | "justify" | "left" | "right";
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

interface IListAccordionSummary {
  taskRepName: string;
  taskCount: number;
}

interface IListBody {
  taskRecords: ITasks[];
}

export type { IAccordionHeader, IColumn, IListAccordionSummary, IListBody };

export { LIST_VIEW_COLUMN_ID };
