import { create } from "zustand";

export enum NotificationSeverity {
  ERROR = "error",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
}

export enum NotificationVariant {
  FILLED = "filled",
  OUTLINED = "outlined",
  STANDARD = "standard",
}

export enum NotificationColor {
  ERROR = "error",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
}

export enum NotificationPositionHorizontal {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}

export enum NotificationPositionVertical {
  TOP = "top",
  BOTTOM = "bottom",
}

interface ISetNotification {
  message: string;
  severity?: NotificationSeverity;
  variant?: NotificationVariant;
  color?: NotificationColor;
  horizontalPosition?: NotificationPositionHorizontal;
  verticalPosition?: NotificationPositionVertical;
}

interface INotificationStore {
  message: string;
  severity: NotificationSeverity;
  variant: NotificationVariant;
  color: NotificationColor;
  open: boolean;
  horizontalPosition: NotificationPositionHorizontal;
  verticalPosition: NotificationPositionVertical;
}

const useNotificationStore = create<INotificationStore>(() => {
  return {
    message: "",
    severity: NotificationSeverity.SUCCESS,
    variant: NotificationVariant.STANDARD,
    color: NotificationColor.SUCCESS,
    open: false,
    horizontalPosition: NotificationPositionHorizontal.RIGHT,
    verticalPosition: NotificationPositionVertical.BOTTOM,
  };
});

export const setNotification = (props: ISetNotification) => {
  const {
    message,
    severity,
    variant,
    color,
    horizontalPosition,
    verticalPosition,
  } = props;
  useNotificationStore.setState({
    message,
    severity,
    variant,
    color,
    open: true,
    horizontalPosition,
    verticalPosition,
  });
};

export const closeNotification = () => {
  useNotificationStore.setState({
    message: "",
    severity: NotificationSeverity.SUCCESS,
    variant: NotificationVariant.STANDARD,
    color: NotificationColor.SUCCESS,
    open: false,
  });
};

export default useNotificationStore;
