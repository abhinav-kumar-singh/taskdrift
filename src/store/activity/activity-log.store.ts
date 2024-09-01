import { create } from "zustand";
import { IActivityLogConfig, IActivityLogStore } from "./activity-log.types";
import {
  getItem,
  setItem,
} from "../../common/component-lib/storage-manager/storage";
import { StorageKey } from "../../common/component-lib/storage-manager/storage.types";

const initialState = {
  activityLogConfig: [],
};

const useActivityLog = create<IActivityLogStore>(() => {
  const logConfig = getItem(
    StorageKey.ACTIVITY_LOG_DETAILS
  ) as IActivityLogStore;

  return {
    activityLogConfig:
      logConfig?.activityLogConfig || initialState.activityLogConfig,
  };
});

const setActivityLog = (
  dashboardId: string,
  data: IActivityLogConfig
): void => {
  useActivityLog.setState((state) => {
    const newState = { ...state };
    const activityStoreIndex = state?.activityLogConfig?.findIndex(
      (activityStore) => activityStore?.dashboardId === dashboardId
    );
    if (activityStoreIndex !== -1) {
      state.activityLogConfig[activityStoreIndex].activityLog.push(data);
    } else {
      state.activityLogConfig.push({ dashboardId, activityLog: [data] });
    }
    setItem(StorageKey.ACTIVITY_LOG_DETAILS, newState);
    return newState;
  });
};

const setActivityLogFilteredData = (
  dashboardId: string,
  logId: string
): void => {
  useActivityLog.setState((state) => {
    let newState = { ...state };

    const activityStoreIndex = state?.activityLogConfig?.findIndex(
      (activityStore) => activityStore?.dashboardId === dashboardId
    );

    newState.activityLogConfig[activityStoreIndex].activityLog =
      newState?.activityLogConfig?.[activityStoreIndex]?.activityLog?.filter(
        (log) => log.logId !== logId
      );

    setItem(StorageKey.ACTIVITY_LOG_DETAILS, newState);
    return newState;
  });
};

export { useActivityLog, setActivityLog, setActivityLogFilteredData };
