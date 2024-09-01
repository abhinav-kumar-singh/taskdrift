import { ActivityType } from "../../../store/activity/activity-log.types";
import styles from "./activity-log.module.css";

const getActivityRenderer = (activityType: ActivityType): JSX.Element => {
  switch (activityType) {
    case ActivityType.CREATE:
      return <span className={styles.created}>Created</span>;
    case ActivityType.UPDATE:
      return <span className={styles.updated}>Updated</span>;
    case ActivityType.DELETE:
      return <span className={styles.deleted}>Deleted</span>;
  }
  return <></>;
};

const getFormattedDateTime = (timeLog: string): string => {
  const date = new Date(timeLog);
  const localDate = date.toLocaleDateString();

  const timeOptions = {
    hour: "2-digit" as "2-digit",
    minute: "2-digit" as "2-digit",
    second: "2-digit" as "2-digit",
    hour12: true,
  };

  const formattedTime = date.toLocaleTimeString(undefined, timeOptions);

  return `${localDate} ${formattedTime}`;
};

export { getActivityRenderer, getFormattedDateTime };
