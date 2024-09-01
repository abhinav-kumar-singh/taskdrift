import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const Welcome = withSuspense(lazy(() => import("./Welcome")));

export default Welcome;
