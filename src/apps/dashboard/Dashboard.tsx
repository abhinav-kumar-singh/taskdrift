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

const Dashboard = () => {
  const [loc, setLocation] = useLocation();
  console.log("🚀 ~ Dashboard ~ loc:", loc);
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
              <TopHeader />
            </div>
            <MidSection />
            <div className={styles.filter_section}>
              <Filters />
            </div>
            <div className={styles.grid_section}>
              <GridLayout />
            </div>
          </>
        );
      }
      case APP_ROUTES.HOME: {
        return <Home />;
      }
      case APP_ROUTES.SETTING: {
        return <Setting />;
      }
      default: {
        return <Home />;
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <div className={styles.profile_section}>
          <UserInfo />
        </div>
        <div className={styles.main_menu}>
          <Mainmenu />
        </div>
        <div>
          <DashboardPages />
        </div>
        <div>
          <Upgrade />
        </div>
      </div>
      <div className={styles.right_container}>{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
