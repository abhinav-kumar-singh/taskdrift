import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const DashboardProfile = withSuspense(lazy(() => import("./DashboardProfile")));

export default DashboardProfile;
