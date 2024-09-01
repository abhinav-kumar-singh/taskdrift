import { AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../grid.module.css";
import { IListAccordionSummary } from "./list-view.types";
import { useTranslation } from "react-i18next";

const ListAccordionSummary = (props: IListAccordionSummary): JSX.Element => {
  const { t } = useTranslation();

  const { taskRepName, taskCount } = props;

  return (
    <AccordionSummary
      expandIcon={
        <ExpandMoreIcon
          sx={{
            color: "rgb(var(--primary-color))",
          }}
        />
      }
      aria-controls="panel1-content"
      id="panel1-header"
      sx={{
        minHeight: "0px !important",
        flexDirection: "row-reverse",
        div: {
          margin: "4px !important",
        },
      }}>
      <div className={styles.list_view_header_container}>
        <div className={styles.list_view_header_info_container}>
          <div className={`${styles.title} ${styles.list_view_header_name}`}>
            {t(taskRepName)}
          </div>
          <div className={styles.counter}>{taskCount}</div>
        </div>
      </div>
    </AccordionSummary>
  );
};

export default ListAccordionSummary;
