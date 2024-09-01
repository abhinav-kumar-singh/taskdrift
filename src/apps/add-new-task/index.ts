import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const AddNewTask = withSuspense(lazy(() => import("./AddNewTask")));

export default AddNewTask;
