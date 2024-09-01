import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const LPProductDescription = withSuspense(
  lazy(() => import("./LPProductDescription"))
);

export default LPProductDescription;
