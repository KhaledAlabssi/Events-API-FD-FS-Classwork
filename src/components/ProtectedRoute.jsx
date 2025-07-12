import { Navigate, Outlet } from "react-router";
import { useAppContext } from "../context/appContext";

export default function ProtectedRoute() {
  const { isAuth } = useAppContext();

  return <div>{isAuth ? <Outlet /> : <Navigate to={"/login"} />}</div>;
}
