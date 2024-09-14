import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import ButtonField from "../../common/component-lib/button-field";
import { useState } from "react";
import ModalField from "../../common/component-lib/modal/ModalField";
import styles from "./clear-data.module.css";
import { useLocation } from "wouter";
import { setNotification } from "../../store";

const ClearData = (): JSX.Element => {
  const [showDeleteDataModal, setShowDeleteDataModal] = useState(false);

  const [, setLocation] = useLocation();

  const handleCloseModal = (
    event: React.SyntheticEvent,
    reason: string
  ): void => {
    if (reason !== "backdropClick") {
      setShowDeleteDataModal(false);
    }
  };

  const handleDeleteData = (): void => {
    localStorage.clear();
    setShowDeleteDataModal(false);
    setLocation("/");
    setNotification({
      message: "All Data Deleted Successfully",
    });
  };

  return (
    <>
      <ButtonField
        variant="contained"
        text={"Clear all DATA"}
        endIcon={<ReportGmailerrorredIcon />}
        onClick={() => {
          setShowDeleteDataModal(true);
        }}
      />
      {showDeleteDataModal ? (
        <ModalField
          handleCloseModal={handleCloseModal}
          showModal={showDeleteDataModal}
          modalWidth="xl"
          titleSummary="Delete ALL DATA"
          dialogContent={
            <p className={styles.summary}>
              Are you sure you want to delete the All The Data?. (all your
              Dashboard data, tasks, and settings will be deleted permanently)
              And will be logged out
              <div className={styles.warning}>once done can not be undone</div>
            </p>
          }
          actionContent={
            <>
              <ButtonField
                onClick={() => setShowDeleteDataModal(false)}
                variant="contained"
                text="No"
                customClass={styles.button}
              />
              <ButtonField
                onClick={handleDeleteData}
                variant="contained"
                text="Yes, Delete"
                customClass={styles.button}
              />
            </>
          }
          handleCrossIcon={() => setShowDeleteDataModal(false)}
        />
      ) : null}
    </>
  );
};

export default ClearData;
