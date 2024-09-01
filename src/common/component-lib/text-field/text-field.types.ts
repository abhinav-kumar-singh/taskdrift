import { SxProps, Theme } from "@mui/material";

interface ITextField {
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  customStyle?: SxProps<Theme>;
  autoFocus?: boolean;
  helperText?: string;
  error?: boolean;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  size?: "small" | "medium";
}

export type { ITextField };
