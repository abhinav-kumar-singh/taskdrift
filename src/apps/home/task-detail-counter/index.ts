import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const TaskDetailCounter = withSuspense(
  lazy(() => import("./TaskDetailCounter"))
);

export default TaskDetailCounter;
