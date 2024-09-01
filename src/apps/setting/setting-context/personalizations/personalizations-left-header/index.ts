import { lazy } from "react";
import withSuspense from "../../../../../common/component-lib/suspense";

const PersonalizationsLeftHeader = withSuspense(
  lazy(() => import("./PersonalizationsLeftHeader"))
);

export default PersonalizationsLeftHeader;
