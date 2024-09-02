import { FormControlLabel, Switch, Typography } from "@mui/material";
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
import { IDropdownOption } from "../../common/types/common.types";
import { generateUniqueId } from "../../common/helpers/helpers";
import { useLocation } from "wouter";
import { DashBoardViewType } from "../../store/dashboard/dash-board.type";
import TextFieldComp from "../../common/component-lib/text-field";
import Dropdown from "../../common/component-lib/dropdown";
import DateTime from "../../common/component-lib/date-time-field";
import { useDashboardStore } from "../../store";
import ButtonField from "../../common/component-lib/button-field";

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

  const [projectTags, setProjectTags] = useState<IDropdownOption[]>([]);
  const [priorityTags, setPriorityTags] = useState<IDropdownOption[]>([]);
  const [contextTags, setContextTags] = useState<IDropdownOption[]>([]);
  const [dueDate, setDueDate] = useState<Dayjs | null>(dayjs());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(false);

  const [, setLocation] = useLocation();

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
    event: SyntheticEvent<Element, Event>,
    value:
      | { title: string; value: string }
      | { title: string; value: string }[]
      | null
  ): void => {
    if (Array.isArray(value)) {
      setProjectTags(value);
    }
  };

  const handlePriorityTags = (
    event: SyntheticEvent<Element, Event>,
    option:
      | { title: string; value: string }
      | { title: string; value: string }[]
      | null
  ) => {
    if (!Array.isArray(option)) {
      setPriorityTags([
        {
          title: option?.title || "",
          value: option?.value || "",
        },
      ]);
    }
  };

  const handleContextTags = (
    event: SyntheticEvent<Element, Event>,
    option:
      | { title: string; value: string }
      | { title: string; value: string }[]
      | null
  ) => {
    if (!Array.isArray(option)) {
      setContextTags([
        {
          title: option?.title || "",
          value: option?.value || "",
        },
      ]);
    }
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
        projectTags: projectTags.map((tag) => tag.title),
        priorityTags: priorityTags.map((tag) => tag.title),
        contextTags: contextTags.map((tag) => tag.title),
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

  const handleDueDate = (newValue: Dayjs | null): void => {
    setDueDate(newValue);
  };

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
            label="Dashboard Name"
            onChange={handleDashBoardName}
            required
          />
          <TextFieldComp
            label="Dashboard Description"
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
            label="Make it default"
            onChange={handleDashBoardAsDefault}
          />
        </div>
        <div className={styles.autocomplete_container}>
          <div className={styles.dropdown_container}>
            <Dropdown
              isMultiDropdown={true}
              dropDownOption={USER_BOARD_TAGS}
              onChange={handleProjectTags}
              customStyle={{ width: "170px" }}
              label="Project Tags"
              required
            />

            <Dropdown
              isMultiDropdown={false}
              dropDownOption={USER_TIME_TAGS}
              onChange={handlePriorityTags}
              customStyle={{ width: "170px" }}
              label="Priority Tags"
              required
            />
          </div>
          <div className={styles.dropdown_container}>
            <Dropdown
              isMultiDropdown={false}
              dropDownOption={USER_CONTEXT_TAGS}
              onChange={handleContextTags}
              customStyle={{ width: "170px" }}
              label="Context Tags"
              required
            />

            <DateTime
              label="Due Date"
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
            text="Go Back"
          />
        ) : null}
        <ButtonField
          variant="contained"
          startIcon={<SentimentVerySatisfiedIcon />}
          onClick={handleDashBoardCreation}
          text="Create"
        />
      </div>
    </>
  );
};

export default Createdashboard;
