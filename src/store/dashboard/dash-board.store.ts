import { create } from "zustand";
import {
  DashBoardViewType,
  IDashboardConfig,
  IDashboardStore,
} from "./dash-board.type";
import {
  getItem,
  setItem,
} from "../../common/component-lib/storage-manager/storage";
import { StorageKey } from "../../common/component-lib/storage-manager/storage.types";
import { IUserDetails } from "../../common/types/user-store.types";
import { generateUniqueId } from "../../common/helpers/helpers";

const getDashBoardConfig = getItem(
  StorageKey.DASH_BOARD_DETAILS
) as IDashboardStore;

const userInfo = getItem(StorageKey.USER_DETAILS) as IUserDetails;

const initialState = {
  id: getDashBoardConfig?.id || generateUniqueId(),
  userName: getDashBoardConfig?.userName || userInfo?.userName || "",
  selectedDashBoardId: getDashBoardConfig?.selectedDashBoardId || "",
  dashBoardConfig: getDashBoardConfig?.dashBoardConfig || [],
};

const useDashboardStore = create<IDashboardStore>((set) => ({
  ...initialState,
  setDashBoardConfig: (data: IDashboardConfig): void => {
    set((state) => {
      state.userName = userInfo?.userName || "";
      state.id = generateUniqueId();
      state.dashBoardConfig.push(data);
      state.selectedDashBoardId = data?.isDefault
        ? data?.dashboardId
        : state.selectedDashBoardId;
      setItem(StorageKey.DASH_BOARD_DETAILS, state);
      return { ...state };
    });
  },
}));

const setDashBoardView = (
  selectedDashBoardId: string,
  view: DashBoardViewType
): void => {
  useDashboardStore.setState((state) => {
    const newDashBoardConfig = state.dashBoardConfig.map((data) => {
      if (data.dashboardId === selectedDashBoardId) {
        return { ...data, dashBoardViewType: view };
      }
      return data;
    });
    const newState = { ...state, dashBoardConfig: newDashBoardConfig };
    setItem(StorageKey.DASH_BOARD_DETAILS, newState);
    return newState;
  });
};

const setDashBoardMidSectionVisibility = (
  selectedDashBoardId: string,
  visibility: boolean
): void => {
  useDashboardStore.setState((state) => {
    const newDashBoardConfig = state.dashBoardConfig.map((data) => {
      if (data.dashboardId === selectedDashBoardId) {
        return { ...data, showMidSection: visibility };
      }
      return data;
    });
    const newState = { ...state, dashBoardConfig: newDashBoardConfig };
    setItem(StorageKey.DASH_BOARD_DETAILS, newState);
    return newState;
  });
};

const setDashBoardName = (
  selectedDashBoardId: string,
  boardName: string
): void => {
  useDashboardStore.setState((state) => {
    const newDashBoardConfig = state.dashBoardConfig.map((data) => {
      if (data.dashboardId === selectedDashBoardId) {
        return { ...data, name: boardName };
      }
      return data;
    });
    const newState = { ...state, dashBoardConfig: newDashBoardConfig };
    setItem(StorageKey.DASH_BOARD_DETAILS, newState);
    return newState;
  });
};

const setIsDefaultDashboard = (selectedDashBoardId: string): void => {
  useDashboardStore.setState((state) => {
    const newDashBoardConfig = state.dashBoardConfig.map((data) => {
      if (data.dashboardId === selectedDashBoardId) {
        return { ...data, isDefault: true };
      }
      return { ...data, isDefault: false };
    });
    const newState = { ...state, dashBoardConfig: newDashBoardConfig };
    setItem(StorageKey.DASH_BOARD_DETAILS, newState);
    return newState;
  });
};

const setSelectedDartboardId = (dashBoardId: string): void => {
  useDashboardStore.setState((state) => {
    const newState = { ...state, selectedDashBoardId: dashBoardId };
    setItem(StorageKey.DASH_BOARD_DETAILS, newState);
    return newState;
  });
};

const getSelectedDashboardIdAfterDelete = (
  dashBoardConfig: IDashboardConfig[],
  dashBoardId: string
): string => {
  const selectedDashBoardId = dashBoardConfig.findIndex(
    (config) => config?.dashboardId === dashBoardId
  );

  if (selectedDashBoardId === 0) return dashBoardConfig[1]?.dashboardId;
  else if (selectedDashBoardId === dashBoardConfig.length - 1)
    return dashBoardConfig[dashBoardConfig.length - 2]?.dashboardId;
  else return dashBoardConfig[selectedDashBoardId - 1]?.dashboardId;
};

const deleteSelectedDashboard = (dashBoardId: string): void => {
  useDashboardStore.setState((state) => {
    const newState = {
      ...state,
      dashBoardConfig: state.dashBoardConfig.filter(
        (data) => data.dashboardId !== dashBoardId
      ),
      selectedDashBoardId: getSelectedDashboardIdAfterDelete(
        state.dashBoardConfig,
        dashBoardId
      ),
    };
    setItem(StorageKey.DASH_BOARD_DETAILS, newState);
    return newState;
  });
};

export {
  setDashBoardName,
  setDashBoardView,
  useDashboardStore,
  setIsDefaultDashboard,
  setSelectedDartboardId,
  deleteSelectedDashboard,
  setDashBoardMidSectionVisibility,
};
