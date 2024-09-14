import Shimmer from "../../common/component-lib/shimmer";
import { useDashboardStore } from "../../store";
import {
  DashBoardViewType,
  IDashboardStore,
} from "../../store/dashboard/dash-board.type";
import ActivityLog from "./ActivityLog";
import GridView from "./grid-view";
import ListView from "./list-view";

const GridLayout = (): JSX.Element => {
  const dashBoardDetails = useDashboardStore() as IDashboardStore;
  const selectedDashBoardId = dashBoardDetails?.selectedDashBoardId;
  // eslint-disable-next-line array-callback-return
  const selectedView = dashBoardDetails?.dashBoardConfig?.find((data) => {
    if (data?.dashboardId === selectedDashBoardId)
      return data?.dashBoardViewType;
  })?.dashBoardViewType;

  const renderGridLayout = (): JSX.Element => {
    switch (selectedView) {
      case DashBoardViewType.TABLE:
        return (
          <GridView
            suspenseFallback={<Shimmer height="400px" width="100%" />}
          />
        );
      case DashBoardViewType.LIST:
        return (
          <ListView
            suspenseFallback={<Shimmer height="400px" width="100%" />}
          />
        );
      case DashBoardViewType.ACTIVITY_LOG:
        return (
          <ActivityLog
            suspenseFallback={<Shimmer height="400px" width="100%" />}
          />
        );
      default:
        return <GridView />;
    }
  };

  return <>{renderGridLayout()}</>;
};

export default GridLayout;