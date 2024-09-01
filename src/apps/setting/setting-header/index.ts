import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const SettingHeader = withSuspense(lazy(() => import("./SettingHeader")));

export default SettingHeader;
