import Home from "../pages/Home/Home";
import TopGifs from "../pages/TopGifs/TopGifs";
import NotFound from "../pages/NotFound/NotFound";

import { routeHome, routeSearch, routeTopGifs } from "./paths";

export default [
  {
    path: [routeHome(), routeSearch()],
    component: Home,
    exact: true,
  },
  {
    path: routeTopGifs(),
    component: TopGifs,
    exact: true,
  },
  {
    path: null,
    component: NotFound,
    exact: false,
  },
];
