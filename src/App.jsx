
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";
import Inicio from "./Pages/Inicio";
import Promo from "./Pages/Promo";

const App = () => {
  return (
    <div >
      <NavBar />
      <Routes>
        <Route element={<Inicio />} path="/"></Route>
        <Route element={<Login />} path="/about"></Route>
        <Route element={<Promo />} path="/promo"></Route>


      </Routes>
    </div>
  )
}

export default App;