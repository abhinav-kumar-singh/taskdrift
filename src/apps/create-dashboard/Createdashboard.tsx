import {
  FormControlLabel,
  SelectChangeEvent,
  Switch,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import dayjs, { Dayjs } from "dayjs";

import styles from "./create-dashboard.module.css";
import {
  USER_BOARD_TAGS,
  USER_CONTEXT_TAGS,
  USER_TIME_TAGS,
} from "../../common/constants/user-dashboard-creation";
import { generateUniqueId } from "../../common/helpers/helpers";
import { useLocation } from "wouter";
import { DashBoardViewType } from "../../store/dashboard/dash-board.type";
import TextFieldComp from "../../common/component-lib/text-field";
import DateTime from "../../common/component-lib/date-time-field";
import { useDashboardStore } from "../../store";
import ButtonField from "../../common/component-lib/button-field";
import { useTranslation } from "react-i18next";
import Dropdown from "../../common/component-lib/dropdown/Dropdown";

const Createdashboard = ({
  setUserDataSaved,
  heading,
  showPreviousButton,
  onSuccess,
  redirectAfterSuccess,
  isFirstDashBoard,
}: {
  heading?: string;
  setUserDataSaved?: React.Dispatch<React.SetStateAction<boolean>>;
  showPreviousButton?: boolean;
  onSuccess?: () => void;
  redirectAfterSuccess: boolean;
  isFirstDashBoard?: boolean;
}) => {
  const [dashBoardName, setDashBoardName] = useState("");
  const [dashBoardDescription, setDashBoardDescription] = useState("");
  const [isDashBoardDefault, setIsDashBoardDefault] = useState(
    isFirstDashBoard ?? false
  );

  const [projectTags, setProjectTags] = useState<string[]>([
    USER_BOARD_TAGS[0].value,
  ]);

  const [priorityTags, setPriorityTags] = useState<string[]>([
    USER_TIME_TAGS[0].value,
  ]);

  const [contextTags, setContextTags] = useState<string[]>([
    USER_CONTEXT_TAGS[0].value,
  ]);

  const [dueDate, setDueDate] = useState<Dayjs | null>(dayjs());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(false);

  const [, setLocation] = useLocation();

  const { t } = useTranslation();

  const { setDashBoardConfig } = useDashboardStore();

  const handleDashBoardName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDashBoardName(event.target.value);
  };

  const handleDashBoardDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDashBoardDescription(event.target.value);
  };

  const handleDashBoardAsDefault = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ): void => {
    setIsDashBoardDefault(checked);
  };

  const handleProjectTags = (
    data: SelectChangeEvent<string | string[]>
  ): void => {
    setProjectTags(data?.target?.value as string[]);
  };

  const handlePriorityTags = (data: SelectChangeEvent<string | string[]>) => {
    setPriorityTags(data?.target?.value as string[]);
  };

  const handleContextTags = (data: SelectChangeEvent<string | string[]>) => {
    setContextTags(data?.target?.value as string[]);
  };

  const handleDueDate = (newValue: Dayjs | null): void => {
    setDueDate(newValue);
  };

  const handleDashBoardCreation = (): void => {
    if (
      !dashBoardName ||
      !dashBoardDescription ||
      !projectTags.length ||
      !priorityTags.length ||
      !contextTags.length
    ) {
      setError(true);
    } else {
      const obj = {
        name: dashBoardName,
        description: dashBoardDescription,
        isDefault: isDashBoardDefault,
        projectTags: projectTags,
        priorityTags: priorityTags,
        contextTags: contextTags,
        createdDate: new Date().toISOString(),
        updatedDate: new Date().toISOString(),
        dashboardId: generateUniqueId(),
        dueDate: dueDate,
        dashBoardViewType: DashBoardViewType.TABLE,
        showMidSection: true,
      };
      setDashBoardConfig(obj);
      setError(false);
      if (redirectAfterSuccess) setLocation("/dashboard");
      onSuccess?.();
    }
  };

  const isCreateButtonDisabled =
    !dashBoardName ||
    !dashBoardDescription ||
    !projectTags.length ||
    !priorityTags.length ||
    !contextTags.length ||
    !dueDate;

  return (
    <>
      {heading ? (
        <Typography
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          {heading}
        </Typography>
      ) : null}

      <div className={styles.input_fields}>
        <div className={styles.create_container}>
          <TextFieldComp
            label={t("Dashboard Name")}
            onChange={handleDashBoardName}
            required
          />
          <TextFieldComp
            label={t("Dashboard Description")}
            onChange={handleDashBoardDescription}
            required
          />
          <FormControlLabel
            checked={isDashBoardDefault}
            control={<Switch defaultChecked />}
            sx={{
              opacity: isFirstDashBoard ? 0.5 : 1,
              pointerEvents: isFirstDashBoard ? "none" : "auto",
            }}
            label={t("Make it default")}
            onChange={handleDashBoardAsDefault}
          />
        </div>
        <div className={styles.autocomplete_container}>
          <div className={styles.dropdown_container}>
            <Dropdown
              value={projectTags}
              onChange={handleProjectTags}
              dropDownOption={USER_BOARD_TAGS}
              isMultiDropdown
            />

            <Dropdown
              value={priorityTags}
              onChange={handlePriorityTags}
              dropDownOption={USER_TIME_TAGS}
            />
          </div>
          <div
            className={`${styles.dropdown_container} ${styles.dropdown_with_date}`}>
            <Dropdown
              value={contextTags}
              onChange={handleContextTags}
              dropDownOption={USER_CONTEXT_TAGS}
              customStyle={{ margin: "0px" }}
            />

            <DateTime
              label={t("Due Date")}
              value={dueDate}
              onChange={handleDueDate}
              customStyle={{ width: "170px" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.button_container}>
        {showPreviousButton ? (
          <ButtonField
            variant="contained"
            startIcon={<ArrowBackIosIcon />}
            onClick={() => {
              setUserDataSaved?.(false);
            }}
            text={t("Go Back")}
            customClass={styles.back_button}
          />
        ) : null}
        <ButtonField
          variant="contained"
          startIcon={<SentimentVerySatisfiedIcon />}
          onClick={handleDashBoardCreation}
          text={t("Create")}
          customClass={styles.create_button}
          isDisabled={isCreateButtonDisabled}
        />
      </div>
    </>
  );
};

export default Createdashboard;
