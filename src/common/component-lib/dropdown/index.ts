import { lazy } from "react";
import withSuspense from "../suspense";

const Dropdown = withSuspense(lazy(() => import("./Dropdown")));

export default Dropdown;
