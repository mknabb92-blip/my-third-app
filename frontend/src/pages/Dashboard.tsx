import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/auth.context";

export default function Dashboard() {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    logoutUser();
    navigate("/login");
  }

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}