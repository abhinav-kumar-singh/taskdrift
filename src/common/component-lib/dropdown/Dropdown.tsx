import {
  Autocomplete,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { SyntheticEvent } from "react";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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
  dropDownOption: {
    title: string;
    value: string;
  }[];
  onChange: (
    event: SyntheticEvent<Element, Event>,
    value:
      | {
          title: string;
          value: string;
        }
      | {
          title: string;
          value: string;
        }[]
      | null
  ) => void;
  label: string;
  customStyle?: React.CSSProperties;
  required?: boolean;
  shortOptions?: boolean;
}

const Dropdown = (props: IDropdown): JSX.Element => {
  const {
    isMultiDropdown,
    dropDownOption,
    onChange,
    customStyle,
    label,
    required,
    shortOptions,
  } = props;
  return (
    <Autocomplete
      multiple={isMultiDropdown}
      id="checkboxes-tags"
      options={
        shortOptions
          ? dropDownOption?.sort((a, b) => (a.title > b.title ? 1 : -1))
          : dropDownOption
      }
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </li>
        );
      }}
      style={customStyle}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder="Tags"
          variant="standard"
          required={required}
        />
      )}
      onChange={onChange}
    />
    // <FormControl sx={{ m: 1, width: 300 }}>
    //   <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
    //   <Select
    //     labelId="demo-multiple-name-label"
    //     id="demo-multiple-name"
    //     multiple={isMultiDropdown}
    //     value={personName}
    //     onChange={onChange}
    //     input={<OutlinedInput label="Name" />}
    //     MenuProps={MenuProps}>
    //     {dropDownOption.map((option) => {
    //       return (
    //         <MenuItem key={option.value} value={option.value}>
    //           {option.title}
    //         </MenuItem>
    //       );
    //     })}
    //   </Select>
    // </FormControl>
  );
};

export default Dropdown;
