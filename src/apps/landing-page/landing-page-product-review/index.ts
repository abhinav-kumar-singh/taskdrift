import { lazy } from "react";
import withSuspense from "../../../common/component-lib/suspense";


const LPProductReview = withSuspense(lazy(() => import("./LPProductReview")));

export default LPProductReview;
