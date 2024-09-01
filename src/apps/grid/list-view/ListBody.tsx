import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import { IListBody } from "./list-view.types";
import { LIST_COLUMNS } from "./constants";
import styles from "../grid.module.css";
import { getStyledRenderValue, renderValue } from "../utils";
import GridAction from "../grid-action";

const ListBody = (props: IListBody): JSX.Element => {
  const { taskRecords } = props;
  return (
    <TableBody>
      {taskRecords?.map((row) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
            {LIST_COLUMNS.map((column, index) => {
              const value = row[column.id as keyof typeof row];

              if (column?.id !== "action")
                return (
                  <TableCell
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
  );
};

export default ListBody;
