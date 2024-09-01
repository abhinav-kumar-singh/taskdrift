import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const SettingContext = withSuspense(lazy(() => import("./SettingContext")));

export default SettingContext;
