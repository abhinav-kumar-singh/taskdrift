import { lazy } from "react";
import withSuspense from "../../../../common/component-lib/suspense";

const AboutUs = withSuspense(lazy(() => import("./AboutUs")));

export default AboutUs;
