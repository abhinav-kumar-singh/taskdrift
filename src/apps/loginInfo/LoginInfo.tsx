import { Button } from "@mui/material";
import React, { useState } from "react";
import {
  setUserEmail,
  setUserMobile,
  setUserName,
  useUserDataStore,
} from "../../store";
import styles from "./login.module.css";
import { handleNextClickedSuccess } from "../welcome/utils";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TextFieldComp from "../../common/component-lib/text-field";

interface ILoginInfo {
  setUserDataSaved: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginInfo = (props: ILoginInfo) => {
  const { setUserDataSaved } = props;
  const { userName, email, mobile } = useUserDataStore();

  const [showError, setShowError] = useState(false);

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserName(event?.target?.value);
  };

  const handleUserEmail = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserEmail(event?.target?.value);
    setShowError(false);
  };

  const handleUserMobile = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserMobile(event?.target?.value);
  };

  const handleNext = (): void => {
    const isSuccess = handleNextClickedSuccess(email, userName, mobile);
    if (!isSuccess) {
      setShowError(true);
    } else {
      setUserDataSaved(true);
    }
  };

  const isMoveToNextEnabled = (): boolean => {
    return !userName?.length || !email?.length;
  };

  return (
    <>
      <div className={styles.login_info_container}>
        <TextFieldComp
          label="Enter your name"
          value={userName}
          onChange={handleUserName}
          customStyle={{
            marginBottom: "10px",
          }}
          autoFocus
          required
        />

        <TextFieldComp
          label="Enter your email"
          value={email}
          onChange={handleUserEmail}
          customStyle={{
            marginBottom: "10px",
          }}
          error={showError}
          helperText={showError ? "Please enter a valid email" : ""}
          required
        />

        <TextFieldComp
          label="Enter your mobile number"
          value={mobile}
          onChange={handleUserMobile}
          customStyle={{
            marginBottom: "10px",
          }}
        />
      </div>

      <div className={styles.next_button}>
        <Button
          variant="outlined"
          sx={{
            margin: "13px 20px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgb(var(--secondary-color))",
            color: "rgb(var(--primary-color))",
            "&:hover": {
              backgroundColor: "rgb(var(--primary-color))",
              color: "rgb(var(--secondary-color))",
            },
          }}
          disabled={isMoveToNextEnabled()}
          endIcon={<NavigateNextIcon />}
          size="large"
          onClick={handleNext}>
          Next
        </Button>
      </div>
    </>
  );
};

export default LoginInfo;
