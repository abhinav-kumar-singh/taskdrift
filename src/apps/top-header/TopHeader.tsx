import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import styles from "./top-header.module.css";
import { useDashboardStore } from "../../store";
import { IDashboardStore } from "../../store/dashboard/dash-board.type";
import { getSelectedDashboardConfig } from "../../common/helpers/helpers";
import { useEffect, useState } from "react";
import TextFieldComp from "../../common/component-lib/text-field";
import { setDashBoardName } from "../../store/dashboard/dash-board.store";
import ButtonField from "../../common/component-lib/button-field";
import CreateDashboardFromHeader from "./create-dashboard-from-header";
import DeleteDashboard from "./delete-dashboard/DeleteDashboard";
import { useTranslation } from "react-i18next";

const TopHeader = (): JSX.Element => {
  const { t } = useTranslation();
  const dashBoardDetails = useDashboardStore() as IDashboardStore;

  const selectedDashBoard = getSelectedDashboardConfig(dashBoardDetails);
  const [showEditComponent, setShowEditComponent] = useState(false);
  const [boardName, setBoardName] = useState("");

  const [showDashboardCreateModel, setShowDashboardCreateModel] =
    useState(false);

  useEffect(() => {
    setBoardName(selectedDashBoard?.name);
  }, [selectedDashBoard?.name]);

  const handleDashBoardNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setBoardName(event.target.value);
  };

  const handleCloseModal = (
    event: React.SyntheticEvent,
    reason: string
  ): void => {
    if (reason !== "backdropClick") {
      setShowDashboardCreateModel(false);
    }
  };

  const handleSuccess = (): void => {
    setShowDashboardCreateModel(false);
  };

  return (
    <div className={styles.header_container}>
      <div className={styles.name}>
        <div className={styles.icon}>
          <ChevronLeftIcon fontSize="large" />
          <ChevronRightIcon fontSize="large" />
        </div>
        <div className={styles.title}>
          <span className={styles.dashboard_config_name}>
            {t("DASHBOARD PAGES")}
          </span>
          /
          <div
            className={`${styles.dashBoard_name} ${
              !showEditComponent ? styles.label : null
            }`}
            title={selectedDashBoard?.name}>
            {showEditComponent ? (
              <div>
                <TextFieldComp
                  value={boardName}
                  onChange={handleDashBoardNameChange}
                  customStyle={styles.edit_comp}
                />
              </div>
            ) : (
              <>{selectedDashBoard?.name}</>
            )}
          </div>
        </div>
        {showEditComponent ? (
          <div className={styles.edit_action}>
            <div
              onClick={() => {
                setDashBoardName(
                  dashBoardDetails?.selectedDashBoardId,
                  boardName
                );
                setShowEditComponent(false);
              }}
              className={styles.edit_action_icon}>
              <CheckCircleIcon
                sx={{
                  color: "rgb(var(--primary-color))",
                }}
              />
            </div>
            <div
              onClick={() => setShowEditComponent(false)}
              className={styles.edit_action_icon}>
              <CancelIcon
                sx={{
                  color: "rgb(var(--primary-color))",
                }}
              />
            </div>
          </div>
        ) : (
          <div
            className={styles.edit_icon}
            onClick={() => setShowEditComponent(true)}>
            <EditIcon />
          </div>
        )}
      </div>
      <div className={styles.action}>
        <ButtonField
          variant="contained"
          startIcon={<AddIcon />}
          text={t("New Dashboard")}
          onClick={() => setShowDashboardCreateModel(true)}
        />
        <StarBorderIcon
          sx={{
            color: `${
              selectedDashBoard?.isDefault ? "rgb(var(--background-2))" : ""
            }`,
          }}
        />
        <DeleteDashboard boardName={boardName} />
      </div>
      {showDashboardCreateModel ? (
        <CreateDashboardFromHeader
          handleCloseModal={handleCloseModal}
          showDashboardCreateModel={showDashboardCreateModel}
          setShowDashboardCreateModel={setShowDashboardCreateModel}
          handleSuccess={handleSuccess}
        />
      ) : null}
    </div>
  );
};

export default TopHeader;
