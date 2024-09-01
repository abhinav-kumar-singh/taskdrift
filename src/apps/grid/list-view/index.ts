import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";

const ListView = withSuspense(lazy(() => import("./ListView")));

export default ListView;
