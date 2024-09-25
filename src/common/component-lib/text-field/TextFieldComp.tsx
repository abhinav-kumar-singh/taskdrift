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
        "& .MuiOutlinedInput-root": {
          color: "rgb(var(--primary-color))",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(var(--border-color-4))",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(var(--border-color-3))",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(var(--primary-color))",
          },
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
          color: "rgb(var(--border-color-1))",
          [`&.${inputLabelClasses.shrink}`]: {
            color: "rgb(var(--primary-color))",
          },
        },
      }}
    />
  );
};

export default TextFieldComp;
