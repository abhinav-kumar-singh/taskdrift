import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const MidSection = withSuspense(lazy(() => import("./MidSection")));

export default MidSection;
