import { Alert, Snackbar } from "@mui/material";
import { closeNotification, useNotificationStore } from "../../../store";
import {
  NotificationPositionHorizontal,
  NotificationPositionVertical,
} from "../../../store/notification/notification.store";

const Notification = (): JSX.Element => {
  const {
    message,
    severity,
    open,
    variant,
    color,
    horizontalPosition,
    verticalPosition,
  } = useNotificationStore();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: verticalPosition || NotificationPositionVertical.BOTTOM,
        horizontal: horizontalPosition || NotificationPositionHorizontal.RIGHT,
      }}
      open={open}
      autoHideDuration={6000}
      onClose={() => closeNotification()}>
      <Alert
        onClose={() => closeNotification()}
        severity={severity}
        color={color}
        variant={variant}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
