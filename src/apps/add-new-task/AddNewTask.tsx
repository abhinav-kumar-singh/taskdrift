import { Button, SelectChangeEvent } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IAddNewTask, ITaskObj, MODE } from "./add-new-task.types";
import TextFieldComp from "../../common/component-lib/text-field";
import { TASK_STATUS, TASK_TYPES } from "../../common/constants/task-create";
import { USER_TIME_TAGS } from "../../common/constants/user-dashboard-creation";
import DateTime from "../../common/component-lib/date-time-field";
import styles from "./add-new-task.module.css";
import { setNotification, useDashboardStore } from "../../store";
import { IDashboardStore } from "../../store/dashboard/dash-board.type";
import { generateUniqueId } from "../../common/helpers/helpers";
import { ITasks, TaskStatus, TaskType } from "../../store/tasks/task.type";
import { useTaskStore } from "../../store";
import { setActivityLog } from "../../store";
import { ActivityType } from "../../store/activity/activity-log.types";
import ButtonField from "../../common/component-lib/button-field";
import ModalField from "../../common/component-lib/modal";
import Dropdown from "../../common/component-lib/dropdown";
import { NotificationVariant } from "../../store/notification/notification.store";

const AddNewTask = (props: IAddNewTask): JSX.Element => {
  const {
    openAddNewTaskModal,
    setOpenAddNewTaskModal,
    mode = MODE.ADD,
    selectedTask,
    disableFields,
  } = props;

  const { t } = useTranslation();

  const dashBoardDetails = useDashboardStore() as IDashboardStore;
  const selectedDashBoardId = dashBoardDetails?.selectedDashBoardId;

  const { setTaskStoreConfig } = useTaskStore();

  const [taskObj, setTaskObj] = useState<ITaskObj>({
    id: selectedTask?.id || generateUniqueId(),
    title: selectedTask?.title || "",
    type: selectedTask?.type || "",
    status: selectedTask?.status || "",
    summary: selectedTask?.summary || "",
    priority: selectedTask?.priority || [],
    description: selectedTask?.description || "",
    labels: selectedTask?.labels?.join(",") || "",
    createdDate: dayjs().toISOString(),
    originalEstimate: null,
    assignedTo: selectedTask?.assignedTo || "",
  });

  const handleCloseModal = (
    event: React.SyntheticEvent,
    reason: string
  ): void => {
    if (reason !== "backdropClick") {
      setOpenAddNewTaskModal(false);
    }
  };

  const handleProjectName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskObj((prevTaskObj) => ({
      ...prevTaskObj,
      title: event?.target?.value,
    }));
  };

  const handleAssignedTo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskObj((prevTaskObj) => ({
      ...prevTaskObj,
      assignedTo: event?.target?.value,
    }));
  };

  const handleIssueType = (data: SelectChangeEvent<string | string[]>) => {
    setTaskObj((prevTaskObj) => ({
      ...prevTaskObj,
      type: data.target.value as string,
    }));
  };

  const handleIssueStatus = (data: SelectChangeEvent<string | string[]>) => {
    setTaskObj((prevTaskObj) => ({
      ...prevTaskObj,
      status: data.target.value as string,
    }));
  };

  const handleSummary = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskObj((prevTaskObj) => ({
      ...prevTaskObj,
      summary: event?.target?.value,
    }));
  };

  const handleIssuePriority = (data: SelectChangeEvent<string | string[]>) => {
    setTaskObj((prevTaskObj) => ({
      ...prevTaskObj,
      priority: data.target.value as string[],
    }));
  };

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskObj((prevTaskObj) => ({
      ...prevTaskObj,
      description: event?.target?.value,
    }));
  };

  const handleEstimate = (newValue: Dayjs | null): void => {
    setTaskObj((prevTaskObj) => ({
      ...prevTaskObj,
      originalEstimate: newValue || null,
    }));
  };

  const handleLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskObj((prevTaskObj) => ({
      ...prevTaskObj,
      labels: event?.target?.value,
    }));
  };

  const handleTaskCreate = (): void => {
    const formObject: ITasks = {
      id: taskObj.id,
      title: taskObj.title,
      type: taskObj.type as TaskType,
      status: taskObj.status as TaskStatus,
      summary: taskObj.summary,
      priority: taskObj.priority,
      description: taskObj.description,
      labels: taskObj.labels?.split(","),
      createdDate: taskObj.createdDate,
      originalEstimate: taskObj.originalEstimate,
      assignedTo: taskObj.assignedTo,
    };
    setTaskStoreConfig(formObject, selectedDashBoardId, mode);

    setActivityLog(selectedDashBoardId, {
      logTime: taskObj.createdDate,
      activityType: ActivityType.CREATE,
      relatedTaskId: taskObj.id,
      logId: generateUniqueId(),
    });

    setOpenAddNewTaskModal(false);
    setNotification({
      message:
        mode === MODE.EDIT
          ? "Task Updated Successfully"
          : "Task Created Successfully",
      variant: NotificationVariant.FILLED,
    });
  };

  const isButtonDisabled = (): boolean => {
    if (
      !taskObj.title ||
      !taskObj.assignedTo ||
      !taskObj.type?.length ||
      !taskObj.status?.length ||
      !taskObj.summary ||
      !taskObj.priority?.length ||
      !taskObj.originalEstimate
    ) {
      return true;
    }
    return false;
  };

  const getTitleSummary = (): string => {
    switch (mode) {
      case MODE.ADD:
        return t("Add New Task");
      case MODE.EDIT:
        return t("Edit Task");
      case MODE.REVIEW:
        return t("Review Task");
    }
  };

  return (
    <ModalField
      handleCloseModal={handleCloseModal}
      showModal={openAddNewTaskModal}
      fullWidth
      handleCrossIcon={() => setOpenAddNewTaskModal(false)}
      titleSummary={getTitleSummary()}
      dialogContent={
        <>
          <div className={styles.user_description}>
            {t("Required fields are marked with an asterisk *")}
          </div>
          <div className={styles.first_row_container}>
            <TextFieldComp
              label={t("Project Name")}
              onChange={handleProjectName}
              customStyle={{
                width: "50%",
              }}
              required
              value={taskObj?.title || ""}
            />
            <TextFieldComp
              label={t("Assigned To")}
              onChange={handleAssignedTo}
              customStyle={{
                width: "50%",
              }}
              required
              value={taskObj?.assignedTo || ""}
            />
          </div>

          <div className={styles.dropdown_container}>
            <div className={styles.dropdown_label}>{t("Task Type")}</div>

            <Dropdown
              value={taskObj?.type}
              onChange={handleIssueType}
              dropDownOption={TASK_TYPES}
              customStyle={{
                margin: "0",
                minWidth: "270px",
                maxWidth: "270px",
              }}
              isDisabled={disableFields?.includes("type")}
            />
          </div>

          <div className={styles.dropdown_container}>
            <div className={styles.dropdown_label}>{t("Task Status")}</div>
            <Dropdown
              value={taskObj?.status}
              onChange={handleIssueStatus}
              dropDownOption={TASK_STATUS}
              customStyle={{
                margin: "0",
                minWidth: "270px",
                maxWidth: "270px",
              }}
              isDisabled={disableFields?.includes("status")}
            />
          </div>

          <div className={styles.dropdown_container}>
            <div className={styles.dropdown_label}>{t("Task Priority")}</div>
            <Dropdown
              value={taskObj?.priority}
              onChange={handleIssuePriority}
              dropDownOption={USER_TIME_TAGS}
              customStyle={{
                margin: "0",
                minWidth: "270px",
                maxWidth: "270px",
              }}
              isDisabled={disableFields?.includes("priority")}
            />
          </div>

          <TextFieldComp
            label={t("Summary")}
            onChange={handleSummary}
            customStyle={{
              width: "100%",
              marginBottom: "20px",
              marginTop: "20px",
            }}
            required
            value={taskObj?.summary || ""}
          />

          <TextFieldComp
            label={t("Description")}
            onChange={handleDescription}
            customStyle={{ width: "100%", marginBottom: "20px" }}
            multiline
            rows={4}
            value={taskObj?.description || ""}
          />

          <div className={styles.dropdown_container}>
            <DateTime
              label={t("Original Estimate")}
              value={taskObj?.originalEstimate}
              onChange={handleEstimate}
            />
            <div>
              <TextFieldComp
                label={t("label")}
                onChange={handleLabel}
                customStyle={{ width: "300px" }}
                value={taskObj?.labels || ""}
              />
              <div className={styles.user_description}>
                {t("Enter comma separated label")}
              </div>
            </div>
          </div>

          {mode === MODE.REVIEW ? null : (
            <div className={styles.button_container}>
              <Button onClick={() => setOpenAddNewTaskModal(false)}>
                {t("Cancel")}
              </Button>
              <ButtonField
                variant="contained"
                onClick={handleTaskCreate}
                isDisabled={isButtonDisabled()}
                text={mode === MODE.EDIT ? t("Update") : t("Create")}
                customClass={styles.button}
              />
            </div>
          )}
        </>
      }
    />
  );
};

export default AddNewTask;
