import { useUserDataStore } from "../../store";
import styles from "./user-info.module.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Typography } from "@mui/material";

const UserInfo = (): JSX.Element => {
  const { userName, email } = useUserDataStore();

  return (
    <div className={styles.profile_container}>
      <div>
        <AccountBoxIcon
          fontSize="large"
          sx={{
            color: "rgb(var(--primary-color))",
          }}
        />
      </div>
      <div>
        <Typography
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: "15px",
            marginBottom: "0px !important",
            color: "rgb(var(--primary-color))",
            maxWidth: "160px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {userName}
        </Typography>
        <Typography
          gutterBottom
          sx={{
            fontSize: "12px",
            color: "rgb(var(--tertiary-color))",
            maxWidth: "160px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {email}
        </Typography>
      </div>
    </div>
  );
};

export default UserInfo;
