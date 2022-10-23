import {
  Route,
  useRoutes,
  Link,
} from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

export default function Router() {
    return useRoutes([
      {
        path: "/",
        element: <Home />
      },
      { path: "/register", 
      element: <SignUp /> }
    ]);
  }