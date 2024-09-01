import { TableCell, TableRow } from "@mui/material";
import { LIST_COLUMNS } from "./constants";
import styles from "../grid.module.css";
import { useTranslation } from "react-i18next";

const ListHeader = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <TableRow>
      {LIST_COLUMNS.map((column) => (
        <TableCell
          key={column.id}
          align={column.align}
          style={{
            width: column.width,
            backgroundColor: "rgb(var(--secondary-color))",
          }}>
          <div className={styles.list_column_header}>
            <column.icon className={styles.list_column_icon} />
            {t(column.title)}
          </div>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default ListHeader;
