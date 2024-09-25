import React, { useState } from "react";
import ButtonField from "../../../common/component-lib/button-field";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import styles from "../top-header.module.css";
import ModalField from "../../../common/component-lib/modal";
import { useTranslation } from "react-i18next";
import {
  deleteSelectedDashboard,
  setNotification,
  useDashboardStore,
} from "../../../store";
import {
  NotificationColor,
  NotificationSeverity,
  NotificationVariant,
} from "../../../store/notification/notification.store";

const DeleteDashboard = ({ boardName }: { boardName: string }): JSX.Element => {
  const { t } = useTranslation();
  const [showDeleteDashboard, setShowDeleteDashboard] = useState(false);

  const dashBoardLength = useDashboardStore(
    (state) => state.dashBoardConfig
  ).length;

  const selectedDashBoardId = useDashboardStore(
    (state) => state.selectedDashBoardId
  );

  const handleDelete = (): void => {
    deleteSelectedDashboard(selectedDashBoardId);
    setShowDeleteDashboard(false);
    setNotification({
      message: t("DashBoard Deleted Successfully"),
      variant: NotificationVariant.STANDARD,
      severity: NotificationSeverity.WARNING,
      color: NotificationColor.SUCCESS,
    });
  };

  const handleCloseModal = (
    event: React.SyntheticEvent,
    reason: string
  ): void => {
    if (reason !== "backdropClick") {
      setShowDeleteDashboard(false);
    }
  };

  return (
    <>
      <div>
        <ButtonField
          variant="contained"
          startIcon={<DeleteForeverIcon />}
          text={t("Delete")}
          customClass={styles.delete_Button}
          onClick={() => setShowDeleteDashboard(true)}
          isDisabled={dashBoardLength === 1}
        />
      </div>
      {showDeleteDashboard ? (
        <ModalField
          handleCloseModal={handleCloseModal}
          showModal={showDeleteDashboard}
          modalWidth="xl"
          titleSummary={t("Delete Dashboard")}
          dialogContent={
            <p className={styles.delete_action_summary}>
              {t("Are you sure you want to delete the selected task board")}
              <span className={styles.delete_action_task_name}>
                "{boardName}"
              </span>
              <div>{t("once done can not be undone")}</div>
            </p>
          }
          actionContent={
            <>
              <ButtonField
                onClick={() => setShowDeleteDashboard(false)}
                variant="contained"
                text={t("No")}
                customClass={styles.delete_dashboard_button}
              />
              <ButtonField
                onClick={handleDelete}
                variant="contained"
                text={t("Yes, Delete")}
                customClass={styles.delete_dashboard_button}
              />
            </>
          }
          handleCrossIcon={() => setShowDeleteDashboard(false)}
        />
      ) : null}
    </>
  );
};

export default DeleteDashboard;
