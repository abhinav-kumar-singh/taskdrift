import { lazy } from "react";
import withSuspense from "../../../../../../common/component-lib/suspense";

const MyProfilePage = withSuspense(lazy(() => import("./MyProfilePage")));

export default MyProfilePage;
