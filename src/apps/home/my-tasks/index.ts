import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const MyTasks = withSuspense(lazy(() => import("./MyTasks")));

export default MyTasks;
