import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const DashboardPages = withSuspense(lazy(() => import("./DashboardPages")));

export default DashboardPages;
