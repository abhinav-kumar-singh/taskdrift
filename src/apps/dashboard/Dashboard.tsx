import { useEffect } from "react";
import { useLocation } from "wouter";
import styles from "./dashboard.module.css";
import UserInfo from "../user-info";
import Mainmenu from "../main-menu";
import DashboardPages from "../dashboard-pages";
import TopHeader from "../top-header";
import { getItem } from "../../common/component-lib/storage-manager/storage";
import { StorageKey } from "../../common/component-lib/storage-manager/storage.types";
import { IDashboardStore } from "../../store/dashboard/dash-board.type";
import Filters from "../filters";
import GridLayout from "../grid";
import MidSection from "./mid-section";
import Upgrade from "../upgrade";
import { APP_ROUTES } from "../../common/constants/app-routes";
import Home from "../home";
import Setting from "../setting";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearData from "../clear-data";
import Shimmer from "../../common/component-lib/shimmer/Shimmer";

const Dashboard = () => {
  const [loc, setLocation] = useLocation();

  const dashBoardDetails = getItem(
    StorageKey.DASH_BOARD_DETAILS
  ) as IDashboardStore;

  useEffect(() => {
    if (!dashBoardDetails) setLocation("/");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = (): JSX.Element => {
    switch (loc) {
      case APP_ROUTES.DASHBOARD: {
        return (
          <>
            <div className={styles.top_header}>
              <TopHeader
                suspenseFallback={<Shimmer height="50px" width="100%" />}
              />
            </div>
            <MidSection
              suspenseFallback={<Shimmer height="400px" width="100%" />}
            />
            <div className={styles.filter_section}>
              <Filters
                suspenseFallback={<Shimmer height="70px" width="100%" />}
              />
            </div>
            <div className={styles.grid_section}>
              <GridLayout
                suspenseFallback={<Shimmer height="400px" width="100%" />}
              />
            </div>
          </>
        );
      }
      case APP_ROUTES.HOME: {
        return (
          <Home suspenseFallback={<Shimmer height="100%" width="100%" />} />
        );
      }
      case APP_ROUTES.SETTING: {
        return (
          <Setting suspenseFallback={<Shimmer height="100%" width="100%" />} />
        );
      }
      default: {
        return (
          <Home suspenseFallback={<Shimmer height="100%" width="100%" />} />
        );
      }
    }
  };

  const handleGoBack = () => {
    setLocation("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <div className={styles.go_back} onClick={handleGoBack}>
          <ArrowBackIcon />
        </div>
        <div className={styles.profile_section}>
          <UserInfo suspenseFallback={<Shimmer height="50px" width="100%" />} />
        </div>
        <div className={styles.main_menu}>
          <Mainmenu
            suspenseFallback={<Shimmer height="170px" width="100%" />}
          />
        </div>
        <div>
          <DashboardPages
            suspenseFallback={<Shimmer height="320px" width="100%" />}
          />
        </div>
        <div>
          <Upgrade suspenseFallback={<Shimmer height="120px" width="100%" />} />
        </div>
        <div className={styles.clear_all}>
          <ClearData />
        </div>
      </div>
      <div className={styles.right_container}>{renderContent()}</div>
    </div>
  );
};

export default Dashboard;