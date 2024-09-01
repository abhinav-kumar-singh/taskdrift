import React from "react";
import styles from "./home.module.css";
import HomeHeader from "./home-header";
import TaskDetailCounter from "./task-detail-counter";
import UpcomingTasks from "./upcoming-tasks";
import MyTasks from "./my-tasks";

const Home = (): JSX.Element => {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_header_container}>
        <HomeHeader />
      </div>
      <div>
        <TaskDetailCounter />
      </div>
      <div className={styles.home_middle_container}>
        <UpcomingTasks />
        <MyTasks />
      </div>
    </div>
  );
};

export default Home;
