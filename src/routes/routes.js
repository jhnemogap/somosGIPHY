import Home from "../pages/Home/Home";

import { routeHome } from "./paths";

export default [
  {
    path: routeHome(),
    component: Home,
    exact: true,
  },
];
