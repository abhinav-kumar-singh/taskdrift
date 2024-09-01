import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const Dashboard = withSuspense(lazy(() => import("./Dashboard")));

export default Dashboard;
