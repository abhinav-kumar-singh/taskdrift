import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const ProductInfoNavigation = withSuspense(lazy(() => import("./ProductInfoNavigation")));

export default ProductInfoNavigation;
