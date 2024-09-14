import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./modal.module.css";

interface IModalField {
  handleCloseModal: (event: React.SyntheticEvent, reason: string) => void;
  showModal: boolean;
  modalWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  handleCrossIcon: () => void;
  titleSummary?: string;
  dialogContent: React.ReactNode;
  actionContent?: React.ReactNode;
  fullWidth?: boolean;
  hideContentBorder?: boolean;
}

const ModalField = (props: IModalField): JSX.Element => {
  const {
    handleCloseModal,
    showModal,
    modalWidth,
    titleSummary,
    dialogContent,
    actionContent,
    handleCrossIcon,
    fullWidth,
    hideContentBorder,
  } = props;
  return (
    <React.Fragment>
      <Dialog
        className={styles.modal_container}
        onClose={handleCloseModal}
        open={showModal}
        aria-labelledby="customized-dialog-title"
        maxWidth={modalWidth}
        fullWidth={fullWidth}>
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            fontWeight: "bold",
            backgroundColor: "rgb(23,23,23)",
            color: "rgb(255,255,255)",
          }}
          id="customized-dialog-title">
          {titleSummary}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCrossIcon}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            fontWeight: "bold",
            color: "rgb(255,255,255)",
          }}>
          <CloseIcon />
        </IconButton>
        <DialogContent
          dividers
          sx={{
            border: hideContentBorder ? "none" : "",
            borderBottom: "none",
            backgroundColor: "rgb(var(--background-1))",
          }}>
          {dialogContent}
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: "rgb(var(--background-1))",
          }}>
          {actionContent}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ModalField;
