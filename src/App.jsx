import { createContext, useState } from "react";
import { Link } from "react-router-dom";

import Views from "./Views";
import "./App.css";

export const UserContext = createContext();

function App() {
  const [user, set_user] = useState({ signed_in: false });

  return (
    <UserContext.Provider value={{ user, set_user }}>
      <div className="App">
        <header>
          <h1>My App</h1>
          <nav>
            <Link className="nav-link" to={"/"}>Index</Link>
            <Link className="nav-link" to={"/home"}>Home</Link>
            <Link className="nav-link" to={"/account"}>Account</Link>
            <Link className="nav-link" to={"/articles"}>Articles</Link>
            <Link className="nav-link" to={"/about"}>About</Link>
          </nav>
        </header>
        <div className="container">
          <Views />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
