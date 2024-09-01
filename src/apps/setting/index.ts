import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const Setting = withSuspense(lazy(() => import("./Setting")));

export default Setting;
