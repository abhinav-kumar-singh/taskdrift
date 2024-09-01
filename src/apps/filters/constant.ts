import TableChartIcon from "@mui/icons-material/TableChart";
import ReorderIcon from "@mui/icons-material/Reorder";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import { DashBoardViewType } from "../../store/dashboard/dash-board.type";

export const VIEW = [
  {
    label: "Table",
    value: DashBoardViewType.TABLE,
    icon: TableChartIcon,
  },
  {
    label: "List",
    value: DashBoardViewType.LIST,
    icon: ReorderIcon,
  },
  {
    label: "Activity Log",
    value: DashBoardViewType.ACTIVITY_LOG,
    icon: HistoryToggleOffIcon,
  },
];
