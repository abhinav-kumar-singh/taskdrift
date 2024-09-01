import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const GridAction = withSuspense(lazy(() => import("./GridAction")));

export default GridAction;
