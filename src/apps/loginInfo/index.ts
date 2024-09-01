import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const LoginInfo = withSuspense(lazy(() => import("./LoginInfo")));

export default LoginInfo;
