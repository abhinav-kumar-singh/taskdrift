import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { IDropdownOption } from "../../types/common.types";
import { useSettingStore } from "../../../store";
import { Theme } from "../../../store/setting/setting.type";

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

  const selectedTheme = useSettingStore(
    (state) => state.settingConfig?.personalizations
  )?.theme;

  return (
    <FormControl
      sx={{
        minWidth: 200,
        maxWidth: 200,

        svg: {
          backgroundColor: "rgb(var(--background-3))",
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
          backgroundColor: "rgb(var(--background-3))",
          color: "rgb(var(--primary-color))",
        }}
        MenuProps={MenuProps}>
        <MenuItem
          value=""
          sx={{
            backgroundColor: "rgb(var(--background-3))",
            "&:hover": {
              color:
                selectedTheme === Theme.DARK
                  ? "rgb(var(--secondary-color))"
                  : "rgb(var(--primary-color))",
            },
          }}>
          <em>None</em>
        </MenuItem>
        {dropDownOption.map((option) => {
          return (
            <MenuItem
              value={option.value}
              key={option.index}
              sx={{
                backgroundColor: "rgb(var(--background-3))",
                color: "rgb(var(--primary-color))",
                "&:hover": {
                  color:
                    selectedTheme === Theme.DARK
                      ? "rgb(var(--secondary-color))"
                      : "rgb(var(--primary-color))",
                },
              }}>
              {option.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
