import { lazy } from "react";
import withSuspense from "../../../../common/component-lib/suspense";

const Pricing = withSuspense(lazy(() => import("./Pricing")));

export default Pricing;
