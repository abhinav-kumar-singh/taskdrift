import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const GridView = withSuspense(lazy(() => import("./GridView")));

export default GridView;
