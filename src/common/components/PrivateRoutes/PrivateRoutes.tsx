import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const storedValue = sessionStorage.getItem("isLoggedIn");
  const isLoggedIn: boolean = storedValue === "true";

  return isLoggedIn ? <Outlet /> : <Navigate to='/' />;
}
export default PrivateRoutes;
