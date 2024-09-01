import { lazy } from "react";
import withSuspense from "../suspense";

const AccordionField = withSuspense(lazy(() => import("./AccordionField")));

export default AccordionField;
