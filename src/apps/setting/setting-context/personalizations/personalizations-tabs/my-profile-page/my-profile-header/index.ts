import { lazy } from "react";
import withSuspense from "../../../../../../../common/component-lib/suspense";

const MyProfileHeader = withSuspense(lazy(() => import("./MyProfileHeader")));

export default MyProfileHeader;
