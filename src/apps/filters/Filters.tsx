import React, { useState } from "react";
import styles from "./filters.module.css";
import { VIEW } from "./constant";
import { useDashboardStore } from "../../store";
import {
  DashBoardViewType,
  IDashboardStore,
} from "../../store/dashboard/dash-board.type";
import { setDashBoardView } from "../../store";
import { getSelectedDashboardConfig } from "../../common/helpers/helpers";
import AddNewTask from "../add-new-task";
import AddIcon from "@mui/icons-material/Add";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { setDashBoardMidSectionVisibility } from "../../store/dashboard/dash-board.store";
import TextFieldComp from "../../common/component-lib/text-field";
import ButtonField from "../../common/component-lib/button-field";
import { useTranslation } from "react-i18next";

const Filters = (): JSX.Element => {
  const { t } = useTranslation();
  const dashBoardDetails = useDashboardStore() as IDashboardStore;
  const selectedDashBoardId = dashBoardDetails?.selectedDashBoardId;

  const isMidSectionOpen = dashBoardDetails?.dashBoardConfig?.find(
    (config) => config?.dashboardId === selectedDashBoardId
  )?.showMidSection;

  const [searchParameter, setSearchParameter] = useState("");

  const selectedDashBoard = getSelectedDashboardConfig(dashBoardDetails);

  const [openAddNewTaskModal, setOpenAddNewTaskModal] = useState(false);

  const handleViewChange = (view: DashBoardViewType) => {
    setDashBoardView(selectedDashBoardId, view);
  };

  const handleMidSectionVisibility = () => {
    setDashBoardMidSectionVisibility(selectedDashBoardId, !isMidSectionOpen);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParameter(event.target.value);
  };

  return (
    <>
      <div className={styles.filter_container}>
        <div className={styles.view_container}>
          <div
            className={styles.expand_contract_icon}
            onClick={handleMidSectionVisibility}>
            {isMidSectionOpen ? <OpenInFullIcon /> : <CloseFullscreenIcon />}
          </div>
          {VIEW?.map((viewOptions) => {
            return (
              <>
                <div
                  className={`${styles.view} ${
                    selectedDashBoard?.dashBoardViewType === viewOptions.value
                      ? styles.active
                      : ""
                  }`}
                  onClick={() => handleViewChange(viewOptions.value)}
                  key={viewOptions.value}>
                  <viewOptions.icon />
                  {t(viewOptions.label)}
                </div>
              </>
            );
          })}
        </div>

        <div className={styles.add_task}>
          <div className={styles.search}>
            <TextFieldComp
              label="Search"
              value={searchParameter}
              onChange={handleSearch}
            />
          </div>
          <ButtonField
            variant="contained"
            startIcon={<AddIcon />}
            text={t("Add New Task")}
            onClick={() => setOpenAddNewTaskModal(true)}
          />
        </div>
      </div>
      {openAddNewTaskModal ? (
        <AddNewTask
          openAddNewTaskModal={openAddNewTaskModal}
          setOpenAddNewTaskModal={setOpenAddNewTaskModal}
        />
      ) : null}
    </>
  );
};

export default Filters;
