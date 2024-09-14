import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const Upgrade = withSuspense(lazy(() => import("./Upgrade")));

export default Upgrade;
