import React from "react";
import styles from "./dashboard-info.module.css";
import { useDashboardStore } from "../../store";
import { IDashboardStore } from "../../store/dashboard/dash-board.type";
import dayjs from "dayjs";
import { getSelectedDashboardConfig } from "../../common/helpers/helpers";
import { useTranslation } from "react-i18next";
import {
  PRIORITY_COLOR,
  USER_BOARD_TAG_COLORS,
  USER_CONTEXT_TAG_COLORS,
} from "../../common/constants/task-create";

const DashBoardInfo = (): JSX.Element => {
  const { t } = useTranslation();
  const dashBoardDetails = useDashboardStore() as IDashboardStore;

  const selectedDashBoard = getSelectedDashboardConfig(dashBoardDetails);

  const contextTags = selectedDashBoard?.contextTags;
  const priorityTags = selectedDashBoard?.priorityTags;
  const projectTags = selectedDashBoard?.projectTags;
  const dueDate = selectedDashBoard?.dueDate;
  const createDate = selectedDashBoard?.createdDate;

  const formattedDueDate = dayjs(dueDate).format("MMMM D, YYYY");

  const formattedCreateDate = dayjs(createDate).format("MMMM D, YYYY");

  return (
    <div className={styles.info_container}>
      <div className={styles.tab_info_container}>
        <div className={styles.label}>{t("Priority")}</div>
        <div className={styles.value}>
          <span
            className={styles.priority_value}
            style={{
              backgroundColor:
                PRIORITY_COLOR[
                  priorityTags[0]?.toLowerCase() as keyof typeof PRIORITY_COLOR
                ],
            }}>
            {priorityTags?.[0]}
          </span>
        </div>
      </div>
      <div className={styles.tab_info_container}>
        <div className={styles.label}>{t("Due Date")} </div>
        <div className={styles.special_value}>{formattedDueDate}</div>
      </div>
      <div className={styles.tab_info_container}>
        <div className={styles.label}>{t("DashBoard Tags")}</div>
        <div className={styles.value}>
          {projectTags?.map((tag) => {
            return (
              <span
                className={styles.tag_label}
                style={{
                  backgroundColor:
                    USER_BOARD_TAG_COLORS[
                      tag?.toLowerCase() as keyof typeof USER_BOARD_TAG_COLORS
                    ],
                }}
                key={tag}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
      <div className={styles.tab_info_container}>
        <div className={styles.label}>{t("Created on")}</div>
        <div className={styles.special_value}>{formattedCreateDate}</div>
      </div>
      <div className={styles.tab_info_container}>
        <div className={styles.label}>{t("Context Tags")}</div>
        <div className={styles.value}>
          <span
            className={styles.priority_value}
            style={{
              backgroundColor:
                USER_CONTEXT_TAG_COLORS[
                  contextTags[0]?.toLowerCase() as keyof typeof USER_CONTEXT_TAG_COLORS
                ],
            }}>
            {contextTags?.[0]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashBoardInfo;
