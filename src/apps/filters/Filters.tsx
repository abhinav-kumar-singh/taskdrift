import React, { useState } from "react";
import styles from "./filters.module.css";
import { VIEW } from "./constant";
import { useDashboardStore, useTaskStore } from "../../store";
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
import Dropdown from "../../common/component-lib/dropdown/Dropdown";
import { SelectChangeEvent } from "@mui/material";
import { MODE } from "../add-new-task/add-new-task.types";

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

  const { taskStoreConfig, setAssignedToFilter } = useTaskStore();

  const currentDashBoardWithTasks = taskStoreConfig?.find((task) => {
    return task?.dashBoardId === selectedDashBoardId;
  });

  const userSelected = currentDashBoardWithTasks?.assignedToFilter;

  let index = 0;

  const userMap = new Map();

  currentDashBoardWithTasks?.tasks?.forEach((item) => {
    if (!userMap.has(item.assignedTo)) {
      userMap.set(item.assignedTo, {
        title: item.assignedTo,
        value: item.assignedTo,
        index: index++,
      });
    }
  });

  const userList = Array.from(userMap.values());

  const handleViewChange = (view: DashBoardViewType) => {
    setDashBoardView(selectedDashBoardId, view);
  };

  const handleMidSectionVisibility = () => {
    setDashBoardMidSectionVisibility(selectedDashBoardId, !isMidSectionOpen);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParameter(event.target.value);
  };

  const handleUserNameFilter = (data: SelectChangeEvent<string | string[]>) => {
    setAssignedToFilter(selectedDashBoardId, data?.target?.value as string);
    console.log(data.target.value);
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
          <Dropdown
            label="Assigned To"
            showLabel
            value={userSelected || ""}
            onChange={handleUserNameFilter}
            dropDownOption={userList || []}
            customStyle={{
              margin: "0px 15px 0px 0px",
            }}
          />

          <div className={styles.search}>
            <TextFieldComp
              label="Search"
              value={searchParameter}
              onChange={handleSearch}
              customStyle={{
                width: "250px",
              }}
            />
          </div>
          <ButtonField
            variant="contained"
            startIcon={<AddIcon />}
            text={
              <div
                className={styles.add_new_task_button_text}
                title={t("Add New Task")}>
                {t("Add New Task")}
              </div>
            }
            onClick={() => setOpenAddNewTaskModal(true)}
            customClass={styles.add_new_task}
          />
        </div>
      </div>
      {openAddNewTaskModal ? (
        <AddNewTask
          openAddNewTaskModal={openAddNewTaskModal}
          setOpenAddNewTaskModal={setOpenAddNewTaskModal}
          mode={MODE.ADD}
        />
      ) : null}
    </>
  );
};

export default Filters;
