import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const DashBoardInfo = withSuspense(lazy(() => import("./DashBoardInfo")));

export default DashBoardInfo;
