import { TableBody, TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import { IListBody } from "./list-view.types";
import { LIST_COLUMNS } from "./constants";
import styles from "../grid.module.css";
import { getStyledRenderValue, renderValue } from "../utils";
import GridAction from "../grid-action";
import AddNewTask from "../../add-new-task";
import { ITasks } from "../../../store/tasks/task.type";
import { MODE } from "../../add-new-task/add-new-task.types";

const ListBody = (props: IListBody): JSX.Element => {
  const { taskRecords } = props;

  const [showTaskModal, setShowTaskModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<ITasks>();

  return (
    <>
      <TableBody>
        {taskRecords?.map((row) => {
          return (
            <TableRow
              hover
              role="checkbox"
              tabIndex={-1}
              key={row.id}
              className={styles.table_list_row}>
              {LIST_COLUMNS.map((column, index) => {
                const value = row[column.id as keyof typeof row];

                if (column?.id !== "action")
                  return (
                    <TableCell
                      onClick={() => {
                        setSelectedRow(row);
                        setShowTaskModal(true);
                      }}
                      key={column.id}
                      align={column.align}
                      sx={{
                        border: "1px solid rgb(var(--border-color-4))",
                        borderLeft: index === 0 ? "none" : "",
                      }}>
                      <div className={styles.list_cell}>
                        {getStyledRenderValue(renderValue(value), column?.id)}
                      </div>
                    </TableCell>
                  );
                else {
                  return (
                    <div className={styles.list_action}>
                      <GridAction
                        id={row?.id || ""}
                        taskSummary={row?.summary || ""}
                      />
                    </div>
                  );
                }
              })}
            </TableRow>
          );
        })}
      </TableBody>
      {showTaskModal ? (
        <AddNewTask
          openAddNewTaskModal={showTaskModal}
          setOpenAddNewTaskModal={setShowTaskModal}
          selectedTask={selectedRow}
          mode={MODE.EDIT}
        />
      ) : null}
    </>
  );
};

export default ListBody;
