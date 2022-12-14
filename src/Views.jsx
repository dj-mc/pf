import { Outlet, Route, Routes } from "react-router-dom";

import Account from "./Account";
import Articles from "./Articles";
import Authorize from "./Authorize";
import NotFound from "./NotFound";
import Protected from "./Protected";

import logo from "./logo.svg";

function MyComponent() {
  return <img src={logo} className="App-logo" alt="logo" />;
}

function Views() {
  return (
    <Routes>
      <Route index element={<Authorize />} />
      <Route path="/about" element={<h1>About</h1>} />

      <Route element={<Protected />}>
        <Route path="/home" element={<MyComponent />} />
        <Route path="/account" element={<Account />} />
      </Route>

      <Route
        path="/articles"
        element={
          <div>
            <hr></hr>
            Article content:
            <Outlet />
            <hr></hr>
          </div>
        }
      >
        <Route index element={<h1>Articles</h1>} />
        <Route path=":id" element={<Articles />} />
        <Route path="*" element={<p>Oops, no article found...</p>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Views;
