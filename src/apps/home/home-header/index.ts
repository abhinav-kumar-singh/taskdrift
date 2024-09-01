import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const HomeHeader = withSuspense(lazy(() => import("./HomeHeader")));

export default HomeHeader;
