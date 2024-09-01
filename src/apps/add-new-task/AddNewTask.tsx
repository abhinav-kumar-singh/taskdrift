import { Button } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import React, { SyntheticEvent, useState } from "react";
import { IAddNewTask } from "./add-new-task.types";
import TextFieldComp from "../../common/component-lib/text-field";
import Dropdown from "../../common/component-lib/dropdown";
import { TASK_STATUS, TASK_TYPES } from "../../common/constants/task-create";
import { USER_TIME_TAGS } from "../../common/constants/user-dashboard-creation";
import DateTime from "../../common/component-lib/date-time-field";
import styles from "./add-new-task.module.css";
import { IDropdownOption } from "../../common/types/common.types";
import { useDashboardStore } from "../../store";
import { IDashboardStore } from "../../store/dashboard/dash-board.type";
import { generateUniqueId } from "../../common/helpers/helpers";
import { ITasks, TaskStatus, TaskType } from "../../store/tasks/task.type";
import { useTaskStore } from "../../store";
import { setActivityLog } from "../../store";
import { ActivityType } from "../../store/activity/activity-log.types";
import ButtonField from "../../common/component-lib/button-field";
import ModalField from "../../common/component-lib/modal";

interface ITaskObj {
  id: string;
  title: string;
  type: IDropdownOption[];
  status: IDropdownOption[];
  summary: string;
  priority: IDropdownOption[];
  description: string;
  labels: string;
  createdDate: string;
  originalEstimate: Dayjs | null;
  assignedTo: string;
}



const AddNewTask = (props: IAddNewTask): JSX.Element => {
  const { openAddNewTaskModal, setOpenAddNewTaskModal } = props;

  const dashBoardDetails = useDashboardStore() as IDashboardStore;
  const selectedDashBoardId = dashBoardDetails?.selectedDashBoardId;

  const { setTaskStoreConfig } = useTaskStore();

  const [taskObj, setTaskObj] = useState<ITaskObj>({
    id: "",
    title: "",
    type: [],
    status: [],
    summary: "",
    priority: [],
    description: "",
    labels: "",
    createdDate: dayjs().toISOString(),
    originalEstimate: null,
    assignedTo: "",
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

  const handleIssueType = (
    event: SyntheticEvent<Element, Event>,
    option:
      | {
          title: string;
          value: string;
        }
      | {
          title: string;
          value: string;
        }[]
      | null
  ) => {
    if (!Array.isArray(option)) {
      setTaskObj((prevTaskObj) => ({
        ...prevTaskObj,
        type: [
          {
            title: option?.title || "",
            value: option?.value || "",
          },
        ],
      }));
    }
  };

  // const handleIssueType = (event: SelectChangeEvent<string>) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   const filteredValue = TASK_TYPES.filter((item) => item.value === value);
  //   setTaskObj((prevTaskObj) => ({
  //     ...prevTaskObj,
  //     type: [
  //       {
  //         title: filteredValue?.[0].title || "",
  //         value: filteredValue?.[0].value || "",
  //       },
  //     ],
  //   }));
  //   console.log("🚀 ~ handleIssueType ~ target:", event);
  // };

  const handleIssueStatus = (
    event: SyntheticEvent<Element, Event>,
    option:
      | {
          title: string;
          value: string;
        }
      | {
          title: string;
          value: string;
        }[]
      | null
  ) => {
    if (!Array.isArray(option)) {
      setTaskObj((prevTaskObj) => ({
        ...prevTaskObj,
        status: [
          {
            title: option?.title || "",
            value: option?.value || "",
          },
        ],
      }));
    }
  };

  const handleSummary = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskObj((prevTaskObj) => ({
      ...prevTaskObj,
      summary: event?.target?.value,
    }));
  };

  const handleIssuePriority = (
    event: SyntheticEvent<Element, Event>,
    option:
      | {
          title: string;
          value: string;
        }
      | {
          title: string;
          value: string;
        }[]
      | null
  ) => {
    if (!Array.isArray(option)) {
      setTaskObj((prevTaskObj) => ({
        ...prevTaskObj,
        priority: [
          {
            title: option?.title || "",
            value: option?.value || "",
          },
        ],
      }));
    }
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
    const taskId = generateUniqueId();
    const formObject: ITasks = {
      id: taskId,
      title: taskObj.title,
      type: taskObj.type?.[0]?.value as TaskType,
      status: taskObj.status?.[0]?.value as TaskStatus,
      summary: taskObj.summary,
      priority: taskObj.priority?.map((priority) => priority.value),
      description: taskObj.description,
      labels: taskObj.labels?.split(","),
      createdDate: taskObj.createdDate,
      originalEstimate: taskObj.originalEstimate,
      assignedTo: taskObj.assignedTo,
    };
    setTaskStoreConfig(formObject, selectedDashBoardId);

    setActivityLog(selectedDashBoardId, {
      logTime: taskObj.createdDate,
      activityType: ActivityType.CREATE,
      relatedTaskId: taskId,
      logId: generateUniqueId(),
    });

    setOpenAddNewTaskModal(false);
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

  return (
    <ModalField
      handleCloseModal={handleCloseModal}
      showModal={openAddNewTaskModal}
      // modalWidth="lg"
      fullWidth
      handleCrossIcon={() => setOpenAddNewTaskModal(false)}
      titleSummary="Create Issue"
      dialogContent={
        <>
          <div className={styles.user_description}>
            Required fields are marked with an asterisk *
          </div>
          <div className={styles.first_row_container}>
            <TextFieldComp
              label="Project Name"
              onChange={handleProjectName}
              customStyle={{
                width: "50%",
              }}
              required
              value={taskObj?.title || ""}
            />
            <TextFieldComp
              label="Assigned To"
              onChange={handleAssignedTo}
              customStyle={{
                width: "50%",
              }}
              required
              value={taskObj?.assignedTo || ""}
            />
          </div>
          <Dropdown
            isMultiDropdown={false}
            dropDownOption={TASK_TYPES}
            onChange={handleIssueType}
            customStyle={{
              width: "30%",
              marginBottom: "20px",
            }}
            label="Issue Type"
            required
            shortOptions
          />
          {/* <FormControl
            sx={{
              width: "50%",
              svg: {
                color: "rgb(var(--primary-color))",
              },
              marginTop: "15px",
              div: {
                height: "38px",
              },
            }}>
            <Select
              // displayEmpty
              renderValue={(selected) => selected}
              placeholder="Issue Type"
              // multiple
              value={taskObj?.type?.[0]?.title}
              onChange={handleIssueType}
              input={<OutlinedInput />}
              // MenuProps={MenuProps}
              // inputProps={{ "aria-label": "Without label" }}
              sx={{
                backgroundColor: "rgb(var(--background-1))",
                color: "rgb(var(--primary-color))",
              }}>
              {TASK_TYPES?.map((type) => {
                return (
                  <MenuItem value={type.value} key={type.value}>
                    {type.title}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl> */}
          <Dropdown
            isMultiDropdown={false}
            dropDownOption={TASK_STATUS}
            onChange={handleIssueStatus}
            customStyle={{
              width: "30%",
              marginTop: "15px",
              marginBottom: "20px",
            }}
            label="Issue Status"
            required
          />
          <TextFieldComp
            label="Summary"
            onChange={handleSummary}
            customStyle={{ width: "100%", marginBottom: "20px" }}
            required
            value={taskObj?.summary || ""}
          />
          <Dropdown
            isMultiDropdown={false}
            dropDownOption={USER_TIME_TAGS}
            onChange={handleIssuePriority}
            customStyle={{
              width: "30%",
              marginBottom: "20px",
            }}
            label="Priority"
            required
          />
          <TextFieldComp
            label="Description"
            onChange={handleDescription}
            customStyle={{ width: "100%", marginBottom: "20px" }}
            multiline
            rows={4}
            value={taskObj?.description || ""}
          />
          <DateTime
            label="Original Estimate"
            value={taskObj?.originalEstimate}
            onChange={handleEstimate}
          />
          <div>
            <TextFieldComp
              label="label"
              onChange={handleLabel}
              customStyle={{ width: "100%" }}
              value={taskObj?.labels || ""}
            />
            <div className={styles.user_description}>
              Enter comma separated label
            </div>
          </div>
          <div className={styles.button_container}>
            <Button onClick={() => setOpenAddNewTaskModal(false)}>
              Cancel
            </Button>
            <ButtonField
              variant="contained"
              onClick={handleTaskCreate}
              isDisabled={isButtonDisabled()}
              text="Create"
            />
          </div>
        </>
      }
    />
  );
};

export default AddNewTask;
