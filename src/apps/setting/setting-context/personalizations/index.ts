import { lazy } from "react";
import withSuspense from "../../../../common/component-lib/suspense";

const Personalizations = withSuspense(lazy(() => import("./Personalizations")));

export default Personalizations;
