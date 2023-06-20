import React from "react";
import mapa from "../assets/mapa.jpg";
import "../styles/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <h2>Contacto</h2>
      <div className="container-footer">
        <div className="item-footer">
          <form action="">
            <div className="container-form">
              <div className="input-container">
                <input type="text" placeholder="Nombre" />
              </div>
              <div className="input-container">
                <input type="text" placeholder="Apellidos" />
              </div>
              <div className="input-container">
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-container">
                <input type="text" placeholder="Teléfono o celular" />
              </div>
              <div className="input-container">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                ></textarea>
              </div>
              <div className="input-container">
                <button type="submit">Enviar</button>
              </div>
            </div>
          </form>
        </div>
        <div className="item-footer">
          <img src={mapa} alt="" />
          <p>
            Dirección: Tepic 139 Interior 902, Roma Sur Cuauhtémoc Ciudad de
            México, CDMX
          </p>
        </div>
      </div>

      <div className="footer-footer">
        <div className="container-footer-footer">
          <div className="item-footer-footer">
            <a href="">
              <i class="fa-brands fa-facebook"></i>
              Facebook
            </a>
            <a href="">
              <i class="fa-brands fa-square-instagram"></i>
              Instagram
            </a>
            <a href="https://api.whatsapp.com/send?phone=525635757265">
              <i class="fa-brands fa-square-whatsapp"></i>
              5635757265
            </a>
            <a href="">
              <i class="fa-solid fa-phone"></i>
              5635757265
            </a>
            <a href="">
              <i class="fa-solid fa-phone"></i>
              5559225240
            </a>
          </div>

          <div className="item-footer-footer">
            <p>© 2023 Todos los derechos reservados Más sonrisas.</p>
            <p>
              Desarrollado por Agencia de Marketing Digital Dentarios © 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
