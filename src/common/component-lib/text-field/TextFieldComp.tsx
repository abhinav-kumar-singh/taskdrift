import { TextField } from "@mui/material";
import { ITextField } from "./text-field.types";
import { inputLabelClasses } from "@mui/material/InputLabel";

const TextFieldComp = (props: ITextField): JSX.Element => {
  const {
    label,
    onChange,
    value,
    customStyle,
    autoFocus,
    helperText,
    error,
    multiline,
    rows,
    required,
    size,
  } = props;

  return (
    <TextField
      id="standard-required"
      required={required}
      label={label}
      variant="outlined"
      sx={{
        div: {
          color: "rgb(var(--primary-color)) !important",
          borderColor: "rgb(var(--primary-color)) !important",
        },
        ...customStyle,
      }}
      onChange={onChange}
      value={value}
      autoFocus={autoFocus}
      helperText={helperText}
      error={error}
      multiline={multiline}
      rows={rows}
      size={size || "small"}
      InputLabelProps={{
        sx: {
          color: "rgb(var(--primary-color))",
          [`&.${inputLabelClasses.shrink}`]: {
            color: "rgb(var(--primary-color))",
          },
        },
      }}
    />
  );
};

export default TextFieldComp;
