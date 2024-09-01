import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import { LANGUAGE_LIST, THEME_LIST } from "../../utils";
import { Language, Theme } from "../../../../../../store/setting/setting.type";
import {
  getItem,
  setItem,
} from "../../../../../../common/component-lib/storage-manager/storage";
import { StorageKey } from "../../../../../../common/component-lib/storage-manager/storage.types";
import { useTranslation } from "react-i18next";
import styles from "../../personalizations.module.css";
import { useSettingStore } from "../../../../../../store";

const CustomizationPage = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const selectedUserLang = getItem(StorageKey.SELECTED_LANGUAGE) as Language;

  const [lang, setLang] = useState(selectedUserLang || Language.EN);

  const { settingConfig, setTheme } = useSettingStore();
  const selectedTheme = settingConfig?.personalizations?.theme;

  const handleChange = (event: SelectChangeEvent) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    setLang(lang as Language);
    setItem(StorageKey.SELECTED_LANGUAGE, lang as Language);
  };

  return (
    <div>
      <div className={styles.personalization_label}>{t("Language")}</div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 200,
          mb: 5,
          svg: {
            color: "rgb(var(--primary-color))",
          },
        }}
        size="small">
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
      <div className={styles.personalization_label}>{t("Theme")}</div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 200,
          mb: 5,
          svg: {
            color: "rgb(var(--primary-color))",
          },
        }}
        size="small">
        <Select
          displayEmpty
          value={selectedTheme}
          onChange={(e) => setTheme(e.target.value as Theme)}
          input={<OutlinedInput />}
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            backgroundColor: "rgb(var(--background-1))",
            color: "rgb(var(--primary-color))",
          }}>
          {THEME_LIST.map((theme) => {
            return (
              <MenuItem value={theme.value} key={theme.index}>
                {theme.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomizationPage;
