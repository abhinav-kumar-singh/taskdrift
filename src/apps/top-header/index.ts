import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const TopHeader = withSuspense(lazy(() => import("./TopHeader")));

export default TopHeader;
