import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo1 from "../assets/logo-1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbar, setIsNavbar] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNabvar = () => {
    setIsNavbar(!isNavbar);
  };

  const navbarBackground = () => {
    if (window.scrollY > 80) {
      setIsNavbar(true);
    } else {
      setIsNavbar(false);
    }
  };
  window.addEventListener("scroll", navbarBackground);
  return (
    <div className={`navbar ${isNavbar ? "back" : ""}`} id="navbar">
      <div className="container-navbar">
        <div className="logo-container">
          <img src={Logo1} alt="" className="logo" />
        </div>

        <nav className={`menu ${isOpen ? "open" : ""}`}>
          <div className={`menu-top ${isOpen ? "aparecer" : ""}`}>
            <i
              className="fa-solid fa-xmark close"
              onClick={() => setIsOpen(!isOpen)}
            ></i>
            <Link to="/" onClick={() => handleClick(!isOpen)}>
              Inicio
            </Link>
            <Link to="/nosotros" onClick={() => handleClick(!isOpen)}>
              Nosotros
            </Link>
            <Link to="/servicios" onClick={() => handleClick(!isOpen)}>
              Servicios
            </Link>
            <Link to="/casos" onClick={() => handleClick(!isOpen)}>
              Casos reales
            </Link>
          </div>
          <div className={`menu-middle ${isOpen ? "left" : ""}`}>
            <h2>Contáctanos</h2>
            <div className="menu-middle-submenu">
              <a
                href="https://api.whatsapp.com/send?phone=525635757265
                "
                target="_blank"
              >
                <i class="fa-brands fa-whatsapp"></i>
                <p>Información</p>
              </a>
              <a href="tel:5536697725" target="_blank">
                <i className="fa-solid fa-phone"></i>
                <p>56 3575 7265</p>
              </a>
              <a href="tel:5536697725" target="_blank">
                <i className="fa-solid fa-phone"></i>
                <p>55 5922 5240</p>
              </a>
            </div>
          </div>
          <div className={`menu-down ${isOpen ? "up" : ""}`} id="menu-down">
            <h2>Síguenos</h2>
            <div className="redes-menu-down">
              <a href="https://www.facebook.com/massonrisasmx/" target="_blank">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/massonrisasmx/"
                target="_blank"
              >
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </div>
          </div>
        </nav>
        <nav className="navbar-descktop">
          <div className="container-descktop">
            <div className="nav-link">
              <Link to="/" onClick={() => setIsNavbar(!isNavbar)}>
                Inicio
              </Link>
            </div>

            <div className="nav-link" onClick={() => setIsNavbar(!isNavbar)}>
              <Link to="/nosotros">Nosotros</Link>
            </div>

            <div className="nav-link" onClick={() => setIsNavbar(!isNavbar)}>
              <Link to="/servicios">Servicios</Link>
            </div>

            <div className="nav-link" onClick={() => setIsNavbar(!isNavbar)}>
              <Link to="/casos">Casos reales</Link>
            </div>
            <div className="nav-link" onClick={() => setIsNavbar(!isNavbar)}>
              <a href="tel:5635757265" className="btn-header-contacto">
                5635757265
              </a>
            </div>
          </div>
        </nav>
        <div className="menu-bar" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
