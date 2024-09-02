import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  getItem,
  setItem,
} from "../../../../../../../common/component-lib/storage-manager/storage";
import { StorageKey } from "../../../../../../../common/component-lib/storage-manager/storage.types";
import { Language } from "../../../../../../../store/setting/setting.type";
import OutlinedInput from "@mui/material/OutlinedInput";
import { LANGUAGE_LIST } from "../../../utils";

const LanguageCustomization = ({
  customClass,
}: {
  customClass?: string;
}): JSX.Element => {
  const { i18n } = useTranslation();

  const selectedUserLang = getItem(StorageKey.SELECTED_LANGUAGE) as Language;

  const [lang, setLang] = useState(selectedUserLang || Language.EN);

  const handleChange = (event: SelectChangeEvent) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    setLang(lang as Language);
    setItem(StorageKey.SELECTED_LANGUAGE, lang as Language);
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 200,
          mb: 5,
          svg: {
            color: "rgb(var(--primary-color))",
          },
        }}
        size="small"
        className={customClass}>
        <Select
          displayEmpty
          value={lang}
          onChange={handleChange}
          input={<OutlinedInput />}
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            backgroundColor: "rgb(var(--background-1))",
            color: "rgb(var(--primary-color))",
          }}>
          {LANGUAGE_LIST.map((language) => {
            return (
              <MenuItem value={language.value} key={language.index}>
                {language.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageCustomization;
