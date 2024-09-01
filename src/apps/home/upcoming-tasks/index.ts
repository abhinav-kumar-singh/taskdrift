import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const UpcomingTasks = withSuspense(lazy(() => import("./UpcomingTasks")));

export default UpcomingTasks;
