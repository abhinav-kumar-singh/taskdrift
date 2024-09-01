import { Button } from "@mui/material";
import React from "react";

interface IButtonField {
  variant: "contained" | "outlined" | "text";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  text: string | JSX.Element;
  customClass?: string;
  isDisabled?: boolean;
}

const ButtonField = (props: IButtonField): JSX.Element => {
  const {
    variant,
    startIcon,
    endIcon,
    onClick,
    text,
    customClass,
    isDisabled,
  } = props;
  return (
    <Button
      variant={variant}
      className={customClass}
      sx={{
        backgroundColor: "rgb(var(--secondary-color))",
        color: "rgb(var(--primary-color))",
        fontWeight: "bold",
        height: "36px",
        width: "100%",
        "&:hover": {
          backgroundColor: "rgb(var(--primary-color))",
          color: "rgb(var(--secondary-color))",
        },
      }}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={isDisabled}>
      {text}
    </Button>
  );
};

export default ButtonField;
