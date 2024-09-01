import React, { useEffect, useState } from "react";
import styles from "../home.module.css";
import { useTaskStore } from "../../../store";
import TaskConfig from "./TaskConfig";
import { Dayjs } from "dayjs";
import {
  UPCOMING_CONSTANTS,
  UPCOMING_LISTS,
  getStartAndEndDates,
  isDateBetween,
} from "./utils";
import { ITasks } from "../../../store/tasks/task.type";
import { Button, Menu, MenuItem, ToggleButton } from "@mui/material";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTranslation } from "react-i18next";

const UpcomingTasks = (): JSX.Element => {
  const allTasks = useTaskStore();

  const { t } = useTranslation();

  const [filterSelected, setFilterSelected] = useState<{
    title: string;
    value: UPCOMING_CONSTANTS;
    id: number;
  }>({
    title: "All Tasks",
    value: UPCOMING_CONSTANTS.ALL,
    id: 0,
  });

  const allDashboardsTasks = allTasks?.taskStoreConfig;

  const [tasksList, setTasksList] = useState<ITasks[]>([]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const tasks: ITasks[] = [];
    allDashboardsTasks?.forEach((taskConfig) => {
      taskConfig?.tasks?.forEach((task) => {
        if (filterSelected?.value === UPCOMING_CONSTANTS.ALL) {
          tasks.push(task);
        } else {
          const { startDate, endDate } = getStartAndEndDates(
            filterSelected?.value
          );
          if (
            isDateBetween(task.originalEstimate as Dayjs, startDate, endDate)
          ) {
            tasks.push(task);
          }
        }
      });
    });
    setTasksList(tasks);
  }, [filterSelected]);

  const handleFilterSelect = (data: {
    title: string;
    value: UPCOMING_CONSTANTS;
    id: number;
  }) => {
    setFilterSelected(data);
  };

  return (
    <div className={styles.upcoming_tasks_container}>
      <div className={styles.upcoming_header}>
        <div className={styles.upcoming_text}>{t("UPCOMING TASKS")}</div>
        <div>
          <ToggleButton
            value="center"
            aria-label="centered"
            sx={{
              border: "none",
              height: "20px",
              width: "20px",
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
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}>
            {UPCOMING_LISTS?.map((data) => (
              <MenuItem key={data?.id} onClick={() => handleFilterSelect(data)}>
                <div className={styles.option}>
                  {t(data?.title)}
                  {filterSelected?.id === data?.id ? (
                    <CheckCircleIcon
                      sx={{ color: "rgb(var(--background-2))" }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
      <div className={styles.task_list}>
        {tasksList?.map((data) => (
          <TaskConfig taskConfig={data} key={data?.id} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingTasks;
