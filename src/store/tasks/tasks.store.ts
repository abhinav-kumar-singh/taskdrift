import { create } from "zustand";
import {
  getItem,
  setItem,
} from "../../common/component-lib/storage-manager/storage";
import { StorageKey } from "../../common/component-lib/storage-manager/storage.types";
import { ITaskStoreConfig, ITasks } from "./task.type";
import { generateUniqueId } from "../../common/helpers/helpers";
import { MODE } from "../../apps/add-new-task/add-new-task.types";

const taskConfig = getItem(StorageKey.TASKS_DETAILS) as ITaskStoreConfig;

const initialState = {
  taskStoreId: taskConfig?.taskStoreId || generateUniqueId(),
  taskStoreConfig: taskConfig?.taskStoreConfig || [],
};

const useTaskStore = create<ITaskStoreConfig>((set) => ({
  ...initialState,
  setTaskStoreConfig: (
    newTask: ITasks,
    dashBoardId: string,
    mode: MODE
  ): void => {
    set((state) => {
      const taskStoreIndex = state?.taskStoreConfig?.findIndex(
        (taskStore) => taskStore?.dashBoardId === dashBoardId
      );
      if (mode === MODE.EDIT) {
        state?.taskStoreConfig?.[taskStoreIndex]?.tasks?.forEach((task) => {
          if (task?.id === newTask?.id) {
            task.title = newTask?.title;
            task.type = newTask?.type;
            task.status = newTask?.status;
            task.summary = newTask?.summary;
            task.priority = newTask?.priority;
            task.priority = newTask?.priority;
            task.description = newTask?.description;
            task.labels = newTask?.labels;
            task.createdDate = newTask?.createdDate;
            task.originalEstimate = newTask?.originalEstimate;
            task.assignedTo = newTask?.assignedTo;
          }
        });
      } else {
        if (taskStoreIndex !== -1) {
          state.taskStoreConfig[taskStoreIndex].tasks.push(newTask);
        } else {
          state.taskStoreConfig.push({
            dashBoardId,
            assignedToFilter: "",
            tasks: [newTask],
          });
        }
      }
      setItem(StorageKey.TASKS_DETAILS, state);
      return { ...state };
    });
  },
  setAssignedToFilter: (dashBoardId: string, assignedValue): void => {
    set((state) => {
      state?.taskStoreConfig?.forEach((taskStore) => {
        if (taskStore?.dashBoardId === dashBoardId) {
          taskStore.assignedToFilter = assignedValue;
        }
        return taskStore;
      });

      setItem(StorageKey.TASKS_DETAILS, state);
      return { ...state };
    });
  },
}));

const setTaskDelete = (selectedDashboardId: string, taskId: string): void => {
  useTaskStore.setState((state) => {
    const taskStoreIndex = state?.taskStoreConfig?.findIndex(
      (taskStore) => taskStore?.dashBoardId === selectedDashboardId
    );
    const newState = { ...state };
    if (taskStoreIndex !== -1) {
      newState.taskStoreConfig[taskStoreIndex].tasks = newState.taskStoreConfig[
        taskStoreIndex
      ].tasks.filter((task) => task.id !== taskId);

      setItem(StorageKey.TASKS_DETAILS, newState);
    }
    return newState;
  });
};

export { useTaskStore, setTaskDelete };
