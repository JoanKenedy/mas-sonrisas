import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Navbar from "./components/Navbar";
import { HashLoader } from "react-spinners";
import Logo from "./assets/logo-1.png";
import "./App.css";
import Servicios from "./pages/Servicios";
import Casos from "./pages/Casos";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading">
          <img src={Logo} alt="" />
          <p>Bienvenidos</p>
          <HashLoader size={80} margin={1} color={"#01DFD7"} />
        </div>
      ) : (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/casos" element={<Casos />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
