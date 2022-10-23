import { useRoutes } from "react-router-dom";
import { Home, SignUp } from "../pages";

export default function Router() {
	return useRoutes([
		{
			path: "/",
			element: <Home />,
		},
		{ path: "/register", element: <SignUp /> },
	]);
}
