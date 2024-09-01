import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const Filters = withSuspense(lazy(() => import("./Filters")));

export default Filters;
