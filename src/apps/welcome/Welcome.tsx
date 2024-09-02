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
import { removeItem } from "../../common/component-lib/storage-manager/storage";
import { StorageKey } from "../../common/component-lib/storage-manager/storage.types";
import { useTranslation } from "react-i18next";

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(true);

  const { t } = useTranslation();

  const [userDataSaved, setUserDataSaved] = useState(false);

  const handleClose = (): void => {
    setOpen(false);
    removeItem(StorageKey.USER_VIEWED_LANDING_PAGE);
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
      titleSummary={t("Getting Started")}
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
            {t("Welcome to Task Drift!")}
          </Typography>
          <Typography
            gutterBottom
            sx={{
              fontSize: "14px",
              color: "rgb(var(--tertiary-color)",
              marginBottom: "20px",
            }}>
            {t("Let's start automating your tasks.")}
            <span className={styles.title}>
              {t(
                "Efficiently prioritizes, manages, and executes tasks with advanced software proficiency, automation skills, and effective team coordination."
              )}
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
                  <div>{t("Information")}</div>
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
                  <div>{t("Dashboard Details")}</div>
                </AccordionSummary>
                <AccordionDetails>
                  <Createdashboard
                    setUserDataSaved={setUserDataSaved}
                    heading={t("Create Your Very First Own Dashboard")}
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
