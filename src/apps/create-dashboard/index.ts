import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const Createdashboard = withSuspense(lazy(() => import("./Createdashboard")));

export default Createdashboard;
