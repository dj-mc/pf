import { Outlet, Route, Routes } from "react-router-dom";

import Article from "./Article";
import NotFound from "./NotFound";
import logo from "./logo.svg";

function MyComponent() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Views() {
  return (
    <>
      <Routes>
        <Route index element={<h1>Index</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/home" element={<MyComponent />} />

        <Route
          path="/article"
          element={
            <>
              Article content:
              <Outlet />
            </>
          }
        >
          <Route index element={<h1>Articles</h1>} />
          <Route path=":id" element={<Article />} />
          <Route path="*" element={<p>Oops, no article found...</p>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Views;
