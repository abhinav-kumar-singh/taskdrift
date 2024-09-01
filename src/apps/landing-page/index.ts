import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const LandingPage = withSuspense(lazy(() => import("./LandingPage")));

export default LandingPage;
