import "./App.css";
import { Routes,Route } from "react-router";
import PATHROUTES from "./helpers/pathroutes";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import { useNavigate } from "react-router";

function App() {
  const navigate=useNavigate()


  const handleSubmit=()=>{
    navigate('/home')
  }


  return (
    <div className="App">
      <Routes>
        <Route path={PATHROUTES.LANDING} element={<Landing handleSubmit={handleSubmit}/>}/>
        <Route path={PATHROUTES.HOME} element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
