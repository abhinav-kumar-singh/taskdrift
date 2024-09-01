import { lazy } from "react";
import withSuspense from "../suspense";

const ButtonField = withSuspense(lazy(() => import("./ButtonField")));

export default ButtonField;
