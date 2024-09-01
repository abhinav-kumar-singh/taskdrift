import { useLocation } from "wouter";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  IDashboardConfig,
  IDashboardStore,
} from "../../store/dashboard/dash-board.type";
import { setSelectedDartboardId, useDashboardStore } from "../../store";
import styles from "./dashboard-pages.module.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { setIsDefaultDashboard } from "../../store";
import { APP_ROUTES } from "../../common/constants/app-routes";
import AccordionField from "../../common/component-lib/accordion-field";
import { useTranslation } from "react-i18next";

const DashboardPages = (): JSX.Element => {
  const [loc] = useLocation();

  const { t } = useTranslation();

  const disableAccordionForCertainPages = [APP_ROUTES.HOME, APP_ROUTES.SETTING];

  const dashBoardDetails = useDashboardStore() as IDashboardStore;
  const config = dashBoardDetails?.dashBoardConfig;
  const defaultDashboardId = dashBoardDetails?.selectedDashBoardId;

  const handlePageSelect = (item: IDashboardConfig): void => {
    setSelectedDartboardId(item?.dashboardId || "");
  };

  const handleSetDefaultDashBoard = (boardId: string): void => {
    setIsDefaultDashboard(boardId);
  };

  return (
    <AccordionField
      expandIcon={
        <ExpandMoreIcon sx={{ color: "rgb(var(--primary-color))" }} />
      }
      isDefaultExpanded
      accordionStyle={{
        display: disableAccordionForCertainPages.includes(loc)
          ? "none"
          : "b;lock",
        boxShadow: "none",
        backgroundColor: "rgb(var(--background-1))",
      }}
      accordionSummaryStyle={{
        minHeight: "0px !important",
        height: "45px",
      }}
      accordionSummaryChild={
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "12px",
            position: "relative",
            right: "10px",
            color: "rgb(var(--primary-color))",
          }}>
          {t("DASHBOARD PAGES")}
        </Typography>
      }
      accordionChild={
        <div className={styles.dashboard_pages_container}>
          {config?.map((item) => {
            return (
              <div
                className={`${styles.board_name_container} ${
                  defaultDashboardId === item?.dashboardId
                    ? styles.selected_board
                    : ""
                }`}
                key={item.dashboardId}>
                <div
                  onClick={() => handlePageSelect(item)}
                  className={styles.board_icon_name_container}>
                  <div className={styles.board_icon}>
                    <div>{item?.name?.[0]?.toUpperCase()}</div>
                  </div>
                  <div className={styles.board_name} title={item?.name}>
                    {item?.name}
                  </div>
                </div>
                <div
                  onClick={() => handleSetDefaultDashBoard(item?.dashboardId)}>
                  <StarBorderIcon
                    sx={{
                      color: `${
                        item?.isDefault ? "rgb(var(--background-2))" : ""
                      }`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      }
    />
  );
};

export default DashboardPages;
