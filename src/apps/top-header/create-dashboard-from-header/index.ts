import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const CreateDashboardFromHeader = withSuspense(
  lazy(() => import("./CreateDashboardFromHeader"))
);

export default CreateDashboardFromHeader;
