import AdsClickIcon from "@mui/icons-material/AdsClick";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import AddIcon from "@mui/icons-material/Add";
import { IColumn, LIST_VIEW_COLUMN_ID } from "./list-view.types";

const LIST_COLUMNS: IColumn[] = [
  {
    id: LIST_VIEW_COLUMN_ID.SUMMARY,
    title: "Task Name",
    width: 200,
    align: "left",
    icon: AdsClickIcon,
  },
  {
    id: LIST_VIEW_COLUMN_ID.DESCRIPTION,
    title: "Description",
    width: 200,
    align: "left",
    icon: ScatterPlotIcon,
  },
  {
    id: LIST_VIEW_COLUMN_ID.ORIGINAL_ESTIMATE,
    title: "Estimate",
    width: 180,
    align: "left",
    icon: CalendarMonthIcon,
  },
  {
    id: LIST_VIEW_COLUMN_ID.TYPE,
    title: "Type",
    width: 170,
    align: "left",
    icon: FormatAlignLeftIcon,
  },
  {
    id: LIST_VIEW_COLUMN_ID.ASSIGNED_TO,
    title: "Assignee",
    width: 150,
    align: "left",
    icon: AssignmentIndIcon,
  },
  {
    id: LIST_VIEW_COLUMN_ID.PRIORITY,
    title: "Priority",
    width: 100,
    align: "left",
    icon: PriorityHighIcon,
  },
  {
    id: LIST_VIEW_COLUMN_ID.ACTION,
    title: "",
    width: 30,
    align: "center",
    icon: AddIcon,
  },
];

export { LIST_COLUMNS };
