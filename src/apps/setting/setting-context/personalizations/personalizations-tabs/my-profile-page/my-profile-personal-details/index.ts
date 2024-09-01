import { lazy } from "react";
import withSuspense from "../../../../../../../common/component-lib/suspense";

const MyProfilePersonalDetails = withSuspense(
  lazy(() => import("./MyProfilePersonalDetails"))
);

export default MyProfilePersonalDetails;
