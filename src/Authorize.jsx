import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { UserContext } from "./App";

function Authorize() {
  const { user, set_user } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {user.signed_in ? (
        <>
          <p>Signed In</p>
          <button
            type="button"
            className="auth-button"
            onClick={() => {
              if (!user.signed_in) return;
              set_user({ signed_in: false });
            }}
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <p>Please Sign In</p>
          <button
            type="button"
            className="auth-button"
            onClick={() => {
              if (user.signed_in) return;
              set_user({ signed_in: true });

              if (location.state?.from) {
                navigate(location.state.from);
              }
            }}
          >
            Sign In
          </button>
        </>
      )}
    </>
  );
}

export default Authorize;
