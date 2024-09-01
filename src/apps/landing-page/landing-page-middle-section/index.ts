import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const LPMiddleSection = withSuspense(lazy(() => import("./LPMiddleSection")));

export default LPMiddleSection;
