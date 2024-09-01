import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const UserInfo = withSuspense(lazy(() => import("./UserInfo")));

export default UserInfo;
