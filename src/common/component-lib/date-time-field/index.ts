import { lazy } from "react";
import withSuspense from "../suspense";

const DateTime = withSuspense(lazy(() => import("./DateTime")));

export default DateTime;
