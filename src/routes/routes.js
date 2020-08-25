import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

import { routeHome } from "./paths";

export default [
  {
    path: routeHome(),
    component: Home,
    exact: true,
  },
  {
    path: null,
    component: NotFound,
    exact: false,
  },
];
