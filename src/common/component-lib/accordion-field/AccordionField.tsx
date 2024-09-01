import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";

interface IAccordionField {
  expandIcon?: React.ReactNode;
  accordionStyle?: React.CSSProperties;
  accordionSummaryStyle?: React.CSSProperties;
  accordionSummaryChild: JSX.Element;
  accordionChild: JSX.Element;
  isDefaultExpanded?: boolean;
}

const AccordionField = (props: IAccordionField): JSX.Element => {
  const {
    expandIcon,
    accordionStyle,
    accordionSummaryStyle,
    accordionSummaryChild,
    accordionChild,
    isDefaultExpanded,
  } = props;
  return (
    <Accordion defaultExpanded={isDefaultExpanded} sx={accordionStyle}>
      <AccordionSummary
        expandIcon={expandIcon}
        sx={accordionSummaryStyle}
        aria-controls="panel1-content"
        id="panel1-header">
        {accordionSummaryChild}
      </AccordionSummary>
      <AccordionDetails>{accordionChild}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionField;
