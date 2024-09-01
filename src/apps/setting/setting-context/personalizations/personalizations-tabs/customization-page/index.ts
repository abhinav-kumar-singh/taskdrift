import { lazy } from "react";
import withSuspense from "../../../../../../common/component-lib/suspense";

const CustomizationPage = withSuspense(
  lazy(() => import("./CustomizationPage"))
);

export default CustomizationPage;
