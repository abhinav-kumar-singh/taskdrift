import { lazy } from "react";
import withSuspense from "../suspense";

const TextFieldComp = withSuspense(lazy(() => import("./TextFieldComp")));

export default TextFieldComp;
