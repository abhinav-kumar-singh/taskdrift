import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface IDateTime {
  label: string;
  value?: dayjs.Dayjs | null | undefined;
  onChange?: (newValue: Dayjs | null) => void | undefined;
  customStyle?: React.CSSProperties;
}

const DateTime = (props: IDateTime): JSX.Element => {
  const { label, value, onChange, customStyle } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
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
            "& .MuiSvgIcon-root": {
              color: "rgb(var(--primary-color))",
            },
            "& .MuiInputBase-input": {
              color: "rgb(var(--primary-color))",
            },
          },
          ...customStyle,
        }}
      />
    </LocalizationProvider>
  );
};

export default DateTime;
