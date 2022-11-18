import { Link } from "react-router-dom";

import Views from "./Views";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My App</h1>
        <nav>
          <Link className="nav-link" to={"/"}>Index</Link>
          <Link className="nav-link" to={"/home"}>Home</Link>
          <Link className="nav-link" to={"/article"}>Articles</Link>
          <Link className="nav-link" to={"/account"}>Account</Link>
          <Link className="nav-link" to={"/about"}>About</Link>
        </nav>
      </header>
      <div className="container">
        <Views />
      </div>
    </div>
  );
}

export default App;
