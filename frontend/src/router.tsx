import { createBrowserRouter } from "react-router-dom";

import Login, { loginAction } from "./pages/Login";
import Signup, { signupAction } from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

export const router = createBrowserRouter([
  { path: "/login", element: <Login />, action: loginAction },
  { path: "/signup", element: <Signup />, action: signupAction },
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);