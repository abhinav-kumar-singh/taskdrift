import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const LPTopSection = withSuspense(lazy(() => import("./LPTopSection")));

export default LPTopSection;
