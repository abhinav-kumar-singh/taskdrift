import dayjs from "dayjs";
import { ITasks, TaskStatus } from "../../store/tasks/task.type";
import { LIST_VIEW_COLUMN_ID } from "./list-view/list-view.types";
import styles from "./grid.module.css";
import {
  PRIORITY_COLOR,
  TASK_TYPE_COLORS,
} from "../../common/constants/task-create";
import { getFormattedEstimatedDate } from "../../common/helpers/helpers";

export const getTaskCounter = (tasks: ITasks[], value: TaskStatus): number => {
  return tasks?.filter((task) => task.status === value)?.length || 0;
};

export const renderValue = (
  value: string | string[] | dayjs.Dayjs | JSX.Element | null | undefined
): string | JSX.Element => {
  if (typeof value === "string" && dayjs(value).isValid()) {
    return dayjs(value).format("MMMM D, YYYY");
  }
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    return value[0];
  }
  return "";
};

export const getStyledRenderValue = (
  value: string | JSX.Element,
  columnId: LIST_VIEW_COLUMN_ID
) => {
  switch (columnId) {
    case LIST_VIEW_COLUMN_ID.ORIGINAL_ESTIMATE:
      return (
        <div>
          Due on {getFormattedEstimatedDate(value as unknown as dayjs.Dayjs)}
        </div>
      );
    case LIST_VIEW_COLUMN_ID.SUMMARY:
    case LIST_VIEW_COLUMN_ID.DESCRIPTION:
    case LIST_VIEW_COLUMN_ID.ACTION: {
      return <div className={styles.other_cell}>{value}</div>;
    }
    case LIST_VIEW_COLUMN_ID.TYPE: {
      return (
        <div className={styles.cell_container}>
          <div
            className={styles.cell_tag}
            style={{
              backgroundColor:
                TASK_TYPE_COLORS[value as keyof typeof TASK_TYPE_COLORS],
            }}></div>
          <div className={`${styles.cell} ${styles.type_cell}`}>{value}</div>
        </div>
      );
    }
    case LIST_VIEW_COLUMN_ID.PRIORITY: {
      return (
        <div className={styles.cell_container}>
          <div
            className={styles.cell_tag}
            style={{
              backgroundColor:
                PRIORITY_COLOR[value as keyof typeof PRIORITY_COLOR],
            }}></div>
          <div className={`${styles.cell} ${styles.type_cell}`}>{value}</div>
        </div>
      );
    }
    case LIST_VIEW_COLUMN_ID.ASSIGNED_TO: {
      return (
        <div className={styles.assigned_to} title={value as string}>
          {(value as string)?.[0]}
        </div>
      );
    }
    default: {
      return "";
    }
  }
};
