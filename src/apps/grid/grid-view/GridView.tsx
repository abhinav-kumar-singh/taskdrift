import React, { useState } from "react";
import styles from "../grid.module.css";
import AddNewTask from "../../add-new-task";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import AddIcon from "@mui/icons-material/Add";
import { getTaskCounter } from ".././utils";
import GridViewTaskRenderer from "../task-renderer-grid-view";
import useGrid from "../use-grid";
import { useTranslation } from "react-i18next";
import { MODE } from "../../add-new-task/add-new-task.types";
import { IDropdownOption } from "../../../common/types/common.types";
import { ITasks, TaskStatus, TaskType } from "../../../store/tasks/task.type";

const GridView = (): JSX.Element => {
  const [openAddNewTaskModal, setOpenAddNewTaskModal] = useState(false);

  const {
    toDoTasks,
    progressTasks,
    inReviewTasks,
    doneTasks,
    backlogTasks,
    tasks,
    TASK_STATUS,
  } = useGrid();

  const { t } = useTranslation();

  const [taskObject, setTaskObject] = useState<ITasks>();
  const [fieldsToDisable, setFieldsToDisable] = useState<string[]>([]);

  // this is used when we click on + icon in the header of row
  const handleAddSpecificTask = (data: IDropdownOption) => {
    let taskObj: ITasks = {
      type: "" as TaskType,
      id: "",
      title: "",
      status: data.value as TaskStatus,
      summary: "",
      priority: [],
      description: "",
      labels: [""],
      createdDate: "",
      originalEstimate: null,
      assignedTo: "",
    };
    setTaskObject(taskObj);
    setFieldsToDisable(["status"]);
    setOpenAddNewTaskModal(true);
  };

  return (
    <div className={styles.container}>
      <>
        <div className={styles.header_container}>
          {TASK_STATUS?.map((status) => {
            return (
              <div className={styles.title_container} key={status.value}>
                <div className={styles.info}>
                  <PanoramaFishEyeIcon
                    fontSize="small"
                    className={styles.title}
                  />
                  <div className={styles.title}>{t(status.title)}</div>
                  <div className={styles.counter}>
                    {getTaskCounter(tasks, status.value)}
                  </div>
                </div>
                <div onClick={() => handleAddSpecificTask(status)}>
                  <AddIcon
                    sx={{
                      color: "rgb(var(--tertiary-color))",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "rgb(var(--background-3))",
                        borderRadius: "5px",
                      },
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.grid_container}>
          <div className={styles.task_list}>
            {toDoTasks?.map((task) => {
              return <GridViewTaskRenderer taskConfig={task} key={task?.id} />;
            })}
          </div>
          <div className={styles.task_list}>
            {progressTasks?.map((task) => {
              return <GridViewTaskRenderer taskConfig={task} key={task?.id} />;
            })}
          </div>
          <div className={styles.task_list}>
            {inReviewTasks?.map((task) => {
              return <GridViewTaskRenderer taskConfig={task} key={task?.id} />;
            })}
          </div>
          <div className={styles.task_list}>
            {doneTasks?.map((task) => {
              return <GridViewTaskRenderer taskConfig={task} key={task?.id} />;
            })}
          </div>
          <div className={styles.task_list}>
            {backlogTasks?.map((task) => {
              return <GridViewTaskRenderer taskConfig={task} key={task?.id} />;
            })}
          </div>
        </div>
      </>

      {openAddNewTaskModal ? (
        <AddNewTask
          openAddNewTaskModal={openAddNewTaskModal}
          setOpenAddNewTaskModal={setOpenAddNewTaskModal}
          mode={MODE.ADD}
          selectedTask={taskObject}
          disableFields={fieldsToDisable}
        />
      ) : null}
    </div>
  );
};

export default GridView;
