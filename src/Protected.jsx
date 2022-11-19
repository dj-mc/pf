import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "./App";

function useAuth() {
  const { user } = useContext(UserContext);
  return user && user.signed_in;
}

function Protected() {
  const location = useLocation();
  const is_authorized = useAuth();
  return is_authorized ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
}

export default Protected;
