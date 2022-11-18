import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function NotFound() {
  const use_nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      use_nav("/home");
    }, 1000);
  }, [use_nav]);
  return (
    <p>
      Page Not Found
      {/* <Navigate to="/home" /> */}
    </p>
  );
}

export default NotFound;
