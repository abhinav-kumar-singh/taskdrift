import dayjs from "dayjs";
import {
  IDashboardConfig,
  IDashboardStore,
} from "../../store/dashboard/dash-board.type";

export const safeParseJson = <T>(stringifiedJSON: string): T | null => {
  try {
    if (!stringifiedJSON) return null;

    if (typeof stringifiedJSON === "string") {
      return JSON.parse(stringifiedJSON) as T;
    }
    return stringifiedJSON as T;
  } catch (ex) {
    console.error(ex);
    return null;
  }
};

export const generateUniqueId = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getRandomColor = (): string => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const getRandomLightColor = () => {
  let color = "#";
  for (let i = 0; i < 3; i++) {
    let value = Math.floor(Math.random() * 128 + 128).toString(16); // values between 128 and 255
    if (value.length < 2) {
      value = "0" + value; // Ensure each value is two digits
    }
    color += value;
  }
  return color;
};

export const getSelectedDashboardConfig = (
  dashBoardDetails: IDashboardStore
): IDashboardConfig => {
  const selectedDashBoardId = dashBoardDetails?.selectedDashBoardId;
  const selectedDashBoard = dashBoardDetails?.dashBoardConfig?.find(
    (data) => data?.dashboardId === selectedDashBoardId
  );
  return (selectedDashBoard as IDashboardConfig) || {};
};

export const getFormattedEstimatedDate = (
  originalEstimate: dayjs.Dayjs | null
): string => {
  const formattedEstimate = dayjs(originalEstimate).format("MMMM D, YYYY");
  const today = dayjs(new Date()).format("MMMM D, YYYY");

  if (formattedEstimate === today) return "Today";
  if (formattedEstimate === dayjs().add(1, "day").format("MMMM D, YYYY"))
    return "Tomorrow";

  return formattedEstimate;
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
