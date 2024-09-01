import { lazy } from "react";
import withSuspense from "../../../../../common/component-lib/suspense";

const PersonalizationsTabs = withSuspense(
  lazy(() => import("./PersonalizationsTabs"))
);

export default PersonalizationsTabs;
