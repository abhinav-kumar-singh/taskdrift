import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const ClearData = withSuspense(lazy(() => import("./ClearData")));

export default ClearData;
