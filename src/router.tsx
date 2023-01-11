import Home from "./pages/home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const RouterRoot = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default RouterRoot;
