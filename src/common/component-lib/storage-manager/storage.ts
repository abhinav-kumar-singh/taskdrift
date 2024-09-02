import { safeParseJson } from "../../helpers/helpers";
import { StorageKey } from "./storage.types";

const convertToStorableData = <T>(value: T): string => {
  return typeof value === "string" ? value : JSON.stringify(value);
};

export const setItem = <T>(key: StorageKey, value: T): boolean => {
  try {
    localStorage.setItem(key, convertToStorableData(value));
    return true;
  } catch (ex) {
    console.error(ex);

    return false;
  }
};

export const getItem = <T>(key: StorageKey): T | null => {
  try {
    const data = localStorage.getItem(key) as string;
    const parsedData = safeParseJson(data) as T;
    const returnValue = parsedData === null ? (data as T) : parsedData;

    return returnValue;
  } catch (ex) {
    console.error(ex);
  }

  return null;
};

export const removeItem = (key: StorageKey): boolean => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (ex) {
    console.error(ex);
    return false;
  }
};
