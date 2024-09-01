import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const GridViewTaskRenderer = withSuspense(
  lazy(() => import("./GridViewTaskRenderer"))
);

export default GridViewTaskRenderer;
