import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const ActivityLog = withSuspense(lazy(() => import("./ActivityLog")));

export default ActivityLog;
