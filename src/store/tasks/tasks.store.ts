import { create } from "zustand";
import {
  getItem,
  setItem,
} from "../../common/component-lib/storage-manager/storage";
import { StorageKey } from "../../common/component-lib/storage-manager/storage.types";
import { ITaskStoreConfig, ITasks } from "./task.type";
import { generateUniqueId } from "../../common/helpers/helpers";

const taskConfig = getItem(StorageKey.TASKS_DETAILS) as ITaskStoreConfig;

const initialState = {
  taskStoreId: taskConfig?.taskStoreId || generateUniqueId(),
  taskStoreConfig: taskConfig?.taskStoreConfig || [],
};

const useTaskStore = create<ITaskStoreConfig>((set) => ({
  ...initialState,
  setTaskStoreConfig: (newTask: ITasks, dashBoardId: string): void => {
    set((state) => {
      const taskStoreIndex = state?.taskStoreConfig?.findIndex(
        (taskStore) => taskStore?.dashBoardId === dashBoardId
      );
      if (taskStoreIndex !== -1) {
        state.taskStoreConfig[taskStoreIndex].tasks.push(newTask);
      } else {
        state.taskStoreConfig.push({
          dashBoardId,
          tasks: [newTask],
        });
      }
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
