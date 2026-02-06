import { Navigate, Outlet } from "react-router-dom";

type props = {
  isAuth: boolean;
  type: boolean;
};

function ProtectedRouting({ isAuth, type }: props) {
  if (type) return <> {isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
  else return <> {isAuth ? <Navigate to="/" /> : <Outlet />}</>;
}

// type = true
// isAuth
export default ProtectedRouting;
