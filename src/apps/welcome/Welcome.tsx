import React, { useState } from "react";
import LoginInfo from "../loginInfo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Createdashboard from "../create-dashboard";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import styles from "./welcome.module.css";
import ModalField from "../../common/component-lib/modal";
import { setItem } from "../../common/component-lib/storage-manager/storage";
import { StorageKey } from "../../common/component-lib/storage-manager/storage.types";

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(true);

  const [userDataSaved, setUserDataSaved] = useState(false);

  const handleClose = (): void => {
    setOpen(false);
    setItem(StorageKey.USER_VIEWED_LANDING_PAGE, false);
  };
  const handleCloseModal = (
    event: React.SyntheticEvent,
    reason: string
  ): void => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <ModalField
      handleCloseModal={handleCloseModal}
      showModal={open}
      modalWidth="lg"
      fullWidth
      titleSummary="Getting Started"
      handleCrossIcon={handleClose}
      dialogContent={
        <>
          <Typography
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "24px",
              marginTop: "10px",
              marginBottom: "10px",
            }}>
            Welcome to Advanced Task Manager !
          </Typography>
          <Typography
            gutterBottom
            sx={{
              fontSize: "14px",
              color: "rgb(var(--tertiary-color)",
              marginBottom: "20px",
            }}>
            Let's start automating your tasks.
            <span className={styles.title}>
              Efficiently prioritizes, manages, and executes tasks with advanced
              software proficiency, automation skills, and effective team
              coordination.
            </span>
          </Typography>
          <Divider />
          <div className={styles.accordion_container}>
            <div
              className={`${styles.user_info_accordion} ${
                userDataSaved ? styles.disabled : ""
              }`}>
              <Accordion
                defaultExpanded
                sx={{
                  boxShadow: "none",
                  backgroundColor: "rgb(var(--background-1))",
                  pointerEvents: userDataSaved ? "none" : "auto",
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    minHeight: "0px !important",
                    flexDirection: "row-reverse",
                    div: {
                      margin: "4px !important",
                    },
                    width: "300px !important",
                  }}>
                  <div>Information</div>
                </AccordionSummary>
                <AccordionDetails>
                  <LoginInfo setUserDataSaved={setUserDataSaved} />
                </AccordionDetails>
              </Accordion>
            </div>
            <div
              className={`${styles.dashboard_config_accordion} ${
                !userDataSaved ? styles.disabled : ""
              }`}>
              <Accordion
                defaultExpanded
                sx={{
                  boxShadow: "none",
                  backgroundColor: "rgb(var(--background-1))",
                  pointerEvents: !userDataSaved ? "none" : "auto",
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    minHeight: "0px !important",
                    flexDirection: "row-reverse",
                    div: {
                      margin: "4px !important",
                    },
                    width: "300px !important",
                  }}>
                  <div>Dashboard Details</div>
                </AccordionSummary>
                <AccordionDetails>
                  <Createdashboard
                    setUserDataSaved={setUserDataSaved}
                    heading=" 'Create Your Very First Own Dashboard '"
                    showPreviousButton
                    redirectAfterSuccess={true}
                    isFirstDashBoard
                  />
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </>
      }
    />
  );
}
