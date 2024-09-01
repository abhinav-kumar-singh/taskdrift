import { lazy } from "react";
import withSuspense from "../../common/component-lib/suspense";

const Home = withSuspense(lazy(() => import("./Home")));

export default Home;
