import React from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import { useUserDataStore } from "../../../store";
import styles from "./home-header.module.css";

dayjs.extend(customParseFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);

const HomeHeader = (): JSX.Element => {
  const date = dayjs();
  const { userName } = useUserDataStore();
  const formattedDate = date.format("dddd D MMMM, YYYY");
  return (
    <div className={styles.container}>
      <div className={styles.date}>{formattedDate}</div>
      <div className={styles.greeting}>Hi, {userName}</div>
    </div>
  );
};

export default HomeHeader;
