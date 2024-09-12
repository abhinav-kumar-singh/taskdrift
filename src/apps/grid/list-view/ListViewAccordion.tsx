import {
  Accordion,
  AccordionDetails,
  Table,
  TableContainer,
  TableHead,
} from "@mui/material";
import { IAccordionHeader } from "./list-view.types";
import ListAccordionSummary from "./ListAccordionSummary";
import ListHeader from "./ListHeader";
import ListBody from "./ListBody";

const ListViewAccordion = (props: IAccordionHeader): JSX.Element => {
  const { taskRepName, taskCount, taskRecords } = props;

  return (
    <Accordion
      defaultExpanded
      sx={{
        boxShadow: "none",
        backgroundColor: "rgb(var(--background-1))",
        color: "rgb(var(--primary-color))",
      }}>
      <ListAccordionSummary taskRepName={taskRepName} taskCount={taskCount} />
      <AccordionDetails>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table" sx={{ width: "99%" }}>
            <TableHead>
              <ListHeader />
            </TableHead>
            <ListBody taskRecords={taskRecords} />
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export default ListViewAccordion;
