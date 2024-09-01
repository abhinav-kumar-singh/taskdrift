import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const GridLayout = withSuspense(lazy(() => import("./GridLayout")));

export default GridLayout;
