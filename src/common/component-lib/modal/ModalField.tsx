import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

interface IModalField {
  handleCloseModal: (event: React.SyntheticEvent, reason: string) => void;
  showModal: boolean;
  modalWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  handleCrossIcon: () => void;
  titleSummary: string;
  dialogContent: React.ReactNode;
  actionContent?: React.ReactNode;
  fullWidth?: boolean;
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
  } = props;
  return (
    <React.Fragment>
      <Dialog
        onClose={handleCloseModal}
        open={showModal}
        aria-labelledby="customized-dialog-title"
        maxWidth={modalWidth}
        fullWidth={fullWidth}>
        <DialogTitle
          sx={{ m: 0, p: 2, fontWeight: "bold" }}
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
          }}>
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>{dialogContent}</DialogContent>
        <DialogActions>{actionContent}</DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ModalField;
