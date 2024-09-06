import { lazy } from "react";
import withSuspense from "../suspense";

const Notification = withSuspense(lazy(() => import("./Notification")));

export default Notification;
