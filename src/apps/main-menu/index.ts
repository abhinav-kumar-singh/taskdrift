import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const Mainmenu = withSuspense(lazy(() => import("./Mainmenu")));

export default Mainmenu;
