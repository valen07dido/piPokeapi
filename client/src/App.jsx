import "./App.css";
import { Routes, Route } from "react-router-dom";
import PATHROUTES from "./helpers/pathroutes";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import { useNavigate, useLocation } from "react-router";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import Search from "./components/Search/Search";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <div className="App">
      {pathname !== "/" ? <Nav /> : null}
      <Routes>
        <Route
          path={PATHROUTES.LANDING}
          element={<Landing handleSubmit={handleSubmit} />}
        />
        <Route path={PATHROUTES.HOME} element={<Home />} />
        <Route path={PATHROUTES.SEARCH} element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
