import "./App.css";
import { Routes, Route } from "react-router-dom";
import PATHROUTES from "./helpers/pathroutes";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import { useNavigate, useLocation } from "react-router";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Created from "./components/Created/Created";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
        <Route path={PATHROUTES.DETAIL} element={<Detail />} />
        <Route path={PATHROUTES.CREATE} element={<Form />} />
        <Route path={PATHROUTES.MYPOKEMONS} element={<Created />} />
      </Routes>
    </div>
  );
}

export default App;
