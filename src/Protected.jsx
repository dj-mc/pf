import { Outlet } from "react-router-dom";

import SignIn from "./SignIn";

function use_auth() {
  const user = { logged_in: true };
  return user && user.logged_in;
}

function Protected() {
  const auth = use_auth();
  return auth ? <Outlet /> : <SignIn />;
}

export default Protected;
