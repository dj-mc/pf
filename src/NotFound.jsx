import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2500);
  }, [navigate]);
  return <p>Page Not Found</p>;
}

export default NotFound;
