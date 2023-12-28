import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import { DarkModeContext } from "./context/darkMode";
import { useContext } from "react";


import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	Navigate,
} from "react-router-dom";
import { AuthenticationContext } from "./context/authentication";
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {

	const { currentUser } = useContext(AuthenticationContext);
	const { darkMode } = useContext(DarkModeContext);

	const queryClient = new QueryClient()


	const Layout = () => {
		return (
			<QueryClientProvider client={queryClient}>
				<div className={`theme-${darkMode ? "dark" : "light"}`}>
					<Navbar />
					<div style={{ display: "flex" }}>
						<LeftBar />
						<div style={{ flex: 6 }}>
							<Outlet />
						</div>
						<RightBar />
					</div>

				</div>
			</QueryClientProvider>
		)
	};

	// redirect user to Login page if not logged in
	const ProtectedRoute = ({ children }) => {
		// console.log("currentUser:", currentUser); // Log the value of currentUser
		if (!currentUser) {
			return <Navigate to="/login" />
		}

		return children;
	};


	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>
			),
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/profile/:id",
					element: <Profile />,
				},
			],
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/register",
			element: <Register />,
		},
	]);




	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;





// npm install sass
// npm install react-router-dom
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
// npm install express mysql nodemon
// npm install bcryptjs
// npm install jsonwebtoken cookie-parser cors
// npm install axios
// npm i react-query
// npm i moment
// npm i multer