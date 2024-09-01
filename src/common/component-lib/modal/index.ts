import { lazy } from "react";
import withSuspense from "../suspense";

const ModalField = withSuspense(lazy(() => import("./ModalField")));

export default ModalField;
