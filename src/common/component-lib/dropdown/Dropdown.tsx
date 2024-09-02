import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { IDropdownOption } from "../../types/common.types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface IDropdown {
  isMultiDropdown?: boolean;
  value: string | string[];
  onChange: (data: SelectChangeEvent<string | string[]>) => void;
  dropDownOption: IDropdownOption[];
  customStyle?: React.CSSProperties;
  label?: string;
  showLabel?: boolean;
  isDisabled?: boolean;
}

const Dropdown = (props: IDropdown): JSX.Element => {
  const {
    isMultiDropdown,
    value,
    onChange,
    dropDownOption,
    customStyle,
    label,
    showLabel,
    isDisabled,
  } = props;
  return (
    <FormControl
      sx={{
        minWidth: 200,
        maxWidth: 200,

        svg: {
          color: "rgb(var(--primary-color))",
        },
        margin: "12px 0 25px 0px",
        ...customStyle,
      }}
      size="small">
      {showLabel ? (
        <InputLabel id="multiple-name-label">{label}</InputLabel>
      ) : null}
      <Select
        disabled={isDisabled}
        labelId="multiple-name-label"
        multiple={isMultiDropdown}
        value={value}
        onChange={onChange}
        input={<OutlinedInput />}
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          backgroundColor: "rgb(var(--background-1))",
          color: "rgb(var(--primary-color))",
        }}
        MenuProps={MenuProps}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {dropDownOption.map((option) => {
          return (
            <MenuItem value={option.value} key={option.index}>
              {option.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
