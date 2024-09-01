import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const ListViewTaskRenderer = withSuspense(
  lazy(() => import("./ListViewTaskRenderer"))
);

export default ListViewTaskRenderer;
