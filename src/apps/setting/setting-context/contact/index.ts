import { lazy } from "react";
import withSuspense from "../../../../common/component-lib/suspense";

const Contact = withSuspense(lazy(() => import("./Contact")));

export default Contact;
