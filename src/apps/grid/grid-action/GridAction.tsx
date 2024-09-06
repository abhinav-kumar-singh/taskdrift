import { Button, Menu, MenuItem, ToggleButton } from "@mui/material";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  setActivityLog,
  setNotification,
  useDashboardStore,
  useTaskStore,
} from "../../../store";
import { IDashboardStore } from "../../../store/dashboard/dash-board.type";
import styles from "../grid.module.css";
import { setTaskDelete } from "../../../store";
import dayjs from "dayjs";
import { ActivityType } from "../../../store/activity/activity-log.types";
import { generateUniqueId } from "../../../common/helpers/helpers";
import ButtonField from "../../../common/component-lib/button-field";
import ModalField from "../../../common/component-lib/modal";
import AddNewTask from "../../add-new-task";
import { MODE } from "../../add-new-task/add-new-task.types";
import { ITasks } from "../../../store/tasks/task.type";
import {
  NotificationColor,
  NotificationSeverity,
  NotificationVariant,
} from "../../../store/notification/notification.store";

interface IGridAction {
  id: string;
  taskSummary: string;
}

const GridAction = (props: IGridAction): JSX.Element => {
  const { id, taskSummary } = props;

  const { taskStoreConfig } = useTaskStore();

  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<ITasks>();

  const dashBoardDetails = useDashboardStore() as IDashboardStore;
  const selectedDashBoardId = dashBoardDetails?.selectedDashBoardId;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    const currentTaskConfig = taskStoreConfig?.find(
      (task) => task.dashBoardId === selectedDashBoardId
    );
    const selectedTask = currentTaskConfig?.tasks?.find(
      (task) => task.id === id
    );
    if (selectedTask) setSelectedTask(selectedTask);

    setShowEditTaskModal(true);
  };

  const handleDelete = () => {
    setActivityLog(selectedDashBoardId, {
      logTime: dayjs().toISOString(),
      activityType: ActivityType.DELETE,
      relatedTaskId: id,
      logId: generateUniqueId(),
    });

    setTaskDelete(selectedDashBoardId, id);
    setShowDeleteModal(false);
    setAnchorEl(null);
    setNotification({
      message: "Task Deleted Successfully",
      variant: NotificationVariant.STANDARD,
      severity: NotificationSeverity.WARNING,
      color: NotificationColor.SUCCESS,
    });
  };

  const handleCloseModal = (
    event: React.SyntheticEvent,
    reason: string
  ): void => {
    if (reason !== "backdropClick") {
      setShowDeleteModal(false);
    }
  };

  return (
    <>
      <div>
        <ToggleButton
          value="center"
          aria-label="centered"
          sx={{
            border: "none",
            height: "30px",
            width: "30px",
          }}>
          <Button
            id="basic-button"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{
              color: "rgb(var(--tertiary-color))",
            }}>
            <FormatAlignCenterIcon />
          </Button>
        </ToggleButton>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <MenuItem onClick={handleEdit}>
          <EditIcon
            sx={{
              color: "rgb(var(--tertiary-color))",
            }}
          />
        </MenuItem>
        <MenuItem onClick={() => setShowDeleteModal(true)}>
          <DeleteForeverIcon
            sx={{
              color: "rgb(var(--tertiary-color))",
            }}
          />
        </MenuItem>
      </Menu>
      {showDeleteModal ? (
        <ModalField
          handleCloseModal={handleCloseModal}
          showModal={showDeleteModal}
          modalWidth="xl"
          titleSummary="Delete Task"
          dialogContent={
            <p className={styles.delete_action_summary}>
              Are you sure you want to delete the selected task
              <span className={styles.delete_action_task_name}>
                "{taskSummary}"
              </span>
              ?<div>once done can not be undone</div>
            </p>
          }
          actionContent={
            <>
              <ButtonField
                onClick={() => setShowDeleteModal(false)}
                variant="contained"
                text="No"
              />
              <ButtonField
                onClick={handleDelete}
                variant="contained"
                text="Yes, Delete"
              />
            </>
          }
          handleCrossIcon={() => setShowDeleteModal(false)}
        />
      ) : null}
      {showEditTaskModal ? (
        <AddNewTask
          openAddNewTaskModal={showEditTaskModal}
          setOpenAddNewTaskModal={setShowEditTaskModal}
          mode={MODE.EDIT}
          selectedTask={selectedTask}
        />
      ) : null}
    </>
  );
};

export default GridAction;
